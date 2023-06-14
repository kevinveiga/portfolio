import React, { ReactElement } from 'react';

import { IVariaveisCalculosMensal } from '@/interface';

import { Box, Flex } from '@/styles/flex';
import { Table, Tbody, Td, Th, Thead, Tr } from '@/styles/table';
import { variable } from '@/styles/variable';

export function VariaveisCalculosMensalList({ variaveisCalculosMensalData }: any): ReactElement | null {
    return variaveisCalculosMensalData ? (
        <Flex obj={{ scrollbar: 'table' }} overflowX="auto" width={{ d: `calc(100vw - (${variable.space.spacingSM} * 4))`, md: 'auto' }}>
            <Box flexDirection="column">
                <Table mobileWidth={variable.breakpoint.md}>
                    <Thead>
                        <Tr>
                            <Th>Data</Th>

                            <Th>Fator CDI</Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        {variaveisCalculosMensalData.map((variavelCalculoMensal: IVariaveisCalculosMensal) => {
                            return (
                                <Tr key={variavelCalculoMensal.id}>
                                    <Td>{`${variavelCalculoMensal.mes}/${variavelCalculoMensal.ano}`}</Td>

                                    <Td>{variavelCalculoMensal.fator_cdi}</Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </Box>
        </Flex>
    ) : null;
}
