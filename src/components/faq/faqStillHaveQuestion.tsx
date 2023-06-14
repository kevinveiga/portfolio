import React, { ReactElement, useState } from 'react';

import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { useApp } from '@/pages/_app';

import { Button } from '@/components/button/button';
import { ModalMessage } from '@/components/modal/modalMessage';
import { SvgBalloonMessage } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { LineHorizontal, Spacer } from '@/styles/layout';
import { P, Title3 } from '@/styles/text';
import { variable } from '@/styles/variable';

// DYNAMIC
const ModalMessageDynamic = dynamic<any>(() => import('@/components/modal/modalMessage').then((module) => module.ModalMessage), {
    ssr: false
}) as typeof ModalMessage;

export function FaqStillHaveQuestion(): ReactElement | null {
    // CONTEXT
    const { stateIsServer } = useApp();
    const { textColor } = useTheme();
    const { t } = useTranslation();

    // STATE
    const [stateModal, setStateModal] = useState(false);

    if (stateIsServer) {
        return null;
    }

    return (
        <Flex flex="1 1 0" flexDirection="column">
            <Box alignItems="flex-end">
                <Title3 mb={0}>{t('still have a question', { ns: 'glossary' })}?</Title3>
            </Box>

            <Spacer height={variable.space.spacingXS} />

            <LineHorizontal backgroundColor={variable.color.secondary} height="2px" width="50px" />

            <Spacer height={variable.space.spacingMD} />

            <P color={textColor.secondary} fontSize="14px">
                {t('we are here to help', { ns: 'glossary' })}.
            </P>

            <P color={textColor.secondary} fontSize="14px">
                {t('get in touch with our support team', { ns: 'glossary' })}.
            </P>

            <Button
                backgroundColor={variable.color.tertiary}
                fontWeight={400}
                mt={4}
                obj={{ hoverBgColor: variable.color.tertiaryHover }}
                onClick={(): void => {
                    setStateModal(true);
                }}
                verticalAlign="middle"
            >
                <Box alignItems="center" justifyContent="center">
                    <SvgBalloonMessage />

                    <P ml={3}>{t('button.write to us', { ns: 'app' })}</P>
                </Box>
            </Button>

            {stateModal ? (
                <ModalMessageDynamic setActive={setStateModal} title={`${t('still have a question', { ns: 'glossary' })}?`} zIndex={14}>
                    <iframe
                        allowFullScreen={false}
                        loading="eager"
                        name="iframe-hubspot"
                        src="https://share.hsforms.com/11l2VX5BlQBWxHQDDk9rIGw4f2q1"
                        style={{ border: 'none', height: '70vh', width: '600px' }}
                        title="iframe-hubspot"
                    />
                </ModalMessageDynamic>
            ) : null}
        </Flex>
    );
}
