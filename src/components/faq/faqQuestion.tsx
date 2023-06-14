import React, { memo, ReactElement, useState } from 'react';

import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { apiFaqQuestionUpdate, apiFaqQuestionDidHelpAdd, apiFaqQuestionDidHelpUpdate } from '@/configApi';
import { IProduct, IQuestion, IQuestionDidHelp, ISubProduct } from '@/interface';
import { postFetch, putFetch, putFetchNoInterceptor } from '@/services/fetch';
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
import { SvgArrowDown, SvgArrowLeft, SvgSad, SvgSmile } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Container, LineHorizontal, LineVertical, Spacer } from '@/styles/layout';
import { P, Span, Title1 } from '@/styles/text';
import { variable } from '@/styles/variable';

// MEMO
const FaqMenuMemo = memo(FaqMenu);

export function FaqQuestion({ obj }: { obj: IProduct | ISubProduct }): ReactElement {
    // CONTEXT
    const { data: { user = {} } = {} }: any = useSession();
    const router = useRouter();
    const { svgColor, textColor } = useTheme();
    const { t } = useTranslation();

    // STATE
    const [stateAccordion, setStateAccordion] = usePersistedState<string>('accordion-question', '');
    const [stateQuestionDidHelp, setStateQuestionDidHelp] = useState<{ didHelp: boolean; questionId: string } | null>(null);

    // FUNCTION
    const handleQuestionDidHelp = ({ didHelp, id, questionId }: { didHelp: boolean; id: string | undefined; questionId: string }): void => {
        setStateQuestionDidHelp({ didHelp: didHelp, questionId: questionId });

        const data = { didHelp: didHelp, questionId: questionId, userId: user?.id };

        if (id) {
            putFetch({ fetchData: { ...data, id: id }, url: apiFaqQuestionDidHelpUpdate }).catch((error) => {
                console.error(error);
            });
        } else {
            postFetch({ fetchData: data, url: apiFaqQuestionDidHelpAdd }).catch((error) => {
                console.error(error);
            });
        }
    };

    const markQuestionDidHelp = ({
        didHelp,
        questionId,
        trueOrFalse
    }: {
        didHelp: boolean | undefined;
        questionId: string;
        trueOrFalse: boolean;
    }): boolean => {
        return (stateQuestionDidHelp?.questionId === questionId && stateQuestionDidHelp?.didHelp === trueOrFalse) || didHelp === trueOrFalse;
    };

    const toggleAccordion = (data: IQuestion, value: string): void => {
        setStateAccordion((state) => (state !== value ? value : ''));

        if (stateAccordion !== value) {
            putFetchNoInterceptor({ fetchData: { ...data, views: (data.views || 0) + 1 }, url: apiFaqQuestionUpdate }).catch((error) => {
                console.error(error);
            });
        }
    };

    // RULE
    if (!obj) {
        // Synchronous redirect needed
        window.location.href = '/404';
    }

    return (
        <LayoutWithMenu menu={<FaqMenuMemo />}>
            <FaqMainStyled>
                <Box flex="1 1 auto">
                    <Container>
                        <Box alignItems="flex-end" minHeight="45px">
                            <Title1 mb={0}>{obj.name}</Title1>
                        </Box>

                        <Spacer height={variable.space.spacingXS} />

                        <LineHorizontal height="2px" backgroundColor={textColor.primary} />

                        <Spacer height={variable.space.spacingMD} />

                        {obj.questions && obj.questions.length > 0 ? (
                            obj.questions.map((question: IQuestion, index: number) => {
                                const questionDidHelpData = question.questionDidHelps?.find(
                                    (questionDidHelp: IQuestionDidHelp) => questionDidHelp.userId === user?.id
                                );

                                return (
                                    <AccordionStyled key={`question-${question.id}`}>
                                        <AccordionItemStyled onClick={(): void => toggleAccordion(question, `accordion-question-${question.id}`)}>
                                            <AccordionItemTextStyled pr={2}>
                                                <Span fontWeight={700}>{`${index + 1}. ${question.title}`}</Span>
                                            </AccordionItemTextStyled>

                                            <AccordionChangeStyled active={stateAccordion === `accordion-question-${question.id}`}>
                                                <SvgArrowDown />
                                            </AccordionChangeStyled>
                                        </AccordionItemStyled>

                                        <Spacer />

                                        <AccordionItemContentStyled active={stateAccordion === `accordion-question-${question.id}`}>
                                            <Spacer />

                                            <Flex>
                                                <Box color={textColor.secondary}>{parse(question.content?.html || '')}</Box>
                                            </Flex>

                                            <Spacer />

                                            <Flex justifyContent="flex-end">
                                                <Box alignItems="center">
                                                    <P fontSize="14px">{t('did this question help you', { ns: 'glossary' })}?</P>
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
                                                        <SvgSmile
                                                            fill={
                                                                markQuestionDidHelp({
                                                                    didHelp: questionDidHelpData?.didHelp,
                                                                    questionId: question.id,
                                                                    trueOrFalse: true
                                                                })
                                                                    ? variable.color.secondary
                                                                    : svgColor.primary
                                                            }
                                                            height="28px"
                                                        />
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
                                                        <SvgSad
                                                            fill={
                                                                markQuestionDidHelp({
                                                                    didHelp: questionDidHelpData?.didHelp,
                                                                    questionId: question.id,
                                                                    trueOrFalse: false
                                                                })
                                                                    ? variable.color.secondary
                                                                    : svgColor.primary
                                                            }
                                                            height="28px"
                                                        />
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

                        <Button mx="auto" onClick={(): void => router.back()}>
                            <Box alignItems="center" justifyContent="center">
                                <SvgArrowLeft height="10px" />

                                <P ml={2}>{t('button.back', { ns: 'app' })}</P>
                            </Box>
                        </Button>

                        <Spacer height={variable.space.spacingLG} />
                    </Container>
                </Box>
            </FaqMainStyled>

            <FaqRightStyled>
                <LineVertical display={{ d: 'none', md: 'block' }} />

                <Box alignContent="flex-start" flex="1 1 auto" px={4}>
                    <FaqPopularQuestion setStateAccordion={setStateAccordion} />

                    <LineHorizontal my={5} />

                    <FaqStillHaveQuestion />
                </Box>
            </FaqRightStyled>
        </LayoutWithMenu>
    );
}
