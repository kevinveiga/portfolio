import 'styled-components';

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
} from '@/type';

declare module 'styled-components' {
  // Overwrite
  export interface DefaultTheme {
    titleTheme: string;

    bgColor: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    brandColor: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    breakpoints: Record<string, unknown>;
    borderColor: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    inputBgColor: {
      primary: string;
      secondary: string;
    };
    linkColor: {
      primary: string;
    };
    logoColor: {
      primary: string;
      secondary: string;
    };
    space: number[];
    svgColor: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    textColor: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  }

  // New
  export interface IAccordion extends IStyledSystem {
    readonly active?: boolean;
    readonly obj?: Record<string, any>;
  }

  export interface IActiveStyled extends IStyledSystem {
    readonly active?: boolean | number | null;
    readonly change?: boolean | null;
    readonly hasClick?: boolean | null;
    readonly open?: boolean | null;
  }

  export interface IAnimation {
    readonly delay?: string;
    readonly direction?: TAnimationDirection;
    readonly duration?: string;
    readonly fillMode?: TAnimationFillMode;
    readonly iterationCount?: TAnimationIterationCount;
    readonly playState?: TAnimationPlayState;
    readonly timingFunction?: string;
  }

  export interface IButton extends IStyledSystem {
    readonly active?: boolean;
    readonly obj?: Record<string, any>;
    readonly small?: boolean;
  }

  export interface IImageStyled {
    readonly attachment?: string;
    readonly backgroundColor?: string;
    readonly backgroundPosition?: string | Record<string, string>;
    readonly backgroundRepeat?: TBackgroundRepeat | Record<string, TBackgroundRepeat>;
    readonly backgroundSize?: string | Record<string, string>;
    readonly bottom?: string | number | boolean | Record<string, string | number> | Array;
    readonly className?: string;
    readonly colorEndPercent?: string;
    readonly colorStartPercent?: string;
    readonly filter?: string;
    readonly height?: string | number;
    readonly left?: string | number | boolean | Record<string, string | number> | Array;
    readonly maxHeight?: string | number | boolean | Record<string, string | number> | Array;
    readonly maxWidth?: string | number | boolean | Record<string, string | number> | Array;
    readonly minHeight?: string | number | boolean | Record<string, string | number> | Array;
    readonly minWidth?: string | number | boolean | Record<string, string | number> | Array;
    readonly objectFit?: string;
    readonly opacity?: number;
    readonly overlayColor?: string;
    readonly overlayColorBottom?: string;
    readonly overlayColorTop?: string;
    readonly right?: string | number | boolean | Record<string, string | number> | Array;
    readonly scale?: number;
    readonly size?: string;
    readonly src?: string;
    readonly top?: string | number | boolean | Record<string, string | number> | Array;
    readonly width?: string | number | boolean | Record<string, string | number> | Array;
    readonly zIndex?: number;
  }

  export interface IInputStyled extends ITextStyled {
    readonly colorLabel?: string;
    readonly colorPlaceholder?: string;
    readonly invalid?: any;
    readonly label?: string;
    readonly tabIndex?: number;
    readonly valid?: any;
    readonly validation?: boolean;
  }

  export interface ILayoutStyled {
    readonly backgroundColor?: string;
    readonly bottom?: string | number | boolean | Record<string, string | number> | Array;
    readonly className?: string;
    readonly display?: TDisplay | Record<string, TDisplay>;
    readonly height?: string | number | boolean | Record<string, string | number> | Array;
    readonly left?: string | number | boolean | Record<string, string | number> | Array;
    readonly m?: string | number | Record<string, string | number> | Array;
    readonly maxHeight?: string | number | boolean | Record<string, string | number> | Array;
    readonly maxWidth?: string | number | boolean | Record<string, string | number> | Array;
    readonly mb?: string | number | Record<string, string | number> | Array;
    readonly minHeight?: string | number | boolean | Record<string, string | number> | Array;
    readonly minWidth?: string | number | boolean | Record<string, string | number> | Array;
    readonly ml?: string | number | Record<string, string | number> | Array;
    readonly mr?: string | number | Record<string, string | number> | Array;
    readonly mt?: string | number | Record<string, string | number> | Array;
    readonly mx?: string | number | Record<string, string | number> | Array;
    readonly my?: string | number | Record<string, string | number> | Array;
    readonly p?: string | number | Record<string, string | number> | Array;
    readonly pb?: string | number | Record<string, string | number> | Array;
    readonly pl?: string | number | Record<string, string | number> | Array;
    readonly position?: string | Record<string, TPosition>;
    readonly pr?: string | number | Record<string, string | number> | Array;
    readonly pt?: string | number | Record<string, string | number> | Array;
    readonly px?: string | number | Record<string, string | number> | Array;
    readonly py?: string | number | Record<string, string | number> | Array;
    readonly right?: string | number | boolean | Record<string, string | number> | Array;
    readonly top?: string | number | boolean | Record<string, string | number> | Array;
    readonly width?: string | number | boolean | Record<string, string | number> | Array;
    readonly zIndex?: number;
  }

  export interface ILineStyled {
    readonly backgroundColor?: string;
    readonly bottom?: string | number | boolean | Record<string, string | number> | Array;
    readonly className?: string;
    readonly colorEnd?: string;
    readonly colorEndPercent?: string;
    readonly colorMid?: string;
    readonly colorMidPercent?: string;
    readonly colorStartPercent?: string;
    readonly colorStart?: string;
    readonly deg?: string;
    readonly display?: TDisplay | Record<string, TDisplay>;
    readonly height?: string | number | boolean | Record<string, string | number> | Array;
    readonly left?: string | number | boolean | Record<string, string | number> | Array;
    readonly m?: string | number | Record<string, string | number> | Array;
    readonly maxHeight?: string | number | boolean | Record<string, string | number> | Array;
    readonly maxWidth?: string | number | boolean | Record<string, string | number> | Array;
    readonly mb?: string | number | Record<string, string | number> | Array;
    readonly minHeight?: string | number | boolean | Record<string, string | number> | Array;
    readonly minWidth?: string | number | boolean | Record<string, string | number> | Array;
    readonly ml?: string | number | Record<string, string | number> | Array;
    readonly mr?: string | number | Record<string, string | number> | Array;
    readonly mt?: string | number | Record<string, string | number> | Array;
    readonly mx?: string | number | Record<string, string | number> | Array;
    readonly mx?: string | number | Record<string, string | number> | Array;
    readonly my?: string | number | Record<string, string | number> | Array;
    readonly p?: string | number | Record<string, string | number> | Array;
    readonly pb?: string | number | Record<string, string | number> | Array;
    readonly pl?: string | number | Record<string, string | number> | Array;
    readonly position?: string | Record<string, TPosition>;
    readonly pr?: string | number | Record<string, string | number> | Array;
    readonly pt?: string | number | Record<string, string | number> | Array;
    readonly px?: string | number | Record<string, string | number> | Array;
    readonly py?: string | number | Record<string, string | number> | Array;
    readonly right?: string | number | boolean | Record<string, string | number> | Array;
    readonly top?: string | number | boolean | Record<string, string | number> | Array;
    readonly verticalAlign?: TVerticalAlign | Record<string, TVerticalAlign>;
    readonly width?: string | number | boolean | Record<string, string | number> | Array;
  }

  export interface IModalStyled extends IStyledSystem {
    readonly type?: 'success' | 'error';
  }

  export interface IStyledSystem {
    readonly alignContent?: TAlignContent | Record<string, TAlignContent>;
    readonly alignItems?: TAlignItems | Record<string, TAlignItems>;
    readonly alignSelf?: TAlignSelf | Record<string, TAlignSelf>;
    readonly backgroundColor?: string;
    readonly backgroundPosition?: string | Record<string, string>;
    readonly backgroundRepeat?: TBackgroundRepeat | Record<string, TBackgroundRepeat>;
    readonly backgroundSize?: string | Record<string, string>;
    readonly borderColor?: string;
    readonly borderRadius?: string | number | boolean | Record<string, string | number> | Array;
    readonly bottom?: string | number | boolean | Record<string, string | number> | Array;
    readonly boxShadow?: string | Record<string, string>;
    readonly className?: string;
    readonly color?: string;
    readonly columnGap?: TGap;
    readonly cursor?: TCursor;
    readonly disabled?: boolean;
    readonly display?: TDisplay | Record<string, TDisplay>;
    readonly filter?: string;
    readonly flex?: string | Record<string, string>;
    readonly flexDirection?: TFlexDirection | Record<string, TFlexDirection>;
    readonly flexWrap?: TFlexWrap | Record<string, TFlexWrap>;
    readonly focus?: boolean;
    readonly fontSize?: string | Record<string, string>;
    readonly fontWeight?: TFontWeight | Record<string, TFontWeight>;
    readonly height?: string | number | boolean | Record<string, string | number> | Array;
    readonly hover?: boolean;
    readonly justifyContent?: TJustifyContent | Record<string, TJustifyContent>;
    readonly justifyItems?: TJustifyItems | Record<string, TJustifyItems>;
    readonly justifySelf?: TJustifySelf | Record<string, TJustifySelf>;
    readonly left?: string | number | boolean | Record<string, string | number> | Array;
    readonly lineHeight?: string | Record<string, string>;
    readonly m?: string | number | Record<string, string | number> | Array;
    readonly maxHeight?: string | number | boolean | Record<string, string | number> | Array;
    readonly maxWidth?: string | number | boolean | Record<string, string | number> | Array;
    readonly mb?: string | number | Record<string, string | number> | Array;
    readonly minHeight?: string | number | boolean | Record<string, string | number> | Array;
    readonly minWidth?: string | number | boolean | Record<string, string | number> | Array;
    readonly ml?: string | number | Record<string, string | number> | Array;
    readonly mr?: string | number | Record<string, string | number> | Array;
    readonly mt?: string | number | Record<string, string | number> | Array;
    readonly mx?: string | number | Record<string, string | number> | Array;
    readonly my?: string | number | Record<string, string | number> | Array;
    readonly obj?: Record<string, string>;
    readonly order?: number | Record<string, number>;
    readonly overflow?: TOverflow | Record<string, TOverflow>;
    readonly overflowX?: TOverflow | Record<string, TOverflow>;
    readonly overflowY?: TOverflow | Record<string, TOverflow>;
    readonly p?: string | number | Record<string, string | number> | Array;
    readonly pb?: string | number | Record<string, string | number> | Array;
    readonly pl?: string | number | Record<string, string | number> | Array;
    readonly position?: string | Record<string, TPosition>;
    readonly pr?: string | number | Record<string, string | number> | Array;
    readonly pt?: string | number | Record<string, string | number> | Array;
    readonly px?: string | number | Record<string, string | number> | Array;
    readonly py?: string | number | Record<string, string | number> | Array;
    readonly right?: string | number | boolean | Record<string, string | number> | Array;
    readonly rowGap?: TGap;
    readonly scrollMobile?: boolean;
    readonly textAlign?: TTextAlign | Record<string, TTextAlign>;
    readonly textDecoration?: string;
    readonly textTransform?: TTextTransform;
    readonly top?: string | number | boolean | Record<string, string | number> | Array;
    readonly verticalAlign?: TVerticalAlign | Record<string, TVerticalAlign>;
    readonly whiteSpace?: TWhiteSpace;
    readonly width?: string | number | boolean | Record<string, string | number> | Array;
    readonly zIndex?: number;
  }

  export interface ISvgStyled {
    readonly bottom?: string | number;
    readonly change?: boolean;
    readonly className?: string;
    readonly display?: TDisplay;
    readonly fill?: string;
    readonly height?: string;
    readonly hoverColor?: string;
    readonly invalid?: any;
    readonly left?: string | number;
    readonly maxHeight?: string | number;
    readonly maxWidth?: string | number;
    readonly minHeight?: string | number;
    readonly minWidth?: string | number;
    readonly name?: string;
    readonly position?: TPosition;
    readonly right?: string | number;
    readonly stroke?: string;
    readonly svgPosition?: string | undefined;
    readonly top?: string | number;
    readonly valid?: any;
    readonly verticalAlign?: TVerticalAlign | Record<string, TVerticalAlign>;
    readonly width?: string;
    readonly zIndex?: number;
  }

  export interface ITableStyled extends IStyledSystem {
    readonly mobileWidth?: string;
  }

  export interface ITextStyled extends IStyledSystem {
    readonly align?: string;
    readonly lineColor?: string;
    readonly textIndent?: string;
    readonly textTransformFirstLetter?: TTextTransform;
  }
}
