import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, Title1Docs, Title2Docs } from '@/styles/storybook';

function StyledComponentsWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Styled Components</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>{`Os Styled Components de uso geral estão na pasta "src/styles".`}</li>

        <li>Os Styled Components específicos do componente devem estar dentro da mesma pasta deste componente.</li>
      </ListDocs>

      <Title2Docs>Padrões</Title2Docs>

      <ListDocs>
        <li>{`Em nomes de arquivos e das declarações de Styled Components dentro da pasta "src/components", deve ser incluído o nome "Styled" no final. Ex:`}</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`Nome do arquivo: headerStyled.tsx
------------------------------
export const HeaderStyled = styled.header<IHeader>\`
  background-color: \${({ theme }): string => theme.bgColor?.primary};
  border-bottom: 1px solid \${({ theme }): string => theme.borderColor?.secondary};
  height: auto;
  width: 100%;
  z-index: 0;
\`;`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>
          Quando se deseja definir um valor default de uma propriedade que já está sendo usada pelo Styled System,
          colocar undefined no final da condição. Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`export const Spacer = styled.div<IStyledSystem>\`
  \${layout};

  \${({ height }): number | string | undefined => (height === undefined
    ? \`height: \${variable.space.spacingSM}\`
    : undefined)};`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>No uso de uma propriedade customizada, colocar undefined no final da condição. Ex:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`\${({ align }): string | undefined =>
  align === 'center'
    ? 'margin-left: auto; margin-right: auto; text-align: center;'
    : align === 'right'
    ? 'margin-left: auto; margin-right: 0; text-align: right;'
    : undefined};`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Sempre dar preferência para variáveis ou theme como valores nos estilos. Ex:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`background-color: \${({ backgroundColor, theme }): string => backgroundColor || theme.borderColor.secondary};
color: \${({ color, theme }): string => color || theme.textColor.secondary};
transition: color \${variable.animation.transition};`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Exemplos</Title2Docs>

      <ListDocs>
        <li>Com uma propriedade customizada lineColor:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`const title = css<ITextStyled>\`
...

  # Tipagem de retorno para usar estilo dentro da função
  \${({ lineColor }): any =>
    lineColor ?
      css\`
        &::after {
          background-color: \${lineColor};
          ...
        }
      \` : undefined};
\`;`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Usando as funções de gradiente:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`import { gradientDirection } from '@/styles/function';
...

export const DivComGradiente = styled.div\`
  height: 50px;
  width: 100px;

  \${gradientDirection({
    colorEnd: variable.color.blackTransparent5,
    colorEndPercent: '100%',
    colorStart: variable.color.blackTransparent1,
    colorStartPercent: '0',
    deg: '180deg'
  })};
\`;`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Com responsividade em propriedade do Styled Components:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`<MenuItemsStyled active={active} display={{ d: 'block', md: 'none' }}>
------------------------------
export const MenuItemsStyled = styled.nav<IActiveStyled>\`
  \${display}`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Com responsividade dentro do estilo:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`export const LayoutAdminLeftStyled = styled.div<IActiveStyled>\`
  \${flexbox};
  \${layout};
  \${space};

  background-color: \${({ theme }): string => theme.bgColor?.secondary};
  \${({ flexDirection }): string | undefined => (flexDirection === undefined ? 'flex-direction: column' : undef
  height: 100vh;
  transition: flex \${variable.animation.transitionFastCubic}, left \${variable.animation.transitionFast};
  z-index: 1;

  @media (max-width: \${variable.breakpoint.md}) {
    display: block;
    height: 100vh;
    left: \${({ active }): string => (active ? '-250px' : '0')};
    position: fixed;
    top: 0;
    width: 250px;
  }

  @media (min-width: \${variable.breakpoint.md}) {
    display: flex;
    flex: \${({ active }): string => (active ? '0 0 58px' : '0 0 250px')};
  }
\`;`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          Styled Components.{' '}
          <a href="https://www.styled-components.com/" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          Styled Components - Básico.{' '}
          <a
            href="https://blog.getty.io/desenvolvendo-apps-com-styled-components-85ec6880b194"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Styled Components - Avançado.{' '}
          <a href="https://www.robinwieruch.de/react-styled-components/" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          Styled Components - Melhores práticas do SCSS.{' '}
          <a
            href="https://blog.pagepro.co/2018/11/06/moving-best-scss-practices-to-styled-components-part-1/"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Styled Components - Do CSS para Styled Components.{' '}
          <a
            href="https://jsramblings.com/2017/10/29/migrating-to-styled-components-cheatsheet.html"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Styled System.{' '}
          <a href="https://styled-system.com/" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          Styled System - API.{' '}
          <a href="https://styled-system.com/api/" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          Styled System - Tabela de referência.{' '}
          <a href="https://styled-system.com/table" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          Styled System - Melhores práticas.{' '}
          <a
            href="https://medium.com/styled-components/build-better-component-libraries-with-styled-system-4951653d54ee"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Styled System - Responsivo.{' '}
          <a href="hhttps://styled-system.com/responsive-styles" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/Styled Components'
} as Meta;

export const StyledComponents: StoryObj = {
  render: () => <StyledComponentsWithHooks />
};
