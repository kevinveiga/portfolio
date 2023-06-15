import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InputDecrementIncrement, Label } from '@/components/form/form';
import { FormStyled } from '@/components/form/formStyled';

function InputDecrementIncrementWithHooks(): ReactElement {
  // VARIABLE
  const initialData: any = {
    'decrement-increment': 0
  };

  // FORM
  const handleSubmit = (): void => {
    return undefined;
  };

  return (
    <FormStyled initialData={initialData} onSubmit={handleSubmit}>
      <Label text="Decrement Increment:" />

      <InputDecrementIncrement idInput="id-decrement-increment" name="decrement-increment" />
    </FormStyled>
  );
}

export default {
  component: InputDecrementIncrement,
  title: 'Components/Form'
} as Meta;

export const InputDecrementIncrementDefault: StoryObj = {
  render: () => <InputDecrementIncrementWithHooks />
};
