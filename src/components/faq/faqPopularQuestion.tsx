import React, { ReactElement } from 'react';

import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { IFaqPopularQuestion, IQuestion } from '@/interface';
import { queryQuestionsPopular } from '@/services/graphqlQuery';
import { useSWRGetGraphql } from '@/stores/fetch/useSWRGetGraphql';

import { Button } from '@/components/button/button';
import { FaqPopularQuestionStyled } from '@/components/faq/faqStyled';

import { Box, Flex } from '@/styles/flex';
import { LineHorizontal, Spacer } from '@/styles/layout';
import { P, Span, Title3 } from '@/styles/text';
import { variable } from '@/styles/variable';

export function FaqPopularQuestion({ setStateAccordion }: IFaqPopularQuestion): ReactElement | null {
    // CONTEXT
    const router = useRouter();
    const { textColor } = useTheme();
    const { t, i18n } = useTranslation();

    const { productSlug, subProductSlug } = router.query;

    const where = subProductSlug ? { subProduct: { slug: subProductSlug } } : productSlug ? { product: { slug: productSlug } } : undefined;

    // CUSTOM HOOK
    const { data, isLoading } = useSWRGetGraphql({
        graphqlQuery: queryQuestionsPopular,
        graphqlVariables: { locale: [i18n.language], where: { ...where, views_gt: 0 } }
    });

    const questionsData: IQuestion[] = data?.questions;

    // FUNCTION
    const redirectToQuestion = (question: IQuestion, questionId: string): void => {
        setStateAccordion(questionId);

        const product = question.product?.slug
            ? `/${question.product?.slug}`
            : question.subProduct?.product?.slug
            ? `/${question.subProduct?.product?.slug}`
            : '';
        const subProduct = question.subProduct?.slug ? `/${question.subProduct?.slug}` : '';
        const url = '/faq'.concat(product, subProduct);

        if (url) {
            router.push(url).catch(() => null);
        } else {
            router.push('/404').catch(() => null);
        }
    };

    return (
        <Flex flex="1 1 auto" flexDirection="column">
            <Box alignItems="flex-end" minHeight="45px">
                <Title3 fontWeight={700} mb={0}>
                    {t('popular questions', { ns: 'glossary' })}
                </Title3>
            </Box>

            <Spacer height={variable.space.spacingXS} />

            <LineHorizontal backgroundColor={variable.color.secondary} height="2px" width="50px" />

            <Spacer height={variable.space.spacingMD} />

            <FaqPopularQuestionStyled>
                {isLoading ? (
                    <li>{t('loading', { ns: 'glossary' })}...</li>
                ) : questionsData?.length > 0 ? (
                    questionsData.map((question: IQuestion) => {
                        return (
                            <li key={question.id}>
                                <Button
                                    obj={{ hoverColor: textColor.primary }}
                                    onClick={(): void => redirectToQuestion(question, `accordion-question-${question.id}`)}
                                    textAlign="left"
                                    typeStyle="button-unset"
                                >
                                    <Span color={textColor.secondary} fontSize="14px">
                                        {question.title}
                                    </Span>
                                </Button>
                            </li>
                        );
                    })
                ) : (
                    <li>
                        <P>{t('no data found', { ns: 'glossary' })}</P>
                    </li>
                )}
            </FaqPopularQuestionStyled>
        </Flex>
    );
}
