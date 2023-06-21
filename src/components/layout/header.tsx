import React, { ReactElement } from 'react';

import { useApp } from '@/pages/_app';
import { usePage } from '@/stores/page/usePage';

import { Button } from '@/components/button/button';
import { HeaderStyled, HeaderItemsStyled } from '@/components/layout/headerStyled';
import { SvgDarkLightMode, SvgFlagBrazil, SvgFlagUsa, SvgMenu } from '@/components/svg/svgStore';

import { Box } from '@/styles/flex';
import { Spacer } from '@/styles/layout';
import { variable } from '@/styles/variable';

export function Header(): ReactElement {
  // CONTEXT
  const { setStateTheme } = useApp();
  const { setStateLanguage } = usePage();

  return (
    <HeaderStyled>
      <Box alignItems="flex-start" justifyContent="flex-start">
        <HeaderItemsStyled display={{ d: 'block', sm: 'none' }}>
          <Button ariaLabel="menu close" height="100%" typeStyle="button-unset" width="100%">
            <SvgMenu fill={variable.color.turquoiseLight} />
          </Button>
        </HeaderItemsStyled>

        <HeaderItemsStyled display={{ d: 'none', sm: 'block' }}>
          <ul>
            <li>resumo</li>

            <li>
              <Spacer width={variable.space.spacingLG} />
            </li>

            <li>habilidades</li>

            <li>
              <Spacer width={variable.space.spacingLG} />
            </li>

            <li>certificados</li>

            <li>
              <Spacer width={variable.space.spacingLG} />
            </li>

            <li>contato</li>

            <li>
              <Spacer width={variable.space.spacingLG} />
            </li>

            <li>storybook</li>
          </ul>
        </HeaderItemsStyled>
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
              <Spacer width={variable.space.spacingXS} />
            </li>

            <li>
              <Button onClick={(): void => setStateLanguage('pt_BR')} typeStyle="button-unset">
                <SvgFlagBrazil />
              </Button>
            </li>

            <li>
              <Spacer width={variable.space.spacingXS} />
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
