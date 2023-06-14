import React, { ReactElement } from 'react';

import { ResponsiveBar } from '@nivo/bar';
import { useTheme } from 'styled-components';

import { IChartBar } from '@/interface';

import { variable } from '@/styles/variable';

export function ChartBarVertical({ data, indexBy, keys }: IChartBar): ReactElement | null {
    // CONTEXT
    const { bgColor, borderColor, textColor } = useTheme();

    return (
        <ResponsiveBar
            axisBottom={{
                legend: '',
                legendOffset: 30,
                legendPosition: 'middle',
                tickPadding: 5,
                tickRotation: 0,
                tickSize: 5
            }}
            axisLeft={{
                legend: '',
                legendOffset: -35,
                legendPosition: 'middle',
                tickPadding: 5,
                tickRotation: 0,
                tickSize: 5,
                tickValues: 5
            }}
            borderColor={{ theme: 'background' }}
            borderRadius={0}
            borderWidth={0}
            colorBy="id"
            colors={variable.colors.chart}
            data={data}
            enableGridX={true}
            enableGridY={false}
            enableLabel={true}
            groupMode="stacked"
            indexBy={indexBy}
            indexScale={{ round: true, type: 'band' }}
            innerPadding={0}
            isInteractive={true}
            keys={keys}
            layout="vertical"
            labelSkipHeight={10}
            labelSkipWidth={10}
            labelTextColor={variable.color.grayDark2}
            legends={[
                {
                    anchor: 'right',
                    dataFrom: 'keys',
                    direction: 'column',
                    itemDirection: 'left-to-right',
                    itemHeight: 12,
                    itemsSpacing: 20,
                    itemOpacity: 1,
                    itemTextColor: textColor.secondary,
                    itemWidth: 80,
                    justify: false,
                    symbolBorderColor: borderColor.primary,
                    symbolBorderWidth: 0,
                    symbolShape: 'square',
                    symbolSize: 12,
                    translateX: 100,
                    translateY: 0
                }
            ]}
            margin={{ bottom: 40, left: 40, right: 100, top: 10 }}
            maxValue="auto"
            minValue="auto"
            padding={0.2}
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
