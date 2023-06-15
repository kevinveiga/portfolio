import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Textarea, Label } from '@/components/form/form';
import { FormStyled } from '@/components/form/formStyled';

function TextareaWithHooks(): ReactElement {
  // VARIABLE
  const initialData: any = {
    textarea: ''
  };

  // FORM
  const handleSubmit = (): void => {
    return undefined;
  };

  return (
    <FormStyled initialData={initialData} onSubmit={handleSubmit}>
      <Label text="Textarea:" />

      <Textarea idInput="id-textarea" name="textarea" />
    </FormStyled>
  );
}

export default {
  component: Textarea,
  title: 'Components/Form'
} as Meta;

export const TextareaDefault: StoryObj = {
  render: () => <TextareaWithHooks />
};
