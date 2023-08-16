import styled, { css, IButton } from 'styled-components'
import { border, flexbox, layout, position, space, typography } from 'styled-system'

import { variable } from '@/styles/variable'

const button = css<IButton>`
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  ${typography};

  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 14px' : undefined)};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightBold}` : undefined};
  ${({ small, height }): string | undefined =>
    height === undefined
      ? small
        ? `height: ${variable.layout.buttonHeight}`
        : `height: ${variable.layout.buttonHeight}`
      : undefined};
  ${({ small, pl }): string | undefined =>
    pl === undefined ? `padding-left: ${small ? variable.space.spacingSM : variable.space.spacingMD}` : undefined};
  ${({ small, pr }): string | undefined =>
    pr === undefined ? `padding-right: ${small ? variable.space.spacingSM : variable.space.spacingMD}` : undefined};
  ${({ textDecoration }): string | undefined => (textDecoration ? `text-decoration: ${textDecoration}` : undefined)};
  white-space: ${({ whiteSpace }): string => whiteSpace || 'nowrap'};

  p,
  span {
    line-height: 1.2;
    transition: color ${variable.animation.transition};
  }

  svg {
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
`

export const ButtonStyled = styled.button<IButton>`
  ${border};
  ${button};

  background-color: ${({ active, backgroundColor }): string =>
    active ? variable.color.primaryHover : backgroundColor || variable.color.primary};
  ${({ borderRadius }): string | undefined =>
    borderRadius === undefined ? `border-radius: ${variable.layout.borderRadiusPrimary}` : undefined};
  color: ${({ active, color }): string => (active ? variable.color.white : color || variable.color.white)};
  transition:
    background-color ${variable.animation.transition},
    border ${variable.animation.transition},
    color ${variable.animation.transition};

  p,
  span {
    color: ${({ active, color }): string => (active ? variable.color.white : color || variable.color.white)};
  }

  svg {
    fill: ${({ active, color }): string => (active ? variable.color.white : color || variable.color.white)};
  }

  ${({ disabled, obj: { hoverBgColor = variable.color.primaryHover, hoverColor = variable.color.white } = {} }): any =>
    !disabled
      ? css`
          &:active,
          &:hover {
            background-color: ${hoverBgColor};
            color: ${hoverColor};

            p,
            span {
              color: ${hoverColor};
            }

            svg {
              fill: ${hoverColor};
            }
          }
        `
      : undefined}
`

export const ButtonBorderStyled = styled.button<IButton>`
  ${border};
  ${button};

  background-color: ${({ active, backgroundColor }): string =>
    active ? variable.color.primaryHover : backgroundColor || 'transparent'};
  border-color: ${({ active, borderColor }): string =>
    active ? variable.color.primaryHover : borderColor || variable.color.primary};
  ${({ borderRadius }): string | undefined =>
    borderRadius === undefined ? `border-radius: ${variable.layout.borderRadiusPrimary}` : undefined};
  border-style: solid;
  border-width: 2px;
  color: ${({ active, color }): string => (active ? variable.color.white : color || variable.color.primary)};
  transition:
    background-color ${variable.animation.transition},
    border ${variable.animation.transition},
    color ${variable.animation.transition};

  p,
  span {
    color: ${({ active, color }): string => (active ? variable.color.white : color || variable.color.primary)};
  }

  svg {
    fill: ${({ active, color }): string => (active ? variable.color.white : color || variable.color.primary)};
  }

  ${({ disabled, obj: { hoverBgColor = variable.color.primaryHover, hoverColor = variable.color.white } = {} }): any =>
    !disabled
      ? css`
          &:active,
          &:hover {
            background-color: ${hoverBgColor};
            color: ${hoverColor};

            p,
            span {
              color: ${hoverColor};
            }

            svg {
              fill: ${hoverColor};
            }
          }
        `
      : undefined}
`

export const ButtonUnsetStyled = styled.button<IButton>`
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  ${typography};

  background-color: ${({ backgroundColor }): string => backgroundColor || 'transparent'};
  color: ${({ active, color }): string => (active ? variable.color.primary : color || 'unset')};
  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: unset' : undefined)};
  ${({ fontWeight }): string | undefined => (fontWeight === undefined ? 'font-weight: unset' : undefined)};
  ${({ height }): string | undefined => (height === undefined ? `height: auto` : undefined)};
  line-height: inherit;
  padding-left: 0;
  padding-right: 0;
  ${({ textDecoration }): string | undefined => (textDecoration ? `text-decoration: unset` : undefined)};
  text-transform: ${({ textTransform }): string => textTransform || 'unset'};
  white-space: ${({ whiteSpace }): string => whiteSpace || 'unset'};

  ${({ disabled, obj: { hoverColor = variable.color.primaryHover } = {} }): any =>
    !disabled
      ? css`
          &:active,
          &:hover {
            color: ${hoverColor};

            p,
            span {
              color: ${hoverColor};
            }

            svg {
              fill: ${hoverColor};
            }
          }
        `
      : undefined}

  p,
    span,
    svg {
    ${({ verticalAlign }): string | undefined =>
      verticalAlign === undefined ? 'vertical-align: baseline' : undefined};
  }

  p,
  span {
    ${({ active, color }): string | undefined =>
      active || color ? `color: ${active ? variable.color.primary : color || 'unset'}` : undefined};
    transition: color ${variable.animation.transition};
  }

  svg {
    ${({ active, color }): string | undefined =>
      active || color ? `fill: ${active ? variable.color.primary : color || 'unset'}` : undefined};
    transition: fill ${variable.animation.transition};
    vertical-align: middle;
  }
`
