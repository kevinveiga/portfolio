import React, { ReactElement, useState } from 'react';

import dynamic from 'next/dynamic';

import { apiUsuarios } from '@/configApi';
import { getCpfFormatted } from '@/helpers/dataFormatter';
import { IUsuario } from '@/interface';
import { useApp } from '@/pages/_app';
import { deleteFetch } from '@/services/fetch';

import { Button } from '@/components/button/button';
import { ErrorMessage } from '@/components/layout/errorMessage';
import { LinkTo } from '@/components/link/linkTo';
import { ModalConfirm } from '@/components/modal/modalConfirm';
import { SvgBar, SvgChecked, SvgClose, SvgDelete, SvgEdit } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Table, Tbody, Td, Th, Thead, Tr } from '@/styles/table';
import { variable } from '@/styles/variable';

// DYNAMIC
const ModalConfirmDynamic = dynamic<any>(() => import('@/components/modal/modalConfirm').then((module) => module.ModalConfirm), {
    ssr: false
}) as typeof ModalConfirm;

export function UsuarioList({ mutate, usuariosData }: any): ReactElement | null {
    // CONTEXT
    const { setStateModalMessage } = useApp();

    // STATE
    const [stateModalConfirm, setStateModalConfirm] = useState<any>(null);

    // FUNCTION
    const handleDelete = (id: string, name: string): void => {
        setStateModalConfirm({
            cbFunction: (): void => {
                deleteFetch({ url: `${apiUsuarios}/${id}` })
                    .then((response: Record<string, any>) => {
                        const { data: { message = '', success = false } = {} } = response;

                        if (success) {
                            setStateModalMessage({ content: 'Removido com sucesso', type: 'success' });

                            mutate(apiUsuarios).catch(() => null);
                        } else {
                            setStateModalMessage({ content: ErrorMessage(message), type: 'error' });
                        }
                    })
                    .catch((error) => {
                        const { response: { data: { message = '' } = {} } = {} } = error;

                        setStateModalMessage({ content: ErrorMessage(message), type: 'error' });
                    });
            },
            message: `<p>Tem certeza que deseja remover<br/><b>${name}</b>?</p>`
        });
    };

    return usuariosData ? (
        <>
            <Flex obj={{ scrollbar: 'table' }} overflowX="auto" width={{ d: `calc(100vw - (${variable.space.spacingSM} * 4))`, md: 'auto' }}>
                <Box flexDirection="column">
                    <Table mobileWidth={variable.breakpoint.md}>
                        <Thead>
                            <Tr>
                                <Th>Usuário</Th>

                                <Th width="95px">Admin</Th>

                                <Th>Email</Th>

                                <Th width="155px">CPF</Th>

                                <Th width="130px">Opções</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {usuariosData.map((usuario: IUsuario) => {
                                return (
                                    <Tr key={usuario.id}>
                                        <Td>{usuario.name}</Td>

                                        <Td>
                                            {usuario.admin ? <SvgChecked fill={variable.color.primary} /> : <SvgClose fill={variable.color.red} />}
                                        </Td>

                                        <Td>{usuario.email}</Td>

                                        <Td>{getCpfFormatted(usuario.cpf)}</Td>

                                        <Td>
                                            <Box justifyContent="center">
                                                <LinkTo link={`/usuario/${usuario.id as string}`} title="Dashboard">
                                                    <Box mx={1}>
                                                        <SvgBar height="20px" />
                                                    </Box>
                                                </LinkTo>

                                                <LinkTo link={`/usuario/${usuario.id as string}/editar`} title="Editar">
                                                    <Box mx={1}>
                                                        <SvgEdit height="20px" />
                                                    </Box>
                                                </LinkTo>

                                                <Button
                                                    onClick={(): void => handleDelete(usuario.id as string, usuario.name)}
                                                    title="Remover"
                                                    typeStyle="button-unset"
                                                >
                                                    <Box mx={1}>
                                                        <SvgDelete height="20px" />
                                                    </Box>
                                                </Button>
                                            </Box>
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
