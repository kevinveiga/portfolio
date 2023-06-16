import React, { ReactElement } from 'react';

import Head from 'next/head';

import { title } from '@/configApp';

import { Button } from '@/components/button/button';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { HomeTopStyled } from '@/components/layout/homeStyled';
import { SvgDocument, SvgGithub, SvgLinkedin } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Main, Spacer } from '@/styles/layout';
import { Title1 } from '@/styles/text';
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
          <Box>
            <SvgLinkedin />

            <Spacer />

            <SvgGithub />

            <Spacer />

            <SvgDocument />
          </Box>

          <Spacer height={variable.space.spacingXS} />

          <Box>
            <Title1 color={variable.color.white} mb={0}>
              React
              <br />
              Developer
            </Title1>
          </Box>
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
