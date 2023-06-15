import React, { ReactElement } from 'react';

import { useApp } from '@/pages/_app';
import { usePage } from '@/stores/page/usePage';

import { Button } from '@/components/button/button';
import { HeaderStyled, HeaderItemsStyled } from '@/components/layout/headerStyled';
import { SvgDarkLightMode, SvgFlagBrazil, SvgFlagUsa, SvgMenu } from '@/components/svg/svgStore';

import { Flex } from '@/styles/flex';
import { variable } from '@/styles/variable';

export function Header(): ReactElement {
  // CONTEXT
  const { setStateTheme } = useApp();
  const { setStateLanguage } = usePage();

  return (
    <HeaderStyled>
      <Flex alignItems="center" justifyContent="flex-start" p={3}>
        <HeaderItemsStyled display={{ d: 'block', md: 'none' }}>
          <Button ariaLabel="menu close" height="100%" typeStyle="button-unset" width="100%">
            <SvgMenu />
          </Button>
        </HeaderItemsStyled>
      </Flex>

      <Flex alignItems="center" justifyContent="flex-end" p={3}>
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
                <SvgDarkLightMode fill={variable.color.grayLight} />
              </Button>
            </li>
          </ul>
        </HeaderItemsStyled>
      </Flex>
    </HeaderStyled>
  );
}
