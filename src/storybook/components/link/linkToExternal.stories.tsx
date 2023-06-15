import { Meta, StoryObj } from '@storybook/react';

import { ILinkExternal } from '@/interface';

import { LinkToExternal } from '@/components/link/linkToExternal';

export default {
  args: {
    text: 'LinkToExternal'
  },
  component: LinkToExternal,
  title: 'Components/Links'
} as Meta<ILinkExternal>;

export const LinkToExternalDefault: StoryObj<ILinkExternal> = {};
