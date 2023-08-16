import styled, { css, ISvgStyled } from 'styled-components'
import { layout, position, space, typography, verticalAlign } from 'styled-system'

import { variable } from '@/styles/variable'

export const SvgStyled = styled.svg<ISvgStyled>`
  ${layout};
  ${position};
  ${space};
  ${typography};
  ${verticalAlign};

  fill: ${({ fill, theme }): string => fill || theme.svgColor.primary};
  ${({ height }): number | string | undefined => (height === undefined ? 'height: 16px' : undefined)};
  stroke: ${({ stroke }): string => stroke || 'unset'};

  ${({ hoverColor }): any =>
    hoverColor
      ? css`
          cursor: pointer;

          &:hover {
            fill: ${hoverColor};
          }
        `
      : undefined};
`

export const SvgLogoLoaderStyled = styled.svg`
  fill: ${({ fill }): string => fill || variable.color.grayLight2};
  height: 100%;
  width: 100%;
`
