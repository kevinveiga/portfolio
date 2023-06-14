import React, { ReactElement } from 'react';

import { IButton } from '@/interface';

import { FavoriteStyled } from '@/components/favorite/favoriteStyled';
import { SvgStarWithBorder } from '@/components/svg/svgStore';

export function Favorite({ active = false, ...props }: IButton): ReactElement {
    return (
        <FavoriteStyled active={active} {...props}>
            <SvgStarWithBorder />
        </FavoriteStyled>
    );
}
