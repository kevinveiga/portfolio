import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { urlSignIn } from '@/configApp';

import { Button } from '@/components/button/button';
import { InputCheckbox } from '@/components/form/form';
import { InputEmail, InputName, InputPassword, InputPasswordConfirm } from '@/components/form/formCustom';
import { LinkTo } from '@/components/link/linkTo';

import { Box, Flex } from '@/styles/flex';
import { Spacer } from '@/styles/layout';
import { P, Span } from '@/styles/text';
import { variable } from '@/styles/variable';

export function SignUpForm({ stateInputPassword, setStateInputPassword, validationSchema }: any): ReactElement {
    // CONTEXT
    const { inputBgColor, textColor } = useTheme();
    const { t } = useTranslation();

    return (
        <>
            <Flex flex="1 1 auto" flexDirection="column">
                <Box flex="1 0 auto">
                    <InputEmail
                        backgroundColor={inputBgColor.secondary}
                        idInput="id-sign-up-email"
                        name="email"
                        placeholder="Email"
                        tabIndex={1}
                        validationSchema={validationSchema}
                    />
                </Box>

                <Spacer />

                <Box flex="1 0 auto">
                    <InputName
                        backgroundColor={inputBgColor.secondary}
                        idInput="id-sign-up-name"
                        name="name"
                        placeholder={t('name', { ns: 'glossary' }) || ''}
                        tabIndex={1}
                        validationSchema={validationSchema}
                    />
                </Box>

                <Spacer />

                <Box flex="1 0 auto">
                    <InputPassword
                        backgroundColor={inputBgColor.secondary}
                        cbFunction={setStateInputPassword}
                        idInput="id-sign-up-password"
                        name="password"
                        placeholder={t('password', { ns: 'glossary' }) || ''}
                        tabIndex={2}
                        validationSchema={validationSchema}
                    />
                </Box>

                <Spacer />

                <Box flex="1 0 auto">
                    <InputPasswordConfirm
                        backgroundColor={inputBgColor.secondary}
                        idInput="id-sign-up-confirm-password"
                        inputPassword={stateInputPassword}
                        name="passwordConfirm"
                        placeholder={t('confirm password', { ns: 'glossary' }) || ''}
                        tabIndex={2}
                        validationSchema={validationSchema}
                    />
                </Box>
            </Flex>

            <Spacer height={variable.space.spacingMD} />

            <Flex color={variable.color.textLightPrimary} fontSize="14px">
                <Box alignItems="baseline">
                    <InputCheckbox idInput="id-sign-up-terms" label={t('i agree to', { ns: 'glossary' }) || ''} name="terms" value="terms" />

                    <Span>{t('the p', { ns: 'glossary' })}</Span>

                    <Spacer width={variable.space.spacingXXS} />

                    <LinkTo color={variable.color.primaryHover} link="#">
                        <Span fontWeight={700}>{t('terms of use', { ns: 'glossary' })}</Span>
                    </LinkTo>

                    <Spacer width={variable.space.spacingXXS} />

                    <Span>{t('and', { ns: 'glossary' })}</Span>

                    <Spacer width={variable.space.spacingXXS} />

                    <LinkTo color={variable.color.primaryHover} link="#">
                        <Span fontWeight={700}>{t('privacy policy', { ns: 'glossary' })}.</Span>
                    </LinkTo>
                </Box>
            </Flex>

            <Flex fontSize="14px">
                <Box alignItems="baseline">
                    <InputCheckbox idInput="id-sign-up-ads" label={t('i agree to', { ns: 'glossary' }) || ''} name="ads" value="ads" />

                    <Span>{t('receive communications', { ns: 'glossary' })}</Span>
                </Box>
            </Flex>

            <Spacer height={variable.space.spacingMD} />

            <Button height="50px" typeButton="submit" width="100%">
                <P>{t('button.create account', { ns: 'app' })}</P>
            </Button>

            <Spacer height={variable.space.spacingSM} />

            <LinkTo color={textColor.secondary} link={urlSignIn} textAlign="center" width="100%">
                <Span fontSize="14px">{t('or login', { ns: 'glossary' })}</Span>
            </LinkTo>
        </>
    );
}
