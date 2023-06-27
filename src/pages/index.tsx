import React, { ReactElement } from 'react';

import parse from 'html-react-parser';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { title } from '@/configApp';
import { scrollTo } from '@/helpers/scrollTo';
import { capitalizeFirstLetter } from '@/helpers/stringManipulation';

import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import {
  HomeBtnScrollStyled,
  HomeContactBoxStyled,
  HomeFlexStyled,
  HomeProfessionalQualificationBoxStyled,
  HomeProfessionalTrajectoryBoxStyled,
  HomeSkillsBoxStyled,
  HomeTopStyled
} from '@/components/layout/homeStyled';
import { LinkToExternal } from '@/components/link/linkToExternal';
import {
  SvgAwardFill,
  SvgArrowDown,
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
  const { t } = useTranslation();

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
                  <SvgLinkedin />
                </LinkToExternal>

                <Spacer />

                <LinkToExternal link="https://github.com/kevinveiga">
                  <SvgGithub />
                </LinkToExternal>

                <Spacer />

                <LinkToExternal link="/files/cv-kevin-m-veiga-2023.pdf">
                  <SvgDocument />
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

                <Box flexDirection="column" maxWidth="315px">
                  <Title3 color={variable.color.turquoiseLight} fontWeight={700}>
                    Kevin M. Veiga
                  </Title3>

                  <Title4>
                    {t('more than 15 years of experience', { ns: 'glossary' })}
                    <br />
                    {t('in Front-End development', { ns: 'glossary' })}
                  </Title4>
                </Box>
              </Flex>

              <Spacer height={{ d: variable.space.spacingSM, md: variable.space.spacingMD }} />
            </Flex>
          </Box>

          <HomeBtnScrollStyled onClick={(): void => scrollTo('#anchor-trajectory')}>
            <SvgArrowDown />
          </HomeBtnScrollStyled>
        </HomeTopStyled>

        <Section>
          <Container>
            <div id="anchor-trajectory" />

            <Flex alignItems="center" flexDirection="column">
              <Title2>{t('professional trajectory', { ns: 'glossary' })}</Title2>

              <SvgAwardFill fill={variable.color.grayLight} height="50px" />

              <Spacer height={variable.space.spacingLG} />

              <HomeProfessionalTrajectoryBoxStyled>
                {parse(t('text professional trajectory', { ns: 'glossary' }) || '')}
              </HomeProfessionalTrajectoryBoxStyled>
            </Flex>
          </Container>
        </Section>

        <SectionSecondary>
          <Container>
            <div id="anchor-skills" />

            <Flex alignItems="center" flexDirection="column">
              <Title2>{t('skills', { ns: 'glossary' })}</Title2>

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
                                          <Span>{`${item.years} ${t('year', { ns: 'glossary' })}${
                                            parseInt(item.years, 10) > 1 ? 's' : ''
                                          }`}</Span>
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
            <div id="anchor-formation" />

            <Flex alignItems="center" flexDirection="column">
              <Title2>{t('professional qualification', { ns: 'glossary' })}</Title2>

              <SvgMortarboardFill fill={variable.color.turquoiseDark} height="50px" />

              <Spacer height={variable.space.spacingLG} />

              <HomeFlexStyled>
                <HomeProfessionalQualificationBoxStyled>
                  <Title4 lineColor={borderColor.secondary}>{t('graduation', { ns: 'glossary' })}</Title4>

                  <ul>
                    <li>
                      UniFtec:
                      <br />
                      <p>
                        Análise e Desenvolvimento de Sistemas.
                        <br />
                        <Span>{`${capitalizeFirstLetter(t('started', { ns: 'glossary' }))}: 09/05/2015`}</Span>
                        <br />
                        <Span>{`${capitalizeFirstLetter(t('finished', { ns: 'glossary' }))}: 01/12/2021`}</Span>
                      </p>
                    </li>

                    <li>
                      Unisinos:
                      <br />
                      <p>
                        Análise e Desenvolvimento de Sistemas.
                        <br />
                        <Span>{`${capitalizeFirstLetter(t('started', { ns: 'glossary' }))}: 01/03/2014`}</Span>
                        <br />
                        <Span>{`${capitalizeFirstLetter(t('finished', { ns: 'glossary' }))}: 09/05/2015`}</Span>
                      </p>
                    </li>
                  </ul>

                  <Spacer height={variable.space.spacingLG} />

                  <Title4 lineColor={borderColor.secondary}>{t('main courses', { ns: 'glossary' })}</Title4>

                  <ul>
                    <li>
                      Udemy:
                      <br />
                      <p>
                        React + Redux: Fundamentos e 2 Apps do Absoluto ZERO!
                        <br />
                        <Span>{`2020 - 54.5 ${t('hours', { ns: 'glossary' })}`}</Span>
                        <br />
                        <LinkToExternal link="/files/certificado-udemy-react-redux-fundamentos.pdf">
                          {capitalizeFirstLetter(t('certificate', { ns: 'glossary' }))}
                          <SvgLink45Deg height="12px" />
                        </LinkToExternal>
                      </p>
                      <p>
                        Desenvolvedor NodeJS e MongoDB
                        <br />
                        <Span>{`2022 - 15.5 ${t('hours', { ns: 'glossary' })}`}</Span>
                        <br />
                        <LinkToExternal link="/files/certificado-udemy-nodejs-e-mongodb.pdf">
                          {capitalizeFirstLetter(t('certificate', { ns: 'glossary' }))}
                          <SvgLink45Deg height="12px" />
                        </LinkToExternal>
                      </p>
                      <p>
                        React Native: Desenvolva APPs Nativas para Android e IOS
                        <br />
                        <Span>{`2022 - 45 ${t('hours', { ns: 'glossary' })}`}</Span>
                        <br />
                        <LinkToExternal link="/files/certificado-udemy-react-native-apps-nativos-android-ios.pdf">
                          {capitalizeFirstLetter(t('certificate', { ns: 'glossary' }))}
                          <SvgLink45Deg height="12px" />
                        </LinkToExternal>
                      </p>
                      <p>
                        AWS para Iniciantes 2023 - Aprenda e Domine a Nuvem Amazon
                        <br />
                        <Span>{`2023 - 7 ${t('hours', { ns: 'glossary' })}`}</Span>
                        <br />
                        <LinkToExternal link="/files/certificado-udemy-aws-para-iniciantes-2023.pdf">
                          {capitalizeFirstLetter(t('certificate', { ns: 'glossary' }))}
                          <SvgLink45Deg height="12px" />
                        </LinkToExternal>
                      </p>
                      <p>
                        NestJS - Fundamentos
                        <br />
                        <Span>{`2023 - 15 ${t('hours', { ns: 'glossary' })}`}</Span>
                        <br />
                        <LinkToExternal link="/files/certificado-udemy-nestjs-fundamentos.pdf">
                          {capitalizeFirstLetter(t('certificate', { ns: 'glossary' }))}
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
                        <Span>{`2006 - 40 ${t('hours', { ns: 'glossary' })}`}</Span>
                      </p>
                    </li>

                    <li>
                      TargetTrust:
                      <br />
                      <p>
                        Orientação a Objetos
                        <br />
                        <Span>{`2005 - 8 ${t('hours', { ns: 'glossary' })}`}</Span>
                      </p>
                      <p>
                        Mapeamento Objeto Relacional e Modelagem de Dados
                        <br />
                        <Span>{`2005 - 20 ${t('hours', { ns: 'glossary' })}`}</Span>
                      </p>
                      <p>
                        PostgreSQL - Fundamentos, SQL Básico e Avançado
                        <br />
                        <Span>{`2005 - 20 ${t('hours', { ns: 'glossary' })}`}</Span>
                      </p>
                    </li>

                    <li>
                      Alfamídia:
                      <br />
                      <p>
                        Adobe Photoshop CS Advanced Design Techniques
                        <br />
                        <Span>{`2005 - 20 ${t('hours', { ns: 'glossary' })}`}</Span>
                      </p>
                    </li>
                  </ul>
                </HomeProfessionalQualificationBoxStyled>
              </HomeFlexStyled>
            </Flex>
          </Container>
        </Section>

        <SectionSecondary>
          <Container>
            <div id="anchor-contact" />

            <Flex alignItems="center" flexDirection="column">
              <Title2>{t('contact', { ns: 'glossary' })}</Title2>

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
