import styled, { IActiveStyled, IStyledSystem } from 'styled-components';

import { variable } from '@/styles/variable';

export const HeaderManagerStyled = styled.header`
    height: auto;
    width: 100%;
`;

export const HeaderManagerItemsStyled = styled.ul<IStyledSystem>`
    align-items: center;
    display: flex;

    > li {
        display: flex;
        padding-left: ${variable.space.spacingXXS};
        padding-right: ${variable.space.spacingXXS};

        > button {
            align-items: center;
            border-radius: ${variable.layout.borderRadiusPrimary};
            display: flex;
            overflow: hidden;
            padding: ${variable.layout.buttonPaddingY} ${variable.layout.buttonPaddingX};
            transition: background-color ${variable.animation.transition};

            &:hover {
                background-color: ${({ theme }): string => theme.bgColor.primary};

                svg {
                    fill: ${variable.color.primary};
                }
            }

            svg {
                height: 20px;
                max-width: 22px;
            }
        }
    }
`;

export const HeaderManagerLanguageModalStyled = styled.div<IActiveStyled>`
    position: absolute;
    transform: ${({ active }): string => (active ? 'scaleY(auto)' : 'scaleY(0)')};
    transform-origin: 0 0;
    transition: transform ${variable.animation.transitionFast};
    top: 54px;
    z-index: 6;

    > svg {
        fill: ${({ theme }): string => theme.bgColor.primary};
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        top: -12px;
    }

    > ul {
        background-color: ${({ theme }): string => theme.bgColor.primary};
        border-radius: ${variable.layout.borderRadiusPrimary};
        box-shadow: ${variable.layout.boxShadowSecondary};
        overflow: hidden;

        > li {
            border-bottom: 1px solid ${({ theme }): string => theme.borderColor.primary};
            display: flex;
            flex-direction: column;

            &:last-of-type {
                border-bottom: none;
            }

            > button {
                display: flex;
                padding: ${variable.layout.buttonPaddingY} ${variable.layout.buttonPaddingX};
                transition: background-color ${variable.animation.transition};

                &:hover {
                    background-color: ${variable.color.primary};
                }

                svg {
                    height: 20px;
                    max-width: 22px;
                }
            }
        }
    }
`;

export const HeaderManagerMainActionModalStyled = styled.div<IActiveStyled>`
    position: absolute;
    right: ${variable.space.spacingMD};
    transform: ${({ active }): string => (active ? 'scaleY(100%)' : 'scaleY(0)')};
    transform-origin: 0 0;
    transition: transform ${variable.animation.transitionFast};
    top: 74px;
    z-index: 6;

    > svg {
        fill: ${({ theme }): string => theme.bgColor.tertiary};
        right: 96px;
        position: absolute;
        top: -12px;
    }

    > ul {
        background-color: ${({ theme }): string => theme.bgColor.tertiary};
        border-radius: ${variable.layout.borderRadiusPrimary};
        box-shadow: ${variable.layout.boxShadowSecondary};
        display: flex;
        padding: ${variable.space.spacingLG};
        min-width: 500px;

        > li {
            display: inline-flex;

            &:last-of-type {
                margin-left: ${variable.space.spacingLG};
            }

            > a,
            > button {
                background-color: ${({ theme }): string => theme.bgColor.secondary};
                border-radius: ${variable.layout.borderRadiusPrimary};
                display: flex;
                padding: ${variable.space.spacingMD};
                transition: background-color ${variable.animation.transition};
                width: 100%;

                &:hover {
                    background-color: ${({ theme }): string => theme.bgColor.primary};
                }

                h3,
                p,
                span {
                    color: ${({ theme }): string => theme.textColor.primary};
                }

                svg {
                    fill: ${variable.color.primary};
                    height: 24px;
                }
            }
        }
    }
`;

export const HeaderManagerSearchStyled = styled.div<IActiveStyled>`
    overflow: hidden;
    transition: width ${variable.animation.transition};
    width: ${({ active }): string => (active ? '350px' : '40px')};

    > button {
        align-items: center;
        border-radius: ${variable.layout.borderRadiusPrimary};
        display: flex;
        left: 0;
        overflow: hidden;
        padding: ${variable.layout.buttonPaddingY} ${variable.layout.buttonPaddingX};
        position: absolute;
        top: 0;
        transition: background-color ${variable.animation.transition};
        z-index: 2;

        &:hover {
            background-color: ${({ theme }): string => theme.bgColor.primary};

            svg {
                fill: ${variable.color.primary};
            }
        }

        svg {
            height: 20px;
            max-width: 22px;
        }
    }

    input {
        padding-left: ${variable.space.spacingXL};
        opacity: ${({ active }): number => (active ? 1 : 0)};
    }
`;

export const HeaderManagerUserStyled = styled.div`
    button {
        align-items: center;
        background-color: ${({ theme }): string => theme.bgColor.primary};
        border-radius: 50%;
        display: flex;
        height: ${variable.layout.buttonHeight};
        justify-content: center;
        overflow: hidden;
        transition: background-color ${variable.animation.transition};
        width: ${variable.layout.buttonHeight};

        :hover {
            background-color: ${variable.color.primary};

            svg {
                fill: ${({ theme }): string => theme.svgColor.tertiary};
            }
        }

        svg {
            height: 20px;
            transition: fill ${variable.animation.transition};
        }
    }
`;
