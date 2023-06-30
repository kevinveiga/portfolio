import styled, { IActiveStyled, IStyledSystem } from 'styled-components';
import { display } from 'styled-system';

import { ButtonUnsetStyled } from '@/components/button/buttonStyled';

import { variable } from '@/styles/variable';

export const HeaderStyled = styled.header<IActiveStyled>`
  background-color: ${({ change }): string | undefined => (change ? variable.color.whiteTransparent9 : 'transparent')};
  border-bottom: 1px solid ${({ change }): string | undefined => (change ? variable.color.grayLight4 : 'transparent')};
  color: ${({ change }): string | undefined => (change ? variable.color.textDarkPrimary : variable.color.white)};
  display: flex;
  height: ${variable.layout.headerHeight};
  justify-content: space-between;
  left: 50%;
  max-width: ${variable.breakpoint.lg};
  padding-bottom: ${variable.space.spacingXS};
  padding-left: ${variable.space.spacingSM};
  padding-right: ${variable.space.spacingSM};
  padding-top: ${variable.space.spacingXS};
  position: fixed;
  transform: translateX(-50%);
  transition: background-color ${variable.animation.transition};
  width: 100%;
  z-index: 2;

  @media (min-width: ${variable.breakpoint.md}) {
    padding-left: ${variable.space.spacingLG};
    padding-right: ${variable.space.spacingLG};
  }

  ${ButtonUnsetStyled} {
    &:hover {
      color: ${({ change }): string | undefined => (change ? variable.color.turquoise : variable.color.turquoiseLight)};
    }
  }
`;

export const HeaderItemsStyled = styled.div<IStyledSystem>`
  ${display};

  > ul {
    > li {
      display: inline-block;

      + li {
        margin-left: ${variable.space.spacingXS};
      }
    }
  }

  ${ButtonUnsetStyled} {
    &:hover {
      svg {
        opacity: 0.5;
      }
    }
  }

  svg {
    max-width: 18px;
    transition: opacity ${variable.animation.transition};
  }
`;

export const HeaderItemsNavStyled = styled.nav<IStyledSystem>`
  ${display};

  > ul {
    > li {
      display: inline-block;
      font-size: 14px;

      + li {
        margin-left: ${variable.space.spacingLG};
      }

      a,
      button {
        &::first-letter {
          text-transform: capitalize;
        }
      }
    }
  }
`;
