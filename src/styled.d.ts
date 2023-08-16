import 'styled-components'

import {
  TAlignContent,
  TAlignItems,
  TAlignSelf,
  TAnimationDirection,
  TAnimationFillMode,
  TAnimationIterationCount,
  TAnimationPlayState,
  TBackgroundRepeat,
  TCursor,
  TDisplay,
  TFlexDirection,
  TFlexWrap,
  TFontWeight,
  TGap,
  TJustifyContent,
  TJustifyItems,
  TJustifySelf,
  TOverflow,
  TPosition,
  TTextAlign,
  TTextTransform,
  TVerticalAlign,
  TWhiteSpace
} from '@/type'

declare module 'styled-components' {
  // Overwrite
  export interface DefaultTheme {
    titleTheme: string

    bgColor: {
      primary: string
      secondary: string
      tertiary: string
      quaternary: string
    }
    borderColor: {
      primary: string
      secondary: string
      tertiary: string
    }
    brandColor: {
      primary: string
      secondary: string
      tertiary: string
    }
    breakpoints: Record<string, unknown>
    inputBgColor: {
      primary: string
      secondary: string
    }
    linkColor: {
      primary: string
    }
    logoColor: {
      primary: string
      secondary: string
    }
    space: number[]
    svgColor: {
      primary: string
      secondary: string
      tertiary: string
    }
    textColor: {
      primary: string
      secondary: string
      tertiary: string
    }
  }

  // New
  export interface IAccordion extends IStyledSystem {
    active?: boolean
    obj?: Record<string, any>
  }

  export interface IActiveStyled extends IStyledSystem {
    active?: boolean | number | null
    change?: boolean | null
    hasClick?: boolean | null
    open?: boolean | null
  }

  export interface IAnimation {
    delay?: string
    direction?: TAnimationDirection
    duration?: string
    fillMode?: TAnimationFillMode
    iterationCount?: TAnimationIterationCount
    playState?: TAnimationPlayState
    timingFunction?: string
  }

  export interface IButton extends IStyledSystem {
    active?: boolean
    obj?: Record<string, any>
    small?: boolean
  }

  export interface IImageStyled {
    attachment?: string
    backgroundColor?: string
    backgroundPosition?: string | Record<string, string>
    backgroundRepeat?: TBackgroundRepeat | Record<string, TBackgroundRepeat>
    backgroundSize?: string | Record<string, string>
    bottom?: string | number | boolean | Record<string, string | number> | Array
    className?: string
    colorEndPercent?: string
    colorStartPercent?: string
    filter?: string
    height?: string | number | boolean | Record<string, string | number> | Array
    left?: string | number | boolean | Record<string, string | number> | Array
    maxHeight?: string | number | boolean | Record<string, string | number> | Array
    maxWidth?: string | number | boolean | Record<string, string | number> | Array
    minHeight?: string | number | boolean | Record<string, string | number> | Array
    minWidth?: string | number | boolean | Record<string, string | number> | Array
    objectFit?: string
    opacity?: number
    overlayColor?: string
    overlayColorBottom?: string
    overlayColorTop?: string
    right?: string | number | boolean | Record<string, string | number> | Array
    scale?: number
    size?: string
    src?: string
    top?: string | number | boolean | Record<string, string | number> | Array
    width?: string | number | boolean | Record<string, string | number> | Array
    zIndex?: number
  }

  export interface IInputStyled extends ITextStyled {
    colorLabel?: string
    colorPlaceholder?: string
    invalid?: any
    label?: string
    tabIndex?: number
    valid?: any
    validation?: boolean
  }

  export interface ILayoutStyled {
    backgroundColor?: string
    bottom?: string | number | boolean | Record<string, string | number> | Array
    className?: string
    display?: TDisplay | Record<string, TDisplay>
    height?: string | number | boolean | Record<string, string | number> | Array
    left?: string | number | boolean | Record<string, string | number> | Array
    m?: string | number | Record<string, string | number> | Array
    maxHeight?: string | number | boolean | Record<string, string | number> | Array
    maxWidth?: string | number | boolean | Record<string, string | number> | Array
    mb?: string | number | Record<string, string | number> | Array
    minHeight?: string | number | boolean | Record<string, string | number> | Array
    minWidth?: string | number | boolean | Record<string, string | number> | Array
    ml?: string | number | Record<string, string | number> | Array
    mr?: string | number | Record<string, string | number> | Array
    mt?: string | number | Record<string, string | number> | Array
    mx?: string | number | Record<string, string | number> | Array
    my?: string | number | Record<string, string | number> | Array
    p?: string | number | Record<string, string | number> | Array
    pb?: string | number | Record<string, string | number> | Array
    pl?: string | number | Record<string, string | number> | Array
    position?: string | Record<string, TPosition>
    pr?: string | number | Record<string, string | number> | Array
    pt?: string | number | Record<string, string | number> | Array
    px?: string | number | Record<string, string | number> | Array
    py?: string | number | Record<string, string | number> | Array
    right?: string | number | boolean | Record<string, string | number> | Array
    top?: string | number | boolean | Record<string, string | number> | Array
    width?: string | number | boolean | Record<string, string | number> | Array
    zIndex?: number
  }

  export interface ILineStyled {
    backgroundColor?: string
    bottom?: string | number | boolean | Record<string, string | number> | Array
    className?: string
    colorEnd?: string
    colorEndPercent?: string
    colorMid?: string
    colorMidPercent?: string
    colorStartPercent?: string
    colorStart?: string
    deg?: string
    display?: TDisplay | Record<string, TDisplay>
    height?: string | number | boolean | Record<string, string | number> | Array
    left?: string | number | boolean | Record<string, string | number> | Array
    m?: string | number | Record<string, string | number> | Array
    maxHeight?: string | number | boolean | Record<string, string | number> | Array
    maxWidth?: string | number | boolean | Record<string, string | number> | Array
    mb?: string | number | Record<string, string | number> | Array
    minHeight?: string | number | boolean | Record<string, string | number> | Array
    minWidth?: string | number | boolean | Record<string, string | number> | Array
    ml?: string | number | Record<string, string | number> | Array
    mr?: string | number | Record<string, string | number> | Array
    mt?: string | number | Record<string, string | number> | Array
    mx?: string | number | Record<string, string | number> | Array
    mx?: string | number | Record<string, string | number> | Array
    my?: string | number | Record<string, string | number> | Array
    p?: string | number | Record<string, string | number> | Array
    pb?: string | number | Record<string, string | number> | Array
    pl?: string | number | Record<string, string | number> | Array
    position?: string | Record<string, TPosition>
    pr?: string | number | Record<string, string | number> | Array
    pt?: string | number | Record<string, string | number> | Array
    px?: string | number | Record<string, string | number> | Array
    py?: string | number | Record<string, string | number> | Array
    right?: string | number | boolean | Record<string, string | number> | Array
    top?: string | number | boolean | Record<string, string | number> | Array
    verticalAlign?: TVerticalAlign | Record<string, TVerticalAlign>
    width?: string | number | boolean | Record<string, string | number> | Array
  }

  export interface IModalStyled extends IStyledSystem {
    type?: 'success' | 'error'
  }

  export interface IStyledSystem {
    alignContent?: TAlignContent | Record<string, TAlignContent>
    alignItems?: TAlignItems | Record<string, TAlignItems>
    alignSelf?: TAlignSelf | Record<string, TAlignSelf>
    backgroundColor?: string
    backgroundPosition?: string | Record<string, string>
    backgroundRepeat?: TBackgroundRepeat | Record<string, TBackgroundRepeat>
    backgroundSize?: string | Record<string, string>
    borderColor?: string
    borderRadius?: string | number | boolean | Record<string, string | number> | Array
    bottom?: string | number | boolean | Record<string, string | number> | Array
    boxShadow?: string | Record<string, string>
    className?: string
    color?: string
    columnGap?: TGap
    cursor?: TCursor
    disabled?: boolean
    display?: TDisplay | Record<string, TDisplay>
    filter?: string
    flex?: string | Record<string, string>
    flexDirection?: TFlexDirection | Record<string, TFlexDirection>
    flexWrap?: TFlexWrap | Record<string, TFlexWrap>
    focus?: boolean
    fontSize?: string | Record<string, string>
    fontWeight?: TFontWeight | Record<string, TFontWeight>
    height?: string | number | boolean | Record<string, string | number> | Array
    hover?: boolean
    justifyContent?: TJustifyContent | Record<string, TJustifyContent>
    justifyItems?: TJustifyItems | Record<string, TJustifyItems>
    justifySelf?: TJustifySelf | Record<string, TJustifySelf>
    left?: string | number | boolean | Record<string, string | number> | Array
    lineHeight?: string | Record<string, string>
    m?: string | number | Record<string, string | number> | Array
    maxHeight?: string | number | boolean | Record<string, string | number> | Array
    maxWidth?: string | number | boolean | Record<string, string | number> | Array
    mb?: string | number | Record<string, string | number> | Array
    minHeight?: string | number | boolean | Record<string, string | number> | Array
    minWidth?: string | number | boolean | Record<string, string | number> | Array
    ml?: string | number | Record<string, string | number> | Array
    mr?: string | number | Record<string, string | number> | Array
    mt?: string | number | Record<string, string | number> | Array
    mx?: string | number | Record<string, string | number> | Array
    my?: string | number | Record<string, string | number> | Array
    obj?: Record<string, string>
    order?: number | Record<string, number>
    overflow?: TOverflow | Record<string, TOverflow>
    overflowX?: TOverflow | Record<string, TOverflow>
    overflowY?: TOverflow | Record<string, TOverflow>
    p?: string | number | Record<string, string | number> | Array
    pb?: string | number | Record<string, string | number> | Array
    pl?: string | number | Record<string, string | number> | Array
    position?: string | Record<string, TPosition>
    pr?: string | number | Record<string, string | number> | Array
    pt?: string | number | Record<string, string | number> | Array
    px?: string | number | Record<string, string | number> | Array
    py?: string | number | Record<string, string | number> | Array
    right?: string | number | boolean | Record<string, string | number> | Array
    rowGap?: TGap
    scrollMobile?: boolean
    textAlign?: TTextAlign | Record<string, TTextAlign>
    textDecoration?: string
    textTransform?: TTextTransform
    top?: string | number | boolean | Record<string, string | number> | Array
    verticalAlign?: TVerticalAlign | Record<string, TVerticalAlign>
    whiteSpace?: TWhiteSpace
    width?: string | number | boolean | Record<string, string | number> | Array
    zIndex?: number
  }

  export interface ISvgStyled {
    bottom?: string | number
    change?: boolean
    className?: string
    display?: TDisplay
    fill?: string
    height?: string
    hoverColor?: string
    invalid?: any
    left?: string | number
    maxHeight?: string | number
    maxWidth?: string | number
    minHeight?: string | number
    minWidth?: string | number
    name?: string
    position?: TPosition
    right?: string | number
    stroke?: string
    svgPosition?: string | undefined
    top?: string | number
    valid?: any
    verticalAlign?: TVerticalAlign | Record<string, TVerticalAlign>
    width?: string
    zIndex?: number
  }

  export interface ITableStyled extends IStyledSystem {
    mobileWidth?: string
  }

  export interface ITextStyled extends IStyledSystem {
    align?: string
    lineColor?: string
    textIndent?: string
    textTransformFirstLetter?: TTextTransform
  }
}
