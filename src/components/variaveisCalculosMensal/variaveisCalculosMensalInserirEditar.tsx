import React, { ReactElement, useRef } from 'react';

import { FormHandles } from '@unform/core';
import dayjs from 'dayjs';

import { apiVariaveisCalculosMensal } from '@/configApi';
import yup from '@/helpers/yup';
import { IVariaveisCalculosMensal } from '@/interface';
import { useApp } from '@/pages/_app';
import { postFetch, putFetch } from '@/services/fetch';
import { useSWRGetFetch } from '@/stores/fetch/useSWRGetFetch';

import { FormStyled } from '@/components/form/formStyled';
import { VariaveisCalculosMensalForm } from '@/components/form/variaveisCalculosMensalForm';
import { ErrorMessage } from '@/components/layout/errorMessage';
import { LayoutManagerBoxStyled } from '@/components/layout/layoutManagerStyled';

export function VariaveisCalculosMensalInserirEditar({ mutate }: any): ReactElement {
    // CONTEXT
    const { setStateModalMessage } = useApp();

    // VARIABLE
    const ano = dayjs().year();
    const mes = dayjs().month() + 1;

    const initialData: IVariaveisCalculosMensal = {
        ano: ano,
        mes: mes
    };

    // REF
    const formRef = useRef<FormHandles>(null);

    // CUSTOM HOOK
    const { data: variaveisCalculosMesAtual } = useSWRGetFetch({
        apiParams: { ano: ano, limit: 1, mes: mes },
        apiUrl: apiVariaveisCalculosMensal
    });

    const variaveisCalculosMesAtualData = variaveisCalculosMesAtual?.data;

    // VALIDATE
    const validationSchema = yup.object().shape({
        fator_cdi: yup.number().required()
    });

    // FORM
    const handleSubmit = (formData: any): void => {
        const submit = async (): Promise<void> => {
            await validationSchema
                .validate(formData, {
                    abortEarly: false
                })
                .then(() => {
                    if (variaveisCalculosMesAtualData.length) {
                        putFetch({ fetchData: formData, url: apiVariaveisCalculosMensal })
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
                    } else {
                        postFetch({ fetchData: formData, url: apiVariaveisCalculosMensal })
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
                    }

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

            mutate(apiVariaveisCalculosMensal).catch(() => null);
        };

        submit().catch(() => null);
    };

    return (
        <LayoutManagerBoxStyled flex="1 1 auto" p={3}>
            <FormStyled
                initialData={variaveisCalculosMesAtualData ? variaveisCalculosMesAtualData[0] : initialData}
                onSubmit={handleSubmit}
                ref={formRef}
            >
                <VariaveisCalculosMensalForm validationSchema={validationSchema} />
            </FormStyled>
        </LayoutManagerBoxStyled>
    );
}
