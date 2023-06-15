import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { Box } from '@/styles/flex';
import { BoxDocs, ListDocs, Subtitle2Docs, Title1Docs, Title2Docs } from '@/styles/storybook';
import { Table, Tbody, Td, Th, Thead, Tr } from '@/styles/table';
import { Span } from '@/styles/text';
import { variable } from '@/styles/variable';

function BreakpointsWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Breakpoints</Title1Docs>

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
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>variable.breakpoint.xs</Td>

              <Td>540px</Td>
            </Tr>

            <Tr>
              <Td>variable.breakpoint.sm</Td>

              <Td>720px</Td>
            </Tr>

            <Tr>
              <Td>variable.breakpoint.md</Td>

              <Td>960px</Td>
            </Tr>

            <Tr>
              <Td>variable.breakpoint.lg</Td>

              <Td>1360px</Td>
            </Tr>

            <Tr>
              <Td>variable.breakpoint.xl</Td>

              <Td>1600px</Td>
            </Tr>
          </Tbody>
        </Table>
      </BoxDocs>

      <Title2Docs>Styled System</Title2Docs>

      <ListDocs>
        <li>
          Valores do objeto usado pelo Styled System:
          <br />
          <Subtitle2Docs>
            xs: variable.breakpoint.xs,
            <br />
            sm: variable.breakpoint.sm,
            <br />
            md: variable.breakpoint.md,
            <br />
            lg: variable.breakpoint.lg,
            <br />
            xl: variable.breakpoint.xl
          </Subtitle2Docs>
        </li>
      </ListDocs>

      <ListDocs>
        <li>Exemplo de uso: (Obs: {`"d"`} é o valor default ou o menor breakpoint)</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`<Box
  backgroundColor={variable.color.secondary}
  height="50px"
  width={{ d: '50px', xs: '150px', sm: '250px', md: '350px' }}
/>`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Resultado: (Obs: mude o tamanho da tela)</li>
      </ListDocs>

      <BoxDocs>
        <Box
          backgroundColor={variable.color.secondary}
          height="50px"
          width={{ d: '50px', xs: '150px', sm: '250px', md: '350px' }}
        />
      </BoxDocs>
    </>
  );
}

export default {
  title: 'Design/Breakpoints'
} as Meta;

export const Breakpoints: StoryObj = {
  render: () => <BreakpointsWithHooks />
};
