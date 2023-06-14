import styled, { css, IActiveStyled, IButton, IStyledSystem } from 'styled-components';
import { flexbox, position, space } from 'styled-system';

import { CarouselDotButtonStyled } from '@/components/carousel/carouselStyled';

import { gradientDirection } from '@/styles/function';
import { variable } from '@/styles/variable';

const carouselManagerButtons = css<IButton>`
    ${space};

    align-items: center;
    background-color: ${({ theme }): string => theme.bgColor.secondary};
    border-radius: ${variable.layout.borderRadiusPrimary};
    border: 1px solid ${({ theme }): string => theme.borderColor.secondary};
    cursor: pointer;
    display: flex;
    height: ${variable.layout.buttonHeight};
    justify-content: center;
    transition: background-color ${variable.animation.transition};
    width: ${variable.layout.buttonHeight};

    @media (max-width: ${variable.breakpoint.sm}) {
        ${({ display }): string | undefined => (display === undefined ? 'display: none' : undefined)};
    }

    &:disabled {
        cursor: not-allowed;
        filter: grayscale(100%);
        opacity: 0.5;
    }

    &:hover,
    &.active {
        background-color: ${variable.color.primary};
    }
`;

const carouselManagerFadeStyled = css<IActiveStyled>`
    ${position};

    display: ${({ active }): string => (active ? 'flex' : 'none')};
    flex-direction: column;
    height: 325px;
    margin-bottom: ${variable.space.spacingXS};
    margin-top: ${variable.space.spacingXS};
    position: absolute;
    top: 0;
    width: 40px;
    z-index: 2;
`;

const carouselManagerFadeEventStyled = css`
    ${carouselManagerFadeStyled};

    height: 145px;
`;

export const CarouselManagerButtonNextStyled = styled.button<IButton>`
    ${carouselManagerButtons};

    svg {
        transform: rotate(180deg);
    }
`;

export const CarouselManagerButtonPrevStyled = styled.button<IButton>`
    ${carouselManagerButtons};
`;

export const CarouselManagerCardStyled = styled.div<IStyledSystem>`
    ${flexbox};

    background-color: ${({ theme }): string => theme.bgColor.secondary};
    border: ${({ theme }): string => `1px solid ${theme.borderColor.tertiary}`};
    border-radius: ${variable.layout.borderRadiusSecondary};
    box-shadow: ${variable.layout.boxShadowTertiary};
    display: flex;
    ${({ flexDirection }): string | undefined => (flexDirection === undefined ? 'flex-direction: column' : undefined)};
    height: 325px;
    margin: ${variable.space.spacingXS} ${variable.space.spacingXXS};
    overflow: hidden;
    transition: background-color ${variable.animation.transition};

    &:hover,
    &.active {
        box-shadow: ${variable.layout.boxShadowInsetSecondary}, ${variable.layout.boxShadowPrimary};
    }

    p {
        transition: color ${variable.animation.transition};
    }

    svg {
        transition: fill ${variable.animation.transition};
    }
`;

export const CarouselManagerCardBottomStyled = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 ${variable.space.spacingSM};
    overflow: hidden;
`;

export const CarouselManagerCardCircleStyled = styled.div<IStyledSystem>`
    align-items: center;
    background-color: ${({ theme }): string => theme.bgColor.primary};
    border-radius: 50%;
    display: flex;
    height: 50px;
    justify-content: center;
    width: 50px;
`;

export const CarouselManagerCardTopStyled = styled.div`
    border-radius: ${variable.layout.borderRadiusPrimary};
    display: flex;
    flex: 0 1 auto;
    gap: ${variable.space.spacingXXS};
    height: 150px;
    margin: 0 ${variable.space.spacingSM};
    overflow: hidden;
`;

export const CarouselManagerCardVideoTimeStyled = styled.div`
    background-color: ${({ theme }): string => theme.bgColor.quaternary};
    border-radius: ${variable.layout.borderRadiusPrimary};
    font-size: 10px;
    font-weight: 700;
    line-height: initial;
    padding: ${variable.space.spacingXXS} ${variable.space.spacingXS};
    position: absolute;
    right: ${variable.space.spacingXS};
    top: ${variable.space.spacingXS};
    z-index: 2;
`;

export const CarouselManagerDotButtonStyled = styled(CarouselDotButtonStyled)``;

export const CarouselManagerEventCardStyled = styled(CarouselManagerCardStyled)`
    background-color: ${({ theme }): string => theme.bgColor.tertiary};
    border: 0;
    border-radius: ${variable.layout.borderRadiusSecondary};
    box-shadow: ${variable.layout.boxShadowTertiary};
    height: 145px;
`;

export const CarouselManagerEventCardLeftStyled = styled.div`
    align-items: center;
    background-color: ${({ theme }): string => theme.bgColor.secondary};
    display: flex;
    flex: 0 0 155px;
    flex-direction: column;
    justify-content: space-around;
    padding: ${variable.space.spacingMD} ${variable.space.spacingXS};
    overflow: hidden;

    svg {
        fill: ${variable.color.red2};
    }
`;

export const CarouselManagerEventCardLeftLiveNowBoxStyled = styled.div`
    align-items: center;
    background-color: ${variable.color.red2};
    border-radius: ${variable.layout.borderRadiusPrimary};
    display: flex;
    padding: ${variable.space.spacingXS};
`;

export const CarouselManagerEventCardRightStyled = styled.div`
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: space-between;
    min-height: 0;
    min-width: 0;
    overflow: hidden;
    padding: ${variable.space.spacingSM};
`;

export const CarouselManagerFadeInStyled = styled.div`
    ${carouselManagerFadeStyled};

    ${({ theme }): string => gradientDirection({ colorEnd: 'transparent', colorStart: theme.bgColor.tertiary })};
`;

export const CarouselManagerFadeOutStyled = styled.div`
    ${carouselManagerFadeStyled};

    ${({ theme }): string => gradientDirection({ colorEnd: theme.bgColor.tertiary, colorStart: 'transparent' })};
`;

export const CarouselManagerFadeInEventStyled = styled.div`
    ${carouselManagerFadeEventStyled};

    > div {
        &:first-of-type {
            ${({ theme }): string => gradientDirection({ colorEnd: 'transparent', colorStart: theme.bgColor.primary })};

            height: 98px;
            width: 100%;
        }

        &:last-of-type {
            ${({ theme }): string => gradientDirection({ colorEnd: 'transparent', colorStart: theme.bgColor.tertiary })};

            height: 47px;
            width: 100%;
        }
    }
`;

export const CarouselManagerFadeOutEventStyled = styled.div`
    ${carouselManagerFadeEventStyled};

    > div {
        &:first-of-type {
            ${({ theme }): string => gradientDirection({ colorEnd: theme.bgColor.primary, colorStart: 'transparent' })};

            height: 98px;
            width: 100%;
        }

        &:last-of-type {
            ${({ theme }): string => gradientDirection({ colorEnd: theme.bgColor.tertiary, colorStart: 'transparent' })};

            height: 47px;
            width: 100%;
        }
    }
`;

export const CarouselManagerFirstLastCardStyled = styled(CarouselManagerCardStyled)`
    background-color: ${({ theme }): string => theme.bgColor.tertiary};
    border: ${({ theme }): string => `1px solid ${theme.borderColor.tertiary}`};

    &:hover {
        background-color: ${({ theme }): string => theme.bgColor.secondary};

        p {
            color: ${variable.color.primary};
        }

        svg {
            fill: ${variable.color.primary};
        }
    }
`;
