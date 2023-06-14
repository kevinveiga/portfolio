import React, { ReactElement } from 'react';

import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { title } from '@/configApp';
import { capitalizeFirstLetter } from '@/helpers/stringManipulation';

import { Box, Flex } from '@/styles/flex';
import { Main } from '@/styles/layout';
import { Title3 } from '@/styles/text';

function VerifyRequest(): ReactElement {
    // CONTEXT
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>
                    {title} - {capitalizeFirstLetter(t('verify request', { ns: 'glossary' }))}
                </title>

                <meta name="description" content={t('verify request', { ns: 'glossary' }) || ''} />
            </Head>

            <Main>
                <Flex alignContent="center" height="100vh" justifyContent="center">
                    <Box justifyContent="center">
                        <Title3>{t('under construction', { ns: 'glossary' })}</Title3>
                    </Box>
                </Flex>
            </Main>
        </>
    );
}

export default VerifyRequest;
