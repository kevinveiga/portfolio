import React, { ReactElement } from 'react';

import Head from 'next/head';

import { title } from '@/configApp';

import { LayoutManager } from '@/components/layout/layoutManager';

import { Main } from '@/styles/layout';

function Manager(): ReactElement {
    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content="Manager" />
            </Head>

            <Main>
                <LayoutManager>Manager</LayoutManager>
            </Main>
        </>
    );
}

export default Manager;
