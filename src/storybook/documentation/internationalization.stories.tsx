import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, StrongDocs, Subtitle2Docs, Title1Docs, Title2Docs } from '@/styles/storybook';

function InternationalizationWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Internationalization</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>
          {`Os textos de cada idioma estão na pasta "public/locales/[idioma]", onde "[idioma]" é a pasta com a sigla do idioma, `}
          <StrongDocs>NÃO UTILIZAR</StrongDocs> o caractere <StrongDocs>{`"-"`}</StrongDocs> e sim utilizar{' '}
          <StrongDocs>{`"_"`}.</StrongDocs>
        </li>

        <li>{`As configurações do i18next, estão no arquivo "src/helpers/i18next.ts".`}</li>

        <li>
          O arquivo <StrongDocs>app.json</StrongDocs> é onde estão os textos específicos do app, como por exemplo
          botões, menu, mensagens de erro. O arquivo <StrongDocs>glossary.json</StrongDocs> é onde estão os textos em
          comum, como por exemplo qualquer palavra que pode estar, ou não, no meio de qualquer texto.
        </li>
      </ListDocs>

      <Title2Docs>Padrôes</Title2Docs>

      <ListDocs>
        <li>O idioma padrão é o inglês [en].</li>

        <li>
          {`As "keys" dos objetos json devem ser em inglês. Ex:`}
          <Subtitle2Docs>{`"no data found": "nenhum dado encontrado"`}</Subtitle2Docs>
        </li>

        <li>
          As palavras devem começar com letra <StrongDocs>minúscula (exceto nome prórpio)</StrongDocs> e não devem
          terminar com caracteres como {`".", "?", etc…`}, esses caracteres devem ser incluídos separados no código. Se
          for necessário começar com a letra maiúscula, basta usar a função{' '}
          <StrongDocs>capitalizeFirstLetter</StrongDocs> ou o componente <StrongDocs>P</StrongDocs>, ou os componentes
          de <StrongDocs>título</StrongDocs>. Ex:
          <Subtitle2Docs>{`<Title3 fontWeight={700} mb={0}>{t('still have a question', { ns: 'glossary' })}?</Title3>`}</Subtitle2Docs>
        </li>

        <li>{`Para palavras com gênero e plural, usar "g" para gênero feminino e "p" para plural. Ex:`}</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`{
  "all": "todo",
  "all g": "toda",
  "all p": "todos",
  "all g p": "todas",
  ...
}`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Exemplos</Title2Docs>

      <ListDocs>
        <li>Usando React-i18next:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`import { useTranslation } from 'react-i18next';

...

// CONTEXT
const { t } = useTranslation();

...

<Title3 fontWeight={700} mb={0}>
  {t('still have a question', { ns: 'glossary' })}?
</Title3>`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Passando o idioma para a query do graphql:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`import { useTranslation } from 'react-i18next';

...

// CONTEXT
const { t, i18n } = useTranslation();

...

// CUSTOM HOOK
const { data, isLoading } = useSWRGetGraphql({
  graphqlQuery: productSlug ? queryProduct : '',
    graphqlVariables: { locale: [i18n.language], where: { slug: productSlug } } 14 });`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          i18next.{' '}
          <a href="https://www.i18next.com/" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          React-i18next.{' '}
          <a href="https://react.i18next.com/latest/using-with-hooks" rel="noopener noreferrer" target="_blank">
            (link1)
          </a>{' '}
          <a
            href="https://medium.com/@lucas_pinheiro/como-adicionar-internacionaliza%C3%A7%C3%A3o-i18n-na-sua-aplica%C3%A7%C3%A3o-react-a1ac4aea109d"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link2)
          </a>
        </li>

        <li>
          i18next - NextJS.{' '}
          <a href="https://nextjs.org/docs/advanced-features/i18n-routing" rel="noopener noreferrer" target="_blank">
            (link1)
          </a>
          <a
            href="https://blog.logrocket.com/complete-guide-internationalization-nextjs/"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link2)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/Internationalization'
} as Meta;

export const Internationalization: StoryObj = {
  render: () => <InternationalizationWithHooks />
};
