import React, { ReactElement, useState } from 'react'

import { useTranslation } from 'react-i18next'

import { scrollTo } from '@/helpers/scrollTo'
import { useApp } from '@/pages/_app'
import { useChangeHeaderScroll } from '@/hooks/header/useHeader'
import { usePage } from '@/hooks/page/usePage'

import { Button } from '@/components/button/button'
import { HeaderStyled, HeaderItemsStyled, HeaderItemsNavStyled } from '@/components/layout/headerStyled'
import { LinkToExternal } from '@/components/link/linkToExternal'
import { MenuMobile } from '@/components/layout/menuMobile'
import { SvgDarkLightMode, SvgFlagBrazil, SvgFlagUsa, SvgMenu } from '@/components/svg/svgStore'

import { Box } from '@/styles/flex'
import { variable } from '@/styles/variable'

import menuItens from '@/public/json/menu-itens.json'

export function Header(): ReactElement {
  // CONTEXT
  const { setStateTheme } = useApp()
  const { setStateLanguage } = usePage()
  const { t } = useTranslation()

  // STATE
  const [stateMenuMobileActive, setStateMenuMobileActive] = useState(false)

  // CUSTOM HOOK
  const stateChangeHeaderScroll = useChangeHeaderScroll('header')

  return (
    <HeaderStyled change={stateChangeHeaderScroll} id="header">
      <MenuMobile active={stateMenuMobileActive} setActive={setStateMenuMobileActive} />

      <Box alignItems="flex-start" justifyContent="flex-start">
        <HeaderItemsNavStyled display={{ d: 'none', md: 'block' }}>
          <ul>
            {menuItens?.length > 0
              ? menuItens?.map((item) => {
                  return (
                    <li key={item.title}>
                      {item.anchor ? (
                        <Button
                          ariaLabel={t(`menu.${item.title}`, { ns: 'app' }) || 'menu item'}
                          onClick={(): void => scrollTo(item.anchor)}
                          typeStyle="button-unset"
                        >
                          {t(`menu.${item.title}`, { ns: 'app' })}
                        </Button>
                      ) : (
                        <LinkToExternal ariaLabel={item.title} link={item.link} text={item.title} />
                      )}
                    </li>
                  )
                })
              : null}
          </ul>
        </HeaderItemsNavStyled>
      </Box>

      <Box alignItems="flex-start" justifyContent="flex-end">
        <HeaderItemsStyled display={{ d: 'none', md: 'block' }}>
          <ul>
            <li>
              <Button
                ariaLabel={t('portuguese', { ns: 'glossary' }) || 'português'}
                onClick={(): void => setStateLanguage('pt_BR')}
                typeStyle="button-unset"
              >
                <SvgFlagBrazil />
              </Button>
            </li>

            <li>
              <Button
                ariaLabel={t('english', { ns: 'glossary' }) || 'inglês'}
                onClick={(): void => setStateLanguage('en')}
                typeStyle="button-unset"
              >
                <SvgFlagUsa />
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

        <HeaderItemsStyled display={{ d: 'block', md: 'none' }}>
          <Button
            ariaLabel="menu close"
            height="100%"
            obj={{ hoverColor: variable.color.turquoiseLight }}
            onClick={(): void => setStateMenuMobileActive(true)}
            typeStyle="button-unset"
            width="100%"
          >
            <SvgMenu fill={variable.color.blueDark} />
          </Button>
        </HeaderItemsStyled>
      </Box>
    </HeaderStyled>
  )
}
