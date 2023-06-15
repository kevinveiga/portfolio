import { Meta, StoryObj } from '@storybook/react';

import { ModalConfirm } from '@/components/modal/modalConfirm';

export default {
  args: {
    message: 'Message'
  },
  component: ModalConfirm,
  title: 'Components/Modals'
} as Meta;

export const ModalConfirmDefault: StoryObj = {};
