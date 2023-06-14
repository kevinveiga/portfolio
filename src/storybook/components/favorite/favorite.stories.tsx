import { Meta, StoryObj } from '@storybook/react';

import { IButton } from '@/interface';

import { Favorite } from '@/components/favorite/favorite';

export default {
    args: {
        active: true
    },
    component: Favorite,
    title: 'Components/Favorite'
} as Meta<IButton>;

export const FavoriteDefault: StoryObj<IButton> = {};
