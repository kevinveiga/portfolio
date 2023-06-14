import React, { ReactElement } from 'react';

import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { title } from '@/configApp';
import { capitalizeFirstLetter } from '@/helpers/stringManipulation';

import { Box, Flex } from '@/styles/flex';
import { Main } from '@/styles/layout';
import { Title3 } from '@/styles/text';

function SignOut(): ReactElement {
    // CONTEXT
    const { t } = useTranslation();

    return (
        <>
            <Head>
                <title>
                    {title} - {capitalizeFirstLetter(t('sign out', { ns: 'glossary' }))}
                </title>

                <meta name="description" content={t('sign out', { ns: 'glossary' }) || ''} />
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

export default SignOut;
