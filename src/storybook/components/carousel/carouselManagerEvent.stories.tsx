import { Meta, StoryObj } from '@storybook/react';

import { ICarousel } from '@/interface';

import { CarouselManagerEvent } from '@/components/carousel/carouselManagerEvent';

import dataProjectsFolders from '@/public/json/projects-folders.json';

export default {
    args: {
        data: dataProjectsFolders?.data,
        title: '',
        url: ''
    },
    component: CarouselManagerEvent,
    title: 'Components/Carousels'
} as Meta<ICarousel>;

export const CarouselManagerEventDefault: StoryObj<ICarousel> = {};
