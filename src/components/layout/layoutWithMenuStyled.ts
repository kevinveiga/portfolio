import styled, { css, IActiveStyled, IStyledSystem } from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

import { variable } from '@/styles/variable';

export const LayoutWithMenuStyled = styled.div<IStyledSystem>`
    ${flexbox};
    ${layout};
    ${space};

    background-color: ${({ theme }): string => theme.bgColor.secondary};
    ${({ display }): string | undefined => (display === undefined ? 'display: flex' : undefined)};
`;

export const LayoutWithMenuLeftStyled = styled.div<IActiveStyled>`
    background-color: ${({ theme }): string => theme.bgColor.primary};
    display: flex;
    transition: flex ${variable.animation.transitionFastCubic};
    z-index: 1;

    @media (max-width: ${variable.breakpoint.lg}) {
        box-shadow: ${variable.layout.boxShadowSecondary};
        height: 100vh;
        left: 0;
        position: fixed;
        top: 0;
        width: ${({ active }): string => (active ? '220px' : '48px')};
    }

    @media (min-width: ${variable.breakpoint.lg}) {
        flex: ${({ active }): string => (active ? '0 0 220px' : '0 0 48px')};
        min-height: 100vh;
    }

    ${({ active }): any =>
        active
            ? css`
                  nav {
                      > ul {
                          > li {
                              a,
                              button {
                                  ${variable.layout.buttonPaddingY} ${variable.space.spacingSM};
                              }
                          }
                      }
                  }
              `
            : undefined};
    }
`;

export const LayoutWithMenuMainStyled = styled.div<IActiveStyled>`
    background-color: ${({ theme }): string => theme.bgColor.primary};
    display: flex;
    flex: 1 1 0;
    width: 100%;

    @media (max-width: ${variable.breakpoint.md}) {
        flex-wrap: wrap;
    }

    @media (max-width: ${variable.breakpoint.lg}) {
        margin-left: 60px;
    }
`;
