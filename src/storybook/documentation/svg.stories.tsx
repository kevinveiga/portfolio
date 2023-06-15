import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, SpacerDocs, Subtitle2Docs, Title1Docs, Title2Docs } from '@/styles/storybook';
import { P } from '@/styles/text';

function SVGWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>SVG</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>{`Os componentes de svgs estão na pasta "src/components/svg".`}</li>
      </ListDocs>

      <Title2Docs>Exemplos</Title2Docs>

      <ListDocs>
        <li>{`Para criar um componente de svg, basta colocar os valores da viewBox e o(s) elemento(s) path. Ex:`}</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`export function SvgPin({ ...props }: ISvgStyled): ReactElement {
  return (
    <SvgStyled {...props} viewBox="0 0 12 16" xmlns="http://www.w3. org/2000/svg">
      <path d="M6 16s6-5.69 6-10A6 6 0 0 0 0 6c0 4.31 6 10 6  10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </SvgStyled>
  );
}`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Dicas</Title2Docs>

      <ListDocs>
        <li>Erro com height ou width responsivo do Styled System:</li>
      </ListDocs>

      <P>
        Um erro no console dos navegadores aparece quando se usa o objeto de responsividade do Styled System na
        propriedade height ou width no componente de svg. Ex:
      </P>

      <Subtitle2Docs>{`height={{ d: '18px', md: '28px' }}`}</Subtitle2Docs>

      <P>
        Para evitar este tipo de erro deve-se colocar a propriedade height ou width no elemento pai ao invés do próprio
        componente de svg.
      </P>

      <Title2Docs>Otimização</Title2Docs>

      <ListDocs>
        <li>
          Limpar código desnecessário, converter stroke para path, combinar paths quando possível, deixar com o fill em
          default, tirar sobras da viewbox do svg, entre outras otimizações, tudo isso pode ser feito com o programa
          Inkscape{' '}
          <a href="https://inkscape.org/release/inkscape-1.2.2/" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
          , abaixo os passos para otimização:
        </li>
      </ListDocs>

      <Subtitle2Docs>
        1. Na aba Edit, abrir a janela XML editor, para poder visualizar a estrutura do svg, e na aba Object abrir a
        janela Fill and Stroke, para poder visualizar os preenchimentos de Fill e Stroke.
        <br />
        2. Selecionar todo o svg e desagrupar o máximo possível usando as teclas ctrl + shift + g.
        <br />
        3. Converter os Strokes ou Fonts para Paths.
        <br />
        4. Com o svg todo selecionado vá na aba Path e use a opção Union. (Usar nos Paths que são da mesma cor se deseja
        manter Paths com cores diferentes. Caso ocorra algum problema com o svg, verifique se os Strokes foram
        convertidos para Paths).
        <br />
        5. Selecionar todo o svg novamente e na aba Edit use o Resize Page to Selection.
        <br />
        6. Para salvar use a opção Save As e use Plain svg.
      </Subtitle2Docs>

      <SpacerDocs />

      <ListDocs>
        <li>
          Depois das otimizações no Inkscape, colocar o arquivo no site SvgOmg{' '}
          <a href="https://jakearchibald.github.io/svgomg/">(link)</a>, e use as seguintes configurações:
        </li>
      </ListDocs>

      <Subtitle2Docs>
        1. Em Precision use o valor 2.
        <br />
        2. Marque a opção Style to attributes.
        <br />
        3. Marque a opção Prefer viewBox to width/height.
      </Subtitle2Docs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          Inkscape.{' '}
          <a href="https://inkscape.org/release/inkscape-1.2.2/" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          SvgOmg.{' '}
          <a href="https://jakearchibald.github.io/svgomg/" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/SVG'
} as Meta;

export const SVG: StoryObj = {
  render: () => <SVGWithHooks />
};
