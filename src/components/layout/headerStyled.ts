import styled, { IStyledSystem } from 'styled-components';
import { display } from 'styled-system';

import { variable } from '@/styles/variable';

export const HeaderStyled = styled.header`
  background-color: transparent;
  display: flex;
  height: auto;
  justify-content: space-between;
  padding-bottom: ${variable.space.spacingXS};
  padding-left: ${variable.space.spacingSM};
  padding-right: ${variable.space.spacingSM};
  padding-top: ${variable.space.spacingXS};
  position: absolute;
  width: 100%;
  z-index: 2;

  @media (min-width: ${variable.breakpoint.sm}) {
    padding-left: ${variable.space.spacingLG};
    padding-right: ${variable.space.spacingLG};
  }
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
