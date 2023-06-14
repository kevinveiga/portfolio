import styled, { IActiveStyled } from 'styled-components';

import { variable } from '@/styles/variable';

export const ManagerFilterStyled = styled.div`
    display: flex;
`;

export const ManagerFilterSearchStyled = styled.div<IActiveStyled>`
    background-color: ${({ theme }): string => theme.bgColor.secondary};
    border: 1px solid ${({ theme }): string => theme.borderColor.secondary};
    border-radius: ${variable.layout.borderRadiusPrimary};
    height: ${variable.layout.inputHeight};
    overflow: hidden;
    transition: width ${variable.animation.transition};
    width: ${({ active }): string => (active ? '220px' : variable.layout.inputHeight)};

    > button {
        align-items: center;
        border-radius: ${variable.layout.borderRadiusPrimary};
        display: flex;
        height: ${variable.layout.inputHeight};
        justify-content: center;
        left: 0;
        overflow: hidden;
        position: absolute;
        top: 0;
        transition: background-color ${variable.animation.transition};
        width: 40px;
        z-index: 2;

        &:hover {
            background-color: ${({ theme }): string => theme.bgColor.primary};

            svg {
                fill: ${variable.color.primary};
            }
        }

        svg {
            height: 16px;
        }
    }

    input {
        box-shadow: inset 0 0 0 100px ${({ theme }): string => theme.inputBgColor.primary};
        border: 0;
        padding-left: ${variable.space.spacingXL};
        opacity: ${({ active }): number => (active ? 1 : 0)};
    }
`;

export const ManagerTabsStyled = styled.ul`
    align-items: center;
    display: flex;

    li {
        display: flex;
        padding-right: ${variable.space.spacingXXL};

        > button {
            align-items: center;
            display: flex;
            padding-bottom: ${variable.space.spacingSM};

            &::after {
                background-color: ${variable.color.primary};
                bottom: 0;
                content: ' ';
                height: 0;
                left: 0;
                position: absolute;
                transition: height ${variable.animation.transition};
                width: 100%;
            }

            &:hover,
            &.active {
                &::after {
                    height: 3px;
                }

                p {
                    color: ${variable.color.primary};
                }
            }
        }

        p {
            transition: color ${variable.animation.transition};
        }
    }
`;
