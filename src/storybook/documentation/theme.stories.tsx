import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, Title1Docs, Title2Docs } from '@/styles/storybook';

function ThemeWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Theme</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>{`As configurações de tema estão no arquivo "src/styles/theme".`}</li>

        <li>O defaultTheme é para o tema escuro e o lightTheme é para o tema claro.</li>

        <li>{`Existem propriedades e suas subvariações, para acrescentar ou retirar é necessário alterar também a interface no arquivo "src/styled.d.ts".`}</li>
      </ListDocs>

      <Title2Docs>Exemplos</Title2Docs>

      <ListDocs>
        <li>Para usar o tema dentro de um componente de estilo:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`background-color: \${({ theme }): string => theme.bgColor.primary};
border: \${({ theme }): string => \`1px solid \${theme.borderColor.secondary}\`};
color: \${({ color, theme }): string => color || theme.textColor.secondary};`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Para usar o tema dentro de um componente do React:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`import { useTheme } from 'styled-components';

...

// CONTEXT
const { bgColor } = useTheme();

...

<Box backgroundColor={bgColor.tertiary} flex="1 1 auto" px={3} py={4}>`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          Styled Components Theme.{' '}
          <a href="https://styled-components.com/docs/advanced#theming" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/Theme'
} as Meta;

export const Theme: StoryObj = {
  render: () => <ThemeWithHooks />
};
