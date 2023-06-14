import React, { ReactElement } from 'react';

import { useTheme } from 'styled-components';

import { ILayout } from '@/interface';
import { LayoutAuthBackground } from '@/components/layout/layoutStyled';

import { Box, Flex } from '@/styles/flex';
import { BgImageOverlay } from '@/styles/image';
import { Main } from '@/styles/layout';
import { variable } from '@/styles/variable';

export function LayoutAuth({ children }: ILayout): ReactElement {
    // CONTEXT
    const { bgColor, borderColor } = useTheme();

    return (
        <LayoutAuthBackground>
            <BgImageOverlay src="/images/bg.svg" />

            <Main backgroundColor="transparent">
                <Flex alignContent="center" height="100vh" justifyContent="center">
                    <Box
                        alignItems="center"
                        backgroundColor={bgColor.tertiary}
                        borderColor={borderColor.secondary}
                        borderRadius={variable.layout.borderRadiusPrimary}
                        boxShadow={variable.layout.boxShadowSecondary}
                        flexDirection="column"
                        px={8}
                        py={5}
                        width={{ d: '90%', xs: '480px' }}
                    >
                        {children}
                    </Box>
                </Flex>
            </Main>
        </LayoutAuthBackground>
    );
}
