import React, { ReactElement } from 'react';

import { ILayout } from '@/interface';
import { usePage } from '@/stores/page/usePage';

import { Button } from '@/components/button/button';
import { LanguageStyled, LayoutStyled, LayoutMainStyled } from '@/components/layout/layoutStyled';
import { SvgFlagBrazil, SvgFlagUsa } from '@/components/svg/svgStore';

export function Layout({ children, ...props }: ILayout): ReactElement {
    // CONTEXT
    const { setStateLanguage } = usePage();

    return (
        <LayoutStyled {...props}>
            <LanguageStyled>
                <Button display="inline-block" onClick={(): void => setStateLanguage('en')} typeStyle="button-unset">
                    <SvgFlagUsa maxWidth="20px" />
                </Button>

                <Button display="inline-block" ml={1} onClick={(): void => setStateLanguage('pt_BR')} typeStyle="button-unset">
                    <SvgFlagBrazil maxWidth="20px" />
                </Button>
            </LanguageStyled>

            <LayoutMainStyled>{children}</LayoutMainStyled>
        </LayoutStyled>
    );
}
