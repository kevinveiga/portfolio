import { Meta, StoryObj } from '@storybook/react';

import { ICarousel } from '@/interface';

import { CarouselManager } from '@/components/carousel/carouselManager';

import dataProjectsFolders from '@/public/json/projects-folders.json';

export default {
    args: {
        data: dataProjectsFolders?.data,
        title: '',
        url: ''
    },
    component: CarouselManager,
    title: 'Components/Carousels'
} as Meta<ICarousel>;

export const CarouselManagerDefault: StoryObj<ICarousel> = {};
