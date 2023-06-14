import styled, { IActiveStyled, IStyledSystem } from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

import { ButtonUnsetStyled } from '@/components/button/buttonStyled';

import { gradientDirection } from '@/styles/function';
import { variable } from '@/styles/variable';

export const DarkModeBtnStyled = styled(ButtonUnsetStyled)`
    position: fixed;
    right: ${variable.space.spacingXS};
    top: ${variable.space.spacingXS};
    z-index: 2;
`;

export const LanguageStyled = styled.div`
    position: fixed;
    right: ${variable.space.spacingMD};
    top: ${variable.space.spacingXS};
    z-index: 2;
`;

export const LayoutStyled = styled.div<IStyledSystem>`
    ${flexbox};
    ${layout};
    ${space};

    background-color: ${({ theme }): string => theme.bgColor.secondary};
    ${({ display }): string | undefined => (display === undefined ? 'display: flex' : undefined)};
`;

export const LayoutAuthBackground = styled.div`
    ${({ theme }): string => gradientDirection({ colorStart: theme.bgColor.secondary, colorEnd: theme.bgColor.tertiary })};
`;

export const LayoutMainStyled = styled.div<IActiveStyled>`
    background-color: ${({ theme }): string => theme.bgColor.primary};
    display: flex;
    flex: 1 1 0;
    width: 100%;
`;

export const MenuChangeStyled = styled.div<IActiveStyled>`
    position: absolute;
    right: ${({ active }): string => (active ? variable.space.spacingXXS : '0')};
    top: ${variable.space.spacingXXS};

    svg {
        transform: ${({ active }): string => (active ? 'rotate(0deg)' : 'rotate(180deg)')};
        transform-origin: 50% 50%;
        transition: transform ${variable.animation.transition};
    }
`;
