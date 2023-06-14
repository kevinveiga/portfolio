import React, { ReactElement } from 'react';

import { ResponsiveBar } from '@nivo/bar';
import { useTheme } from 'styled-components';

import { IChartBar } from '@/interface';

import { variable } from '@/styles/variable';

export function ChartBarHorizontal({ data, indexBy, keys }: IChartBar): ReactElement | null {
    // CONTEXT
    const { bgColor, textColor } = useTheme();

    return (
        <ResponsiveBar
            axisBottom={{
                legend: '',
                legendOffset: 30,
                legendPosition: 'middle',
                tickPadding: 5,
                tickRotation: 0,
                tickSize: 5,
                tickValues: 5
            }}
            axisLeft={{
                legend: '',
                legendOffset: -35,
                legendPosition: 'middle',
                tickPadding: 5,
                tickRotation: 0,
                tickSize: 5
            }}
            borderColor={{ theme: 'background' }}
            borderRadius={0}
            borderWidth={0}
            colorBy="indexValue"
            colors={variable.colors.chart}
            data={data}
            enableGridX={true}
            enableGridY={false}
            enableLabel={true}
            groupMode="stacked"
            indexBy={indexBy}
            indexScale={{ round: true, type: 'band' }}
            innerPadding={0}
            isInteractive={false}
            keys={keys}
            layout="horizontal"
            labelSkipHeight={0}
            labelSkipWidth={0}
            labelTextColor={variable.color.grayDark2}
            legends={[]}
            margin={{ bottom: 40, left: 150, right: 10, top: 10 }}
            maxValue="auto"
            minValue="auto"
            padding={0.5}
            reverse={false}
            theme={{
                axis: {
                    domain: { line: { stroke: bgColor.tertiary } },
                    ticks: { line: { stroke: bgColor.tertiary }, text: { fill: textColor.secondary, fontSize: 12, fontWeight: 700 } }
                },
                grid: { line: { stroke: bgColor.tertiary } },
                tooltip: { container: { backgroundColor: bgColor.primary, color: textColor.primary, fontSize: 12 } }
            }}
            valueScale={{ type: 'linear' }}
        />
    );
}
