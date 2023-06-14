import React, { ReactElement } from 'react';

import { ResponsiveLine } from '@nivo/line';
import dayjs from 'dayjs';
import { useTheme } from 'styled-components';

import { ChartTooltip } from '@/components/chart/chartTooltip';

export function ChartLine({ colors, data, id }: any): ReactElement | null {
    // CONTEXT
    const { bgColor, textColor } = useTheme();

    const handleTooltip = (obj: Record<string, any>): any => {
        const { point: { data: { x = '', y = 0 } = {} } = {} } = obj;

        return (
            <ChartTooltip>
                <span>
                    Data: <b>{x as string}</b>
                </span>
                <span> - </span>
                <span>
                    Tickets: <b>{y as string}</b>
                </span>
            </ChartTooltip>
        );
    };

    return (
        <ResponsiveLine
            axisBottom={{
                legend: 'Date',
                legendOffset: 35,
                legendPosition: 'middle',
                tickPadding: 5,
                tickRotation: 0,
                tickSize: 5
            }}
            axisLeft={{
                format: '>-.3~s',
                legend: 'Tickets',
                legendOffset: -35,
                legendPosition: 'middle',
                tickPadding: 5,
                tickRotation: 0,
                tickSize: 5,
                tickValues: 5
            }}
            areaOpacity={0.1}
            colors={colors}
            curve="natural"
            data={[
                {
                    id: id,
                    data: data.sort((a: Record<string, any>, b: Record<string, any>) => dayjs(a.x).unix() - dayjs(b.x).unix()).map((obj: any) => obj)
                }
            ]}
            enableArea={true}
            enableGridX={false}
            enableGridY={true}
            legends={[]}
            lineWidth={2}
            margin={{ bottom: 40, left: 40, right: 20, top: 10 }}
            pointBorderColor={{ from: 'serieColor' }}
            pointBorderWidth={2}
            pointColor={{ theme: 'background' }}
            pointSize={4}
            theme={{
                axis: {
                    domain: { line: { stroke: bgColor.tertiary } },
                    ticks: { line: { stroke: bgColor.tertiary }, text: { fill: textColor.secondary, fontSize: 12 } },
                    legend: { text: { fill: textColor.secondary } }
                },
                grid: { line: { stroke: bgColor.tertiary } },
                tooltip: { container: { backgroundColor: bgColor.primary, color: textColor.primary, fontSize: 12 } }
            }}
            tooltip={(obj: Record<string, any>): any => handleTooltip(obj)}
            useMesh={true}
            yScale={{ max: 'auto', min: 0, reverse: false, stacked: false, type: 'linear' }}
        />
    );
}
