import React, { ReactElement } from 'react';

import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { urlManager } from '@/configApp';

import { MenuManagerStyled, MenuManagerItemsStyled, MenuManagerItemTextStyled, MenuManagerWalletValue } from '@/components/layout/menuManagerStyled';
import { LinkTo } from '@/components/link/linkTo';
import {
    SvgCollection,
    SvgDashboard,
    SvgFolderArrow,
    SvgHelpCenter,
    SvgHome,
    SvgMonitoring,
    SvgPlusCircle,
    SvgScheduled,
    SvgWallet
} from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Spacer } from '@/styles/layout';
import { P } from '@/styles/text';

export function MenuManager({ stateMenuManager }: { stateMenuManager: boolean }): ReactElement {
    // CONTEXT
    const router = useRouter();
    const { t } = useTranslation();

    const { pathname } = router;

    // FUNCTION
    const handleActive = (value: string): boolean => {
        return pathname === value;
    };

    return (
        <MenuManagerStyled>
            <Flex flexDirection="column">
                <MenuManagerItemsStyled>
                    <ul>
                        <li>
                            <LinkTo className={handleActive(urlManager) ? 'active' : ''} link={urlManager}>
                                <Flex flex="1 1 auto" flexWrap="nowrap" justifyContent="center">
                                    <Box justifyContent="center" width="22px">
                                        <SvgHome />
                                    </Box>

                                    <MenuManagerItemTextStyled active={stateMenuManager}>
                                        <P>{t('menu.home', { ns: 'app' })}</P>
                                    </MenuManagerItemTextStyled>
                                </Flex>
                            </LinkTo>
                        </li>

                        <li>
                            <LinkTo className={handleActive(`${urlManager}/wallet`) ? 'active' : ''} link={`${urlManager}/wallet`}>
                                <Flex flex="1 1 auto" flexWrap="nowrap" justifyContent="center">
                                    <Box justifyContent="center" width="22px">
                                        <SvgWallet />
                                    </Box>

                                    <MenuManagerItemTextStyled active={stateMenuManager}>
                                        <P>{t('menu.wallet', { ns: 'app' })}</P>

                                        <MenuManagerWalletValue>2357</MenuManagerWalletValue>
                                    </MenuManagerItemTextStyled>
                                </Flex>
                            </LinkTo>
                        </li>

                        <li>
                            <LinkTo className={handleActive(`${urlManager}/videos`) ? 'active' : ''} link={`${urlManager}/videos`}>
                                <Flex flex="1 1 auto" flexWrap="nowrap" justifyContent="center">
                                    <Box justifyContent="center" width="22px">
                                        <SvgFolderArrow />
                                    </Box>

                                    <MenuManagerItemTextStyled active={stateMenuManager}>
                                        <P>{t('menu.videos', { ns: 'app' })}</P>

                                        <div>
                                            <SvgPlusCircle />
                                        </div>
                                    </MenuManagerItemTextStyled>
                                </Flex>
                            </LinkTo>
                        </li>

                        <li>
                            <LinkTo className={handleActive(`${urlManager}/projects`) ? 'active' : ''} link={`${urlManager}/projects`}>
                                <Flex flex="1 1 auto" flexWrap="nowrap" justifyContent="center">
                                    <Box justifyContent="center" width="22px">
                                        <SvgFolderArrow />
                                    </Box>

                                    <MenuManagerItemTextStyled active={stateMenuManager}>
                                        <P>{t('menu.projects', { ns: 'app' })}</P>

                                        <div>
                                            <SvgPlusCircle />
                                        </div>
                                    </MenuManagerItemTextStyled>
                                </Flex>
                            </LinkTo>
                        </li>

                        <li>
                            <LinkTo className={handleActive(`${urlManager}/collection`) ? 'active' : ''} link={`${urlManager}/collection`}>
                                <Flex flex="1 1 auto" flexWrap="nowrap" justifyContent="center">
                                    <Box justifyContent="center" width="22px">
                                        <SvgCollection />
                                    </Box>

                                    <MenuManagerItemTextStyled active={stateMenuManager}>
                                        <P>{t('menu.collection', { ns: 'app' })}</P>
                                    </MenuManagerItemTextStyled>
                                </Flex>
                            </LinkTo>
                        </li>

                        <li>
                            <LinkTo className={handleActive(`${urlManager}/dashboard`) ? 'active' : ''} link={`${urlManager}/dashboard`}>
                                <Flex flex="1 1 auto" flexWrap="nowrap" justifyContent="center">
                                    <Box justifyContent="center" width="22px">
                                        <SvgDashboard />
                                    </Box>

                                    <MenuManagerItemTextStyled active={stateMenuManager}>
                                        <P>{t('menu.dashboard', { ns: 'app' })}</P>
                                    </MenuManagerItemTextStyled>
                                </Flex>
                            </LinkTo>
                        </li>

                        <li>
                            <LinkTo className={handleActive(`${urlManager}/monitoring`) ? 'active' : ''} link={`${urlManager}/monitoring`}>
                                <Flex flex="1 1 auto" flexWrap="nowrap" justifyContent="center">
                                    <Box justifyContent="center" width="22px">
                                        <SvgMonitoring />
                                    </Box>

                                    <MenuManagerItemTextStyled active={stateMenuManager}>
                                        <P>{t('menu.monitoring', { ns: 'app' })}</P>
                                    </MenuManagerItemTextStyled>
                                </Flex>
                            </LinkTo>
                        </li>

                        <li>
                            <LinkTo className={handleActive(`${urlManager}/scheduled`) ? 'active' : ''} link={`${urlManager}/scheduled`}>
                                <Flex flex="1 1 auto" flexWrap="nowrap" justifyContent="center">
                                    <Box justifyContent="center" width="22px">
                                        <SvgScheduled />
                                    </Box>

                                    <MenuManagerItemTextStyled active={stateMenuManager}>
                                        <P>{t('menu.scheduled', { ns: 'app' })}</P>
                                    </MenuManagerItemTextStyled>
                                </Flex>
                            </LinkTo>
                        </li>

                        <li>
                            <LinkTo className={handleActive(`${urlManager}/help-center`) ? 'active' : ''} link={`${urlManager}/help-center`}>
                                <Flex flex="1 1 auto" flexWrap="nowrap" justifyContent="center">
                                    <Box justifyContent="center" width="22px">
                                        <SvgHelpCenter />
                                    </Box>

                                    <MenuManagerItemTextStyled active={stateMenuManager}>
                                        <P>{t('menu.help center', { ns: 'app' })}</P>
                                    </MenuManagerItemTextStyled>
                                </Flex>
                            </LinkTo>
                        </li>
                    </ul>
                </MenuManagerItemsStyled>
            </Flex>

            <Spacer />
        </MenuManagerStyled>
    );
}
