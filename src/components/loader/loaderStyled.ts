import styled from 'styled-components';

import { variable } from '@/styles/variable';

export const LoaderBackgroundStyled = styled.div`
  background-color: ${variable.color.blackTransparent5};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

export const LoaderContentStyled = styled.div`
  height: 100px;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  width: 100px;
`;
