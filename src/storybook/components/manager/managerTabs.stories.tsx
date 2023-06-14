import React, { ReactElement, useEffect, useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import dayjs from 'dayjs';

import { ITabs } from '@/interface';

import { ManagerTabs } from '@/components/manager/managerTabs';
import { Progress } from '@/components/progress/progress';

import { Box, Flex } from '@/styles/flex';
import { Table, Tbody, Td, Th, Thead, Tr } from '@/styles/table';
import { P } from '@/styles/text';
import { variable } from '@/styles/variable';

import dataProcessesUpdatesOutputs from '@/public/json/processes-updates-outputs.json';
import dataProcessesUpdatesProcesses from '@/public/json/processes-updates-processes.json';

function ManagerTabsWithHooks(): ReactElement {
    // STATE
    const [stateData, setStateData] = useState<Record<string, any> | null>(null);
    const [stateTab, setStateTab] = useState('1');

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
        <Flex flex="1 1 auto" flexDirection="column" py={5}>
            <Box flex="1 1 auto" flexDirection="column" px={4}>
                <ManagerTabs
                    active={stateTab}
                    cbFunction={setStateTab}
                    items={[
                        { id: '1', name: 'processes' },
                        { id: '2', name: 'outputs' }
                    ]}
                />
            </Box>

            <Box flex="1 1 auto" px={4}>
                {stateData ? (
                    <Table>
                        <Thead>
                            <Tr>
                                <Th width="15%">info</Th>

                                <Th width="20%">description</Th>

                                <Th width="15%">user</Th>

                                <Th width="15%">solutions</Th>

                                <Th width="10%">progress</Th>

                                <Th width="10%">Tickets</Th>

                                <Th width="15%">date</Th>
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
    );
}

export default {
    component: ManagerTabs,
    title: 'Components/Manager'
} as Meta<ITabs>;

export const ManagerTabsDefault: StoryObj<ITabs> = {
    render: () => <ManagerTabsWithHooks />
};
