import React, { ReactElement, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { urlManager } from '@/configApp';
import { ILayout } from '@/interface';
import { useApp } from '@/pages/_app';
import { useMenuManager } from '@/stores/menu/useMenuManager';

import { Button } from '@/components/button/button';
import { HeaderManager } from '@/components/layout/headerManager';
import { MenuChangeStyled } from '@/components/layout/layoutStyled';
import {
    LayoutManagerStyled,
    LayoutManagerLeftStyled,
    LayoutManagerLeftCreateStyled,
    LayoutManagerLeftCreateModalStyled,
    LayoutManagerMainStyled
} from '@/components/layout/layoutManagerStyled';
import { MenuManager } from '@/components/layout/menuManager';
import { LinkTo } from '@/components/link/linkTo';
import { SvgArrowDown, SvgArrowLeft, SvgLive, SvgPlusCircle, SvgTriangle, SvgUpload } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Spacer } from '@/styles/layout';
import { P } from '@/styles/text';
import { variable } from '@/styles/variable';

export function LayoutManager({ children, ...props }: ILayout): ReactElement {
    // CONTEXT
    const { stateIsServer } = useApp();
    const { t } = useTranslation();

    // STATE
    const [stateCreateModal, setStateCreateModal] = useState(false);

    // CUSTOM HOOK
    const { stateMenuManager, toggleMenuManager } = useMenuManager();

    return (
        <LayoutManagerStyled {...props}>
            {/* Importante verificação se não está no lado do servidor, para aí sim exibir o menu de acordo com o valor de stateMenuManager */}
            {stateIsServer ? null : (
                <LayoutManagerLeftStyled active={stateMenuManager}>
                    <Spacer />

                    <Flex
                        flex="0 0 auto"
                        flexWrap="nowrap"
                        height="38px"
                        justifyContent={stateMenuManager ? 'space-between' : 'center'}
                        px={stateMenuManager ? variable.space.spacingMD : variable.space.spacingXS}
                    >
                        <div>{stateMenuManager ? 'logo normal' : 'logo reduzido'}</div>

                        <MenuChangeStyled active={stateMenuManager}>
                            <Button ariaLabel="menu" height="100%" onClick={(): void => toggleMenuManager()} typeStyle="button-unset" width="100%">
                                <SvgArrowLeft height="12px" width="12px" />
                            </Button>
                        </MenuChangeStyled>
                    </Flex>

                    <Spacer />

                    <LayoutManagerLeftCreateStyled
                        active={stateCreateModal}
                        change={stateMenuManager}
                        onClick={(): void => setStateCreateModal((prevState) => !prevState)}
                    >
                        <Button typeStyle="button-unset">
                            <Flex alignSelf="center" flex="1 1 auto" flexWrap="nowrap" justifyContent={stateMenuManager ? 'flex-start' : 'center'}>
                                <Box alignSelf="center" justifyContent="center">
                                    <SvgArrowDown height="8px" />
                                </Box>

                                {stateMenuManager ? (
                                    <Box>
                                        <Spacer />

                                        <P>{t('button.create', { ns: 'app' })}</P>
                                    </Box>
                                ) : null}
                            </Flex>
                        </Button>
                    </LayoutManagerLeftCreateStyled>

                    <LayoutManagerLeftCreateModalStyled active={stateCreateModal}>
                        <SvgTriangle />

                        <ul>
                            <li>
                                <LinkTo link={`${urlManager}/create/live-streaming`}>
                                    <Flex alignItems="center" flex="1 1 auto" flexWrap="nowrap">
                                        <Box justifyContent="center" width="18px">
                                            <SvgLive />
                                        </Box>

                                        <P>{t('live streaming', { ns: 'glossary' })}</P>
                                    </Flex>
                                </LinkTo>
                            </li>

                            <li>
                                <LinkTo link={`${urlManager}/create/send-video`}>
                                    <Flex alignItems="center" flex="1 1 auto" flexWrap="nowrap">
                                        <Box justifyContent="center" width="18px">
                                            <SvgUpload />
                                        </Box>

                                        <P>{t('upload video', { ns: 'glossary' })}</P>
                                    </Flex>
                                </LinkTo>
                            </li>

                            <li>
                                <LinkTo link={`${urlManager}/create/new-project`}>
                                    <Flex alignItems="center" flex="1 1 auto" flexWrap="nowrap">
                                        <Box justifyContent="center" width="18px">
                                            <SvgPlusCircle />
                                        </Box>

                                        <P>{t('new project', { ns: 'glossary' })}</P>
                                    </Flex>
                                </LinkTo>
                            </li>

                            <li>
                                <LinkTo link={`${urlManager}/create/new-schedule`}>
                                    <Flex alignItems="center" flex="1 1 auto" flexWrap="nowrap">
                                        <Box justifyContent="center" width="18px">
                                            <SvgPlusCircle />
                                        </Box>

                                        <P>{t('new schedule', { ns: 'glossary' })}</P>
                                    </Flex>
                                </LinkTo>
                            </li>
                        </ul>
                    </LayoutManagerLeftCreateModalStyled>

                    <Spacer height={variable.space.spacingXS} />

                    <MenuManager stateMenuManager={stateMenuManager} />

                    <Spacer />
                </LayoutManagerLeftStyled>
            )}

            <LayoutManagerMainStyled>
                <Box flex={`0 0 ${variable.layout.headerManagerHeight}`} zIndex={1}>
                    <HeaderManager />
                </Box>

                <Box flex="1 0 auto" minHeight={`calc(100vh - ${variable.layout.headerManagerHeight})`}>
                    {children}
                </Box>
            </LayoutManagerMainStyled>
        </LayoutManagerStyled>
    );
}
