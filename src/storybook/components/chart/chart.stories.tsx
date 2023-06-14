import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { ChartBarHorizontal } from '@/components/chart/chartBarHorizontal';
import { ChartBarVertical } from '@/components/chart/chartBarVertical';
import { ChartLine } from '@/components/chart/chartLine';
import { ChartPie } from '@/components/chart/chartPie';

import { variable } from '@/styles/variable';

import dataChartBar from '@/public/json/chart-bar.json';
import dataChartLine from '@/public/json/chart-line.json';
import dataChartPie from '@/public/json/chart-pie.json';

export default {
    title: 'Components/Charts'
} as Meta;

export const ChartBarHorizontalDefault: StoryObj = {
    render: () => (
        <div style={{ height: '300px', width: '600px' }}>
            <ChartBarHorizontal data={dataChartBar} indexBy="country" keys={['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut']} />
        </div>
    )
};

export const ChartBarVerticalDefault: StoryObj = {
    render: () => (
        <div style={{ height: '300px', width: '600px' }}>
            <ChartBarVertical data={dataChartBar} indexBy="country" keys={['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut']} />
        </div>
    )
};

export const ChartLineDefault: StoryObj = {
    render: () => (
        <div style={{ height: '300px', width: '600px' }}>
            <ChartLine colors={variable.colors.chart} data={dataChartLine} id="id" />
        </div>
    )
};

export const ChartPieDefault: StoryObj = {
    render: () => (
        <div style={{ height: '300px', width: '600px' }}>
            <ChartPie data={dataChartPie} />
        </div>
    )
};
