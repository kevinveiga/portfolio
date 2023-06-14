import styled, { css, IActiveStyled } from 'styled-components';
import { display } from 'styled-system';

import { scrollbarInvisible } from '@/styles/function';
import { variable } from '@/styles/variable';

export const FaqMainStyled = styled.div`
    background-color: ${({ theme }): string => theme.bgColor.primary};
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
`;

export const FaqMenuStyled = styled.div`
    ${scrollbarInvisible()};

    height: calc(100vh - 95px);
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    z-index: 5;

    @media (min-width: ${variable.breakpoint.lg}) {
        height: auto;
    }
`;

export const FaqMenuItemsStyled = styled.nav`
    ${display}

    > ul {
        > li {
            display: flex;
            flex-direction: column;

            a,
            button {
                display: flex;
                overflow: hidden;
                padding: ${variable.layout.buttonPaddingY} ${variable.layout.buttonPaddingX};
                transition: background-color ${variable.animation.transition};
                width: 100%;

                &::before {
                    background-color: ${variable.color.primary};
                    content: ' ';
                    display: block;
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    transition: width ${variable.animation.transition};
                    width: 0;
                }

                &:hover,
                &.active {
                    background-color: ${({ theme }): string => theme.bgColor.secondary};

                    &::before {
                        width: 2px;
                    }

                    p,
                    span {
                        color: ${({ theme }): string => theme.textColor.primary};
                    }

                    svg {
                        fill: ${({ theme }): string => theme.svgColor.secondary};
                    }
                }
            }

            p,
            span {
                color: ${({ theme }): string => theme.textColor.primary};
                font-size: 14px;
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

export const FaqMenuItemsSubMenuStyled = styled.div<IActiveStyled>`
    + ul {
        height: 0;
        overflow: hidden;
        transition: height ${variable.animation.transitionFast};

        > li {
            display: flex;
            flex-direction: column;

            &:last-of-type {
                margin-bottom: ${variable.space.spacingXS};
            }

            > a,
            > button {
                padding: ${variable.space.spacingXS} ${variable.space.spacingMD} !important;
                transition: background-color ${variable.animation.transition};

                &:hover,
                &.active {
                    background-color: ${({ theme }): string => theme.bgColor.secondary};

                    p,
                    span {
                        color: ${({ theme }): string => theme.textColor.primary};
                    }

                    svg {
                        fill: ${({ theme }): string => theme.svgColor.secondary};
                    }
                }
            }

            p,
            span {
                color: ${({ theme }): string => theme.textColor.primary};
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

export const FaqMenuItemTextStyled = styled.div<IActiveStyled>`
    align-items: flex-end;
    display: ${({ active }): string => (active ? 'flex' : 'none')};
    margin-left: 10px;
`;

export const FaqPopularQuestionStyled = styled.ul`
    > li {
        + li {
            margin-top: ${variable.space.spacingSM};
        }
    }
`;

export const FaqRightStyled = styled.div`
    background-color: ${({ theme }): string => theme.bgColor.primary};
    display: flex;
    flex: 1 1 auto;
    flex-direction: row;
    min-height: 100vh;
    overflow-x: hidden;
    z-index: 1;

    @media (min-width: ${variable.breakpoint.md}) {
        flex: 0 0 300px;
        padding: ${variable.space.spacingMD} 0;
    }
`;
