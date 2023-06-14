import React, { ReactElement } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { title } from '@/configApp';

import { Box, Flex } from '@/styles/flex';
import { Main, Spacer } from '@/styles/layout';
import { P, Title2 } from '@/styles/text';
import { variable } from '@/styles/variable';

function Error(): ReactElement {
    // CONTEXT
    const router = useRouter();
    const { t } = useTranslation();

    // VARIABLE
    const { error } = router.query;

    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content="Auth Error" />
            </Head>

            <Main>
                <Flex alignContent="center" height="100vh" justifyContent="center">
                    <Spacer height={variable.space.spacingMD} width="100%" />

                    <Box flexDirection="column" justifyContent="center">
                        <Title2>{t('under construction', { ns: 'glossary' })}</Title2>

                        <P>{`${t('authentication', { ns: 'glossary' })} ${t('error', { ns: 'glossary' })}:`}</P>

                        <P>{t(error as string, { ns: 'glossary' })}</P>
                    </Box>
                </Flex>
            </Main>
        </>
    );
}

export default Error;
