import React, { ReactElement, useEffect, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import Head from 'next/head';

import { apiInformeRendimentos, apiUsuarios } from '@/configApi';
import { title } from '@/configApp';
import { formDataFile } from '@/helpers/formDataFile';
import yup from '@/helpers/yup';
import { IUsuario } from '@/interface';
import { useApp } from '@/pages/_app';
import { postFetch } from '@/services/fetch';
import { useSWRGetFetch } from '@/stores/fetch/useSWRGetFetch';
import { usePage } from '@/stores/page/usePage';

import { Button } from '@/components/button/button';
import { DatalistStyled } from '@/components/form/datalistStyled';
import { Input, InputFile, Label, LabelFile, Select } from '@/components/form/form';
import { OptionYear } from '@/components/form/selectOption';
import { FormStyled } from '@/components/form/formStyled';
import { ErrorMessage } from '@/components/layout/errorMessage';
import { LayoutManager } from '@/components/layout/layoutManager';
import { LayoutManagerBoxStyled } from '@/components/layout/layoutManagerStyled';

import { Box, Flex } from '@/styles/flex';
import { Container, Main, Spacer } from '@/styles/layout';
import { Title4 } from '@/styles/text';
import { variable } from '@/styles/variable';

function InformeRendimentos(): ReactElement {
    // CONTEXT
    const { setStateModalMessage } = useApp();
    const { setStateBreadcrumb } = usePage();

    // BREADCRUMB
    useEffect(() => {
        setStateBreadcrumb([{ link: null, title: 'Inserir Informe de Rendimentos' }]);

        return undefined;
    }, [setStateBreadcrumb]);

    // REF
    const formRef = useRef<FormHandles>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // STATE
    const [stateDatalist, setStateDatalist] = useState(false);
    const [stateFilter, setStateFilter] = useState({ search: '' });
    const [stateSearchInput, setStateSearchInput] = useState('');

    // CUSTOM HOOK
    const { data: usuarios, isLoading } = useSWRGetFetch({
        apiParams: { ...stateFilter },
        apiUrl: apiUsuarios
    });

    const usuariosData = usuarios?.data?.data;

    // Filter Debounce
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (stateSearchInput !== '') {
                setStateFilter((prevState) => (stateSearchInput ? { search: stateSearchInput } : prevState));
            }
        }, parseInt(variable.animation.timeout1s, 10));

        return (): void => {
            clearTimeout(timeout);
        };
    }, [stateSearchInput]);

    // VALIDATE
    const validationSchema = yup.object().shape({
        ano: yup.number().required(),
        arquivo: yup.string().required('Arquivo é requerido'),
        empresa: yup.string().required(),
        usuario_name: yup.string().required()
    });

    // FORM
    const handleSubmit = (formData: any): void => {
        const submit = async (): Promise<void> => {
            await validationSchema
                .validate(formData, {
                    abortEarly: false
                })
                .then(() => {
                    const newFormData = { ...formData, usuario_id: (document.getElementById('ir-usuario-id') as HTMLInputElement).value };

                    postFetch({
                        fetchData: formDataFile(newFormData),
                        url: apiInformeRendimentos
                    })
                        .then((response: Record<string, any>) => {
                            const { data: { message = '', success = false } = {} } = response;

                            if (success) {
                                setStateModalMessage({ content: 'Inserido', type: 'success' });
                            } else {
                                setStateModalMessage({ content: ErrorMessage(message), type: 'error' });
                            }
                        })
                        .catch((error) => {
                            const { response: { data: { message = '' } = {} } = {} } = error;

                            setStateModalMessage({ content: ErrorMessage(message), type: 'error' });
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

        if (document.getElementById('id-ir-usuario-search')) {
            (document.getElementById('id-ir-usuario-search') as HTMLInputElement).value = value;
        }

        setStateDatalist(false);
    };

    return (
        <>
            <Head>
                <title>{title} - Informe de Rendimentos</title>

                <meta name="description" content="Informe de Rendimentos" />
            </Head>

            <Main>
                <LayoutManager>
                    <Container>
                        <Title4>Inserir Informe de Rendimentos</Title4>

                        <Spacer />

                        <Flex>
                            <LayoutManagerBoxStyled flex="1 1 auto" p={3}>
                                <FormStyled onSubmit={handleSubmit} ref={formRef}>
                                    <Flex flex="1 1 auto" zIndex={2}>
                                        <input id="ir-usuario-id" name="usuario_id" ref={inputRef} type="hidden" />

                                        <Box flex="1 0 auto" zIndex={2}>
                                            <Label>Usuário</Label>

                                            <Box display="block" width="100%">
                                                <Input
                                                    cbFunction={handleSearch}
                                                    idInput="id-ir-usuario-search"
                                                    list="usuario-search"
                                                    name="usuario_name"
                                                    placeholder="Nome do usuário"
                                                    validationSchema={validationSchema}
                                                />

                                                <DatalistStyled active={stateDatalist}>
                                                    {isLoading ? (
                                                        <li>Carregando...</li>
                                                    ) : usuariosData?.length > 0 ? (
                                                        usuariosData.map((usuario: IUsuario) => {
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
                                        </Box>

                                        <Spacer width={{ d: '100%', xs: variable.space.spacingMD }} />

                                        <Box flex={{ d: '1 1 auto', xs: '0 0 100px' }}>
                                            <Label>Ano</Label>

                                            <Box display="block" width="100%">
                                                <Select idInput="id-ir-ano" name="ano" validationSchema={validationSchema}>
                                                    <option value="">Ano</option>

                                                    <OptionYear initialYear={2000} />
                                                </Select>
                                            </Box>
                                        </Box>

                                        <Spacer width={{ d: '100%', lg: variable.space.spacingMD }} />

                                        <Box flex="0 0 auto">
                                            <div>
                                                <Spacer height="10px" />

                                                <LabelFile forLabel="ir-file">Selecionar Arquivo</LabelFile>

                                                <InputFile idInput="id-ir-file" name="arquivo" validationSchema={validationSchema} />
                                            </div>
                                        </Box>
                                    </Flex>

                                    <Spacer height={variable.space.spacingMD} />

                                    <Button small={true} text="Salvar" typeButton="submit" />
                                </FormStyled>
                            </LayoutManagerBoxStyled>
                        </Flex>
                    </Container>
                </LayoutManager>
            </Main>
        </>
    );
}

export default InformeRendimentos;
