import React, { ReactElement } from 'react';

import Head from 'next/head';

import { title } from '@/configApp';

import { Button } from '@/components/button/button';
import { LinkTo } from '@/components/link/linkTo';

import { Box, Flex } from '@/styles/flex';
import { BgImageOverlayTopBottom } from '@/styles/image';
import { Main, Spacer } from '@/styles/layout';
import { variable } from '@/styles/variable';

function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content="Home" />
      </Head>

      <BgImageOverlayTopBottom
        overlayColorBottom={variable.color.grayDark}
        overlayColorTop={variable.color.blackTransparent3}
        src="/images/238.webp"
      />

      <Main backgroundColor="transparent">
        <Flex alignContent="center" height="100vh" justifyContent="center">
          <Box backgroundColor={variable.color.whiteTransparent5} justifyContent="center" p={3} width="100%">
            aqui vai o logo
          </Box>

          <Spacer height={variable.space.spacingMD} width="100%" />

          <Box>
            <LinkTo link="/usuarios">
              <Button text="Entrar" />
            </LinkTo>
          </Box>
        </Flex>
      </Main>
    </>
  );
}

export default Home;
