import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { scrollTo } from '@/helpers/scrollTo';
import { IActive } from '@/interface';
import { useApp } from '@/pages/_app';
import { usePage } from '@/stores/page/usePage';

import { Button } from '@/components/button/button';
import { MenuMobileStyled, MenuMobileItemsNavStyled } from '@/components/layout/menuMobileStyled';
import { LinkToExternal } from '@/components/link/linkToExternal';
import { SvgClose } from '@/components/svg/svgStore';

import { Box } from '@/styles/flex';
import { LineHorizontal, Spacer } from '@/styles/layout';
import { Subtitle1 } from '@/styles/text';

import menuItens from '@/public/json/menu-itens.json';

export function MenuMobile({ active, setActive }: IActive): ReactElement {
  // CONTEXT
  const { stateTheme, setStateTheme } = useApp();
  const { setStateLanguage } = usePage();
  const { t } = useTranslation();

  return (
    <MenuMobileStyled active={active} display={{ d: 'block', md: 'none' }}>
      <Box>
        <Button ariaLabel="close" onClick={(): void => setActive(false)} typeStyle="button-unset">
          <SvgClose />
        </Button>
      </Box>

      <MenuMobileItemsNavStyled>
        <ul>
          <li>
            <Subtitle1>{t('menu', { ns: 'glossary' })}</Subtitle1>
          </li>

          {menuItens?.length > 0
            ? menuItens?.map((item) => {
                return (
                  <li key={item.title}>
                    {item.anchor ? (
                      <Button
                        ariaLabel={t(`menu.${item.title}`, { ns: 'app' }) || 'menu item'}
                        onClick={(): void => {
                          scrollTo(item.anchor);
                          setActive(false);
                        }}
                        typeStyle="button-unset"
                      >
                        {t(`menu.${item.title}`, { ns: 'app' })}
                      </Button>
                    ) : (
                      <LinkToExternal ariaLabel={item.title} link={item.link} text={item.title} />
                    )}
                  </li>
                );
              })
            : null}
        </ul>
      </MenuMobileItemsNavStyled>

      <LineHorizontal />

      <MenuMobileItemsNavStyled>
        <ul>
          <li>
            <Subtitle1>{t('language', { ns: 'glossary' })}</Subtitle1>
          </li>

          <li>
            <Button
              ariaLabel={t('portuguese', { ns: 'glossary' }) || 'português'}
              onClick={(): void => {
                setStateLanguage('pt_BR');
                setActive(false);
              }}
              text={t('portuguese', { ns: 'glossary' }) || 'português'}
              typeStyle="button-unset"
            />
          </li>

          <li>
            <Button
              ariaLabel={t('english', { ns: 'glossary' }) || 'inglês'}
              onClick={(): void => {
                setStateLanguage('en');
                setActive(false);
              }}
              text={t('english', { ns: 'glossary' }) || 'inglês'}
              typeStyle="button-unset"
            />
          </li>
        </ul>
      </MenuMobileItemsNavStyled>

      <LineHorizontal />

      <MenuMobileItemsNavStyled>
        <ul>
          <li>
            <Subtitle1>{t('theme', { ns: 'glossary' })}</Subtitle1>
          </li>

          <li>
            <Button
              ariaLabel="dark and light mode"
              onClick={(): void => {
                setStateTheme((prevState: boolean) => !prevState);
                setActive(false);
              }}
              text={t(`${stateTheme ? 'dark' : 'light'} theme`, { ns: 'glossary' }) || undefined}
              typeStyle="button-unset"
            />
          </li>
        </ul>
      </MenuMobileItemsNavStyled>
    </MenuMobileStyled>
  );
}
