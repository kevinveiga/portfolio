import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, Title1Docs, Title2Docs } from '@/styles/storybook';

function TypescriptWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Typescript</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>{`Se o retorno de um arquivo for um componente do React, a extenção do arquivo deve ser ".tsx", caso contrário deverá ser ".ts". Em nomes de interfaces, deve ser incluído o caractere "I" em maiúscula no começo.`}</li>

        <li>
          Não usar React.FC.{' '}
          <a
            href="https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Usar Function Declaration.{' '}
          <a
            href="https://blog.echobind.com/react-with-typescript-components-as-function-declarations-vs-function-expressions-e433ac8d6938"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>
      </ListDocs>

      <Title2Docs>Exemplos</Title2Docs>

      <ListDocs>
        <li>onClick:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`const handleClick = (e: MouseEvent<HTMLElement>): void => {
  console.log('> ', e);
};`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>onChange:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
  console.log('> ', e);
};`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Componente de estilo:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`export const Spacer = styled.div<IStyledSystem>\`
  \${layout};

  \${({ height }): number | string | undefined =>
    (height ===  undefined ? \`height: \${variable.space.spacingSM}\` : undefined)};
  \${({ width }): number | string | undefined =>
    (width === undefined  ? \`width: \${variable.space.spacingSM}\` : undefined)};
\`;

------------------------------

export const section = css<ILayoutStyled>\`
  \${space};

  height: auto;
  width: 100%;
  \${({ zIndex }): string | undefined =>
    (zIndex ? \`z-index: \${zIndex}\` : undefined)};
\`;`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          VS Code e TypeScript.{' '}
          <a href="https://code.visualstudio.com/docs/languages/typescript" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          Melhores práticas.{' '}
          <a
            href="https://javascript.plainenglish.io/clean-code-in-typescript-a183d43f3bf0"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Como usar Interface e ReactElement.{' '}
          <a
            href="https://thoughtbot.com/blog/type-safe-state-modeling-with-typescript-and-react-hooks"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Diferença entre ReactElement, ReactNode, JSX.Element.{' '}
          <a
            href="https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Declaration file.{' '}
          <a
            href="https://basarat.gitbook.io/typescript/type-system/intro/d.ts"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Componentização.{' '}
          <a
            href="https://medium.com/reactbrasil/trabalhando-com-componentiza%C3%A7%C3%A3o-no-react-typescript-e0aa8f5de5db"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          UseState.{' '}
          <a
            href="https://medium.com/ableneo/typing-of-react-hooks-in-typescript-947b200fa0b0"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Styled Components.{' '}
          <a href="https://styled-components.com/docs/api#typescript" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/Typescript'
} as Meta;

export const Typescript: StoryObj = {
  render: () => <TypescriptWithHooks />
};
