import React, { ReactElement } from 'react';

import Head from 'next/head';

import { title } from '@/configApp';

import { Button } from '@/components/button/button';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { HomeResumeStyled, HomeTopStyled } from '@/components/layout/homeStyled';
import { LinkToExternal } from '@/components/link/linkToExternal';
import { SvgDocument, SvgGithub, SvgLinkedin } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { BgImage } from '@/styles/image';
import { Container, LineVertical, Main, Section, SectionSecondary, Spacer } from '@/styles/layout';
import { P, Subtitle1, Title1, Title2, Title3 } from '@/styles/text';
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
            <Flex alignItems="center" flexDirection="column">
              <Title2>resumo</Title2>

              <Subtitle1 color={variable.color.pink} fontWeight={700}>{`</>`}</Subtitle1>

              <Spacer />

              <HomeResumeStyled>
                <p>
                  A partir de <span>2002</span> comecei a trabalhar com <span>Front-End</span>, <br />
                  incluindo <span>HTML</span>, <span>CCS</span> e <span>Design</span>, depois de evoluir com essas
                  linguagens, <br />
                  me dediquei ao <span>Javascript</span>.
                </p>

                <p>
                  Em <span>2015</span> aumentei o meu foco para <span>novas tecnologias</span> no <span>Front-End</span>
                  . <br />
                  Estive envolvido em grandes projetos como: <br />
                  <span>Agência Virtual da Guarida Imóveis</span>, <span>Portal LaSalle</span>, <br />
                  <span>Camicado</span>, entre outros. <br />
                  Nesse período meu desenvolvimento foi somente com <span>Javascript puro</span>. <br />
                  Aprimorei minhas habilidades e me tornei o <span>líder técnico</span> <br />
                  no desenvolvimento <span>Front-End</span>.
                </p>

                <p>
                  Em <span>2018</span> iniciei os estudos de <span>React Hooks</span>, <span>NextJS</span>, <br />
                  <span>Typescript</span>, <span>Styled Components</span>, <span>NodeJS</span>, <span>Webpack</span>,{' '}
                  <br />
                  <span>ESLint</span>, <span>Prettier</span>, <span>Jest</span>, entre outras tecnologias. <br />
                </p>

                <p>
                  No ano seguinte, coloquei em prática meu conhecimento em <br />
                  um projeto semelhante ao site Udemy, onde fui o <span>responsável</span> por <br />
                  todo o <span>desenvolvimento</span>, <span>configuração</span>,{' '}
                  <span>organização e documentação</span> <br />
                  do <span>Front-End</span> deste projeto. Logo depois iniciei outro ótimo projeto <br />
                  usando também <span>NextJS</span>.
                </p>

                <p>
                  Desde então venho <span>aprimorando</span> meu desenvolvimento <span>Front-End</span> <br />
                  com <span>React</span>, implementando as melhores <span>metodologias</span>, <br />
                  <span>boas práticas</span>, <span>organização</span>, <span>testes</span> e <span>desempenho</span>.
                </p>
              </HomeResumeStyled>
            </Flex>
          </Container>
        </Section>

        <SectionSecondary>
          <Container>
            <Flex alignItems="center" flexDirection="column">
              <Title2>resumo</Title2>

              <Subtitle1 color={variable.color.pink} fontWeight={700}>{`</>`}</Subtitle1>
            </Flex>
          </Container>
        </SectionSecondary>

        <Section>
          <Container>
            <Flex alignItems="center" flexDirection="column">
              <Title2>resumo</Title2>

              <Subtitle1 color={variable.color.pink} fontWeight={700}>{`</>`}</Subtitle1>
            </Flex>
          </Container>
        </Section>

        <SectionSecondary>
          <Container>
            <Flex alignItems="center" flexDirection="column">
              <Title2>resumo</Title2>

              <Subtitle1 color={variable.color.pink} fontWeight={700}>{`</>`}</Subtitle1>
            </Flex>
          </Container>
        </SectionSecondary>

        <Footer />
      </Main>
    </>
  );
}

export default Home;
