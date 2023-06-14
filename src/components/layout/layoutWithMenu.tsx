import React, { ReactElement } from 'react';

import { ILayoutWithMenu } from '@/interface';
import { useApp } from '@/pages/_app';
import { usePage } from '@/stores/page/usePage';

import { Button } from '@/components/button/button';
import { LanguageStyled, MenuChangeStyled } from '@/components/layout/layoutStyled';
import { LayoutWithMenuStyled, LayoutWithMenuLeftStyled, LayoutWithMenuMainStyled } from '@/components/layout/layoutWithMenuStyled';
import { SvgArrowLeft, SvgFlagBrazil, SvgFlagUsa } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { LineHorizontal, LineVertical, Spacer } from '@/styles/layout';
import { variable } from '@/styles/variable';

export function LayoutWithMenu({ children, menu, ...props }: ILayoutWithMenu): ReactElement {
    // CONTEXT
    const { stateIsServer } = useApp();
    const { stateMenu, setStateLanguage, toggleMenu } = usePage();

    return (
        <LayoutWithMenuStyled {...props}>
            <LanguageStyled>
                <Button display="inline-block" onClick={(): void => setStateLanguage('en')} typeStyle="button-unset">
                    <SvgFlagUsa maxWidth="20px" />
                </Button>

                <Button display="inline-block" ml={1} onClick={(): void => setStateLanguage('pt_BR')} typeStyle="button-unset">
                    <SvgFlagBrazil maxWidth="20px" />
                </Button>
            </LanguageStyled>

            {/* Importante verificação se não está no lado do servidor, para aí sim exibir o menu de acordo com o valor de stateMenu */}
            {stateIsServer ? null : (
                <LayoutWithMenuLeftStyled active={stateMenu}>
                    <Flex flex="1 1 auto" flexDirection="column">
                        <Spacer />

                        <Box
                            flex="0 0 auto"
                            height="38px"
                            justifyContent={stateMenu ? 'space-between' : 'center'}
                            px={stateMenu ? variable.space.spacingMD : variable.space.spacingSM}
                        >
                            {stateMenu ? <div>logo</div> : null}

                            <MenuChangeStyled active={stateMenu}>
                                <Button ariaLabel="menu" height="100%" onClick={(): void => toggleMenu()} typeStyle="button-unset" width="100%">
                                    <SvgArrowLeft height="12px" width="12px" />
                                </Button>
                            </MenuChangeStyled>
                        </Box>

                        <Box flex="1 0 0" justifyContent="center">
                            <Spacer />

                            <LineHorizontal mx={stateMenu ? variable.space.spacingMD : variable.space.spacingSM} />

                            <Spacer />

                            {menu}
                        </Box>
                    </Flex>

                    <LineVertical display={{ d: 'none', lg: 'block' }} />
                </LayoutWithMenuLeftStyled>
            )}

            <LayoutWithMenuMainStyled>{children}</LayoutWithMenuMainStyled>
        </LayoutWithMenuStyled>
    );
}
