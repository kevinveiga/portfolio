import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, StrongDocs, Subtitle2Docs, Title1Docs, Title2Docs } from '@/styles/storybook';

function AuthenticationWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Authentication</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>{`As regras de autenticação e redirecionamento estão no arquivo "src/middleware.ts".`}</li>

        <li>
          {`As configurações do NextAuth estão no arquivo "src/pages/api/auth/[…nextauth].ts".`}
          <Subtitle2Docs>
            - <StrongDocs>Callbacks:</StrongDocs> Para controlar ou alterar dados em ações do NextAuth.
            <br />- <StrongDocs>Pages:</StrongDocs> Para usar páginas personalizadas de autenticação, pois o NextAuth
            cria suas próprias páginas.
            <br />- <StrongDocs>Providers:</StrongDocs> Para configurar os tipos de autenticação.
            <br />- <StrongDocs>Session:</StrongDocs> Para configurar a sessão.
          </Subtitle2Docs>
        </li>
      </ListDocs>

      <Title2Docs>Padrões</Title2Docs>

      <ListDocs>
        <li>
          Ao utilizar as funções <StrongDocs>signIn()</StrongDocs> ou <StrongDocs>signOut()</StrongDocs>, usar a opção{' '}
          <StrongDocs>{`"redirect"`}</StrongDocs> com o valor <StrongDocs>{`"false"`}</StrongDocs> e na opção{' '}
          <StrongDocs>{`"callbackUrl"`}</StrongDocs> usar a função <StrongDocs>redirectUrl()</StrongDocs> que está em{' '}
          {`"src/helpers/redirect.ts"`}, nessa função usar o valor que vem de <StrongDocs>router.query</StrongDocs> do
          useRouter. Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`import { useRouter } from 'next/router';

...

function SignIn(): ReactElement {
  // CONTEXT
  const router = useRouter();

  // VARIABLE
  const { callbackUrl } = router.query;
  ...

  signIn('credentials', {
    ...formData,
    callbackUrl: redirectUrl(callbackUrl?.toString()),
    redirect: false
 })`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Exemplos</Title2Docs>

      <ListDocs>
        <li>Usando signIn:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`import { signIn } from 'next-auth/react';
...

// FORM
const handleSubmit = (formData: any): void => {
    const submit = async (): Promise<void> => {
        await validationSchema
            .validate(formData, {
                abortEarly: false
            })
            .then(() => {
                signIn('credentials', {
                    ...formData,
                    callbackUrl: redirectUrl(callbackUrl?.toString()),
                    redirect: false
                })
                    .then((response: SignInResponse | undefined) => {
                        if (response?.ok) {
                            router.push(response?.url as string).catch(() => null);
                        } else {
                            setStateModalMessage({ content:
                              ErrorMessage(response?.error as string), type: 'error' });
                        }
                    })
                    .catch((error) => {
                        setStateModalMessage({ content: ErrorMessage(error?.toString()),
                          type: 'error' });
                    });

                formRef.current?.setErrors({});
            })
            .catch((yupError: any) => {
                if (yupError instanceof yup.ValidationError) {
                    const errorMessages: { [key: string]: any } = {};

                    yupError.inner.forEach((item: any) => {
                        errorMessages[item.path] = item.message;
                    });

                    formRef.current?.setErrors(errorMessages);
                }
            });
    };

    submit().catch(() => null);
};`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          NextAuth - Sign in With Credentials Video.{' '}
          <a
            href="https://www.youtube.com/watch?v=EFucgPdjeNg&list=PLFeoM_Vx7KVb9_F5XlrVSz1pT9zZ7AN_J&index=24&t=359s&ab_channel=FullStackNiraj"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          NextAuth - Introduction.{' '}
          <a href="https://next-auth.js.org/getting-started/introduction" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          NextAuth - Client.{' '}
          <a href="https://next-auth.js.org/getting-started/client" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          NextAuth - Securing pages and api routes.{' '}
          <a
            href="https://www.youtube.com/watch?v=ollnut-J47s&list=PLFeoM_Vx7KVb9_F5XlrVSz1pT9zZ7AN_J&index=25&ab_channel=FullStackNiraj"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          NextAuth - Config.{' '}
          <a
            href="https://next-auth.js.org/configuration/providers/credentials"
            rel="noopener noreferrer"
            target="_blank"
          >
            (link)
          </a>
        </li>

        <li>
          NextAuth - Deployment.{' '}
          <a href="https://next-auth.js.org/deployment" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/Authentication'
} as Meta;

export const Authentication: StoryObj = {
  render: () => <AuthenticationWithHooks />
};
