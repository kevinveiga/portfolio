import styled, { css, IButton, IStyledSystem } from 'styled-components';
import { layout, space } from 'styled-system';

import { scrollbar } from '@/styles/function';
import { variable } from '@/styles/variable';

const carouselButtons = css<IButton>`
    ${space};

    align-items: center;
    background-color: ${({ theme }): string => theme.bgColor.secondary};
    border-radius: ${variable.layout.borderRadiusPrimary};
    cursor: pointer;
    display: flex;
    height: ${variable.layout.buttonHeight};
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
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

export const CarouselStyled = styled.div<IStyledSystem>`
    ${space};

    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;

export const CarouselButtonNextStyled = styled.button`
    ${carouselButtons};

    right: ${variable.space.spacingSM};

    svg {
        transform: rotate(180deg);
    }
`;

export const CarouselButtonPrevStyled = styled.button`
    ${carouselButtons};

    left: ${variable.space.spacingSM};
`;

export const CarouselContainerStyled = styled.div<IStyledSystem>`
    -khtml-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    display: flex;
    gap: ${variable.space.spacingXS};
    user-select: none;
`;

export const CarouselDotButtonStyled = styled.button<IButton>`
    align-items: center;
    background-color: ${({ theme }): string => (theme.titleTheme === 'dark' ? variable.color.white : variable.color.gray)};
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 14px;
    margin: ${variable.space.spacingXS};
    outline: 0;
    padding: 0;
    transition: background-color ${variable.animation.transition};
    width: 14px;

    &:hover,
    &.active {
        background-color: ${variable.color.primary};
    }
`;

export const CarouselDotsStyled = styled.div`
    display: flex;
    justify-content: center;
`;

export const CarouselItemStyled = styled.div<IStyledSystem>`
    ${layout};

    ${({ minWidth }): string | undefined => (minWidth === undefined ? 'min-width: 100%' : undefined)};

    > a,
    > button {
        color: unset;
        height: 100%;
        width: 100%;

        &:hover {
            color: unset;
        }
    }
`;

export const CarouselViewportStyled = styled.div<IStyledSystem>`
    ${layout};

    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    ${({ width }): string | undefined => (width === undefined ? 'width: 100%' : undefined)};

    &.is-draggable {
        cursor: move;
        cursor: grab;
    }

    &.is-dragging {
        cursor: grabbing;
    }

    ${({ scrollMobile }): any =>
        scrollMobile
            ? css`
                  @media (max-width: ${variable.breakpoint.lg}) {
                      overflow-x: scroll;

                      ${scrollbar(variable.color.gray, variable.color.white)}
                  }
              `
            : undefined};
`;
