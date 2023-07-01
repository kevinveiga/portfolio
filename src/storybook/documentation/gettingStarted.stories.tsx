import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import {
  BoxDocs,
  ListDocs,
  SpacerDocs,
  StrongDocs,
  Subtitle1Docs,
  Subtitle2Docs,
  Title1Docs,
  Title2Docs
} from '@/styles/storybook';
import { P } from '@/styles/text';

function GettingStartedWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Getting Started</Title1Docs>

      <P>
        Documentação Front-end para os projetos em React, com a finalidade de manter a padronização, organização,
        metodologias e boas práticas no desenvolvimento.
      </P>

      <Title2Docs>Requisitos de instalação (No Linux - Debian)</Title2Docs>

      <Subtitle1Docs>GIT</Subtitle1Docs>
      <i>$ sudo apt install git-all</i>

      <SpacerDocs />

      <Subtitle1Docs>NodeJS</Subtitle1Docs>
      <i>$ sudo apt install nodejs</i>

      <SpacerDocs />

      <Subtitle1Docs>NVM</Subtitle1Docs>
      <i>$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash</i>

      <SpacerDocs />

      <Subtitle1Docs>Yarn</Subtitle1Docs>
      <i>$ npm install -g yarn</i>

      <SpacerDocs />

      <Subtitle1Docs>VS Code</Subtitle1Docs>
      <i>
        <a href="https://code.visualstudio.com/docs/setup/linux">Link</a>
      </i>

      <Title2Docs>Configurações do VS Code</Title2Docs>

      <Subtitle1Docs>Incluir no arquivo settings.json:</Subtitle1Docs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"editor.formatOnSave": true,
"files.eol": "\\n",
"files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
},
"git.autofetch": true,
"javascript.updateImportsOnFileMove.enabled": "always",
"typescript.updateImportsOnFileMove.enabled": "always"`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Subtitle1Docs>Instalar as extensões:</Subtitle1Docs>

      <ListDocs>
        <li>EditorConfig (nome no VS Code: EditorConfig for VS Code)</li>

        <li>ESLint (nome no VS Code: ESLint)</li>

        <li>Prettier (nome no VS Code: Prettier - Code formatter)</li>

        <li>Styled Components (nome no VS Code: styled-components.vscode-styled-components)</li>
      </ListDocs>

      <Title2Docs>Padrões de nomenclatura</Title2Docs>

      <Subtitle1Docs>Idioma:</Subtitle1Docs>

      <ListDocs>
        <li>Inglês em todo o projeto</li>
      </ListDocs>

      <Subtitle1Docs>Nomes no singular:</Subtitle1Docs>

      <ListDocs>
        <li>
          {`Todas as pastas, exceto as pastas na raiz de "src".`}
          <br />
          <Subtitle2Docs>{`Ex: "src/pages";`}</Subtitle2Docs>
        </li>

        <li>
          {`Nomes de arquivos em geral, exceto arquivos específicos dentro das pastas em "src/pages" e "src/styles/pages".`}
          <br />
          <Subtitle2Docs>{`Ex: "src/pages/noticia.tsx", "src/pages/noticias.tsx", "src/styles/pages/homeStyled.ts".`}</Subtitle2Docs>
        </li>
      </ListDocs>

      <Subtitle1Docs>Nomes no plural:</Subtitle1Docs>

      <ListDocs>
        <li>{`Todas as pastas na raiz de "src";`}</li>

        <li>
          {`Nomes de arquivos específicos, como por exemplo, que trazem uma lista de dados.`}
          <br />
          <Subtitle2Docs>{`Ex: "src/pages/noticias.tsx", "src/styles/pages/noticiasStyled.ts".`}</Subtitle2Docs>
        </li>
      </ListDocs>

      <Subtitle1Docs>lowerCamelCase:</Subtitle1Docs>

      <ListDocs>
        <li>
          {`Pastas, nomes de arquivos, rotas dinâmicas do NextJS, custom hooks, variáveis, funções, propriedades, métodos.`}
          <br />
          <Subtitle2Docs>{`Ex: useAuth(), functionName.`}</Subtitle2Docs>
        </li>
      </ListDocs>

      <Subtitle1Docs>UpperCamelCase:</Subtitle1Docs>

      <ListDocs>
        <li>
          {`Nomes dos componentes, nomes de styled components, imports, interfaces.`}
          <br />
          <Subtitle2Docs>{`Ex: Home(), AuthProvider().`}</Subtitle2Docs>
        </li>
      </ListDocs>

      <Subtitle1Docs>spinal-case:</Subtitle1Docs>

      <ListDocs>
        <li>
          {`Nomes de arquivos dentro da pasta "src/pages", nomes de arquivos de imagens ou svgs, nomes de classes CSS.`}
          <br />
          <Subtitle2Docs>{`Ex: "src/pages/fale-conosco.tsx", "public/images/banner-principal.jpg", "public/svgs/svg-user.svg", ".has-value";`}</Subtitle2Docs>
        </li>

        <li>
          {`Com a exceção de rotas dinâmicas.`}
          <br />
          <Subtitle2Docs>{`Ex: [productSlug], [subProductSlug].tsx.`}</Subtitle2Docs>
        </li>
      </ListDocs>

      <Title2Docs>Organização de pastas</Title2Docs>

      <Subtitle1Docs>PUBLIC:</Subtitle1Docs>

      <ListDocs>
        <li>
          images:
          <br />
          <Subtitle2Docs>Imagens do projeto.</Subtitle2Docs>
        </li>

        <li>
          json:
          <br />
          <Subtitle2Docs>Arquivos json normalmente usados para mock.</Subtitle2Docs>
        </li>

        <li>
          locales:
          <br />
          <Subtitle2Docs>Pastas e arquivos de idiomas.</Subtitle2Docs>
        </li>
      </ListDocs>

      <Subtitle1Docs>SRC:</Subtitle1Docs>

      <ListDocs>
        <li>
          components:
          <br />
          <Subtitle2Docs>
            Componentes de uso em geral no projeto e componentes de estilo específicos desses componentes.
          </Subtitle2Docs>
        </li>

        <li>
          helpers:
          <br />
          <Subtitle2Docs>Funções úteis de uso em geral no projeto.</Subtitle2Docs>
        </li>

        <li>
          pages:
          <br />
          <Subtitle2Docs>Arquitetura do NextJS.</Subtitle2Docs>
        </li>

        <li>
          services:
          <br />
          <Subtitle2Docs>Funções de requisição que utilizam o Axios e configuração de middleware.</Subtitle2Docs>
        </li>

        <li>
          stores:
          <br />
          <Subtitle2Docs>Actions, contexts, reducers e custom hooks.</Subtitle2Docs>
        </li>

        <li>
          styles:
          <br />
          <Subtitle2Docs>Componentes de estilo de uso geral do projeto.</Subtitle2Docs>
        </li>
      </ListDocs>

      <Title2Docs>Ambiente de desenvolvimento</Title2Docs>

      <ListDocs>
        <li>
          Na primeira vez ou quando for incluída uma nova biblioteca:
          <br />
          <i>$ yarn install</i>
        </li>

        <li>
          Iniciar ambiente de desenvolvimento:
          <br />
          <i>$ yarn dev</i>
        </li>

        <li>
          Testar ambiente de produção:
          <br />
          <i>
            $ yarn build
            <br />
            e depois:
            <br />$ yarn start
          </i>
        </li>

        <li>
          Testar verificação do Prettier:
          <br />
          <i>$ yarn prettier</i>
        </li>

        <li>
          Testar verificação do Lint:
          <br />
          <i>$ yarn lint</i>
        </li>

        <li>
          Atualizar dependências:
          <br />
          <i>$ yarn upgrade-interactive --latest</i>
        </li>
      </ListDocs>

      <Title2Docs>Git</Title2Docs>

      <ListDocs>
        <li>
          <StrongDocs>SEMPRE</StrongDocs> manter a branch da tarefa atualizada.
        </li>

        <li>
          Maneira correta de fazer merge remotamente:
          <br />
          <Subtitle2Docs>Primeiro esteja na branch que vai receber o merge:</Subtitle2Docs>
          <i>$ git checkout {`<nome_branch>`}</i>
          <Subtitle2Docs>Depois faça o merge usando origin:</Subtitle2Docs>
          <i>$ git merge origin dev</i>
        </li>
      </ListDocs>

      <Title2Docs>Boas práticas</Title2Docs>

      <ListDocs>
        <li>
          {`Funções de JavaScript compartilhadas estão na pasta "src/helpers", verifique se já não existe uma função para o que precisa ser feito, evite código duplicado.`}
        </li>

        <li>
          Coloque nomes de maneira que façam sentido nas variáveis, funções, componentes, etc, não utilize nomes como:
          shortDate2, shortDate3. De preferência para seguir a mesma regra de outras coisas que já existem no projeto.
        </li>
      </ListDocs>

      <Title2Docs>Processos no desenvolvimento do código</Title2Docs>

      <ListDocs>
        <li>
          Responsividade básica:
          <br />
          <Subtitle2Docs>
            O código deve ser pensado para atender pelo menos a responsividade básica, a principal forma de fazer isso é
            utilizando o Flex, para ajustes finos pode ser usado a responsividade na propriedade do componente de estilo
            ou dentro do estilo.
          </Subtitle2Docs>
        </li>

        <li>
          Uso de temas:
          <br />
          <Subtitle2Docs>{`Os estilos de CSS devem seguir as regras de utilização de temas, ou seja, se uma cor pode ter sua variação de tema, como por exemplo um fundo que no tema escuro tem a cor rgba(42, 45, 49, 1) e no tema claro tem a cor rgba(255, 255, 255, 1), então este estilo não pode ter uma cor fixa.`}</Subtitle2Docs>
        </li>

        <li>
          Idiomas:
          <br />
          <Subtitle2Docs>
            Deve ser utilizado o i18Next em todos os textos que podem ter alteração de idioma.
          </Subtitle2Docs>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/Getting Started'
} as Meta;

export const GettingStarted: StoryObj = {
  render: () => <GettingStartedWithHooks />
};
