import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Input, Label } from '@/components/form/form';
import { FormStyled } from '@/components/form/formStyled';

import { Spacer } from '@/styles/layout';

function InputWithHooks(): ReactElement {
  // VARIABLE
  const initialData: any = {
    input: ''
  };

  // FORM
  const handleSubmit = (): void => {
    return undefined;
  };

  return (
    <FormStyled initialData={initialData} onSubmit={handleSubmit}>
      <Label text="Normal input:" />

      <Input idInput="id-input" name="input" />

      <Spacer />
    </FormStyled>
  );
}

export default {
  component: Input,
  title: 'Components/Form'
} as Meta;

export const InputDefault: StoryObj = {
  render: () => <InputWithHooks />
};
