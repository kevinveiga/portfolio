import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import yup from '@/helpers/yup';

import { Input, Label } from '@/components/form/form';
import {
  InputCep,
  InputCpf,
  InputCurrency,
  InputEmail,
  InputName,
  InputNumber,
  InputPhone
} from '@/components/form/formCustom';
import { FormStyled } from '@/components/form/formStyled';

import { Spacer } from '@/styles/layout';

function InputCustomWithHooks(): ReactElement {
  // VARIABLE
  const initialData: any = {
    cep: '',
    cpf: '',
    currency: '',
    email: '',
    name: '',
    number: '',
    phone: ''
  };

  // VALIDATE
  const validationSchema = yup.object().shape({
    cep: yup.string().min(9).required(),
    cpf: yup.string().min(14).required(),
    currency: yup.string().required(),
    email: yup.string().email().required(),
    name: yup.string().required(),
    number: yup.number().required(),
    phone: yup.string().min(14).max(15).required()
  });

  // FORM
  const handleSubmit = (formData: any): void => {
    const submit = async (): Promise<void> => {
      await validationSchema
        .validate(formData, {
          abortEarly: false
        })
        .catch((yupError: any) => {
          if (yupError instanceof yup.ValidationError) {
            const errorMessages: { [key: string]: any } = {};

            yupError.inner.forEach((item: any) => {
              errorMessages[item.path] = item.message;
            });
          }
        });
    };

    submit().catch(() => null);
  };

  return (
    <FormStyled initialData={initialData} onSubmit={handleSubmit}>
      <Label text="Cep:" />

      <InputCep idInput="id-cep" name="cep" validationSchema={validationSchema} />

      <Spacer />

      <Label text="Cpf:" />

      <InputCpf idInput="id-cpf" name="cpf" validationSchema={validationSchema} />

      <Spacer />

      <Label text="Currency:" />

      <InputCurrency idInput="id-currency" name="currency" validationSchema={validationSchema} />

      <Spacer />

      <Label text="Email:" />

      <InputEmail idInput="id-email" name="email" validationSchema={validationSchema} />

      <Spacer />

      <Label text="Name:" />

      <InputName idInput="id-name" name="name" validationSchema={validationSchema} />

      <Spacer />

      <Label text="Number:" />

      <InputNumber idInput="id-number" name="number" validationSchema={validationSchema} />

      <Spacer />

      <Label text="Phone:" />

      <InputPhone idInput="id-phone" name="phone" validationSchema={validationSchema} />
    </FormStyled>
  );
}

export default {
  component: Input,
  title: 'Components/Form'
} as Meta;

export const InputCustomDefault: StoryObj = {
  render: () => <InputCustomWithHooks />
};
