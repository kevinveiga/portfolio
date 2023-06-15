import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, StrongDocs, Subtitle2Docs, Title1Docs, Title2Docs } from '@/styles/storybook';

function ReactHooksWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>React Hooks</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>Ordem de imports tanto na divisão por importância como em ordem alfabética. Ex:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`// REACT
import React from 'react';

// LIBRARY
import dayjs from 'dayjs';

// OTHERS
import { apiUrlLogin } from '@/configApi';
import { maskPhone } from '@/helpers/mask';
import { postFetch } from '@/services/fetch';
import { useSWRGetFetch } from '@/stores/fetch/useSWRGetFetch';

// COMPONENTS AND STYLED COMPONENTS OF COMPONENTS
import { DarkModeBtnStyled } from '@/components/layout/layoutStyled';
import { Modal } from '@/components/modal/modal';
import { ModalStyled } from '@/components/modal/modalStyled';
import { SvgArrowSelect } from '@/components/svg/svgStore';

// STYLED COMPONENTS OF COMMOM STYLES
import { Container, Main } from '@/styles/layout';

// IMAGE
import imageName from '@public/images/imageName.jpg';`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>Ordem de código dentro do componente. Ex:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`export default function ComponentName(): ReactElement {
// CONTEXT
const { setStateBreadcrumb } = useContext(AppContext);

// BREADCRUMB
useEffect(() => {
...
}, [setStateBreadcrumb]);

// VARIABLE
const initialData: IUsuario = {
...
};

// REF
const selectRef = useRef<HTMLSelectElement>(null);

// STATE
const [state1, setState1] = useState('');

// CUSTOM HOOK
const { stateTheme, toggleTheme } = useTheme();

// CONTEXT PROVIDER
const contextProvider = useMemo(
...
);

// USEEFFECT
useEffect(() => {
...
}, [input]);

// VALIDATE
const validationSchema = yup.object().shape({
...
});

// FORM
const handleSubmit = (formData: any): void => {
...
};

// FUNCTION
function handleButton(): Dispatch<any> {
  return dispatch(state1);
}

// RULE
if (state1) {
  return null;
}`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Padrões</Title2Docs>

      <ListDocs>
        <li>
          <StrongDocs>Não use const</StrongDocs> em componentes, custom hooks, reducers, ou seja, arquivos do React com
          a extensão <StrongDocs>.tsx</StrongDocs>, são declaradas como <StrongDocs>function</StrongDocs>, exceto nas
          funções de Data Fetching do NextJS. Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`function Home(): ReactElement {
...
}

export default Home;
------------------------------
export function useApp(): IAppContext {...}`}
        </SyntaxHighlighter>
      </BoxDocs>

      <ListDocs>
        <li>
          <StrongDocs>Use const</StrongDocs> em Styled Components e funções de JavaScript, ou seja, arquivos com a
          extensão <StrongDocs>.ts</StrongDocs>. Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`export const HomeStyled = styled.div\`...\`;
------------------------------
export const maskPhone = (value: string): IMask => {...}`}
        </SyntaxHighlighter>
      </BoxDocs>

      <BoxDocs>
        Olhando os exemplos mais novos, <StrongDocs>componentes são declarados como function</StrongDocs> e{' '}
        <StrongDocs>não const</StrongDocs>. O motivo principal do React estar usando function ao invés de declarar uma
        const, é que uma function funciona fora de ordem na chamada, e uma const precisa estar declarado anteriormente
        ao uso do mesmo. Um componente não é uma constante, e sim, uma função. Faz sentido usar const para funções
        anônimas, mas o componente por si só não é uma função anônima, e sim, uma função bem definida.
      </BoxDocs>

      <ListDocs>
        <li>
          {`Usar export default somente em componentes da pasta "src/pages", exceto em funções expecíficas, e usar no final do arquivo. Ex:`}
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`function Home({ Component, pageProps }: AppProps): ReactElement {
  ...
}

export default Home;
------------------------------
import * as yup from 'yup';

yup.setLocale({
  ...
});

export default yup;`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Boas práticas</Title2Docs>

      <ListDocs>
        <li>
          Quando for necessário alterar o valor de um state, <StrongDocs>usando o seu próprio valor</StrongDocs>. Ex:
          <Subtitle2Docs>{`setStateSearchChange((prevState) => !prevState)`}</Subtitle2Docs>
        </li>

        <li>
          Quando for usar a verificação de length no jsx, <StrongDocs>SEMPRE</StrongDocs> usar um operador de
          comparação. Ex:
          <Subtitle2Docs>{`stateNotifications.length > 0`}</Subtitle2Docs>
        </li>
      </ListDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          React Clean Code.{' '}
          <a
            href="https://javascript.plainenglish.io/6-important-tips-to-write-clean-react-code-5ef29d6a73a6"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Regras básicas.{' '}
          <a
            href="https://www.youtube.com/watch?v=lRWf4WjfsVI&list=PLFeoM_Vx7KVYNYb2RsyPS08biJd2t5cBC&index=41&ab_channel=Rocketseat"
            rel="noopener noreferrer"
            target="_blank"
          >
            (vídeo)
          </a>
        </li>

        <li>
          Nomeação de funções e propriedades.{' '}
          <a
            href="https://medium.com/javascript-in-plain-english/handy-naming-conventions-for-event-handler-functions-props-in-react-fc1cbb791364"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Usar ES6 default values e não defaultProps.{' '}
          <a
            href="https://medium.com/@matanbobi/react-defaultprops-is-dying-whos-the-contender-443c19d9e7f1"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Container / Presenter.
          <a
            href="https://itnext.io/best-practices-of-react-container-presenter-pattern-only-pros-know-33f2095647fa"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Async Await/Promises.{' '}
          <a
            href="https://blog.rocketseat.com.br/quando-utililzar-promises-e-async-await-no-useeffect-do-react/"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Quando usar memo.{' '}
          <a
            href="https://www.youtube.com/watch?v=sBA_SDhIPqQ&ab_channel=Rocketseat"
            rel="noopener noreferrer"
            target="_blank"
          >
            (vídeo)
          </a>
        </li>

        <li>
          Quando usar useCallback.{' '}
          <a
            href="https://www.youtube.com/watch?v=jMWNNSx-mcU&ab_channel=Rocketseat"
            rel="noopener noreferrer"
            target="_blank"
          >
            (vídeo)
          </a>
        </li>

        <li>
          Evitando Estados Derivados.
          <a
            href="https://www.youtube.com/watch?v=kCpca2z2cls&ab_channel=Rocketseat"
            rel="noopener noreferrer"
            target="_blank"
          >
            (vídeo)
          </a>
        </li>

        <li>
          Evitando renderizações desnecessárias.{' '}
          <a
            href="https://oieduardorabelo.medium.com/react-eliminando-problemas-de-performance-3afde2f106f3"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          Enganos que não se deve cometer no React.{' '}
          <a
            href="https://javascript.plainenglish.io/as-a-front-end-engineer-4-react-traps-you-should-know-about-62341e8b25f0"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link1)
          </a>{' '}
          <a
            href="https://blog.bitsrc.io/common-react-hooks-mistakes-every-developer-should-avoid-defd47d09d8c"
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
  title: 'Documentation/React Hooks'
} as Meta;

export const ReactHooks: StoryObj = {
  render: () => <ReactHooksWithHooks />
};
