import React, { ReactElement } from 'react';

import Head from 'next/head';

import { title } from '@/configApp';

import { Button } from '@/components/button/button';

import { Box, Flex } from '@/styles/flex';
import { Main, Spacer } from '@/styles/layout';
import { variable } from '@/styles/variable';

function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content="Home" />
      </Head>

      <Main backgroundColor="transparent">
        <Flex height="100vh" justifyContent="center">
          <Box backgroundColor={variable.color.whiteTransparent5} justifyContent="flex-start" p={3} width="100%">
            aqui vai o logo
          </Box>

          <Spacer height={variable.space.spacingMD} width="100%" />

          <Box></Box>
        </Flex>
      </Main>
    </>
  );
}

export default Home;
