import React, { ReactElement } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { BoxDocs, ListDocs, StrongDocs, Subtitle2Docs, Title1Docs, Title2Docs } from '@/styles/storybook';

function FormWithHooks(): ReactElement {
  return (
    <>
      <Title1Docs>Form</Title1Docs>

      <Title2Docs>Organização</Title2Docs>

      <ListDocs>
        <li>{`Os componentes de formulários estão na pasta "src/components/form".`}</li>
      </ListDocs>

      <Title2Docs>Padrôes</Title2Docs>

      <ListDocs>
        <li>
          Se a estrutura dos campos estiver utilizando o componente <StrongDocs>Flex</StrongDocs>, então a configuração
          do Flex deve ter obrigatoriamente o flex shrink com o valor 1. Ex:
          <Subtitle2Docs>{`<Flex flex="1 1 auto" ...>`}</Subtitle2Docs>
        </li>
      </ListDocs>

      <ListDocs>
        <li>
          Os campos que precisam de formatação no <StrongDocs>POST</StrongDocs> ou no <StrongDocs>GET</StrongDocs>,
          devem ter seu nome incluído na função <StrongDocs>formDataFormatter</StrongDocs>. Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`// Função getFormDataFormatter:

case 'celular' || 'telefone':
  formDataFormatter[key] = formatData.getPhoneFormatted(formData [key]);

  break;

...

// Função setFormDataFormatter:

case 'celular' || 'telefone':
  formDataFormatter[key] = formatData.setPhoneFormatted(formData [key]);

  break;`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Componente FormStyled</Title2Docs>

      <ListDocs>
        <li>Componente de estilo que usa o Unform.</li>

        <li>Propriedades:</li>

        <Subtitle2Docs>
          - initialData: objeto dos dados iniciais
          <br />
          - onSubmit: função que executa no momento do submit
          <br />- ref: ref do formulário
        </Subtitle2Docs>

        <li>Exemplo de uso:</li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`<FormStyled initialData={initialData} onSubmit={handleSubmit} ref= {formRef}>

...

</FormStyled>`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Validação do Form</Title2Docs>

      <ListDocs>
        <li>É utilizada a biblioteca YUP para fazer a validação dentro do Unform.</li>

        <li>
          A variável validationSchema é usada para validação nos componentes do formulário e no submit do formulário.
          Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`// VALIDATE
const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(20).required()
});

// FORM
const handleSubmit = (formData: any): void => {
  const submit = async (): Promise<void> => {
    await validationSchema
      .validate(formData, {
        abortEarly: false
      })
      .then(() => {
        postFetch({ fetchData: formData, url: apiUrlAuth })
          .then((response: Record<string, any>) => {
              const { data: { message = '', user = {} } = {},  status = 0 } = response;

              if (status === 200) {
                // Stores user information
                setStateAuth(JSON.stringify(user));

                // Router redirect
                router.push(redirectToUrl()).catch(() =>  null);
              } else {
                setStateModalMessage({ content: ErrorMessage (message), type: 'error' });
              }
          })
          .catch((error) => {
            const { response: { data: { message = '' } = {}  } = {} } = error;
            setStateModalMessage({ content: ErrorMessage (message), type: 'error' });
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
};

...

<InputEmail
  idInput="login-email"
  name="email"
  placeholder="Email address"
  tabIndex={1}
  validationSchema={validationSchema}
/>`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Máscara do Form</Title2Docs>

      <ListDocs>
        <li>
          Para usar máscaras é necessário criar um componente de input específico, usando a função de máscara em{' '}
          <StrongDocs>handleChange</StrongDocs> e no <StrongDocs>getValue</StrongDocs>. Ex:
        </li>
      </ListDocs>

      <BoxDocs>
        <SyntaxHighlighter language="javascript">
          {`export function InputPhone({
  ...

  // USEEFFECT
  useEffect(() => {
    registerField<string>({
    name: fieldName,
    ref: inputRef,
    clearValue: (ref: any) => {
      const { current } = ref;
      current.value = '';
    },
    getValue: (ref: any) => {
      const { current } = ref;

      return maskPhone(current.value).cleanValue;
    },
    ...

    // FUNCTION
    const handleChange = (e: any): void => {
      if (inputRef.current) {
        try {
        const { currentTarget: { value = '' } = {} } = e;

        const newValue = maskPhone(value).formattedValue;
        ...`}
        </SyntaxHighlighter>
      </BoxDocs>

      <Title2Docs>Referências</Title2Docs>

      <ListDocs>
        <li>
          Unform.{' '}
          <a href="https://unform.dev/" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>

        <li>
          YUP.{' '}
          <a href="https://github.com/jquense/yup" rel="noopener noreferrer" target="_blank">
            (link)
          </a>
        </li>
      </ListDocs>
    </>
  );
}

export default {
  title: 'Documentation/Form'
} as Meta;

export const Form: StoryObj = {
  render: () => <FormWithHooks />
};
