import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { IInputRadioItems } from '@/interface';

import { InputRadio, Label } from '@/components/form/form';
import { FormStyled } from '@/components/form/formStyled';

function InputRadioWithHooks(): ReactElement {
  // VARIABLE
  const initialData: any = {
    radio: 'value-2'
  };
  const itens: IInputRadioItems[] = [
    {
      id: '1',
      label: 'Label 1',
      value: 'value-1'
    },
    {
      id: '2',
      label: 'Label 2',
      value: 'value-2'
    },
    {
      id: '3',
      label: 'Label 3',
      value: 'value-3'
    }
  ];

  // FORM
  const handleSubmit = (): void => {
    return undefined;
  };

  return (
    <FormStyled initialData={initialData} onSubmit={handleSubmit}>
      <Label text="Radio:" />

      <InputRadio idInput="id-radio" items={itens} itemsDisplay="inline-block" name="radio" />
    </FormStyled>
  );
}

export default {
  component: InputRadio,
  title: 'Components/Form'
} as Meta;

export const InputRadioDefault: StoryObj = {
  render: () => <InputRadioWithHooks />
};
