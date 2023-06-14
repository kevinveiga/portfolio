import React, { ReactElement, useEffect, useState } from 'react';

import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { useTranslation } from 'react-i18next';

import { usePersistedState } from '@/stores/persistedState/usePersistedState';

import { LayoutManagerBoxStyled } from '@/components/layout/layoutManagerStyled';
import { ManagerTabs } from '@/components/manager/managerTabs';
import { Progress } from '@/components/progress/progress';

import { Box, Flex } from '@/styles/flex';
import { LineHorizontal, Spacer } from '@/styles/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@/styles/table';
import { P, Title2 } from '@/styles/text';
import { variable } from '@/styles/variable';

import dataProcessesUpdatesOutputs from '@/public/json/processes-updates-outputs.json';
import dataProcessesUpdatesProcesses from '@/public/json/processes-updates-processes.json';

// DYNAMIC
const ManagerTabsDynamic = dynamic<any>(() => import('@/components/manager/managerTabs').then((module) => module.ManagerTabs), {
    ssr: false
}) as typeof ManagerTabs;

export function ManagerProcessesAndUpdates(): ReactElement {
    // CONTEXT
    const { t } = useTranslation();

    // STATE
    const [stateData, setStateData] = useState<Record<string, any> | null>(null);
    const [stateTab, setStateTab] = usePersistedState('tabs-manager-processes-updates', '1');

    useEffect(() => {
        if (stateTab === '1') {
            setStateData(dataProcessesUpdatesProcesses?.data);
        }

        if (stateTab === '2') {
            setStateData(dataProcessesUpdatesOutputs?.data);
        }

        return undefined;
    }, [stateTab]);

    return (
        <LayoutManagerBoxStyled>
            <Flex flex="1 1 auto" flexDirection="column" py={5}>
                <Box flex="1 1 auto" flexDirection="column" px={4}>
                    <Title2 height="38px">{`${t('processes', { ns: 'glossary' })} ${t('and', { ns: 'glossary' })} ${t('updates', {
                        ns: 'glossary'
                    })}`}</Title2>

                    <Spacer />

                    <Flex width="calc(100% - 92px)" zIndex={2}>
                        <ManagerTabsDynamic
                            active={stateTab}
                            cbFunction={setStateTab}
                            items={[
                                { id: '1', name: `${t('processes', { ns: 'glossary' })}` },
                                { id: '2', name: t('outputs', { ns: 'glossary' }) }
                            ]}
                        />
                    </Flex>

                    <LineHorizontal height="2px" mt="-2px" />
                </Box>

                <Spacer height={variable.space.spacingLG} />

                <Box flex="1 1 auto" px={4}>
                    {stateData ? (
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th width="15%">{t('info', { ns: 'glossary' })}</Th>

                                    <Th width="20%">{t('description', { ns: 'glossary' })}</Th>

                                    <Th width="15%">{t('user', { ns: 'glossary' })}</Th>

                                    <Th width="15%">{t('solutions', { ns: 'glossary' })}</Th>

                                    <Th width="10%">{t('progress', { ns: 'glossary' })}</Th>

                                    <Th width="10%">Tickets</Th>

                                    <Th width="15%">{t('date', { ns: 'glossary' })}</Th>
                                </Tr>
                            </Thead>

                            <Tbody>
                                {stateData.map((obj: Record<string, any>) => {
                                    return (
                                        <Tr key={obj.id}>
                                            <Td>{obj.info}</Td>

                                            <Td>{obj.description}</Td>

                                            <Td>{obj.user}</Td>

                                            <Td>{obj.solutions[0]}</Td>

                                            <Td textAlign="center">
                                                <Progress color={variable.color.green} progressPercent={parseInt(obj.progress, 10)} />
                                            </Td>

                                            <Td textAlign="center">
                                                <P color={variable.color.red2}>{obj.tickets}</P>
                                            </Td>

                                            <Td>
                                                <P>{dayjs(obj.date).format('DD/MM/YYYY')}</P>

                                                <P fontSize="12px">{dayjs(obj.date).format('HH:mm')}</P>
                                            </Td>
                                        </Tr>
                                    );
                                })}
                            </Tbody>
                        </Table>
                    ) : null}
                </Box>
            </Flex>
        </LayoutManagerBoxStyled>
    );
}
