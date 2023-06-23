import React, { ReactElement } from 'react';

import Head from 'next/head';

import { title } from '@/configApp';

import { Button } from '@/components/button/button';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import {
  HomeResumeStyled,
  HomeFlexStyled,
  HomeFormationBoxStyled,
  HomeSkillsBoxStyled,
  HomeTopStyled
} from '@/components/layout/homeStyled';
import { LinkToExternal } from '@/components/link/linkToExternal';
import {
  SvgAwardFill,
  SvgChartBar,
  SvgCode,
  SvgDocument,
  SvgGithub,
  SvgLinkedin,
  SvgMortarboardFill
} from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { BgImage } from '@/styles/image';
import { Container, LineVertical, Main, Section, SectionSecondary, Spacer } from '@/styles/layout';
import { P, Title1, Title2, Title3, Title4 } from '@/styles/text';
import { variable } from '@/styles/variable';

import skills from '@/public/json/skills.json';

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
                    Mais de 20 anos de experiência <br />
                    no desenvolvimento Front-End
                  </Title3>
                </Box>
              </Flex>

              <Spacer height={{ d: variable.space.spacingSM, sm: variable.space.spacingMD }} />
            </Flex>

            <Flex flexDirection="column">
              <Box>
                <P fontSize="14px" textAlign="center">
                  Olá, me chamo Kevin M. Veiga
                </P>
              </Box>
            </Flex>
          </Box>
        </HomeTopStyled>

        <Section>
          <Container>
            <Flex alignItems="center" flexDirection="column">
              <Title2>resumo profissional</Title2>

              <SvgAwardFill fill={variable.color.grayLight} height="50px" />

              <Spacer height={variable.space.spacingLG} />

              <HomeResumeStyled>
                <p>
                  A partir de <span>2002</span> comecei a trabalhar com <span>Front-End</span> e <span>Design</span>,{' '}
                  <br />
                  posteriormente me aprofundei em <span>Javascript</span> e trabalhei também com <span>Back-End</span>.
                </p>

                <p>
                  Em <span>2015</span> aumentei o meu foco em <span>novas tecnologias</span> no <span>Front-End</span>
                  . <br />
                  Estive envolvido em grandes projetos como: <br />
                  <span>Agência Virtual da Guarida Imóveis</span>, <span>Portal LaSalle</span>, <span>Camicado</span>,
                  entre outros. <br />
                  Nesse período meu desenvolvimento foi somente com <span>Javascript puro</span>. <br />
                  Aprimorei minhas habilidades e me tornei <span>líder técnico</span>.
                </p>

                <p>
                  Em <span>2018</span> iniciei os estudos de <span>React</span>, <span>NextJS</span>, <br />
                  <span>Typescript</span>, <span>Styled Components</span>, <span>NodeJS</span>, <span>Webpack</span>,{' '}
                  <br />
                  entre outras tecnologias.
                </p>

                <p>
                  No ano seguinte, ingressei em um excelente projeto semelhante ao site Udemy, <br />
                  onde fui o <span>responsável</span> por todo o <span>desenvolvimento</span>, <span>configuração</span>
                  , <br />
                  <span>organização e documentação</span> em <span>React</span> deste projeto. <br />
                  Mais para frente fui responsável por outros ótimos projeto em <span>React</span> usando <br />
                  <span>NextJS</span>, <span>ESLint</span>, <span>Prettier</span>, <span>Jest</span> e{' '}
                  <span>GraphQL</span>.
                </p>

                <p>
                  Desde então venho <span>aprimorando</span> meu desenvolvimento <span>Front-End</span> com{' '}
                  <span>React</span>, <br />
                  implementando as melhores <span>metodologias</span>, <span>boas práticas</span>,{' '}
                  <span>organização</span>, <span>testes</span> e <span>desempenho</span>.
                </p>
              </HomeResumeStyled>
            </Flex>
          </Container>
        </Section>

        <SectionSecondary>
          <Container>
            <Flex alignItems="center" flexDirection="column">
              <Title2>habilidades</Title2>

              <SvgCode fill={variable.color.pink} height="50px" />

              <Spacer height={variable.space.spacingLG} />

              <HomeFlexStyled>
                {skills?.length > 0
                  ? skills.map((skill) => {
                      return (
                        <HomeSkillsBoxStyled key={skill.title}>
                          <Title4>{`< ${skill.title} />`}</Title4>

                          <ul>
                            {skill?.itens.length > 0
                              ? skill?.itens.map((item) => {
                                  return (
                                    <li key={item.title}>
                                      <div>
                                        <code>{'{'}</code>
                                      </div>
                                      <div>
                                        <p>
                                          {item.title}
                                          <br />
                                          <span>{item.years}</span>
                                        </p>
                                      </div>
                                      <div>
                                        <code>{'}'}</code>
                                      </div>
                                    </li>
                                  );
                                })
                              : null}
                          </ul>
                        </HomeSkillsBoxStyled>
                      );
                    })
                  : null}
              </HomeFlexStyled>
            </Flex>
          </Container>
        </SectionSecondary>

        <Section>
          <Container>
            <Flex alignItems="center" flexDirection="column">
              <Title2>formação</Title2>

              <SvgMortarboardFill fill={variable.color.turquoiseDark} height="50px" />

              <Spacer height={variable.space.spacingLG} />

              <HomeFlexStyled>
                <HomeFormationBoxStyled>
                  <Title4 textAlign="center">Graduação</Title4>
                </HomeFormationBoxStyled>

                <HomeFormationBoxStyled>
                  <Title4 textAlign="center">Cursos</Title4>
                </HomeFormationBoxStyled>
              </HomeFlexStyled>
            </Flex>
          </Container>
        </Section>

        <SectionSecondary>
          <Container>
            <Flex alignItems="center" flexDirection="column">
              <Title2>contato</Title2>

              <SvgChartBar fill={variable.color.green} height="50px" />

              <Spacer height={variable.space.spacingLG} />
            </Flex>
          </Container>
        </SectionSecondary>

        <Footer />
      </Main>
    </>
  );
}

export default Home;
