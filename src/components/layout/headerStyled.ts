import styled, { IStyledSystem } from 'styled-components';
import { display } from 'styled-system';

import { gradientDirection } from '@/styles/function';
import { variable } from '@/styles/variable';

export const HeaderStyled = styled.header`
  ${gradientDirection({ colorStart: variable.color.turquoise, colorEnd: variable.color.turquoiseDark })};

  border-bottom: 1px solid ${({ theme }): string => theme.borderColor.secondary};
  display: flex;
  height: auto;
  justify-content: space-between;
  width: 100%;
  z-index: 0;
`;

export const HeaderItemsStyled = styled.nav<IStyledSystem>`
  ${display};

  > ul {
    > li {
      display: inline-block;
    }
  }
`;
