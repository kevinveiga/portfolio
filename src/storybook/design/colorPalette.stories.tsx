import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Flex } from '@/styles/flex';
import { BoxColor, BoxDocs, Title1Docs, Title2Docs } from '@/styles/storybook';
import { P, Span } from '@/styles/text';
import { variable } from '@/styles/variable';

function ColorPaletteWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Color Palette</Title1Docs>

      <Title2Docs>Common Colors</Title2Docs>

      <Flex columnGap={variable.space.spacingSM}>
        {Object.entries(variable.color).map((item) => {
          return (
            <BoxDocs flexDirection="column" justifyContent="center" key={item[0]} width="200px">
              <BoxColor backgroundColor={item[1]} borderColor={variable.color.blackTransparent3} />

              <P textAlign="center">
                {item[0]}
                <br />
                {item[1]}
              </P>
            </BoxDocs>
          );
        })}
      </Flex>

      <Title2Docs>Chart Colors</Title2Docs>

      <Flex columnGap={variable.space.spacingSM}>
        {variable.colors.chart.map((item) => {
          return (
            <BoxDocs flexDirection="column" justifyContent="center" key={item} width="200px">
              <BoxColor backgroundColor={item} borderColor={variable.color.blackTransparent3} />

              <Span textAlign="center">{item}</Span>
            </BoxDocs>
          );
        })}
      </Flex>
    </>
  );
}

export default {
  title: 'Design/Color Palette'
} as Meta;

export const ColorPalette: StoryObj = {
  render: () => <ColorPaletteWithHooks />
};
