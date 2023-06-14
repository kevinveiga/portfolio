import React, { ReactElement, memo } from 'react';

import parse from 'html-react-parser';
import { GetStaticPaths, GetStaticProps } from 'next/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { apiFaqQuestionUpdate, apiFaqQuestionDidHelpAdd, apiFaqQuestionDidHelpUpdate } from '@/configApi';
import { dev, title } from '@/configApp';
import { IQuestion, IQuestionDidHelp, IProduct } from '@/interface';
import { useApp } from '@/pages/_app';
import { postFetch, putFetch, putFetchNoInterceptor } from '@/services/fetch';
import { getGraphql, queryProduct, queryProducts } from '@/services/graphqlQuery';
import { useAuth } from '@/stores/auth/useAuth';
import { usePersistedState } from '@/stores/persistedState/usePersistedState';

import {
    AccordionStyled,
    AccordionChangeStyled,
    AccordionItemStyled,
    AccordionItemContentStyled,
    AccordionItemTextStyled
} from '@/components/accordion/accordionStyled';
import { Button } from '@/components/button/button';
import { FaqPopularQuestion } from '@/components/faq/faqPopularQuestion';
import { FaqStillHaveQuestion } from '@/components/faq/faqStillHaveQuestion';
import { FaqMenu } from '@/components/faq/faqMenu';
import { FaqMainStyled, FaqRightStyled } from '@/components/faq/faqStyled';
import { LayoutWithMenu } from '@/components/layout/layoutWithMenu';
import { SvgArrowDown, SvgArrowLeft } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Container, LineHorizontal, LineVertical, Main, Spacer } from '@/styles/layout';
import { P, Span, Title1 } from '@/styles/text';
import { variable } from '@/styles/variable';

// NEXTJS - SSG
export const getStaticPaths: GetStaticPaths = async () => {
    const data: { products: IProduct[] } = await getGraphql({ query: queryProducts });

    return {
        paths: data.products.map((product: IProduct) => ({
            params: { productSlug: product?.slug }
        })),
        fallback: 'blocking'
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.productSlug as string;

    const data: { product: IProduct | null } = await getGraphql({ query: queryProduct, variables: { where: { slug: slug } } });

    const { product } = data;

    // Handle product slugs which don't exist in our CMS
    if (!product) {
        return {
            notFound: true
        };
    }

    // Cache response: dev = 1 minute (60 seconds), prod = 1 hour (60 seconds * 60 minutes)
    return {
        props: { product },
        revalidate: dev ? 60 : 60 * 60
    };
};

// MEMO
const FaqMenuMemo = memo(FaqMenu);

function ProductQuestion({ product }: { product: IProduct }): ReactElement | null {
    // CONTEXT
    const { stateIsServer } = useApp();
    const { stateAuth } = useAuth();
    const router = useRouter();
    const { textColor } = useTheme();
    const { t } = useTranslation();

    const auth = stateAuth !== null ? JSON.parse(stateAuth) : null;

    // REFRESH DATA
    const refreshData = (): void => {
        router.replace(router.asPath).catch(() => null);
    };

    // STATE
    const [stateAccordion, setStateAccordion] = usePersistedState<string>(`accordion-question`, '');

    // FUNCTION
    const handleQuestionDidHelp = ({ didHelp, id, questionId }: { didHelp: boolean; id: string | undefined; questionId: string }): void => {
        const data = { didHelp: didHelp, questionId: questionId, userId: auth?.id };

        if (id) {
            putFetch({ fetchData: { ...data, id: id }, url: apiFaqQuestionDidHelpUpdate })
                .then(() => refreshData())
                .catch((error) => {
                    console.error(error);
                });
        } else {
            postFetch({ fetchData: data, url: apiFaqQuestionDidHelpAdd })
                .then(() => refreshData())
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const toggleAccordion = (data: IQuestion, value: string): void => {
        setStateAccordion((state) => (state !== value ? value : ''));

        if (stateAccordion !== value) {
            putFetchNoInterceptor({ fetchData: { ...data, views: (data.views || 0) + 1 }, url: apiFaqQuestionUpdate }).catch((error) => {
                console.error(error);
            });
        }
    };

    if (stateIsServer) {
        return null;
    }

    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content="Product" />
            </Head>

            <Main>
                <LayoutWithMenu menu={<FaqMenuMemo />}>
                    <FaqMainStyled>
                        <Box flex="1 1 auto">
                            <Container>
                                <Box alignItems="flex-end" minHeight="45px">
                                    <Title1 mb={0}>{product.name}</Title1>
                                </Box>

                                <Spacer height={variable.space.spacingXS} />

                                <LineHorizontal height="2px" backgroundColor={textColor.primary} />

                                <Spacer height={variable.space.spacingMD} />

                                {product.questions && product.questions.length > 0 ? (
                                    product.questions.map((question: IQuestion) => {
                                        const questionDidHelpData = question.questionDidHelps?.find(
                                            (questionDidHelp: IQuestionDidHelp) => questionDidHelp.userId === auth?.id
                                        );

                                        return (
                                            <AccordionStyled key={`product-${question.id}`}>
                                                <AccordionItemStyled onClick={(): void => toggleAccordion(question, `question-${question.id}`)}>
                                                    <AccordionItemTextStyled>
                                                        <Span fontWeight={700}>{question.title}</Span>
                                                    </AccordionItemTextStyled>

                                                    <AccordionChangeStyled active={stateAccordion === `question-${question.id}`}>
                                                        <SvgArrowDown />
                                                    </AccordionChangeStyled>
                                                </AccordionItemStyled>

                                                <Spacer />

                                                <AccordionItemContentStyled active={stateAccordion === `question-${question.id}`}>
                                                    <Spacer />

                                                    <Flex>
                                                        <Box color={textColor.secondary}>{parse(question.content?.html || '')}</Box>
                                                    </Flex>

                                                    <Spacer />

                                                    <Flex justifyContent="flex-end">
                                                        <Box alignItems="center">
                                                            <Span fontSize="14px">{t('did this question help you', { ns: 'glossary' })}?</Span>
                                                        </Box>

                                                        <Spacer />

                                                        <Box>
                                                            <Button
                                                                obj={{ hoverColor: variable.color.secondary }}
                                                                onClick={(): void =>
                                                                    handleQuestionDidHelp({
                                                                        didHelp: true,
                                                                        id: questionDidHelpData?.id,
                                                                        questionId: question.id
                                                                    })
                                                                }
                                                                typeStyle="button-unset"
                                                            >
                                                                like
                                                            </Button>
                                                        </Box>

                                                        <Spacer width={variable.space.spacingXS} />

                                                        <Box>
                                                            <Button
                                                                obj={{ hoverColor: variable.color.secondary }}
                                                                onClick={(): void =>
                                                                    handleQuestionDidHelp({
                                                                        didHelp: false,
                                                                        id: questionDidHelpData?.id,
                                                                        questionId: question.id
                                                                    })
                                                                }
                                                                typeStyle="button-unset"
                                                            >
                                                                dislike
                                                            </Button>
                                                        </Box>
                                                    </Flex>

                                                    <Spacer />
                                                </AccordionItemContentStyled>

                                                <LineHorizontal />

                                                <Spacer />
                                            </AccordionStyled>
                                        );
                                    })
                                ) : (
                                    <P>{t('no data found', { ns: 'glossary' })}</P>
                                )}

                                <Spacer height={variable.space.spacingLG} />

                                <Button mx="auto">
                                    <Box alignItems="center" justifyContent="center">
                                        <SvgArrowLeft height="10px" />

                                        <Span ml={2}>{t('button.back', { ns: 'app' })}</Span>
                                    </Box>
                                </Button>

                                <Spacer height={variable.space.spacingLG} />
                            </Container>
                        </Box>
                    </FaqMainStyled>

                    <FaqRightStyled>
                        <LineVertical />

                        <Box alignContent="flex-start" px={4}>
                            <FaqPopularQuestion setStateAccordion={setStateAccordion} />

                            <LineHorizontal my={5} />

                            <FaqStillHaveQuestion />
                        </Box>
                    </FaqRightStyled>
                </LayoutWithMenu>
            </Main>
        </>
    );
}

export default ProductQuestion;
