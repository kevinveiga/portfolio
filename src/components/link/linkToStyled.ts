import styled, { css, IStyledSystem } from 'styled-components';
import { layout, position, space, typography } from 'styled-system';

import { variable } from '@/styles/variable';

const linkLine = css`
  &::after {
    bottom: 0;
    content: ' ';
    display: block;
    height: 3px;
    margin: 5px auto auto auto;
    transition:
      background-color ${variable.animation.transition},
      width ${variable.animation.transition};
    width: 0;
  }
`;

export const LinkToStyled = styled.a<IStyledSystem>`
  ${layout};
  ${position};
  ${space};
  ${typography};

  color: ${({ color }): string => color || 'unset'};
  ${({ textDecoration }): string | undefined => (textDecoration ? `text-decoration: ${textDecoration}` : undefined)};

  > p,
  > span {
    transition: color ${variable.animation.transition};
  }

  > svg {
    transition: fill ${variable.animation.transition};
  }

  ${({ disabled }): any =>
    disabled === true
      ? css`
          cursor: not-allowed;
          filter: grayscale(100%);
          opacity: 0.5;
        `
      : undefined}

  ${({ disabled, obj: { activeColor = '' } = {} }): any =>
    !disabled && activeColor
      ? css`
          &.active {
            color: ${activeColor};

            > span {
              color: ${activeColor};
            }

            > svg {
              fill: ${activeColor};
            }
          }
        `
      : undefined};

  ${({ disabled, obj: { activeColor = '', hoverColorLine = '' } = {} }): any =>
    !disabled && activeColor && hoverColorLine
      ? css`
          ${linkLine};

          &.active {
            &::after {
              background-color: ${activeColor};
              width: 50%;
            }
          }
        `
      : undefined};

  ${({ disabled, obj: { hoverColor = variable.color.tertiary } = {} }): any =>
    !disabled
      ? css`
          &:hover {
            color: ${hoverColor};

            > span {
              color: ${hoverColor};
            }

            > svg {
              fill: ${hoverColor};
            }
          }
        `
      : undefined};

  ${({ disabled, obj: { hoverColorLine = '' } = {} }): any =>
    !disabled && hoverColorLine
      ? css`
          ${linkLine};

          &:hover {
            &::after {
              background-color: ${hoverColorLine};
              width: 50%;
            }
          }
        `
      : undefined};
`;

export const LinkToExternalStyled = styled.a<IStyledSystem>`
  ${layout};
  ${space};
  ${typography};

  color: ${({ color }): string => color || 'unset'};
  ${({ textDecoration }): string | undefined => (textDecoration ? `text-decoration: ${textDecoration}` : undefined)};

  > p,
  > span {
    transition: color ${variable.animation.transition};
  }

  > svg {
    transition: fill ${variable.animation.transition};
  }

  ${({ disabled, obj: { activeColor = '' } = {} }): any =>
    !disabled && activeColor
      ? css`
          &.active {
            color: ${activeColor};

            > span {
              color: ${activeColor};
            }

            > svg {
              fill: ${activeColor};
            }
          }
        `
      : undefined};

  ${({ disabled, obj: { activeColor = '', hoverColorLine = '' } = {} }): any =>
    !disabled && activeColor && hoverColorLine
      ? css`
          ${linkLine};

          &.active {
            &::after {
              background-color: ${activeColor};
              width: 50%;
            }
          }
        `
      : undefined};

  ${({ disabled, obj: { hoverColor = variable.color.tertiary } = {} }): any =>
    !disabled
      ? css`
          &:hover {
            color: ${hoverColor};

            > span {
              color: ${hoverColor};
            }

            > svg {
              fill: ${hoverColor};
            }
          }
        `
      : undefined};

  ${({ disabled, obj: { hoverColorLine = '' } = {} }): any =>
    !disabled && hoverColorLine
      ? css`
          ${linkLine};

          &:hover {
            &::after {
              background-color: ${hoverColorLine};
              width: 50%;
            }
          }
        `
      : undefined};
`;
