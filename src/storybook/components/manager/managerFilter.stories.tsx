import { Meta, StoryObj } from '@storybook/react';

import { IManagerFilter } from '@/interface';

import { ManagerFilter } from '@/components/manager/managerFilter';

export default {
    args: {
        handleSubmit: () => null,
        id: 'id',
        ref: null,
        searchPlaceholder: 'search for'
    },
    component: ManagerFilter,
    title: 'Components/Manager'
} as Meta<IManagerFilter>;

export const ManagerFilterDefault: StoryObj<IManagerFilter> = {};
