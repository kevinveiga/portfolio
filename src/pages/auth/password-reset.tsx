import React, { ReactElement, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { apiAuthPasswordReset } from '@/configApi';
import { title } from '@/configApp';
import { capitalizeFirstLetter } from '@/helpers/stringManipulation';
import yup from '@/helpers/yup';
import { IFetchResponse, IPasswordReset } from '@/interface';
import { useApp } from '@/pages/_app';
import { postFetch } from '@/services/fetch';

import { FormStyled } from '@/components/form/formStyled';
import { PasswordResetForm } from '@/components/form/passwordResetForm';
import { ErrorMessage } from '@/components/layout/errorMessage';
import { LayoutAuth } from '@/components/layout/layoutAuth';

import { Title1 } from '@/styles/text';

function PasswordReset(): ReactElement {
    // CONTEXT
    const { setStateModalMessage } = useApp();
    const { t } = useTranslation();

    // VARIABLE
    const initialData: IPasswordReset = {
        password: '',
        passwordConfirm: ''
    };

    // STATE
    const [stateInputPassword, setStateInputPassword] = useState('');

    // REF
    const formRef = useRef<FormHandles>(null);

    // VALIDATE
    const validationSchema = yup.object().shape({
        password: yup.string().min(4).max(50).required(),
        passwordConfirm: yup
            .string()
            .min(4)
            .max(50)
            .oneOf([yup.ref('password'), stateInputPassword], t('passwords must match', { ns: 'glossary' }) || '')
            .required()
    });

    // FORM
    const handleSubmit = (formData: any): void => {
        const submit = async (): Promise<void> => {
            await validationSchema
                .validate(formData, {
                    abortEarly: false
                })
                .then(() => {
                    postFetch({ fetchData: formData, url: apiAuthPasswordReset })
                        .then((response: IFetchResponse) => {
                            const { data: { body: { message = '' } = {}, statusCode = 0 } = {} } = response;

                            if (statusCode === 200) {
                                setStateModalMessage({
                                    content: `${capitalizeFirstLetter(t('password', { ns: 'glossary' }))} ${t('change', { ns: 'glossary' })}`
                                });
                            } else {
                                setStateModalMessage({ content: ErrorMessage(message), type: 'error' });
                            }
                        })
                        .catch((error) => {
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
                    {title} - {capitalizeFirstLetter(t('password reset', { ns: 'glossary' }))}
                </title>

                <meta name="description" content={t('password reset', { ns: 'glossary' }) || ''} />
            </Head>

            <LayoutAuth>
                <Title1>{t('password reset', { ns: 'glossary' })}</Title1>

                <FormStyled initialData={initialData} onSubmit={handleSubmit} ref={formRef}>
                    <PasswordResetForm
                        stateInputPassword={stateInputPassword}
                        setStateInputPassword={setStateInputPassword}
                        validationSchema={validationSchema}
                    />
                </FormStyled>
            </LayoutAuth>
        </>
    );
}

export default PasswordReset;
