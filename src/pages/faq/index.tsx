import React, { ReactElement } from 'react';

import Head from 'next/head';

import { title } from '@/configApp';

import { Container, Main } from '@/styles/layout';

function Faq(): ReactElement {
    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content="FAQ" />
            </Head>

            <Main>
                <Container>FAQ INDEX</Container>
            </Main>
        </>
    );
}

export default Faq;
