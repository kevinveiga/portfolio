import { Meta, StoryObj } from '@storybook/react';

import { ILink } from '@/interface';

import { LinkTo } from '@/components/link/linkTo';

export default {
  args: {
    text: 'LinkTo'
  },
  component: LinkTo,
  title: 'Components/Links'
} as Meta<ILink>;

export const LinkToDefault: StoryObj<ILink> = {};
