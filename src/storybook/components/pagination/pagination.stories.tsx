import { Meta, StoryObj } from '@storybook/react';

import { Pagination } from '@/components/pagination/pagination';

export default {
  args: {
    currentPage: 1,
    dataPerPage: 1,
    paginate: (): any => null,
    totalData: 5
  },
  component: Pagination,
  title: 'Components/Pagination'
} as Meta;

export const PaginationDefault: StoryObj = {};
