import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, SpacerDocs, StrongDocs, Title1Docs, Title2Docs } from '@/styles/storybook';
import { P } from '@/styles/text';

function NextJSWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>NextJS</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>{`As regras de autenticação e redirecionamento estão no arquivo "src/middleware.ts".`}</li>
      </ListDocs>

      <Title2Docs>Padrôes</Title2Docs>

      <ListDocs>
        <li>
          Ao utilizar qualquer coisa que dependa do navegador, ex: window.localStorage, <StrongDocs>SEMPRE</StrongDocs>{' '}
          usar as verificações. Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`// React
if (stateIsServer) {
  return null;
}

// JavaScript
if (!isServer()) {
  window.localStorage.removeItem(storageName);
}`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Dicas</Title2Docs>

      <ListDocs>
        <li>
          No NextJS - Data Fetching{' '}
          <a href="https://nextjs.org/docs/basic-features/data-fetching" rel="noopener noreferrer" target="_blank">
            (link)
          </a>{' '}
          são utilizadas estratégias diferentes para trabalhar com dados, é <StrongDocs>IMPORTANTE</StrongDocs> saber
          usar corretamente cada uma delas, veja a explicação{' '}
          <a
            href="https://www.youtube.com/watch?v=u1kCtkVR7cE&list=RDCMUCSfwM5u0Kce6Cce8_S72olg&start_radio=1&t=4s&ab_channel=Rocketseat"
            rel="noopener noreferrer"
            target="_blank"
          >
            (vídeo)
          </a>
          .
          <SpacerDocs />
          <P>
            <StrongDocs>(SSG) getStaticProps:</StrongDocs> Para gerar páginas estáticas em rotas sem parâmetros. Obs:
            Deve ser usado o revalidate para atualizar os dados.
          </P>
          <P>
            <StrongDocs>(SSG | ISR) getStaticPaths:</StrongDocs> Para gerar páginas estáticas em rotas dinâmicas com
            parâmetros, é utilizado junto com getStaticProps. Para usar ISR, o fallback deve ser true. Obs: Deve ser
            usado o revalidate para atualizar os dados.
          </P>
          <P>
            <StrongDocs>(SSR) getServerSideProps:</StrongDocs> Faz uma nova requisição a cada acesso.
          </P>
        </li>
      </ListDocs>

      <ListDocs>
        <li>
          O <StrongDocs>NextJS - Dynamic Import</StrongDocs>{' '}
          <a href="https://nextjs.org/docs/advanced-features/dynamic-import" rel="noopener noreferrer" target="_blank">
            (link)
          </a>{' '}
          é usado para dividir o código JavaScript, melhorando a performance, também é bem útil para evitar problemas de
          componentes que não devem ser renderizados no lado do servidor (<StrongDocs>SSR</StrongDocs>). Um cenário onde
          é adequada a utilização, é em condições de exibição ou não de componentes. Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`import dynamic from 'next/dynamic';

import { Modal } from '@/components/modal/modal';

...

// DYNAMIC
const ModalDynamic = dynamic<any>(() => import('@/components/modal/modal')
  .then((module) => module.Modal), { ssr: false }) as typeof Modal;

...

{stateModalMessage ? (
  <ModalMessageDynamic setActive={setStateModalMessage}
    type={stateModalMessage?.type} zIndex={15} {...stateModalMessage} />
) : null}`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          NextJS com TypeScript, ESLint e Styled Components.{' '}
          <a
            href="https://www.youtube.com/watch?v=1nVUfZg2dSA&list=PLFeoM_Vx7KVYNYb2RsyPS08biJd2t5cBC&index=27&ab_channel=Rocketseat"
            rel="noopener noreferrer"
            target="_blank"
          >
            (vídeo)
          </a>
        </li>

        <li>
          SSG e ISR.{' '}
          <a
            href="https://www.youtube.com/watch?v=u1kCtkVR7cE&list=RDCMUCSfwM5u0Kce6Cce8_S72olg&start_radio=1&t=4s&ab_channel=Rocketseat"
            rel="noopener noreferrer"
            target="_blank"
          >
            (vídeo)
          </a>
        </li>

        <li>
          Consumindo APIs com SWR.{' '}
          <a
            href="https://www.youtube.com/watch?v=aSXwLUSbwf4&ab_channel=DanielBerg"
            rel="noopener noreferrer"
            target="_blank"
          >
            (vídeo)
          </a>
        </li>

        <li>
          Link.{' '}
          <a href="https://nextjs.org/docs/api-reference/next/link" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          Route.{' '}
          <a
            href="https://www.freecodecamp.org/news/routing-in-nextjs-beginners-guide/"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          useRouter.{' '}
          <a href="https://nextjs.org/docs/api-reference/next/router" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          Dark Theme.{' '}
          <a
            href="https://blog.logrocket.com/theming-in-next-js-with-styled-components-and-usedarkmode/"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Image.{' '}
          <a href="https://nextjs.org/docs/basic-features/image-optimization" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          Browser object.{' '}
          <a
            href="https://dev.to/vvo/how-to-solve-window-is-not-defined-errors-in-react-and-next-js-5f97"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/NextJS'
} as Meta;

export const NextJS: StoryObj = {
  render: () => <NextJSWithHooks />
};
