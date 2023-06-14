import React, { ReactElement, useEffect, useRef } from 'react';

import { FormHandles } from '@unform/core';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { apiUsuarios } from '@/configApi';
import { title } from '@/configApp';
import yup from '@/helpers/yup';
import { IUsuario } from '@/interface';
import { useApp } from '@/pages/_app';
import { putFetch } from '@/services/fetch';
import { useSWRGetFetch } from '@/stores/fetch/useSWRGetFetch';
import { usePage } from '@/stores/page/usePage';

import { FormStyled } from '@/components/form/formStyled';
import { UsuarioForm } from '@/components/form/usuarioForm';
import { ErrorMessage } from '@/components/layout/errorMessage';
import { LayoutManager } from '@/components/layout/layoutManager';
import { LayoutManagerBoxStyled } from '@/components/layout/layoutManagerStyled';

import { Container, Main, Spacer } from '@/styles/layout';
import { Title4 } from '@/styles/text';

function UsuarioEditar(): ReactElement {
    // CONTEXT
    const { setStateModalMessage } = useApp();
    const { setStateBreadcrumb } = usePage();
    const { query: { socioId = '' } = {} } = useRouter();

    // BREADCRUMB
    useEffect(() => {
        setStateBreadcrumb([{ title: 'Usuário Editar' }]);

        return undefined;
    }, [setStateBreadcrumb]);

    // VARIABLE
    const initialData: IUsuario = {
        admin: false,
        cpf: '',
        email: '',
        name: ''
    };

    // REF
    const formRef = useRef<FormHandles>(null);

    // CUSTOM HOOK
    const { data: usuario } = useSWRGetFetch({
        apiUrl: socioId ? `${apiUsuarios}/${socioId as string}` : ''
    });

    const usuarioData = usuario?.data;

    // VALIDATE
    const validationSchema = yup.object().shape({
        cpf: yup.string().min(11).required(),
        email: yup.string().email().required(),
        name: yup.string().required()
    });

    // FORM
    const handleSubmit = (formData: any): void => {
        const submit = async (): Promise<void> => {
            await validationSchema
                .validate(formData, {
                    abortEarly: false
                })
                .then(() => {
                    putFetch({ fetchData: formData, url: `${apiUsuarios}/${socioId as string}` })
                        .then((response: Record<string, any>) => {
                            const { data: { message = '', success = false } = {} } = response;

                            if (success) {
                                setStateModalMessage({ content: 'Atualizado', type: 'success' });
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

    return (
        <>
            <Head>
                <title>{title} - Usuário Editar</title>

                <meta name="description" content="Usuário Editar" />
            </Head>

            <Main>
                <LayoutManager>
                    <Container>
                        <Title4>Usuário Editar</Title4>

                        <Spacer />

                        <LayoutManagerBoxStyled flex="1 1 auto" p={3}>
                            <FormStyled initialData={usuarioData ? usuarioData[0] : initialData} onSubmit={handleSubmit} ref={formRef}>
                                <UsuarioForm validationSchema={validationSchema} />
                            </FormStyled>
                        </LayoutManagerBoxStyled>
                    </Container>
                </LayoutManager>
            </Main>
        </>
    );
}

export default UsuarioEditar;
