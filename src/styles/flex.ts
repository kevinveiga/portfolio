import styled, { css, IStyledSystem } from 'styled-components'
import { border, boxShadow, flexbox, layout, position, space, typography } from 'styled-system'

import { scrollbarInvisible, scrollbarTable } from '@/styles/function'
import { variable } from '@/styles/variable'

export const Box = styled.div<IStyledSystem>`
  ${border};
  ${boxShadow};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  ${typography};

  ${({ obj }): any =>
    obj?.scrollbar === 'invisible' ? scrollbarInvisible() : obj?.scrollbar === 'table' ? scrollbarTable() : undefined};

  background-color: ${({ backgroundColor }): string => backgroundColor || 'transparent'};
  color: ${({ color }): string => color || 'unset'};
  ${({ columnGap }): string | undefined => (columnGap ? `column-gap: ${columnGap}` : undefined)};
  ${({ display }): string | undefined => (display === undefined ? 'display: flex' : undefined)};
  ${({ flexWrap }): string | undefined => (flexWrap === undefined ? 'flex-wrap: wrap' : undefined)};
  ${({ rowGap }): string | undefined => (rowGap ? `row-gap: ${rowGap}` : undefined)};
`

export const BoxTheme = styled(Box)<IStyledSystem>`
  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.primary};
`

export const Flex = styled.div<IStyledSystem>`
  ${border};
  ${boxShadow};
  ${flexbox};
  ${layout};
  ${position};
  ${space};
  ${typography};

  ${({ obj }): any =>
    obj?.scrollbar === 'invisible' ? scrollbarInvisible() : obj?.scrollbar === 'table' ? scrollbarTable() : undefined};

  background-color: ${({ backgroundColor }): string => backgroundColor || 'transparent'};
  color: ${({ color }): string => color || 'unset'};
  ${({ columnGap }): string | undefined => (columnGap ? `column-gap: ${columnGap}` : undefined)};
  ${({ display }): string | undefined => (display === undefined ? 'display: flex' : undefined)};
  ${({ flexWrap }): string | undefined => (flexWrap === undefined ? 'flex-wrap: wrap' : undefined)};
  ${({ rowGap }): string | undefined => (rowGap ? `row-gap: ${rowGap}` : undefined)};

  ${({ scrollMobile }): any =>
    scrollMobile
      ? css`
          @media (max-width: ${variable.breakpoint.lg}) {
            overflow-x: scroll;
          }
        `
      : undefined};
`

export const FlexTheme = styled(Flex)<IStyledSystem>`
  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.primary};
`
