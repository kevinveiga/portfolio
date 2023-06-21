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
import { BgImage } from '@/styles/image';
import { Container, LineVertical, Main, Section, SectionSecondary, Spacer } from '@/styles/layout';
import { P, Title1, Title3 } from '@/styles/text';
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
          <BgImage
            backgroundPosition="100% 100%"
            backgroundSize="contain"
            bottom={0}
            height="280px"
            right={{ d: variable.space.spacingSM, sm: variable.space.spacingLG }}
            src="images/portfolio-foto.png"
          />

          <Box justifyContent="center">
            <Flex flex="1 1 auto" flexDirection="column">
              <Spacer height={{ d: variable.space.spacingSM, sm: variable.space.spacingMD }} />

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

              <Flex alignItems="center">
                <Box>
                  <Title1 lineHeight="1" mb={0}>
                    React
                    <br />
                    Developer
                  </Title1>
                </Box>

                <Box>
                  <Spacer width={variable.space.spacingXL} />

                  <LineVertical backgroundColor={variable.color.whiteTransparent5} height="80px" />

                  <Spacer width={variable.space.spacingXL} />
                </Box>

                <Box>
                  <Title3 fontWeight={700} mb={0}>
                    Mais de 15 anos de experiência <br />
                    no desenvolvimento Front-End
                  </Title3>
                </Box>
              </Flex>

              <Spacer height={{ d: variable.space.spacingSM, sm: variable.space.spacingMD }} />
            </Flex>

            <Flex flexDirection="column">
              <Box>
                <P fontWeight={700} textAlign="center">
                  Olá, me chamo Kevin M. Veiga
                </P>
              </Box>
            </Flex>
          </Box>
        </HomeTopStyled>

        <Section>
          <Container>
            <Title3 textAlign="center">resumo</Title3>
          </Container>
        </Section>

        <SectionSecondary>
          <Container>
            <Title3 textAlign="center">resumo</Title3>
          </Container>
        </SectionSecondary>

        <Section>
          <Container>
            <Title3 textAlign="center">resumo</Title3>
          </Container>
        </Section>

        <SectionSecondary>
          <Container>
            <Title3 textAlign="center">resumo</Title3>
          </Container>
        </SectionSecondary>

        <Footer />
      </Main>
    </>
  );
}

export default Home;
