import styled, { IStyledSystem } from 'styled-components';
import { layout } from 'styled-system';

import { variable } from '@/styles/variable';

export const ProgressStyled = styled.div<IStyledSystem>`
  ${layout};

  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.primary};
  border-radius: ${variable.layout.borderRadiusPrimary};
  height: 6px;
  overflow: hidden;
  ${({ width }): number | string | undefined => (width === undefined ? 'width: 100%' : undefined)};
`;

export const ProgressBarStyled = styled.div<IStyledSystem>`
  ${layout};

  background-color: ${({ backgroundColor }): string => backgroundColor || 'transparent'};
  border-radius: ${variable.layout.borderRadiusPrimary};
  height: 100%;
`;
