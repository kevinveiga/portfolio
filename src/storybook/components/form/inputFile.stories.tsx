import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InputFile, InputFileThumbnail, Label, LabelFile } from '@/components/form/form';
import { FormStyled, LabelFileThumbnailStyled } from '@/components/form/formStyled';
import { SvgThumbnail } from '@/components/svg/svgStore';

import { Spacer } from '@/styles/layout';

function InputFileWithHooks(): ReactElement {
  // FORM
  const handleSubmit = (): void => {
    return undefined;
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label text="Checkbox:" />

      <InputFile idInput="id-checkbox" label="Checkbox" name="checkbox" />

      <Spacer />

      <Label text="File Thumbnail:" />

      <LabelFile component={LabelFileThumbnailStyled} forLabel="id-file-thumbnail">
        <SvgThumbnail />
      </LabelFile>

      <InputFileThumbnail idInput="id-file-thumbnail" name="file-thumbnail" />
    </FormStyled>
  );
}

export default {
  component: InputFile,
  title: 'Components/Form'
} as Meta;

export const InputFileDefault: StoryObj = {
  render: () => <InputFileWithHooks />
};
