import React, { ReactElement } from 'react';

import { useApp } from '@/pages/_app';
import { usePage } from '@/stores/page/usePage';

import { Button } from '@/components/button/button';
import { HeaderStyled, HeaderItemsStyled } from '@/components/layout/headerStyled';
import { SvgDarkLightMode, SvgFlagBrazil, SvgFlagUsa, SvgMenu } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Title1 } from '@/styles/text';
import { variable } from '@/styles/variable';

export function Header(): ReactElement {
  // CONTEXT
  const { setStateTheme } = useApp();
  const { setStateLanguage } = usePage();

  return (
    <HeaderStyled>
      <Flex flexDirection="row" justifyContent="space-between" px={{ d: 3, sm: 5 }} py={{ d: 2, sm: 3 }}>
        <Box alignItems="flex-start" justifyContent="flex-start">
          <HeaderItemsStyled display={{ d: 'block', md: 'none' }}>
            <Button ariaLabel="menu close" height="100%" typeStyle="button-unset" width="100%">
              <SvgMenu fill={variable.color.turquoiseLight} />
            </Button>
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
      </Flex>

      <Flex px={{ d: 3, sm: 5 }} py={{ d: 2, sm: 3 }}>
        <Box>
          <Title1 color={variable.color.white}>
            React
            <br />
            Developer
          </Title1>
        </Box>
      </Flex>
    </HeaderStyled>
  );
}
