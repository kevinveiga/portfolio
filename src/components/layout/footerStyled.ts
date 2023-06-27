import styled from 'styled-components';

export const FooterStyled = styled.footer`
  background-color: ${({ theme }): string => theme.bgColor.primary};
  border-top: 1px solid ${({ theme }): string => theme.borderColor.tertiary};
  font-size: 14px;
  height: auto;
  width: 100%;
  z-index: 0;
`;
