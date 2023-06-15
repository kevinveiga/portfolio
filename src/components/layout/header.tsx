import React, { ReactElement } from 'react';

import { IBreadcrumb } from '@/interface';
import { useApp } from '@/pages/_app';
import { usePage } from '@/stores/page/usePage';

import { Button } from '@/components/button/button';
import { HeaderStyled, HeaderItemsStyled } from '@/components/layout/headerStyled';
import { LinkTo } from '@/components/link/linkTo';
import { SvgDarkLightMode, SvgFlagBrazil, SvgFlagUsa, SvgMenu } from '@/components/svg/svgStore';

import { Flex } from '@/styles/flex';
import { variable } from '@/styles/variable';

export function Header(): ReactElement {
  // CONTEXT
  const { setStateTheme } = useApp();
  const { stateBreadcrumb, setStateLanguage } = usePage();

  return (
    <HeaderStyled>
      <Flex alignItems="center" height="100%" justifyContent="space-between" px={3} py={2}>
        <HeaderItemsStyled>
          <ul>
            {Array.isArray(stateBreadcrumb) &&
              stateBreadcrumb?.map((item: IBreadcrumb) => {
                return (
                  <li key={item.title}>{item.link ? <LinkTo link={item.link} text={item.title} /> : item.title}</li>
                );
              })}
          </ul>
        </HeaderItemsStyled>

        <HeaderItemsStyled>
          <Button onClick={(): void => setStateLanguage('en')} typeStyle="button-unset">
            <SvgFlagUsa />
          </Button>
        </HeaderItemsStyled>

        <HeaderItemsStyled>
          <Button onClick={(): void => setStateLanguage('pt_BR')} typeStyle="button-unset">
            <SvgFlagBrazil />
          </Button>
        </HeaderItemsStyled>

        <HeaderItemsStyled>
          <Button
            ariaLabel="dark and light mode"
            onClick={(): void => setStateTheme((prevState: boolean) => !prevState)}
            typeStyle="button-unset"
          >
            <SvgDarkLightMode fill={variable.color.grayLight} />
          </Button>
        </HeaderItemsStyled>

        <HeaderItemsStyled display={{ d: 'block', md: 'none' }}>
          <Button ariaLabel="menu close" height="100%" typeStyle="button-unset" width="100%">
            <SvgMenu />
          </Button>
        </HeaderItemsStyled>
      </Flex>
    </HeaderStyled>
  );
}
