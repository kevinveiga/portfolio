import { Meta, StoryObj } from '@storybook/react';

import { ModalMessage } from '@/components/modal/modalMessage';

export default {
  args: {
    content: 'Content...',
    showTop: true,
    type: 'success'
  },
  component: ModalMessage,
  title: 'Components/Modals'
} as Meta;

export const ModalMessageDefault: StoryObj = {};
