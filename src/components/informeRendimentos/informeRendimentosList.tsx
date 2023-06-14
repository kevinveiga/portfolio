import React, { ReactElement, useState } from 'react';

import dynamic from 'next/dynamic';

import { apiInformeRendimentos } from '@/configApi';
import { IInformeRendimento } from '@/interface';
import { useApp } from '@/pages/_app';
import { deleteFetch } from '@/services/fetch';

import { Button } from '@/components/button/button';
import { ErrorMessage } from '@/components/layout/errorMessage';
import { LinkTo } from '@/components/link/linkTo';
import { LinkToExternal } from '@/components/link/linkToExternal';
import { ModalConfirm } from '@/components/modal/modalConfirm';
import { SvgDelete, SvgDocument, SvgEdit } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Table, Tbody, Td, Th, Thead, Tr } from '@/styles/table';
import { variable } from '@/styles/variable';

// DYNAMIC
const ModalConfirmDynamic = dynamic<any>(() => import('../modal/modalConfirm').then((module) => module.ModalConfirm), {
    ssr: false
}) as typeof ModalConfirm;

export function InformeRendimentosList({ informeRendimentosData, mutate }: any): ReactElement | null {
    // CONTEXT
    const { setStateModalMessage } = useApp();

    // STATE
    const [stateModalConfirm, setStateModalConfirm] = useState<any>(null);

    // FUNCTION
    const handleDelete = (id: string, ano: number): void => {
        setStateModalConfirm({
            cbFunction: (): void => {
                deleteFetch({ url: `${apiInformeRendimentos}/${id}` })
                    .then((response: Record<string, any>) => {
                        const { data: { message = '', success = false } = {} } = response;

                        if (success) {
                            setStateModalMessage({ content: 'Removido com sucesso', type: 'success' });

                            mutate(apiInformeRendimentos).catch(() => null);
                        } else {
                            setStateModalMessage({ content: ErrorMessage(message), type: 'error' });
                        }
                    })
                    .catch((error) => {
                        const { response: { data: { message = '' } = {} } = {} } = error;

                        setStateModalMessage({ content: ErrorMessage(message), type: 'error' });
                    });
            },
            message: `<p>Tem certeza que deseja remover o<br/>informe de rendimento do ano de <b>${ano}</b>?</p>`
        });
    };

    return informeRendimentosData ? (
        <>
            <Flex obj={{ scrollbar: 'table' }} overflowX="auto" width={{ d: `calc(100vw - (${variable.space.spacingSM} * 4))`, md: 'auto' }}>
                <Box flexDirection="column">
                    <Table mobileWidth={variable.breakpoint.md}>
                        <Thead>
                            <Tr>
                                <Th>Usuário</Th>

                                <Th>Arquivo</Th>

                                <Th>Ano</Th>

                                <Th>Opções</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {informeRendimentosData.map((informeRendimento: IInformeRendimento) => {
                                return (
                                    <Tr key={informeRendimento.id}>
                                        <Td>{informeRendimento.usuario?.name}</Td>

                                        <Td>
                                            <LinkToExternal link={informeRendimento.file_url}>
                                                <SvgDocument height="20px" />
                                            </LinkToExternal>
                                        </Td>

                                        <Td>{informeRendimento.ano}</Td>

                                        <Td>
                                            <LinkTo link={`/usuario/${informeRendimento.id as string}/editar`}>
                                                <Box mx={1}>
                                                    <SvgEdit height="20px" />
                                                </Box>
                                            </LinkTo>

                                            <Button
                                                onClick={(): void => handleDelete(informeRendimento.id as string, informeRendimento.ano)}
                                                title="Remover"
                                                typeStyle="button-unset"
                                            >
                                                <Box mx={1}>
                                                    <SvgDelete height="20px" />
                                                </Box>
                                            </Button>
                                        </Td>
                                    </Tr>
                                );
                            })}
                        </Tbody>
                    </Table>
                </Box>
            </Flex>

            {stateModalConfirm ? (
                <ModalConfirmDynamic
                    cbFunction={stateModalConfirm?.cbFunction}
                    message={stateModalConfirm?.message}
                    setActive={setStateModalConfirm}
                />
            ) : null}
        </>
    ) : null;
}
