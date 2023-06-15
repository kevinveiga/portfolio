import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import yup from '@/helpers/yup';

import { Label, Select } from '@/components/form/form';
import { SelectCustom } from '@/components/form/formCustom';
import { FormStyled } from '@/components/form/formStyled';
import { OptionYear } from '@/components/form/selectOption';
import { SvgFilter } from '@/components/svg/svgStore';

import { Box } from '@/styles/flex';
import { Spacer } from '@/styles/layout';

function SelectWithHooks(): ReactElement {
  // VARIABLE
  const initialData: any = {
    select: '',
    'select-custom': ''
  };
  const optionsFilterType = [
    {
      label: 'all',
      value: 'all'
    },
    {
      label: 'last accessed',
      value: 'last-accessed'
    },
    {
      label: 'last finished',
      value: 'last-finished'
    }
  ];

  // VALIDATE
  const validationSchema = yup.object().shape({
    select: yup.string().required(),
    'select-custom': yup.string().required()
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
      <Label text="Select:" />

      <Select idInput="id-select" name="select" validationSchema={validationSchema}>
        <option value="">Ano</option>

        <OptionYear initialYear={2000} />
      </Select>

      <Spacer />

      <Label text="Select custom:" />

      <Box zIndex={2}>
        <SelectCustom
          idInput="id-select-custom"
          items={optionsFilterType}
          name="select-custom"
          selectLabel={optionsFilterType[0].label}
          selectValue={optionsFilterType[0].value}
          svgComponent={SvgFilter}
          validationSchema={validationSchema}
        />
      </Box>
    </FormStyled>
  );
}

export default {
  component: Select,
  title: 'Components/Form'
} as Meta;

export const SelectDefault: StoryObj = {
  render: () => <SelectWithHooks />
};
