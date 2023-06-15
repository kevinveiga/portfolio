import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InputCheckbox, Label } from '@/components/form/form';
import { FormStyled } from '@/components/form/formStyled';

function InputCheckboxWithHooks(): ReactElement {
  // FORM
  const handleSubmit = (): void => {
    return undefined;
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label text="Checkbox:" />

      <InputCheckbox idInput="id-checkbox" label="Checkbox" name="checkbox" />
    </FormStyled>
  );
}

export default {
  component: InputCheckbox,
  title: 'Components/Form'
} as Meta;

export const InputCheckboxDefault: StoryObj = {
  render: () => <InputCheckboxWithHooks />
};
