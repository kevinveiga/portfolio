import { ComponentType, ReactNode } from 'react'

import { IInputStyled, IStyledSystem } from 'styled-components'

import { TDisplay, TInputType, TLanguage } from '@/type'

export interface IActive {
  active: boolean
  setActive: (value: boolean) => void
}

export interface IAccordion {
  id: string
  obj: IAccordionItem[]
}

export interface IAccordionItem {
  content?: string
  id: string
  title: string
}

export interface IAuthData {
  nome?: string
  success?: boolean
  token?: string
}

export interface IBreadcrumb {
  link?: string | null
  title: string
}

export interface IButton extends IStyledSystem {
  active?: boolean
  ariaLabel?: string
  children?: ReactNode
  disabled?: boolean
  obj?: Record<string, any>
  onClick?: (e: any) => void
  small?: boolean
  text?: string
  title?: string
  typeButton?: 'button' | 'reset' | 'submit'
  typeStyle?: 'button' | 'button-border' | 'button-unset'
}

export interface IGradient {
  colorEnd?: string
  colorEndPercent?: string | 0
  colorStart?: string
  colorStartPercent?: string | 0
  deg?: string | 0
}

export interface IGradient3Colors {
  colorEnd?: string
  colorEndPercent?: string | 0
  colorMid?: string
  colorMidPercent?: string | 0
  colorStart?: string
  colorStartPercent?: string | 0
  deg?: string | 0
}

export interface IInput extends IInputStyled {
  cbFunction?: (value: any) => void
  checked?: boolean
  component?: ComponentType<any>
  idInput: string
  list?: string
  max?: number
  maxLength?: number
  min?: number
  name: string
  placeholder?: string
  selectLabel?: string
  selectValue?: string
  separator?: boolean
  showSvg?: boolean
  step?: number
  svgComponent?: ComponentType<any>
  typeInput?: TInputType
  validationSchema?: any
  value?: string
}

export interface IInputDecimal extends IInput {
  decimalScale?: number
  decimalSeparator?: string
  stepFactor?: number
  typeMeasure?: string
}

export interface IInputPasswordConfirm extends IInput {
  inputPassword: string
}

export interface IInputRadio extends IInput {
  items?: IInputRadioItems[]
  itemsDisplay?: TDisplay | Record<string, TDisplay>
}

export interface IInputRadioItems {
  id: string
  label: string
  value: string
}

export interface ILabel extends IStyledSystem {
  ariaLabel?: string
  children?: ReactNode
  component?: ComponentType<any>
  forLabel?: string
  text?: string
}

export interface ILanguage {
  language?: TLanguage | string
}

export interface ILink extends IStyledSystem {
  active?: boolean
  ariaLabel?: string
  children?: ReactNode
  link: string
  onClick?: (e: any) => void
  text?: string
  title?: string
}

export interface ILinkExternal extends ILink {
  target?: '_blank' | '_parent' | '_self' | '_top'
}

export interface IMask {
  cleanValue: string
  formattedValue: string
}

export interface IModal extends IStyledSystem {
  cbFunction?: () => void
  children?: ReactNode | string
  content?: ReactNode | string
  onClose?: () => void
  setActive?: (value: any) => void
  showTop?: boolean
  title?: string
  type?: 'success' | 'error'
}

export interface IModalConfirm {
  cbFunction?: () => void
  message: string
  setActive: (value: any) => void
}

export interface ISelect extends IInputStyled {
  cbFunction?: (value: any) => void
  children?: ReactNode
  idInput: string
  name: string
  svgComponent?: ComponentType<any>
  validationSchema?: any
}

export interface ISelectCustom extends IInput {
  items?: ISelectCustomItems[]
}

export interface ISelectCustomItems {
  label: string
  value: string
}

export interface ITreeItem {
  cbFunction?: ({ id, value }: { id: string; value: string }) => void
  children?: ReactNode
  id: string
  name: string
  node: ITreeItem[] | []
  selectedId?: string
  type?: string
}

export interface IVariable {
  [key: string]: string | string[] | object
  animation: {
    duration: string
    durationFast: string
    durationSlow: string
    timing: string
    timeout1s: string
    timeout3s: string
    timeout5s: string
    transition: string
    transitionFast: string
    transitionFastCubic: string
    transitionSlow: string
  }
  breakpoint: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
  }
  color: {
    alert: string
    black: string
    black2: string
    blackTransparent1: string
    blackTransparent2: string
    blackTransparent3: string
    blackTransparent5: string
    blue: string
    blueDark: string
    brandPrimary: string
    brandSecondary: string
    brandTertiary: string
    error: string
    gray: string
    gray2: string
    gray3: string
    gray4: string
    grayDark: string
    grayDark2: string
    grayDark3: string
    grayLight: string
    grayLight2: string
    grayLight3: string
    grayLight4: string
    green: string
    info: string
    orange: string
    pink: string
    primary: string
    primaryHover: string
    red: string
    red2: string
    secondary: string
    secondaryHover: string
    success: string
    tertiary: string
    tertiaryHover: string
    textDarkPrimary: string
    textDarkSecondary: string
    textDarkTertiary: string
    textLightPrimary: string
    textLightSecondary: string
    textLightTertiary: string
    turquoise: string
    turquoiseDark: string
    turquoiseLight: string
    warning: string
    white: string
    whiteTransparent1: string
    whiteTransparent3: string
    whiteTransparent5: string
    whiteTransparent9: string
    yellow: string
  }
  colors: {
    chart: string[]
  }
  layout: {
    allButtons: string
    allTextInputs: string
    borderRadiusPrimary: string
    borderRadiusSecondary: string
    boxShadowInsetPrimary: string
    boxShadowInsetSecondary: string
    boxShadowInsetTertiary: string
    boxShadowPrimary: string
    boxShadowSecondary: string
    boxShadowTertiary: string
    buttonHeight: string
    buttonPaddingX: string
    buttonPaddingY: string
    footerManagerHeight: string
    formBoxShadow: string
    formBoxShadowFocus: string
    formBoxShadowError: string
    headerHeight: string
    headerManagerHeight: string
    inputHeight: string
    inputMargin: string
    inputPaddingX: string
    inputPaddingY: string
  }
  space: {
    spacingXXS: string
    spacingXS: string
    spacingSM: string
    spacingMD: string
    spacingLG: string
    spacingXL: string
    spacingXXL: string
    spacingXXXL: string
  }
  text: {
    fontPrimary: string
    fontSecondary: string
    fontSize: string
    fontWeightBold: string
    fontWeightNormal: string
    letterSpacing: string
    lineHeight: string
  }
}
