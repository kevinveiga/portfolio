import styled, { IStyledSystem } from 'styled-components';
import { display } from 'styled-system';

import { gradientDirection } from '@/styles/function';
import { variable } from '@/styles/variable';

export const HeaderStyled = styled.header`
  ${gradientDirection({ colorStart: variable.color.blueDark, colorEnd: variable.color.turquoiseLight, deg: '45deg' })};

  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  z-index: 0;
`;

export const HeaderItemsStyled = styled.nav<IStyledSystem>`
  ${display};

  > ul {
    > li {
      display: inline-block;
      margin-left: ${variable.space.spacingXS};
    }
  }

  svg {
    max-width: 18px;
  }
`;
