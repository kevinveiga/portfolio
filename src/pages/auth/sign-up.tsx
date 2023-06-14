import React, { ReactElement, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { title } from '@/configApp';
import { capitalizeFirstLetter } from '@/helpers/stringManipulation';
import yup from '@/helpers/yup';
import { ISignUp } from '@/interface';

import { FormStyled } from '@/components/form/formStyled';
import { SignUpForm } from '@/components/form/signUpForm';
import { LayoutAuth } from '@/components/layout/layoutAuth';

import { Title1 } from '@/styles/text';

function SignUp(): ReactElement {
    // CONTEXT
    const { t } = useTranslation();

    // VARIABLE
    const initialData: ISignUp = {
        email: '',
        name: '',
        password: '',
        passwordConfirm: ''
    };

    // STATE
    const [stateInputPassword, setStateInputPassword] = useState('');

    // REF
    const formRef = useRef<FormHandles>(null);

    // VALIDATE
    const validationSchema = yup.object().shape({
        email: yup.string().email().required(),
        name: yup.string().required(),
        password: yup.string().min(4).max(50).required(),
        passwordConfirm: yup
            .string()
            .oneOf([yup.ref('password'), stateInputPassword], t('passwords must match', { ns: 'glossary' }) || '')
            .required()
    });

    // FORM
    const handleSubmit = (formData: any): void => {
        console.log(formData);
    };

    return (
        <>
            <Head>
                <title>
                    {title} - {capitalizeFirstLetter(t('create account', { ns: 'glossary' }))}
                </title>

                <meta name="description" content={t('create account', { ns: 'glossary' }) || ''} />
            </Head>

            <LayoutAuth>
                <Title1>{t('create your account', { ns: 'glossary' })}</Title1>

                <FormStyled initialData={initialData} onSubmit={handleSubmit} ref={formRef}>
                    <SignUpForm
                        stateInputPassword={stateInputPassword}
                        setStateInputPassword={setStateInputPassword}
                        validationSchema={validationSchema}
                    />
                </FormStyled>
            </LayoutAuth>
        </>
    );
}

export default SignUp;
