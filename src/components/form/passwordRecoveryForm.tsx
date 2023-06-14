import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { urlSignIn } from '@/configApp';

import { Button } from '@/components/button/button';
import { InputEmail } from '@/components/form/formCustom';
import { LinkTo } from '@/components/link/linkTo';

import { Box, Flex } from '@/styles/flex';
import { Spacer } from '@/styles/layout';
import { P, Span } from '@/styles/text';
import { variable } from '@/styles/variable';

export function PasswordRecoveryForm({ validationSchema }: any): ReactElement {
    // CONTEXT
    const { inputBgColor, textColor } = useTheme();
    const { t } = useTranslation();

    return (
        <>
            <Flex flex="1 1 auto" flexDirection="column">
                <Box flex="1 0 auto">
                    <InputEmail
                        backgroundColor={inputBgColor.secondary}
                        idInput="id-password-recovery-email"
                        name="email"
                        placeholder="Email"
                        tabIndex={1}
                        validationSchema={validationSchema}
                    />
                </Box>
            </Flex>

            <Spacer height={variable.space.spacingMD} />

            <Button height="50px" typeButton="submit" width="100%">
                <P>{t('button.password recover', { ns: 'app' })}</P>
            </Button>

            <Spacer height={variable.space.spacingSM} />

            <LinkTo color={textColor.secondary} link={urlSignIn} textAlign="center" width="100%">
                <Span fontSize="14px">{t('or login', { ns: 'glossary' })}</Span>
            </LinkTo>
        </>
    );
}
