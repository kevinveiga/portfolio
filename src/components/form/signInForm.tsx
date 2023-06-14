import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { urlPasswordRecovery } from '@/configApp';

import { Button } from '@/components/button/button';
import { InputCheckbox } from '@/components/form/form';
import { InputEmail, InputPassword } from '@/components/form/formCustom';
import { LinkTo } from '@/components/link/linkTo';

import { Box, Flex } from '@/styles/flex';
import { Spacer } from '@/styles/layout';
import { P } from '@/styles/text';
import { variable } from '@/styles/variable';

export function SignInForm({ validationSchema }: any): ReactElement {
    // CONTEXT
    const { inputBgColor } = useTheme();
    const { t } = useTranslation();

    return (
        <>
            <Flex flex="1 1 auto" flexDirection="column">
                <Box flex="1 0 auto">
                    <InputEmail
                        backgroundColor={inputBgColor.secondary}
                        idInput="id-sign-in-email"
                        name="email"
                        placeholder="Email"
                        tabIndex={1}
                        validationSchema={validationSchema}
                    />
                </Box>

                <Spacer />

                <Box flex="1 0 auto">
                    <InputPassword
                        backgroundColor={inputBgColor.secondary}
                        idInput="id-sign-in-password"
                        name="password"
                        placeholder={t('password', { ns: 'glossary' }) || ''}
                        tabIndex={2}
                        validationSchema={validationSchema}
                    />
                </Box>
            </Flex>

            <Spacer />

            <Flex alignItems="center" flex="1 1 auto" justifyContent="space-between">
                <div>
                    <InputCheckbox idInput="id-sign-in-remember" label="Remember me" name="remember" value="remember" />
                </div>

                <div>
                    <LinkTo color={variable.color.primaryHover} link={urlPasswordRecovery}>
                        <P fontSize="14px">{t('password recovery', { ns: 'glossary' })}?</P>
                    </LinkTo>
                </div>
            </Flex>

            <Spacer height={variable.space.spacingMD} />

            <Button height="50px" typeButton="submit" width="100%">
                <P>{t('button.sign in', { ns: 'app' })}</P>
            </Button>
        </>
    );
}
