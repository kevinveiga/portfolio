import styled, { css, IStyledSystem, ITableStyled, ITextStyled } from 'styled-components';
import { layout, space, typography } from 'styled-system';

import { scrollbarInvisible, scrollbarTable } from '@/styles/function';
import { variable } from '@/styles/variable';

export const Table = styled.table<ITableStyled>`
  ${layout};
  ${typography};

  overflow: hidden;
  ${({ textAlign }): string | undefined => (textAlign === undefined ? `text-align: left` : undefined)};

  ${({ mobileWidth }): any =>
    mobileWidth
      ? css`
          @media (max-width: ${variable.breakpoint.md}) {
            width: ${mobileWidth};
          }
        `
      : undefined};
`;

export const Tbody = styled.tbody<IStyledSystem>`
  ${typography};

  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.secondary};
  color: ${({ theme }): string => theme.textColor.secondary};
  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 14px' : undefined)};
  ${({ obj }): any =>
    obj?.scrollbar === 'invisible' ? scrollbarInvisible() : obj?.scrollbar === 'table' ? scrollbarTable() : undefined};
`;

export const Td = styled.td<IStyledSystem>`
  ${space};
  ${typography};

  ${({ p }): string | undefined => (p === undefined ? `padding: ${variable.space.spacingSM}` : undefined)};
`;

export const Tfoot = styled.tfoot``;

export const Th = styled.th<ITextStyled>`
  ${layout};
  ${space};
  ${typography};

  ${({ fontWeight }): string | undefined =>
    fontWeight === undefined ? `font-weight: ${variable.text.fontWeightBold}` : undefined};
  ${({ p }): string | undefined => (p === undefined ? `padding: ${variable.space.spacingSM}` : undefined)};

  ${({ textTransform, textTransformFirstLetter }): any =>
    textTransform
      ? `text-transform: ${textTransform}`
      : css`
          &::first-letter {
            text-transform: ${textTransformFirstLetter ?? 'capitalize'};
          }
        `};

  > span {
    vertical-align: middle;
  }
`;

export const Thead = styled.thead<IStyledSystem>`
  ${typography};

  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.primary};
  color: ${({ theme }): string => theme.textColor.primary};
  ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 16px' : undefined)};
`;

export const Tr = styled.tr`
  ${space};
  ${typography};
`;
