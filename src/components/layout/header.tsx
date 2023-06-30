import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { scrollTo } from '@/helpers/scrollTo';
import { useApp } from '@/pages/_app';
import { useChangeHeaderScroll } from '@/stores/header/useHeader';
import { usePage } from '@/stores/page/usePage';

import { Button } from '@/components/button/button';
import { HeaderStyled, HeaderItemsStyled, HeaderNavItemsStyled } from '@/components/layout/headerStyled';
import { SvgDarkLightMode, SvgFlagBrazil, SvgFlagUsa, SvgMenu } from '@/components/svg/svgStore';

import { Box } from '@/styles/flex';
import { variable } from '@/styles/variable';

export function Header(): ReactElement {
  // CONTEXT
  const { setStateTheme } = useApp();
  const { setStateLanguage } = usePage();
  const { t } = useTranslation();

  // CUSTOM HOOK
  const stateChangeHeaderScroll = useChangeHeaderScroll('header');

  return (
    <HeaderStyled change={stateChangeHeaderScroll} id="header">
      <Box alignItems="flex-start" justifyContent="flex-start">
        <HeaderItemsStyled display={{ d: 'block', md: 'none' }}>
          <Button ariaLabel="menu close" height="100%" typeStyle="button-unset" width="100%">
            <SvgMenu fill={variable.color.turquoiseLight} />
          </Button>
        </HeaderItemsStyled>

        <HeaderNavItemsStyled display={{ d: 'none', md: 'block' }}>
          <ul>
            <li>
              <Button onClick={(): void => scrollTo('#anchor-trajectory')} typeStyle="button-unset">
                {t('professional trajectory', { ns: 'glossary' })}
              </Button>
            </li>

            <li>
              <Button onClick={(): void => scrollTo('#anchor-skills')} typeStyle="button-unset">
                {t('skills', { ns: 'glossary' })}
              </Button>
            </li>

            <li>
              <Button onClick={(): void => scrollTo('#anchor-formation')} typeStyle="button-unset">
                {t('professional qualification', { ns: 'glossary' })}
              </Button>
            </li>

            <li>
              <Button onClick={(): void => scrollTo('#anchor-contact')} typeStyle="button-unset">
                {t('contact', { ns: 'glossary' })}
              </Button>
            </li>

            <li>storybook</li>
          </ul>
        </HeaderNavItemsStyled>
      </Box>

      <Box alignItems="flex-start" justifyContent="flex-end">
        <HeaderItemsStyled>
          <ul>
            <li>
              <Button onClick={(): void => setStateLanguage('en')} typeStyle="button-unset">
                <SvgFlagUsa />
              </Button>
            </li>

            <li>
              <Button onClick={(): void => setStateLanguage('pt_BR')} typeStyle="button-unset">
                <SvgFlagBrazil />
              </Button>
            </li>

            <li>
              <Button
                ariaLabel="dark and light mode"
                onClick={(): void => setStateTheme((prevState: boolean) => !prevState)}
                typeStyle="button-unset"
              >
                <SvgDarkLightMode fill={variable.color.blueDark} />
              </Button>
            </li>
          </ul>
        </HeaderItemsStyled>
      </Box>
    </HeaderStyled>
  );
}
