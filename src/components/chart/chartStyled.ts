import styled, { IStyledSystem } from 'styled-components';

import { variable } from '@/styles/variable';

export const ChartTooltipStyled = styled.div<IStyledSystem>`
    background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.tertiary};
    border: ${({ borderColor, theme }): string => `1px solid ${borderColor || theme.borderColor.primary}`};
    border-radius: ${variable.layout.borderRadiusPrimary};
    ${({ fontSize }): string | undefined => (fontSize === undefined ? 'font-size: 12px' : undefined)};
    padding: ${variable.space.spacingXS};
`;
