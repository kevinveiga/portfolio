import styled, { css, ITextStyled } from 'styled-components';
import { layout, space, typography } from 'styled-system';

import { variable } from '@/styles/variable';

const title = css<ITextStyled>`
  ${layout};
  ${space};
  ${typography};

  color: ${({ color }): string => color || 'unset'};
  ${({ lineHeight }): string | undefined => (lineHeight === undefined ? 'line-height: 1.3' : undefined)};
  ${({ align }): string | undefined =>
    align === 'center'
      ? 'margin-left: auto; margin-right: auto; text-align: center;'
      : align === 'right'
      ? 'margin-left: auto; margin-right: 0; text-align: right;'
      : undefined};
  ${({ whiteSpace }): string | undefined => (whiteSpace ? `white-space: ${whiteSpace}` : undefined)};
  z-index: 1;

  ${({ textTransform, textTransformFirstLetter }): any =>
    textTransform
      ? `text-transform: ${textTransform}`
      : css`
          &::first-letter {
            text-transform: ${textTransformFirstLetter ?? 'capitalize'};
          }
        `};

  ${({ lineColor }): any =>
    lineColor
      ? css`
          &::after {
            background-color: ${lineColor};
            content: ' ';
            display: block;
            height: 1px;
            margin: ${variable.space.spacingXS} auto;
            width: 100%;
          }
        `
      : undefined};
`;

export const Br = styled.br<ITextStyled>`
  ${layout};
`;

export const P = styled.p<ITextStyled>`
  ${layout};
  ${space};
  ${typography};

  color: ${({ color }): string => color || 'unset'};
  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 14px' : undefined)};
  ${({ textDecoration }): string | undefined => (textDecoration ? `text-decoration: ${textDecoration}` : undefined)};
  ${({ whiteSpace }): string | undefined => (whiteSpace ? `white-space: ${whiteSpace}` : undefined)};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 16px' : undefined)};
  }

  ${({ textTransform, textTransformFirstLetter }): any =>
    textTransform
      ? `text-transform: ${textTransform}`
      : css`
          &::first-letter {
            text-transform: ${textTransformFirstLetter ?? 'capitalize'};
          }
        `};
`;

export const Span = styled.span<ITextStyled>`
  ${layout};
  ${space};
  ${typography};

  color: ${({ color }): string => color || 'unset'};
  ${({ textDecoration }): string | undefined => (textDecoration ? `text-decoration: ${textDecoration}` : undefined)};
  ${({ whiteSpace }): string | undefined => (whiteSpace ? `white-space: ${whiteSpace}` : undefined)};

  ${({ textTransform, textTransformFirstLetter }): any =>
    textTransform
      ? `text-transform: ${textTransform}`
      : textTransformFirstLetter
      ? css`
          &::first-letter {
            text-transform: ${textTransformFirstLetter};
          }
        `
      : undefined};
`;

export const Subtitle1 = styled.p<ITextStyled>`
  ${title};

  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 10px' : undefined)};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightNormal}` : undefined};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 12px' : undefined)};
  }
`;

export const Title1 = styled.h1<ITextStyled>`
  ${title};

  font-family: ${variable.text.fontSecondary};
  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 48px' : undefined)};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightNormal}` : undefined};
  letter-spacing: 1.5px;
  ${({ mb }): string | undefined => (mb === undefined ? `margin-bottom: ${variable.space.spacingSM}` : undefined)};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 76px' : undefined)};
    ${({ mb }): string | undefined => (mb === undefined ? `margin-bottom: ${variable.space.spacingMD}` : undefined)};
  }
`;

export const Title2 = styled.h2<ITextStyled>`
  ${title};

  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 22px' : undefined)};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightBold}` : undefined};
  ${({ mb }): string | undefined => (mb === undefined ? `margin-bottom: ${variable.space.spacingXS}` : undefined)};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 26px' : undefined)};
  }
`;

export const Title3 = styled.h3<ITextStyled>`
  ${title};

  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 20px' : undefined)};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightBold}` : undefined};
  ${({ mb }): string | undefined => (mb === undefined ? `margin-bottom: ${variable.space.spacingXS}` : undefined)};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 24px' : undefined)};
  }
`;

export const Title4 = styled.h4<ITextStyled>`
  ${title};

  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 18px' : undefined)};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightNormal}` : undefined};
  ${({ mb }): string | undefined => (mb === undefined ? 'margin-bottom: 2px' : undefined)};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 20px' : undefined)};
  }
`;

export const Title5 = styled.h5<ITextStyled>`
  ${title};

  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 12px' : undefined)};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightNormal}` : undefined};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 14px' : undefined)};
  }
`;
