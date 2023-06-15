import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { ModalInfo } from '@/components/modal/modalInfo';

export default {
  args: {
    content: (
      <div style={{ padding: '15px' }}>
        <p>Modal info</p>
        <p>Content...</p>
      </div>
    )
  },
  component: ModalInfo,
  title: 'Components/Modals'
} as Meta;

export const ModalInfoDefault: StoryObj = {};
