import { Meta, StoryObj } from '@storybook/react';

import { Progress } from '@/components/progress/progress';

export default {
  args: {
    progressPercent: 37
  },
  component: Progress,
  title: 'Components/Progress'
} as Meta;

export const ProgressDefault: StoryObj = {};
