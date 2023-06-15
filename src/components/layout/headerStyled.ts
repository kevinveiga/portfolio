import styled, { IStyledSystem } from 'styled-components';
import { display } from 'styled-system';

export const HeaderStyled = styled.header`
  background-color: ${({ theme }): string => theme.bgColor.primary};
  border-bottom: 1px solid ${({ theme }): string => theme.borderColor.secondary};
  height: auto;
  width: 100%;
  z-index: 0;
`;

export const HeaderItemsStyled = styled.nav<IStyledSystem>`
  ${display};

  > ul {
    > li {
      display: inline-block;
      padding-right: 15px;
    }
  }
`;
