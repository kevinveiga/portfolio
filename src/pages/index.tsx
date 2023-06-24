import React, { ReactElement } from 'react';

import Head from 'next/head';
import { useTheme } from 'styled-components';

import { title } from '@/configApp';

import { Button } from '@/components/button/button';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import {
  HomeContactBoxStyled,
  HomeFlexStyled,
  HomeFormationBoxStyled,
  HomeResumeStyled,
  HomeSkillsBoxStyled,
  HomeTopStyled
} from '@/components/layout/homeStyled';
import { LinkToExternal } from '@/components/link/linkToExternal';
import {
  SvgAwardFill,
  SvgChatBar,
  SvgDocument,
  SvgGithub,
  SvgGmail,
  SvgLaptopCodeFill,
  SvgLink45Deg,
  SvgLinkedin,
  SvgMortarboardFill,
  SvgWhatsappFill
} from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { BgImage } from '@/styles/image';
import { Container, LineVertical, Main, Section, SectionSecondary, Spacer } from '@/styles/layout';
import { Span, Title1, Title2, Title3, Title4 } from '@/styles/text';
import { variable } from '@/styles/variable';

import skills from '@/public/json/skills.json';

function Home(): ReactElement {
  // CONTEXT
  const { borderColor } = useTheme();

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content="Home" />
      </Head>

      <Main>
        <Header />

        <HomeTopStyled>
          <Box
            justifyContent="center"
            px={{ d: variable.space.spacingSM, md: variable.space.spacingLG }}
            py={{ d: variable.space.spacingLG, md: variable.space.spacingXXXL }}
          >
            <BgImage
              backgroundPosition="100% 100%"
              backgroundSize="contain"
              bottom={0}
              height="85%"
              right={{ d: variable.space.spacingSM, md: variable.space.spacingLG }}
              src="images/portfolio-foto.png"
            />

            <Flex flex="1 1 auto" flexDirection="column">
              <Spacer height={variable.space.spacingMD} />

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

              <Flex alignItems={{ d: 'flex-start', md: 'center' }} flexDirection={{ d: 'column', md: 'row' }}>
                <Box>
                  <Title1 lineHeight="1" mb={0}>
                    Front-End
                    <br />
                    Developer
                  </Title1>
                </Box>

                <Box display={{ d: 'none', md: 'flex' }}>
                  <Spacer width={variable.space.spacingXL} />

                  <LineVertical backgroundColor={variable.color.whiteTransparent5} height="80px" />

                  <Spacer width={variable.space.spacingXL} />
                </Box>

                <Spacer display={{ d: 'block', md: 'none' }} height={variable.space.spacingXS} />

                <Box flexDirection="column">
                  <Title3 color={variable.color.turquoiseLight} fontWeight={700}>
                    Kevin M. Veiga
                  </Title3>

                  <Title4>
                    Mais de 20 anos de experiência <br />
                    no desenvolvimento Front-End
                  </Title4>
                </Box>
              </Flex>

              <Spacer height={{ d: variable.space.spacingSM, md: variable.space.spacingMD }} />
            </Flex>
          </Box>
        </HomeTopStyled>

        <Section>
          <Container>
            <Flex alignItems="center" flexDirection="column">
              <Title2>trajetória profissional</Title2>

              <SvgAwardFill fill={variable.color.grayLight} height="50px" />

              <Spacer height={variable.space.spacingLG} />

              <HomeResumeStyled>
                <p>
                  A partir de <Span>2002</Span> comecei a trabalhar com <Span>Front-End</Span> e <Span>Design</Span>,{' '}
                  <br />
                  posteriormente me aprofundei em <Span>Javascript</Span> e trabalhei também com <Span>Back-End</Span>.
                </p>

                <p>
                  Em <Span>2015</Span> aumentei o meu foco em <Span>novas tecnologias</Span> no <Span>Front-End</Span>
                  . <br />
                  Estive envolvido em grandes projetos como: <br />
                  <Span>Agência Virtual da Guarida Imóveis</Span>, <Span>Portal LaSalle</Span>, <Span>Camicado</Span>,
                  entre outros. <br />
                  Nesse período meu desenvolvimento foi somente com <Span>Javascript puro</Span>. <br />
                  Aprimorei minhas habilidades e me tornei <Span>líder técnico</Span>.
                </p>

                <p>
                  Em <Span>2018</Span> iniciei os estudos de <Span>React</Span>, <Span>NextJS</Span>, <br />
                  <Span>Typescript</Span>, <Span>Styled Components</Span>, <Span>NodeJS</Span>, <Span>Webpack</Span>,{' '}
                  <br />
                  entre outras tecnologias.
                </p>

                <p>
                  No ano seguinte, ingressei em um excelente projeto de cursos em investimentos, <br />
                  onde fui o <Span>responsável</Span> por todo o <Span>desenvolvimento</Span>, <Span>configuração</Span>
                  , <br />
                  <Span>organização e documentação</Span> em <Span>React</Span> deste projeto. <br />
                  Mais para frente fui responsável por outros ótimos projeto em <Span>React</Span> usando <br />
                  <Span>NextJS</Span>, <Span>ESLint</Span>, <Span>Prettier</Span>, <Span>Jest</Span> e{' '}
                  <Span>GraphQL</Span>.
                </p>

                <p>
                  Desde então venho <Span>aprimorando</Span> meu desenvolvimento <Span>Front-End</Span> com{' '}
                  <Span>React</Span>, <br />
                  implementando as melhores <Span>metodologias</Span>, <Span>boas práticas</Span>,{' '}
                  <Span>organização</Span>, <Span>testes</Span> e <Span>desempenho</Span>.
                </p>
              </HomeResumeStyled>
            </Flex>
          </Container>
        </Section>

        <SectionSecondary>
          <Container>
            <Flex alignItems="center" flexDirection="column">
              <Title2>habilidades</Title2>

              <SvgLaptopCodeFill fill={variable.color.pink} height="50px" />

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
                                          <Span>{item.years}</Span>
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
                  <Title4 lineColor={borderColor.secondary}>Graduação</Title4>

                  <ul>
                    <li>
                      UniFtec:
                      <br />
                      <p>
                        Análise e Desenvolvimento de Sistemas.
                        <br />
                        <Span>Início: 09/05/2015</Span>
                        <br />
                        <Span>Conclusão: 01/12/2021</Span>
                      </p>
                    </li>

                    <li>
                      Unisinos:
                      <br />
                      <p>
                        Análise e Desenvolvimento de Sistemas.
                        <br />
                        <Span>Início: 01/03/2014</Span>
                        <br />
                        <Span>Finalizado: 09/05/2015</Span>
                      </p>
                    </li>
                  </ul>

                  <Spacer height={variable.space.spacingLG} />

                  <Title4 lineColor={borderColor.secondary}>Principais Cursos</Title4>

                  <ul>
                    <li>
                      Udemy:
                      <br />
                      <p>
                        React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!
                        <br />
                        <Span>2020 - 54.5 horas</Span>
                        <br />
                        <LinkToExternal link="/files/certificado-udemy-react-redux-fundamentos.pdf">
                          Certificado
                          <SvgLink45Deg height="12px" />
                        </LinkToExternal>
                      </p>
                      <p>
                        Desenvolvedor NodeJS e MongoDB
                        <br />
                        <Span>2022 - 15.5 horas</Span>
                        <br />
                        <LinkToExternal link="/files/certificado-udemy-nodejs-e-mongodb.pdf">
                          Certificado
                          <SvgLink45Deg height="12px" />
                        </LinkToExternal>
                      </p>
                      <p>
                        React Native: Desenvolva APPs Nativas para Android e IOS
                        <br />
                        <Span>2022 - 45 horas</Span>
                        <br />
                        <LinkToExternal link="/files/certificado-udemy-react-native-apps-nativos-android-ios.pdf">
                          Certificado
                          <SvgLink45Deg height="12px" />
                        </LinkToExternal>
                      </p>
                      <p>
                        AWS para Iniciantes 2023 - Aprenda e Domine a Nuvem Amazon
                        <br />
                        <Span>2023 - 7 horas</Span>
                        <br />
                        <LinkToExternal link="/files/certificado-udemy-aws-para-iniciantes-2023.pdf">
                          Certificado
                          <SvgLink45Deg height="12px" />
                        </LinkToExternal>
                      </p>
                      <p>
                        NestJS - Fundamentos
                        <br />
                        <Span>2023 - 15 horas</Span>
                        <br />
                        <LinkToExternal link="/files/certificado-udemy-nestjs-fundamentos.pdf">
                          Certificado
                          <SvgLink45Deg height="12px" />
                        </LinkToExternal>
                      </p>
                    </li>

                    <li>
                      Sisnema:
                      <br />
                      <p>
                        Developing MS ASP.NET Web Applications Using Visual Studio.Net
                        <br />
                        <Span>2006 - 40 horas</Span>
                      </p>
                    </li>

                    <li>
                      TargetTrust:
                      <br />
                      <p>
                        Orientação a Objetos
                        <br />
                        <Span>2005 - 8 horas</Span>
                      </p>
                      <p>
                        Mapeamento Objeto Relacional e Modelagem de Dados
                        <br />
                        <Span>2005 - 20 horas</Span>
                      </p>
                      <p>
                        PostgreSQL - Fundamentos, SQL Básico e Avançado
                        <br />
                        <Span>2005 - 20 horas</Span>
                      </p>
                    </li>

                    <li>
                      Alfamídia:
                      <br />
                      <p>
                        Adobe Photoshop CS Advanced Design Techniques
                        <br />
                        <Span>2005 - 20 horas</Span>
                      </p>
                    </li>
                  </ul>
                </HomeFormationBoxStyled>
              </HomeFlexStyled>
            </Flex>
          </Container>
        </Section>

        <SectionSecondary>
          <Container>
            <Flex alignItems="center" flexDirection="column">
              <Title2>contato</Title2>

              <SvgChatBar fill={variable.color.green} height="50px" />

              <Spacer height={variable.space.spacingLG} />

              <HomeFlexStyled>
                <HomeContactBoxStyled>
                  <Box>
                    <ul>
                      <li>
                        <SvgLinkedin fill={variable.color.blue} />
                        <Span>Linkedin</Span>
                      </li>
                      <li>
                        <SvgWhatsappFill />
                        <Span>+55 51 98135-7941</Span>
                      </li>
                      <li>
                        <SvgGmail />
                        <Span>kevin.veiga@gmail.com</Span>
                      </li>
                    </ul>
                  </Box>

                  <Box>
                    <Spacer width={variable.space.spacingXL} />

                    <LineVertical backgroundColor={borderColor.secondary} height="80px" />

                    <Spacer width={variable.space.spacingXL} />
                  </Box>

                  <Box></Box>
                </HomeContactBoxStyled>
              </HomeFlexStyled>
            </Flex>
          </Container>
        </SectionSecondary>

        <Footer />
      </Main>
    </>
  );
}

export default Home;
