import { Meta, StoryObj } from '@storybook/react';

import { IButton } from '@/interface';

import { Button } from '@/components/button/button';

export default {
  args: {
    text: 'Button',
    typeStyle: 'button'
  },
  argTypes: {
    typeStyle: {
      control: 'inline-radio'
    }
  },
  component: Button,
  title: 'Components/Buttons'
} as Meta<IButton>;

export const ButtonDefault: StoryObj<IButton> = {};

export const ButtonBorder: StoryObj<IButton> = {
  args: {
    text: 'Button Border',
    typeStyle: 'button-border'
  }
};

export const ButtonUnset: StoryObj<IButton> = {
  args: {
    text: 'Button Unset',
    typeStyle: 'button-unset'
  }
};
