import React, { ReactElement, useRef } from 'react';

import { FormHandles } from '@unform/core';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { apiAuthPasswordRecovery } from '@/configApi';
import { title } from '@/configApp';
import { capitalizeFirstLetter } from '@/helpers/stringManipulation';
import yup from '@/helpers/yup';
import { IFetchResponse, IPasswordRecovery } from '@/interface';
import { useApp } from '@/pages/_app';
import { postFetch } from '@/services/fetch';

import { FormStyled } from '@/components/form/formStyled';
import { PasswordRecoveryForm } from '@/components/form/passwordRecoveryForm';
import { ErrorMessage } from '@/components/layout/errorMessage';
import { LayoutAuth } from '@/components/layout/layoutAuth';

import { Title1 } from '@/styles/text';

function PasswordRecovery(): ReactElement {
    // CONTEXT
    const { setStateModalMessage } = useApp();
    const { t } = useTranslation();

    // VARIABLE
    const initialData: IPasswordRecovery = {
        email: ''
    };

    // REF
    const formRef = useRef<FormHandles>(null);

    // VALIDATE
    const validationSchema = yup.object().shape({
        email: yup.string().email().required()
    });

    // FORM
    const handleSubmit = (formData: any): void => {
        const submit = async (): Promise<void> => {
            await validationSchema
                .validate(formData, {
                    abortEarly: false
                })
                .then(() => {
                    postFetch({ fetchData: formData, url: apiAuthPasswordRecovery })
                        .then((response: IFetchResponse) => {
                            const { data: { body: { message = '' } = {}, statusCode = 0 } = {} } = response;

                            if (statusCode === 200) {
                                setStateModalMessage({ content: capitalizeFirstLetter(t('password recovery sent to email', { ns: 'glossary' })) });
                            } else {
                                setStateModalMessage({ content: ErrorMessage(message), type: 'error' });
                            }
                        })
                        .catch((error) => {
                            console.log('>error ', error);

                            setStateModalMessage({ content: ErrorMessage(error?.toString()), type: 'error' });
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
                <title>
                    {title} - {capitalizeFirstLetter(t('password recovery', { ns: 'glossary' }))}
                </title>

                <meta name="description" content={t('password recovery', { ns: 'glossary' }) || ''} />
            </Head>

            <LayoutAuth>
                <Title1>{t('password recovery', { ns: 'glossary' })}</Title1>

                <FormStyled initialData={initialData} onSubmit={handleSubmit} ref={formRef}>
                    <PasswordRecoveryForm validationSchema={validationSchema} />
                </FormStyled>
            </LayoutAuth>
        </>
    );
}

export default PasswordRecovery;
