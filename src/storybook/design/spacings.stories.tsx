import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { Box } from '@/styles/flex';
import { BoxDocs, ListDocs, Subtitle2Docs, Title1Docs, Title2Docs } from '@/styles/storybook';
import { Table, Tbody, Td, Th, Thead, Tr } from '@/styles/table';
import { Span } from '@/styles/text';
import { variable } from '@/styles/variable';

function SpacingsWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Spacings</Title1Docs>

      <Title2Docs>Variables</Title2Docs>

      <BoxDocs>
        <Table>
          <Thead>
            <Tr>
              <Th>
                <Span>Variable</Span>
              </Th>

              <Th>
                <Span>Value</Span>
              </Th>

              <Th>
                <Span>Visual</Span>
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>variable.space.spacingXXS</Td>

              <Td>4px</Td>

              <Td>
                <Box
                  backgroundColor={variable.color.primary}
                  height={variable.space.spacingXXS}
                  width={variable.space.spacingXXS}
                />
              </Td>
            </Tr>

            <Tr>
              <Td>variable.space.spacingXS</Td>

              <Td>8px</Td>

              <Td>
                <Box
                  backgroundColor={variable.color.primary}
                  height={variable.space.spacingXS}
                  width={variable.space.spacingXS}
                />
              </Td>
            </Tr>

            <Tr>
              <Td>variable.space.spacingSM</Td>

              <Td>16px</Td>

              <Td>
                <Box
                  backgroundColor={variable.color.primary}
                  height={variable.space.spacingSM}
                  width={variable.space.spacingSM}
                />
              </Td>
            </Tr>

            <Tr>
              <Td>variable.space.spacingMD</Td>

              <Td>24px</Td>

              <Td>
                <Box
                  backgroundColor={variable.color.primary}
                  height={variable.space.spacingMD}
                  width={variable.space.spacingMD}
                />
              </Td>
            </Tr>

            <Tr>
              <Td>variable.space.spacingLG</Td>

              <Td>32px</Td>

              <Td>
                <Box
                  backgroundColor={variable.color.primary}
                  height={variable.space.spacingLG}
                  width={variable.space.spacingLG}
                />
              </Td>
            </Tr>

            <Tr>
              <Td>variable.space.spacingXL</Td>

              <Td>40px</Td>

              <Td>
                <Box
                  backgroundColor={variable.color.primary}
                  height={variable.space.spacingXL}
                  width={variable.space.spacingXL}
                />
              </Td>
            </Tr>

            <Tr>
              <Td>variable.space.spacingXXL</Td>

              <Td>48px</Td>

              <Td>
                <Box
                  backgroundColor={variable.color.primary}
                  height={variable.space.spacingXXL}
                  width={variable.space.spacingXXL}
                />
              </Td>
            </Tr>

            <Tr>
              <Td>variable.space.spacingXXXL</Td>

              <Td>56px</Td>

              <Td>
                <Box
                  backgroundColor={variable.color.primary}
                  height={variable.space.spacingXXXL}
                  width={variable.space.spacingXXXL}
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </BoxDocs>

      <Title2Docs>Styled System</Title2Docs>

      <ListDocs>
        <li>
          Valores do array usado pelo Styled System (são inteiros, mas são usados como px):
          <br />
          <Subtitle2Docs>[0, 4, 8, 16, 24, 32, 40, 48, 56, 64, 80, 100]</Subtitle2Docs>
        </li>
      </ListDocs>

      <ListDocs>
        <li>Exemplo de uso:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`<Box backgroundColor={variable.color.primary} mx={5} my={3} px={3} py={2}>
  <Box backgroundColor={variable.color.secondary} height="50px" width="50px" />
</Box>`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Resultado:</li>
      </ListDocs>

      <BoxDocs>
        <Box backgroundColor={variable.color.primary} mx={8} my={3} px={5} py={4}>
          <Box backgroundColor={variable.color.secondary} height="50px" width="50px" />
        </Box>
      </BoxDocs>
    </>
  );
}

export default {
  title: 'Design/Spacings'
} as Meta;

export const Spacings: StoryObj = {
  render: () => <SpacingsWithHooks />
};
