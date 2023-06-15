import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, Title1Docs, Title2Docs } from '@/styles/storybook';

function FetchAxiosWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Fetch - Axios</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>{`As funções que utilizam o Axios estão no arquivo "src/services/fetch.ts".`}</li>

        <li>{`As configurações de interceptor do Axios estão no arquivo "src/stores/axiosInterceptor/useAxiosInterceptor.ts". O custom hook de utilização do SWR está no arquivo "src/stores/fetch/useSWRGetFetch".`}</li>

        <li>
          {`No SWR é utilizado o SWRConfig `}{' '}
          <a href="https://swr.vercel.app/pt-BR/docs/global-configuration" rel="noopener noreferrer" target="_blank">
            (link)
          </a>{' '}
          {`, a sua configuração está no arquivo "src/stores/page/usePage.tsx".`}
        </li>
      </ListDocs>

      <Title2Docs>Padrões</Title2Docs>

      <ListDocs>
        <li>
          O token da requisição é configurado no interceptor do Axios, mas é necessário passar o token também na função
          getFetch, por causa do SWR que precisa do token em sua utilização.
        </li>
      </ListDocs>

      <Title2Docs>Exemplos</Title2Docs>

      <ListDocs>
        <li>Usando useSWRGetFetch:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`import { apiUrlUsuarios } from '@/configApi';
import { useSWRGetFetch } from '@/stores/fetch/useSWRGetFetch';

...

// CUSTOM HOOK
const { data: usuarios, mutate } = useSWRGetFetch({
  apiParams: { ...stateFilter, ...statePagination },
  apiUrl: apiUrlUsuarios
});`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Usando postFetch do Axios:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`postFetch({ fetchData: formData, url: apiUrlAuth })
  .then((response: Record<string, any>) => {
    const { data: { message = '', user = {} } = {}, status = 0 } =  response;

    if (status === 200) {
      // Stores user information
      setStateAuth(JSON.stringify(user));

      // Router redirect
      router.push(redirectToUrl()).catch(() => null);
    } else {
      setStateModalMessage({ content: ErrorMessage(message),  type: 'error' });
    }
  })
  .catch((error) => {
    const { response: { data: { message = '' } = {} } = {} } =  error;

    setStateModalMessage({ content: ErrorMessage(message), type:  'error' });
  });

formRef.current?.setErrors({});`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          Axios.{' '}
          <a href="https://axios-http.com/ptbr/docs/intro" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          SWR.{' '}
          <a href="https://swr.vercel.app/pt-BR/docs/getting-started" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/Fetch - Axios'
} as Meta;

export const FetchAxios: StoryObj = {
  render: () => <FetchAxiosWithHooks />
};
