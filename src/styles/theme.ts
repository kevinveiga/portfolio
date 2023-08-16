import { DefaultTheme } from 'styled-components'

import { variable } from '@/styles/variable'

export const defaultTheme: DefaultTheme = {
  titleTheme: 'dark',

  bgColor: {
    primary: variable.color.grayDark2,
    secondary: variable.color.grayDark3,
    tertiary: variable.color.grayDark,
    quaternary: variable.color.gray4
  },
  borderColor: {
    primary: variable.color.gray3,
    secondary: variable.color.gray4,
    tertiary: variable.color.gray4
  },
  brandColor: {
    primary: variable.color.brandPrimary,
    secondary: variable.color.brandSecondary,
    tertiary: variable.color.brandTertiary
  },
  breakpoints: {
    xs: variable.breakpoint.xs,
    sm: variable.breakpoint.sm,
    md: variable.breakpoint.md,
    lg: variable.breakpoint.lg,
    xl: variable.breakpoint.xl
  },
  inputBgColor: {
    primary: variable.color.grayDark,
    secondary: variable.color.black2
  },
  linkColor: {
    primary: variable.color.primary
  },
  logoColor: {
    primary: 'transparent',
    secondary: variable.color.white
  },
  space: [0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 80, 100],
  svgColor: {
    primary: variable.color.gray2,
    secondary: variable.color.grayLight3,
    tertiary: variable.color.white
  },
  textColor: {
    primary: variable.color.textLightPrimary,
    secondary: variable.color.textLightSecondary,
    tertiary: variable.color.textLightTertiary
  }
}

export const lightTheme: DefaultTheme = {
  ...defaultTheme,
  ...{
    titleTheme: 'light',

    bgColor: {
      primary: variable.color.white,
      secondary: variable.color.grayLight4,
      tertiary: variable.color.grayLight3,
      quaternary: variable.color.grayLight
    },
    borderColor: {
      primary: variable.color.grayLight,
      secondary: variable.color.grayLight2,
      tertiary: variable.color.grayLight3
    },
    brandColor: {
      primary: variable.color.brandPrimary,
      secondary: variable.color.brandSecondary,
      tertiary: variable.color.brandTertiary
    },
    inputBgColor: {
      primary: variable.color.grayLight4,
      secondary: variable.color.grayLight3
    },
    linkColor: {
      primary: variable.color.primary
    },
    logoColor: {
      primary: variable.color.brandPrimary,
      secondary: variable.color.brandSecondary
    },
    svgColor: {
      primary: variable.color.gray2,
      secondary: variable.color.grayDark2,
      tertiary: variable.color.grayDark
    },
    textColor: {
      primary: variable.color.textDarkPrimary,
      secondary: variable.color.textDarkSecondary,
      tertiary: variable.color.textDarkTertiary
    }
  }
}
