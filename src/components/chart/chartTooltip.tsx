import React, { PropsWithChildren } from 'react';

import { ChartTooltipStyled } from '@/components/chart/chartStyled';

export function ChartTooltip({ children, ...props }: any): PropsWithChildren<any> {
    return <ChartTooltipStyled {...props}>{children}</ChartTooltipStyled>;
}
