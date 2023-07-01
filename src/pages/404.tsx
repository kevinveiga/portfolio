import React, { ReactElement } from 'react';

import Head from 'next/head';

import { title } from '@/configApp';

import { Button } from '@/components/button/button';
import { LinkTo } from '@/components/link/linkTo';
import { SvgArrowLeft } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { BgImageOverlayTopBottom } from '@/styles/image';
import { Main, Spacer } from '@/styles/layout';
import { P, Title3 } from '@/styles/text';
import { variable } from '@/styles/variable';

function Page404(): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content="Sign In" />
      </Head>

      <BgImageOverlayTopBottom
        overlayColorBottom={variable.color.grayDark}
        overlayColorTop={variable.color.blackTransparent3}
        src="./images/238.webp"
      />

      <Main backgroundColor="transparent">
        <Flex alignContent="center" height="100vh" justifyContent="center">
          <Box backgroundColor={variable.color.whiteTransparent5} justifyContent="center" p={3} width="100%">
            aqui vai o logo
          </Box>

          <Spacer height={variable.space.spacingMD} width="100%" />

          <Box justifyContent="center">
            <Title3>Página não encontrada</Title3>

            <Spacer width="100%" />

            <LinkTo link="/">
              <Button>
                <Box alignItems="center" justifyContent="center">
                  <SvgArrowLeft height="10px" />

                  <P ml={2}>voltar</P>
                </Box>
              </Button>
            </LinkTo>
          </Box>
        </Flex>
      </Main>
    </>
  );
}

export default Page404;
