import React, { ReactElement } from 'react';

import Head from 'next/head';

import { title } from '@/configApp';

import { Button } from '@/components/button/button';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { HomeTopStyled } from '@/components/layout/homeStyled';
import { LinkToExternal } from '@/components/link/linkToExternal';
import { SvgDocument, SvgGithub, SvgLinkedin } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { LineVertical, Main, Spacer } from '@/styles/layout';
import { Subtitle1, Title1, Title3 } from '@/styles/text';
import { variable } from '@/styles/variable';

function Home(): ReactElement {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content="Home" />
      </Head>

      <Main>
        <Header />

        <HomeTopStyled>
          <Box justifyContent="center">
            <Flex flexDirection="column">
              <Spacer height={variable.space.spacingLG} />

              <Box zIndex={2}>
                <LinkToExternal link="https://www.linkedin.com/in/kevin-veiga-35a68026/">
                  <Button typeStyle="button-unset">
                    <SvgLinkedin />
                  </Button>
                </LinkToExternal>

                <Spacer />

                <LinkToExternal link="https://github.com/kevinveiga">
                  <Button typeStyle="button-unset">
                    <SvgGithub />
                  </Button>
                </LinkToExternal>

                <Spacer />

                <LinkToExternal link="/files/cv-kevin-m-veiga-2023.pdf">
                  <Button typeStyle="button-unset">
                    <SvgDocument />
                  </Button>
                </LinkToExternal>
              </Box>

              <Spacer height={variable.space.spacingXS} />

              <Box>
                <Title1 lineHeight="1" mb={0}>
                  React
                  <br />
                  Developer
                </Title1>
              </Box>
            </Flex>

            <Flex alignSelf="center" flex="1 1 auto">
              <Spacer width={variable.space.spacingXL} />

              <Box>
                <LineVertical backgroundColor={variable.color.whiteTransparent5} />
              </Box>

              <Spacer width={variable.space.spacingXL} />

              <Box>
                <Title3 fontWeight={700} mb={0}>
                  Mais de 15 anos de experiência <br />
                  no desenvolvimento Front-End
                </Title3>
              </Box>
            </Flex>

            <Flex flexDirection="column">
              <Spacer height={variable.space.spacingSM} />

              <Box>
                <Subtitle1 fontWeight={700} textAlign="center">
                  Olá, me chamo Kevin M. Veiga
                </Subtitle1>
              </Box>
            </Flex>
          </Box>

          <Spacer height={{ d: variable.space.spacingSM, sm: variable.space.spacingXL }} />

          {/* <Box justifyContent="center">
            <Title3 textAlign="center">Mais de 15 anos de experiência no desenvolvimento Front-End</Title3>
          </Box> */}
        </HomeTopStyled>

        <Flex>
          <Box></Box>
        </Flex>

        <Footer />
      </Main>
    </>
  );
}

export default Home;
