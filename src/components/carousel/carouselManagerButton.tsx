import React, { ReactElement } from 'react';

import { IButton } from '@/interface';

import {
    CarouselManagerButtonNextStyled,
    CarouselManagerButtonPrevStyled,
    CarouselManagerDotButtonStyled
} from '@/components/carousel/carouselManagerStyled';
import { SvgArrowLeft } from '@/components/svg/svgStore';

export function CarouselManagerButtonNext({ disabled, onClick, ...props }: IButton): ReactElement {
    return (
        <CarouselManagerButtonNextStyled disabled={disabled} onClick={onClick} {...props}>
            <SvgArrowLeft height="18px" />
        </CarouselManagerButtonNextStyled>
    );
}

export function CarouselManagerButtonPrev({ disabled, onClick, ...props }: IButton): ReactElement {
    return (
        <CarouselManagerButtonPrevStyled disabled={disabled} onClick={onClick} {...props}>
            <SvgArrowLeft height="18px" />
        </CarouselManagerButtonPrevStyled>
    );
}

export function CarouselManagerDotButton({ active, onClick, ...props }: IButton): ReactElement {
    return <CarouselManagerDotButtonStyled className={active ? 'active' : ''} onClick={onClick} {...props} />;
}
