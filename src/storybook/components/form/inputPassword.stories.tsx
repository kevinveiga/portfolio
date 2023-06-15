import React, { ReactElement, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import yup from '@/helpers/yup';

import { Label } from '@/components/form/form';
import { InputPassword, InputPasswordConfirm } from '@/components/form/formCustom';
import { FormStyled } from '@/components/form/formStyled';

import { Spacer } from '@/styles/layout';

function InputPasswordWithHooks(): ReactElement {
  // VARIABLE
  const initialData: any = {
    password: ''
  };

  // STATE
  const [stateInputPassword, setStateInputPassword] = useState('');

  // VALIDATE
  const validationSchema = yup.object().shape({
    password: yup.string().min(4).max(50).required(),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), stateInputPassword], 'passwords must match')
      .required()
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
      <Label text="Password:" />

      <InputPassword
        cbFunction={setStateInputPassword}
        idInput="id-password"
        name="password"
        validationSchema={validationSchema}
      />

      <Spacer />

      <Label text="Password Confirm:" />

      <InputPasswordConfirm
        idInput="id-confirm-password"
        inputPassword={stateInputPassword}
        name="passwordConfirm"
        validationSchema={validationSchema}
      />
    </FormStyled>
  );
}

export default {
  component: InputPassword,
  title: 'Components/Form'
} as Meta;

export const InputPasswordDefault: StoryObj = {
  args: {
    inputPassword: ''
  },
  render: () => <InputPasswordWithHooks />
};
