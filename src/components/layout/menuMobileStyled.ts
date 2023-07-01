import styled, { IActiveStyled, IStyledSystem } from 'styled-components';
import { display } from 'styled-system';

import { Subtitle1 } from '@/styles/text';
import { variable } from '@/styles/variable';

export const MenuMobileStyled = styled.div<IActiveStyled>`
  ${display};

  background-color: ${({ theme }): string | undefined => theme.bgColor.primary};
  box-shadow: ${variable.layout.boxShadowPrimary};
  color: ${({ theme }): string | undefined =>
    theme.titleTheme === 'light' ? variable.color.blueDark : variable.color.white};
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: ${variable.space.spacingSM};
  position: absolute;
  right: 0;
  row-gap: ${variable.space.spacingMD};
  top: 0;
  transform: ${({ active }): string => (active ? 'translateX(0)' : 'translateX(105%)')};
  transition: transform ${variable.animation.transition};
  width: auto;
  z-index: 3;

  a,
  button {
    &:hover {
      color: ${({ change }): string | undefined => (change ? variable.color.turquoise : variable.color.turquoiseLight)};
    }
  }
`;

export const MenuMobileItemsNavStyled = styled.nav<IStyledSystem>`
  > ul {
    > li {
      font-size: 14px;

      + li {
        margin-top: ${variable.space.spacingSM};
      }

      a,
      button {
        &::first-letter {
          text-transform: capitalize;
        }
      }
    }
  }

  ${Subtitle1} {
    color: ${({ theme }): string | undefined => theme.textColor.tertiary};
  }
`;
