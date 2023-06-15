import styled, { IStyledSystem, ITextStyled } from 'styled-components';
import { flexbox, layout, space } from 'styled-system';

import { variable } from '@/styles/variable';

export const BoxColor = styled.div<IStyledSystem>`
  ${flexbox};
  ${layout};
  ${space}

  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.tertiary};
  border-color: ${({ borderColor }): string => borderColor || 'unset'};
  border-radius: ${variable.layout.borderRadiusPrimary};
  border-style: solid;
  border-width: 1px;
  display: flex;
  ${({ height }): number | string | undefined => (height === undefined ? 'height: 50px' : undefined)};
  ${({ mb }): string | undefined => (mb === undefined ? `margin-bottom: ${variable.space.spacingXS}` : undefined)};
  padding: ${variable.space.spacingSM};
  ${({ rowGap }): string | undefined => (rowGap ? `row-gap: ${rowGap}` : undefined)};
  ${({ width }): number | string | undefined => (width === undefined ? 'width: 100%' : undefined)};
`;

export const BoxDocs = styled.div<IStyledSystem>`
  ${flexbox};
  ${layout};
  ${space}

  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.tertiary};
  border-radius: ${variable.layout.borderRadiusPrimary};
  ${({ columnGap }): string | undefined => (columnGap ? `column-gap: ${columnGap}` : undefined)};
  display: flex;
  ${({ mb }): string | undefined => (mb === undefined ? `margin-bottom: ${variable.space.spacingMD}` : undefined)};
  padding: ${variable.space.spacingSM};
  ${({ rowGap }): string | undefined => (rowGap ? `row-gap: ${rowGap}` : undefined)};
`;

export const ListDocs = styled.ul`
  list-style-type: disc;
  margin-bottom: ${variable.space.spacingXS};
  padding: 0 ${variable.space.spacingSM};
`;

export const SpacerDocs = styled.div<IStyledSystem>`
  ${layout};

  ${({ height }): number | string | undefined =>
    height === undefined ? `height: ${variable.space.spacingMD}` : undefined};
  ${({ width }): number | string | undefined =>
    width === undefined ? `width: ${variable.space.spacingSM}` : undefined};
`;

export const StrongDocs = styled.strong`
  color: ${variable.color.brandTertiary};
  font-weight: 700;
`;

export const Title1Docs = styled.h1<ITextStyled>`
  color: ${({ color }): string => color || variable.color.orange};
  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 22px' : undefined)};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightBold}` : undefined};
  ${({ my }): string | undefined => (my === undefined ? `margin: ${variable.space.spacingSM} 0` : undefined)};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 28px' : undefined)};
    ${({ my }): string | undefined => (my === undefined ? `margin: ${variable.space.spacingMD} 0` : undefined)};
  }
`;

export const Title2Docs = styled.h2<ITextStyled>`
  color: ${({ color }): string => color || variable.color.blue};
  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 16px' : undefined)};
  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightBold}` : undefined};
  ${({ my }): string | undefined =>
    my === undefined ? `margin: ${variable.space.spacingSM} 0 ${variable.space.spacingXS} 0` : undefined};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 18px' : undefined)};
  }
`;

export const Subtitle1Docs = styled.p<ITextStyled>`
  color: ${({ color }): string => color || variable.color.brandSecondary};
  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 14px' : undefined)};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 16px' : undefined)};
  }
`;

export const Subtitle2Docs = styled.p<ITextStyled>`
  color: ${({ color, theme }): string => color || theme.textColor.secondary};
  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 12px' : undefined)};

  @media (min-width: ${variable.breakpoint.md}) {
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 14px' : undefined)};
  }
`;
