import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Modal } from '@/components/modal/modal';

export default {
  args: {
    content: <div style={{ padding: '10px 15px' }}>Modal content</div>,
    maxWidth: '300px'
  },
  component: Modal,
  title: 'Components/Modals'
} as Meta;

export const ModalDefault: StoryObj = {};
