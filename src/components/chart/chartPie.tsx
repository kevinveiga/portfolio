import React, { ReactElement } from 'react';

import { ResponsivePieCanvas } from '@nivo/pie';
import { useTheme } from 'styled-components';

import { variable } from '@/styles/variable';

export function ChartPie({ data }: any): ReactElement | null {
    // CONTEXT
    const { bgColor, borderColor, textColor } = useTheme();

    return (
        <ResponsivePieCanvas
            activeOuterRadiusOffset={5}
            arcLabelsRadiusOffset={0.5}
            arcLabelsSkipAngle={15}
            arcLabelsTextColor={variable.color.grayDark2}
            arcLinkLabelsSkipAngle={1}
            arcLinkLabelsTextColor={textColor.secondary}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            borderColor={{ theme: 'background' }}
            colors={variable.colors.chart}
            cornerRadius={4}
            data={data}
            enableArcLinkLabels={false}
            innerRadius={0.2}
            legends={[
                {
                    anchor: 'right',
                    direction: 'column',
                    itemDirection: 'left-to-right',
                    itemHeight: 12,
                    itemsSpacing: 10,
                    itemOpacity: 1,
                    itemTextColor: textColor.primary,
                    itemWidth: 50,
                    justify: false,
                    symbolBorderColor: borderColor.primary,
                    symbolBorderWidth: 0,
                    symbolShape: 'square',
                    symbolSize: 12,
                    translateX: 80,
                    translateY: 0
                }
            ]}
            margin={{ bottom: 10, left: 10, right: 150, top: 10 }}
            padAngle={1}
            sortByValue={true}
            theme={{
                axis: {
                    domain: { line: { stroke: bgColor.tertiary } },
                    ticks: { line: { stroke: bgColor.tertiary }, text: { fill: textColor.secondary, fontSize: 12 } }
                },
                grid: { line: { stroke: bgColor.tertiary } },
                labels: { text: { fontSize: 12 } },
                legends: { text: { fontSize: 12 } },
                tooltip: { container: { backgroundColor: bgColor.primary, color: textColor.primary, fontSize: 12 } }
            }}
        />
    );
}
