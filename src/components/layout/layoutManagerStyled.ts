import styled, { css, IActiveStyled, IStyledSystem } from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

import { Box } from '@/styles/flex';
import { variable } from '@/styles/variable';

const menuSmallSize = '48px';

export const LayoutManagerStyled = styled.div<IStyledSystem>`
  ${flexbox};
  ${layout};
  ${space};

  background-color: ${({ theme }): string => theme.bgColor.secondary};
  ${({ display }): string | undefined => (display === undefined ? 'display: flex' : undefined)};
`;

export const LayoutManagerBgStyled = styled.div`
  background-color: ${({ theme }): string => theme.bgColor.primary};
  border-radius: ${variable.layout.borderRadiusSecondary};
  height: 270px;
  position: absolute;
  width: 100%;
  z-index: 0;
`;

export const LayoutManagerBoxStyled = styled(Box)<IStyledSystem>`
  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.tertiary};
  border-radius: ${variable.layout.borderRadiusSecondary};
  overflow: hidden;
`;

export const LayoutManagerLeftStyled = styled.div<IActiveStyled>`
  background-color: ${({ theme }): string => theme.bgColor.secondary};
  display: flex;
  flex-direction: column;
  transition: flex ${variable.animation.transitionFastCubic};
  z-index: 1;

  @media (max-width: ${variable.breakpoint.lg}) {
    box-shadow: ${variable.layout.boxShadowSecondary};
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: ${({ active }): string => (active ? '200px' : menuSmallSize)};
  }

  @media (min-width: ${variable.breakpoint.lg}) {
    flex: ${({ active }): string => (active ? '0 0 200px' : `0 0 ${menuSmallSize}`)};
    min-height: 100vh;
  }

  ${({ active }): any =>
    active
      ? css`
          nav {
            > ul {
              > li {
                padding: ${variable.space.spacingXXS} ${variable.space.spacingXS};

                a,
                button {
                  padding: ${variable.layout.buttonPaddingY} ${variable.space.spacingSM};

                  &::before {
                    display: block;
                  }
                }
              }
            }
          }
        `
      : undefined};
`;

export const LayoutManagerLeftCreateStyled = styled.div<IActiveStyled>`
  padding: ${variable.space.spacingXXS}
    ${({ change }): string => (change ? variable.space.spacingXS : variable.space.spacingXXS)};

  > button {
    background-color: ${({ active, theme }): string => (active ? variable.color.primary : theme.bgColor.primary)};
    border-radius: ${variable.layout.borderRadiusPrimary};
    display: flex;
    height: 42px;
    overflow: hidden;
    padding: ${variable.layout.buttonPaddingY}
      ${({ change }): string => (change ? variable.space.spacingSM : variable.layout.buttonPaddingX)};
    transition: background-color ${variable.animation.transition};
    width: 100%;

    &:hover {
      background-color: ${variable.color.primary};

      p {
        color: ${({ theme }): string => theme.textColor.primary};
      }

      svg {
        fill: ${({ theme }): string => theme.svgColor.tertiary};
      }
    }

    p {
      color: ${({ active, theme }): string => (active ? theme.textColor.primary : theme.textColor.secondary)};
      transition: color ${variable.animation.transition};
    }

    svg {
      fill: ${({ active, theme }): string => (active ? theme.svgColor.tertiary : theme.svgColor.primary)};
      transition: fill ${variable.animation.transition};
    }
  }
`;

export const LayoutManagerLeftCreateModalStyled = styled.div<IActiveStyled>`
  left: ${variable.space.spacingXXS};
  position: absolute;
  transform: ${({ active }): string => (active ? 'scaleY(100%)' : 'scaleY(0)')};
  transform-origin: 0 0;
  transition: transform ${variable.animation.transitionFast};
  top: 144px;
  z-index: 6;

  > svg {
    fill: ${({ theme }): string => theme.bgColor.primary};
    left: ${variable.space.spacingSM};
    position: absolute;
    top: -12px;
  }

  > ul {
    background-color: ${({ theme }): string => theme.bgColor.primary};
    border-radius: ${variable.layout.borderRadiusPrimary};
    box-shadow: ${variable.layout.boxShadowSecondary};
    min-width: 210px;
    width: 100%;

    > li {
      border-bottom: 1px solid ${({ theme }): string => theme.borderColor.primary};
      display: flex;
      flex-direction: column;

      &:last-of-type {
        border-bottom: none;
      }

      > a,
      > button {
        display: flex;
        padding: 14px ${variable.space.spacingMD};
        width: 100%;

        &:hover {
          p,
          span {
            color: ${variable.color.primary};
          }

          svg {
            fill: ${variable.color.primary};
          }
        }

        p,
        span {
          color: ${({ theme }): string => theme.textColor.secondary};
          margin-left: ${variable.space.spacingSM};
          transition: color ${variable.animation.transition};
        }

        svg {
          fill: ${({ theme }): string => theme.svgColor.primary};
          transition: fill ${variable.animation.transition};
        }
      }
    }
  }
`;

export const LayoutManagerMainStyled = styled.div<IStyledSystem>`
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  width: 100%;

  @media (max-width: ${variable.breakpoint.lg}) {
    margin-left: ${menuSmallSize};
  }
`;
