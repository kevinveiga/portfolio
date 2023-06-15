import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, StrongDocs, Title1Docs, Title2Docs } from '@/styles/storybook';

function FetchGraphQLWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Fetch - GraphQL</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>{`As querys do GraphQL estão no arquivo "src/services/graphqlQuery.ts".`}</li>

        <li>{`As mutations do GraphQL estão no arquivo "src/services/graphqlMutation.ts".`}</li>

        <li>
          No arquivo .env existem duas variáveis de ambiente: <StrongDocs>HYGRAPH_MUTATION_TOKEN</StrongDocs> (para os
          posts no Hygraph) e <StrongDocs>NEXT_PUBLIC_HYGRAPH_URL</StrongDocs> (para os gets do Hygraph).
        </li>
      </ListDocs>

      <Title2Docs>Padrões</Title2Docs>

      <ListDocs>
        <li>No Hygraph as models e fields devem usar o padrão de nomenclatura lowerCamelCase.</li>

        <li>
          {`O nome da variável de uma Query deve começar com "query", seguido do mesmo nome do objeto no Hygraph, já o nome da query e de sua função, devem ser o mesmo do objeto no Hygraph, porém, o nome da query deve ser na nomenclatura UpperCamelCase. Ex:`}
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`export const queryProduct = gql\`
  query Product($locale: [Locale!]! = [en], $where: ProductWhereUniqueInput!) {
    product(locales: $locale, where: $where) {...`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>
          O nome da variável de uma Mutation deve seguir o mesmo nome do objeto no Hygraph, assim como sua função,
          porém, o nome da mutation deve ser na nomenclatura UpperCamelCase. Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`export const updateQuestion = gql\`
  mutation UpdateQuestion($views: Int!, $id: ID!) {
    updateQuestion(data: { views: $views }, where: { id: $id }) {...`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Exemplos</Title2Docs>

      <ListDocs>
        <li>Usando em getStaticProps:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.productSlug as string;

  const data: { product: IProduct | null } = await getGraphql({ query: queryProduct, variables: { where: { slug: slug } } });

  const { product } = data;

  // Handle product slugs which don't exist in our CMS
  if (!product) {
    return {
      notFound: true
    };
  }

  // Cache response: dev = 1 minute (60 seconds), prod = 1 hour (60 seconds * 60 minutes)
  return {
    props: { product },
    revalidate: dev ? 60 : 60 * 60
  };
};`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Usando com o Custom Hook useSWRGetGraphql:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`const { data, isLoading } = useSWRGetGraphql({
  graphqlQuery: queryQuestionsPopular,
  graphqlVariables: { locale: [i18n.language], where: { ...where, views_gt: 0 } }
});

const questionsData: IQuestion[] = data?.questions;`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          GraphQL.{' '}
          <a href="https://graphql.org/code/#javascript" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          Hygraph.{' '}
          <a href="https://hygraph.com/docs" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/Fetch - GraphQL'
} as Meta;

export const FetchGraphQL: StoryObj = {
  render: () => <FetchGraphQLWithHooks />
};
