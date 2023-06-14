import React, { PropsWithChildren } from 'react';

import parse from 'html-react-parser';

import { IButton } from '@/interface';

import { ButtonStyled, ButtonBorderStyled, ButtonUnsetStyled } from '@/components/button/buttonStyled';

export function Button({
    ariaLabel = '',
    children,
    text = '',
    typeButton = 'button',
    typeStyle = 'button',
    ...props
}: IButton): PropsWithChildren<any> {
    const acessibility = ariaLabel || text;
    const buttonContent = children || parse(`<span>${text}</span>` || '');
    let StyledComponent = ButtonStyled;

    switch (typeStyle) {
        case 'button-border':
            StyledComponent = ButtonBorderStyled;

            break;

        case 'button-unset':
            StyledComponent = ButtonUnsetStyled;

            break;

        default:
            break;
    }

    return (
        <StyledComponent aria-label={acessibility} type={typeButton} {...props}>
            {buttonContent}
        </StyledComponent>
    );
}
