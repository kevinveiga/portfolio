import React, { ReactElement, useRef, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import SyntaxHighlighter from 'react-syntax-highlighter';

import yup from '@/helpers/yup';
import { IUsuario } from '@/interface';

import { Button } from '@/components/button/button';
import { DatalistStyled } from '@/components/form/datalistStyled';
import { Input, Label } from '@/components/form/form';
import { FormStyled } from '@/components/form/formStyled';

import { Box } from '@/styles/flex';
import { BoxDocs, ListDocs, SpacerDocs, StrongDocs } from '@/styles/storybook';
import { P } from '@/styles/text';
import { variable } from '@/styles/variable';

function DatalistWithHooks(): ReactElement {
    // VARIABLE
    const itens: IUsuario[] = [
        {
            admin: false,
            cpf: '000.000.000-00',
            email: 'teste@teste.com',
            id: '1',
            name: 'name-1'
        },
        {
            admin: false,
            cpf: '000.000.000-00',
            email: 'teste@teste.com',
            id: '2',
            name: 'name-2'
        },
        {
            admin: false,
            cpf: '000.000.000-00',
            email: 'teste@teste.com',
            id: '3',
            name: 'name-3'
        }
    ];
    const isLoading = false;

    // REF
    const inputRef = useRef<HTMLInputElement>(null);

    // STATE
    const [stateDatalist, setStateDatalist] = useState(false);
    const [stateSearchInput, setStateSearchInput] = useState('');

    const dataListFiltered = stateSearchInput.length > 0 ? itens.filter((item) => item.name.includes(stateSearchInput)) : [];

    // VALIDATE
    const validationSchema = yup.object().shape({
        usuario_name: yup.string().required()
    });

    // FORM
    const handleSubmit = (): void => {
        return undefined;
    };

    // FUNCTION
    const handleSearch = (value: string): void => {
        setStateDatalist(Boolean(value));
        setStateSearchInput(value);
    };

    const handleUsuarioId = (id: string, value: string): void => {
        const { current } = inputRef;

        if (current) {
            current.value = id;
        }

        if (document.getElementById('id-usuario-search')) {
            (document.getElementById('id-usuario-search') as HTMLInputElement).value = value;
        }

        setStateDatalist(false);
    };

    return (
        <FormStyled onSubmit={handleSubmit}>
            <Label text="Datalist:" />

            <Box display="block" width="100%">
                <Input
                    cbFunction={handleSearch}
                    idInput="id-usuario-search"
                    list="usuario-search"
                    name="usuario_name"
                    placeholder="Nome do usuário"
                    validationSchema={validationSchema}
                />

                <DatalistStyled active={stateDatalist}>
                    {isLoading ? (
                        <li>Carregando...</li>
                    ) : dataListFiltered?.length > 0 ? (
                        dataListFiltered.map((usuario: IUsuario) => {
                            return (
                                <li key={usuario.id}>
                                    <Button
                                        onClick={(): void => handleUsuarioId(usuario.id as string, usuario.name)}
                                        text={usuario.name}
                                        typeStyle="button-unset"
                                    />
                                </li>
                            );
                        })
                    ) : (
                        <li>Sem resultado...</li>
                    )}
                </DatalistStyled>
            </Box>

            <SpacerDocs />

            <ListDocs>
                <li>Se for necessário armazenar o valor do datalist, deve ser criado um ref para ser usado em um input. Ex:</li>
            </ListDocs>

            <BoxDocs>
                <SyntaxHighlighter language="javascript">
                    {`// REF
const inputRef = useRef<HTMLInputElement>(null);
...

// FORM
const handleSubmit = (formData: any): void => {
  const submit = async (): Promise<void> => {
    await validationSchema
      .validate(formData, {
        abortEarly: false
      })
      .then(() => {
        const newFormData = { ...formData, user_id: (document. getElementById('user-id') as HTMLInputElement).value };
...

<input id="id-user-id" name="user-id" ref={inputRef} type="hidden" />`}
                </SyntaxHighlighter>
            </BoxDocs>

            <ListDocs>
                <li>
                    São necessários 3 controles de estado, <StrongDocs>stateDatalist para o datalist</StrongDocs>,{' '}
                    <StrongDocs>stateFilter</StrongDocs> para o filtro dos dados e <StrongDocs>stateSearchInput</StrongDocs> para o input. Ex:
                </li>
            </ListDocs>

            <BoxDocs>
                <SyntaxHighlighter language="javascript">
                    {`// STATE
const [stateDatalist, setStateDatalist] = useState(false);
const [stateFilter, setStateFilter] = useState({ search: '' });
const [stateSearchInput, setStateSearchInput] = useState('');`}
                </SyntaxHighlighter>
            </BoxDocs>

            <P color={variable.color.warning}>
                Obs: Caso não precise filtrar os dados na API, não é necessário o estado <StrongDocs>stateFilter</StrongDocs>.
            </P>

            <SpacerDocs />

            <ListDocs>
                <li>
                    Preenchimento de dados no <StrongDocs>datalist</StrongDocs>. Ex:
                </li>
            </ListDocs>

            <BoxDocs>
                <SyntaxHighlighter language="javascript">
                    {`// CUSTOM HOOK
const { data: users, isLoading } = useSWRGetFetch({
  apiParams: { ...stateFilter },
  apiUrl: apiUrlUsers
});

const usersData = users?.data?.data;

...

<DatalistStyled active={stateDatalist}>
  {isLoading ? (
    <li>Carregando...</li>
  ) : usersData?.length > 0 ? (
    usersData.map((user: IUser) => {
      return (
        <li key={user.id}>
          <ButtonUnset onClick={(): void => handleUserId(user.id as  string, user.name)} text={user.name} />
        </li>
      );
    })
  ) : (
    <li>Sem resultado...</li>
  )}
</DatalistStyled>`}
                </SyntaxHighlighter>
            </BoxDocs>

            <ListDocs>
                <li>
                    A cada troca de valor no <StrongDocs>input</StrongDocs>, muda o valor de <StrongDocs>filter</StrongDocs>, alterando os dados do{' '}
                    <StrongDocs>datalist</StrongDocs>. Ex:
                </li>
            </ListDocs>

            <BoxDocs>
                <SyntaxHighlighter language="javascript">
                    {`// Filter Debounce
useEffect(() => {
  const timeout = setTimeout(() => {
    if (stateSearchInput !== '') {
      setStateFilter((prevState) => (stateSearchInput ? { search: stateSearchInput } : prevState));
    }
  }, parseInt(variable.animation.timeout1s, 10));

  return (): void => {
    clearTimeout(timeout);
  };
}, [stateSearchInput]);`}
                </SyntaxHighlighter>
            </BoxDocs>

            <P color={variable.color.warning}>Obs: Caso não precise filtrar os dados na API, não é necessário esse código.</P>

            <SpacerDocs />

            <ListDocs>
                <li>
                    Função que manipula os dados do <StrongDocs>input</StrongDocs> e do <StrongDocs>datalist</StrongDocs>. Ex:
                </li>
            </ListDocs>

            <BoxDocs>
                <SyntaxHighlighter language="javascript">
                    {`const handleSearch = (value: string): void => {
  setStateDatalist(Boolean(value));
  setStateSearchInput(value);
};

...

<Input
  cbFunction={handleSearch}
  idInput="id-user-search"
  list="user-search"
  name="user-search"
  placeholder="Nome do usuário"
  validationSchema={validationSchema}
/>`}
                </SyntaxHighlighter>
            </BoxDocs>

            <ListDocs>
                <li>
                    Função do <StrongDocs>datalist</StrongDocs> que altera os valores dos <StrongDocs>inputs com id e com nome</StrongDocs>. Ex:
                </li>
            </ListDocs>

            <BoxDocs>
                <SyntaxHighlighter language="javascript">
                    {`const handleUserId = (id: string, value: string): void => {
  const { current } = inputRef;

  if (current) {
    current.value = id;
  }

  if (document.getElementById('id-user-search')) {
    (document.getElementById('id-user-search') as HTMLInputElement). value = value;
  }

  setStateDatalist(false);
};`}
                </SyntaxHighlighter>
            </BoxDocs>
        </FormStyled>
    );
}

export default {
    component: DatalistStyled,
    title: 'Components/Form'
} as Meta;

export const DatalistDefault: StoryObj = {
    render: () => <DatalistWithHooks />
};
