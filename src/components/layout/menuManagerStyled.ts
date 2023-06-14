import styled, { css, IActiveStyled } from 'styled-components';
import { display } from 'styled-system';

import { scrollbarInvisible } from '@/styles/function';
import { variable } from '@/styles/variable';

export const MenuManagerStyled = styled.div`
    ${scrollbarInvisible()};

    height: calc(100vh - 160px);
    overflow-x: hidden;
    overflow-y: auto;
    width: auto;
    z-index: 5;
`;

export const MenuManagerItemsStyled = styled.nav`
    ${display}

    > ul {
        > li {
            display: flex;
            flex-direction: column;
            padding: ${variable.space.spacingXXS};

            a,
            button {
                border-radius: ${variable.layout.borderRadiusPrimary};
                display: flex;
                overflow: hidden;
                padding: ${variable.layout.buttonPaddingY} ${variable.layout.buttonPaddingX};
                transition: background-color ${variable.animation.transition};
                width: 100%;

                &::before {
                    background-color: ${variable.color.primary};
                    content: ' ';
                    display: none;
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    transition: width ${variable.animation.transition};
                    width: 0;
                }

                &:hover,
                &.active {
                    background-color: ${({ theme }): string => theme.bgColor.primary};

                    &::before {
                        width: 2px;
                    }

                    p,
                    span {
                        color: ${variable.color.primary};
                    }

                    svg {
                        fill: ${variable.color.primary};
                    }
                }

                &.active {
                    background-color: transparent;
                }
            }

            p,
            span {
                color: ${({ theme }): string => theme.textColor.secondary};
                font-size: 16px;
                line-height: 1;
                text-align: left;
                transition: color ${variable.animation.transition};
                vertical-align: middle;
            }

            svg {
                height: 20px;
                fill: ${({ theme }): string => theme.svgColor.primary};
                max-width: 22px;
                transition: fill ${variable.animation.transition};
                vertical-align: middle;
            }
        }
    }
`;

export const MenuManagerItemsSubMenuStyled = styled.div<IActiveStyled>`
    + ul {
        height: 0;
        overflow: hidden;
        transition: height ${variable.animation.transitionFast};

        > li {
            display: flex;
            flex-direction: column;
            padding-left: ${variable.space.spacingXS};

            &:last-of-type {
                margin-bottom: ${variable.space.spacingXS};
            }

            > a,
            > button {
                padding: ${variable.space.spacingXS} ${variable.space.spacingSM} !important;
                transition: background-color ${variable.animation.transition};

                &:hover,
                &.active {
                    background-color: ${({ theme }): string => theme.bgColor.primary};

                    p,
                    span {
                        color: ${variable.color.primary};
                    }

                    svg {
                        fill: ${variable.color.primary};
                    }
                }

                &.active {
                    background-color: transparent;
                }
            }

            p,
            span {
                color: ${({ theme }): string => theme.textColor.secondary};
                font-size: 12px;
                line-height: 1;
                text-align: left;
                transition: color ${variable.animation.transition};
                vertical-align: middle;
            }

            svg {
                height: 16px;
                fill: ${({ theme }): string => theme.svgColor.primary};
                max-width: 20px;
                transition: fill ${variable.animation.transition};
                vertical-align: middle;
            }
        }
    }

    ${({ active }): any =>
        active
            ? css`
                  + ul {
                      height: auto;
                  }
              `
            : undefined};
`;

export const MenuManagerItemTextStyled = styled.div<IActiveStyled>`
    align-items: flex-end;
    display: ${({ active }): string => (active ? 'flex' : 'none')};
    flex: 1 1 auto;
    justify-content: space-between;
    margin-left: 10px;
`;

export const MenuManagerWalletValue = styled.div`
    color: ${variable.color.green};
    font-weight: 700;
`;
