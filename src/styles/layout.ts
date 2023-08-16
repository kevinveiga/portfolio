import styled, { css, ILayoutStyled, ILineStyled, IStyledSystem } from 'styled-components'
import { border, boxShadow, layout, position, space } from 'styled-system'

import { gradientDirection, gradientDirection3Colors } from '@/styles/function'
import { variable } from '@/styles/variable'

export const main = css<ILayoutStyled>`
  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.primary};
  height: auto;
  ${({ maxWidth }): string | undefined =>
    maxWidth === undefined ? `max-width: ${variable.breakpoint.lg}` : undefined};
  ${({ mx }): string | undefined => (mx === undefined ? 'margin-left: auto; margin-right: auto' : undefined)};
  width: 100%;
  z-index: 1;
`

export const section = css<ILayoutStyled>`
  ${space};

  height: auto;
  width: 100%;
  ${({ zIndex }): string | undefined => (zIndex ? `z-index: ${zIndex}` : undefined)};
`

export const Container = styled.div<ILayoutStyled>`
  ${border};
  ${boxShadow};
  ${layout};
  ${space};

  background-color: ${({ backgroundColor }): string => backgroundColor || 'transparent'};
  ${({ px }): string | undefined =>
    px === undefined
      ? `padding-left: ${variable.space.spacingSM}; padding-right: ${variable.space.spacingSM}`
      : undefined};
  ${({ py }): string | undefined =>
    py === undefined
      ? `padding-bottom: ${variable.space.spacingXL}; padding-top: ${variable.space.spacingXL}`
      : undefined};
  ${({ width }): string | undefined => (width === undefined ? 'width: 100%' : undefined)};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ px }): string | undefined =>
      px === undefined
        ? `padding-left: ${variable.space.spacingLG}; padding-right: ${variable.space.spacingLG}`
        : undefined};
    ${({ py }): string | undefined =>
      py === undefined
        ? `padding-bottom: ${variable.space.spacingXXXL}; padding-top: ${variable.space.spacingXXXL}`
        : undefined};
  }
`

export const LineHorizontal = styled.div<ILineStyled>`
  ${layout};
  ${position};
  ${space};

  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.borderColor.secondary};
  ${({ height }): number | string | undefined => (height === undefined ? 'height: 1px' : undefined)};
  ${({ width }): number | string | undefined => (width === undefined ? 'width: 100%' : undefined)};
`

export const LineHorizontalGradient = styled(LineHorizontal)`
  ${({ deg, colorEnd, colorEndPercent, colorStart, colorStartPercent }): any =>
    gradientDirection({
      colorEnd: colorEnd || variable.color.secondary,
      colorEndPercent: colorEndPercent || '100%',
      colorStart: colorStart || variable.color.primary,
      colorStartPercent: colorStartPercent || '0',
      deg: deg || '90deg'
    })};
`

export const LineHorizontalGradient3Colors = styled(LineHorizontal)`
  ${({ deg, colorEnd, colorEndPercent, colorMid, colorMidPercent, colorStart, colorStartPercent }): any =>
    gradientDirection3Colors({
      colorEnd: colorEnd || variable.color.primary,
      colorEndPercent: colorEndPercent || '100%',
      colorMid: colorMid || variable.color.secondary,
      colorMidPercent: colorMidPercent || '50%',
      colorStart: colorStart || variable.color.primary,
      colorStartPercent: colorStartPercent || '0',
      deg: deg || '90deg'
    })};
`

export const LineVertical = styled.div<ILineStyled>`
  ${layout};
  ${position};
  ${space};

  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.borderColor.secondary};
  ${({ height }): number | string | undefined => (height === undefined ? 'height: 100%' : undefined)};
  ${({ width }): number | string | undefined => (width === undefined ? 'width: 1px' : undefined)};
`

export const LineVerticalGradient = styled(LineVertical)`
  ${({ deg, colorEnd, colorEndPercent, colorStart, colorStartPercent }): any =>
    gradientDirection({
      colorEnd: colorEnd || variable.color.secondary,
      colorEndPercent: colorEndPercent || '100%',
      colorStart: colorStart || variable.color.primary,
      colorStartPercent: colorStartPercent || '0',
      deg: deg || '0deg'
    })};
`

export const LineVerticalGradient3Colors = styled(LineVertical)`
  ${({ deg, colorEnd, colorEndPercent, colorMid, colorMidPercent, colorStart, colorStartPercent }): any =>
    gradientDirection3Colors({
      colorEnd: colorEnd || variable.color.primary,
      colorEndPercent: colorEndPercent || '100%',
      colorMid: colorMid || variable.color.secondary,
      colorMidPercent: colorMidPercent || '50%',
      colorStart: colorStart || variable.color.primary,
      colorStartPercent: colorStartPercent || '0',
      deg: deg || '0deg'
    })};
`

export const Main = styled.main`
  ${main};

  box-shadow: 0 0 10px 0 ${({ theme }): string => theme.borderColor.tertiary};
  min-height: 100vh;
`

export const Section = styled.section<ILayoutStyled>`
  ${section};

  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.primary};
`

export const SectionSecondary = styled.section<ILayoutStyled>`
  ${section};

  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.secondary};
`

export const SectionTertiary = styled.section<ILayoutStyled>`
  ${section};

  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.tertiary};
`

export const Spacer = styled.div<IStyledSystem>`
  ${layout};

  ${({ height }): number | string | undefined =>
    height === undefined ? `height: ${variable.space.spacingSM}` : undefined};
  ${({ width }): number | string | undefined =>
    width === undefined ? `width: ${variable.space.spacingSM}` : undefined};
`

export const Wrap = styled.div<ILayoutStyled>`
  ${layout};
  ${position};
  ${space};

  background-color: ${({ backgroundColor }): string | undefined => backgroundColor || 'transparent'};
  ${({ height }): string | undefined => (height === undefined ? 'height: auto' : undefined)};
  ${({ width }): string | undefined => (width === undefined ? 'width: auto' : undefined)};
  ${({ zIndex }): string | undefined => (zIndex ? `z-index: ${zIndex}` : undefined)};
`

export const WrapVideo = styled.div<ILayoutStyled>`
  background-color: ${({ backgroundColor }): string => backgroundColor || 'transparent'};

  div {
    padding-top: calc((9 / 16) * 100%);

    embed,
    iframe {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`
