import React, { ReactElement, useEffect, useRef } from 'react';

import { FormHandles } from '@unform/core';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { signIn, SignInResponse } from 'next-auth/react';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { title, urlSignUp, urlManager } from '@/configApp';
import { redirectUrl } from '@/helpers/redirect';
import { capitalizeFirstLetter } from '@/helpers/stringManipulation';
import yup from '@/helpers/yup';
import { ISignIn } from '@/interface';
import { useApp } from '@/pages/_app';

import { Button } from '@/components/button/button';
import { FormStyled } from '@/components/form/formStyled';
import { SignInForm } from '@/components/form/signInForm';
import { ErrorMessage } from '@/components/layout/errorMessage';
import { LayoutAuth } from '@/components/layout/layoutAuth';
import { LinkTo } from '@/components/link/linkTo';
import { SvgGoogle } from '@/components/svg/svgStore';

import { Flex } from '@/styles/flex';
import { LineHorizontal, Spacer } from '@/styles/layout';
import { P } from '@/styles/text';
import { variable } from '@/styles/variable';

function SignIn(): ReactElement {
    // CONTEXT
    const { setStateModalMessage } = useApp();
    const router = useRouter();
    const { bgColor } = useTheme();
    const { t } = useTranslation();

    // VARIABLE
    const initialData: ISignIn = {
        email: '',
        password: ''
    };
    const { callbackUrl } = router.query;

    // REF
    const formRef = useRef<FormHandles>(null);

    // USEEFFECT
    // Prefetch the overview page
    useEffect(() => {
        router.prefetch(urlManager).catch(() => null);

        return undefined;
    }, [router]);

    // VALIDATE
    const validationSchema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(4).max(50).required()
    });

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
                                setStateModalMessage({ content: ErrorMessage(response?.error as string), type: 'error' });
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
                    {title} - {capitalizeFirstLetter(t('sign in', { ns: 'glossary' }))}
                </title>

                <meta name="description" content={t('sign in', { ns: 'glossary' }) || ''} />
            </Head>

            <LayoutAuth>
                <Spacer height={variable.space.spacingMD} />

                <FormStyled initialData={initialData} onSubmit={handleSubmit} ref={formRef}>
                    <SignInForm validationSchema={validationSchema} />
                </FormStyled>

                <Spacer height={variable.space.spacingMD} />

                <Flex columnGap={variable.space.spacingSM} flex="1 1 auto">
                    <div>
                        <P>{t('dont have an account', { ns: 'glossary' })}?</P>
                    </div>

                    <div>
                        <LinkTo color={variable.color.primaryHover} link={urlSignUp}>
                            <P>{t('create account', { ns: 'glossary' })}</P>
                        </LinkTo>
                    </div>
                </Flex>

                <Spacer height={variable.space.spacingMD} />

                <LineHorizontal />

                <Spacer height={variable.space.spacingMD} />

                <Flex alignItems="center" flex="1 1 auto" justifyContent="space-between" width="100%">
                    <div>{t('or sign in with', { ns: 'glossary' })}</div>

                    <div>
                        <Button
                            alignItems="center"
                            backgroundColor={bgColor.primary}
                            display="flex"
                            height="50px"
                            justifyContent="center"
                            width="220px"
                        >
                            <SvgGoogle height="14px" />

                            <P fontSize="16px" fontWeight={700} ml={2}>
                                Google
                            </P>
                        </Button>
                    </div>
                </Flex>
            </LayoutAuth>
        </>
    );
}

export default SignIn;
