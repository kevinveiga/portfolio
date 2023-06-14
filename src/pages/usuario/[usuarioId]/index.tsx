import React, { ReactElement, useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { apiUsuarios } from '@/configApi';
import { title } from '@/configApp';
import { getMoneyWithSymbolFormatted } from '@/helpers/dataFormatter';
import { useSWRGetFetch } from '@/stores/fetch/useSWRGetFetch';
import { usePage } from '@/stores/page/usePage';

import { LayoutManager } from '@/components/layout/layoutManager';
import { LayoutManagerBoxStyled } from '@/components/layout/layoutManagerStyled';
import { LinkTo } from '@/components/link/linkTo';
import { SvgClockHistory } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Container, Main, Spacer } from '@/styles/layout';
import { Table, Tbody, Td, Th, Thead, Tr } from '@/styles/table';
import { Span, Title4, Title5 } from '@/styles/text';
import { variable } from '@/styles/variable';

function DashboardUsuario(): ReactElement | null {
    // CONTEXT
    const { setStateBreadcrumb } = usePage();
    const { query: { usuarioId = '' } = {} } = useRouter();

    // BREADCRUMB
    useEffect(() => {
        setStateBreadcrumb([{ title: 'Dashboard Usuário' }]);

        return undefined;
    }, [setStateBreadcrumb]);

    // CUSTOM HOOK
    const { data: usuarioData } = useSWRGetFetch({ apiUrl: apiUsuarios });

    return usuarioId ? (
        <>
            <Head>
                <title>
                    {title} - Dashboard {usuarioData?.name}
                </title>

                <meta name="description" content="Dashboard" />
            </Head>

            <Main>
                <LayoutManager>
                    <Container>
                        <Title4>Dashboard {usuarioData?.name}</Title4>

                        <Spacer />

                        <Flex>
                            <LayoutManagerBoxStyled flex="1 1 auto" p={3}>
                                <Flex flex="1 1 auto" flexDirection={{ d: 'column', sm: 'row' }} justifyContent="space-between">
                                    <Box flex="0 0 auto">
                                        <Title5>Cálculo Mês</Title5>
                                    </Box>

                                    <Box flex="0 0 auto">
                                        <LinkTo fontSize="14px" link="/confirmacao-mensal">
                                            <SvgClockHistory />

                                            <Span ml={2} textDecoration="underline">
                                                Validar valores e agendar e-mails
                                            </Span>
                                        </LinkTo>
                                    </Box>
                                </Flex>
                            </LayoutManagerBoxStyled>
                        </Flex>

                        <Spacer height={variable.space.spacingMD} />

                        <LayoutManagerBoxStyled flex="1 1 auto" flexDirection="column" p={3}>
                            <Flex flex="1 1 auto" flexDirection={{ d: 'column', sm: 'row' }} justifyContent="space-between">
                                <Box flex="0 0 auto">
                                    <Title5>Último Pagamento</Title5>
                                </Box>

                                <Box flex="0 0 auto">
                                    <LinkTo fontSize="14px" link="/historico-pagamentos">
                                        <SvgClockHistory />

                                        <Span ml={2} textDecoration="underline">
                                            Histórico de Pagamentos
                                        </Span>
                                    </LinkTo>
                                </Box>
                            </Flex>

                            <Spacer />

                            <Flex
                                obj={{ scrollbar: 'table' }}
                                overflowX="auto"
                                width={{ d: `calc(100vw - (${variable.space.spacingSM} * 4))`, md: 'auto' }}
                            >
                                <Box flexDirection="column">
                                    <Table mobileWidth={variable.breakpoint.md}>
                                        <Thead>
                                            <Tr>
                                                <Th>Parcela Atual</Th>

                                                <Th>Rodada</Th>

                                                <Th>Principal</Th>

                                                <Th>CDI</Th>

                                                <Th>Principal + CDI</Th>
                                            </Tr>
                                        </Thead>

                                        <Tbody>
                                            <Tr>
                                                <Td>1</Td>

                                                <Td>Rodada 1</Td>

                                                <Td>{getMoneyWithSymbolFormatted(200)}</Td>

                                                <Td>{getMoneyWithSymbolFormatted(300)}</Td>

                                                <Td>{getMoneyWithSymbolFormatted(500)}</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Box>
                            </Flex>
                        </LayoutManagerBoxStyled>

                        <Spacer />

                        <LayoutManagerBoxStyled flex="1 1 auto" flexDirection="column" p={3}>
                            <Flex flex="1 1 auto" flexDirection={{ d: 'column', sm: 'row' }} justifyContent="space-between">
                                <Box flex="0 0 auto">
                                    <Title5>Pagamentos Futuros</Title5>
                                </Box>

                                <Box flex="0 0 auto">
                                    <LinkTo fontSize="14px" link={`/usuario/${usuarioId as string}/pagamentos-futuros`}>
                                        <SvgClockHistory />

                                        <Span ml={2} textDecoration="underline">
                                            Pagamentos Futuros
                                        </Span>
                                    </LinkTo>
                                </Box>
                            </Flex>

                            <Spacer />

                            <Flex
                                obj={{ scrollbar: 'table' }}
                                overflowX="auto"
                                width={{ d: `calc(100vw - (${variable.space.spacingSM} * 4))`, md: 'auto' }}
                            >
                                <Box flexDirection="column">
                                    <Table mobileWidth={variable.breakpoint.md}>
                                        <Thead>
                                            <Tr>
                                                <Th>Parcela Atual</Th>

                                                <Th>Rodada</Th>

                                                <Th>Principal</Th>

                                                <Th>CDI</Th>

                                                <Th>Principal + CDI</Th>
                                            </Tr>
                                        </Thead>

                                        <Tbody>
                                            <Tr>
                                                <Td>2</Td>

                                                <Td>Rodada 1</Td>

                                                <Td>{getMoneyWithSymbolFormatted(200)}</Td>

                                                <Td>{getMoneyWithSymbolFormatted(300)}</Td>

                                                <Td>{getMoneyWithSymbolFormatted(500)}</Td>
                                            </Tr>
                                        </Tbody>
                                    </Table>
                                </Box>
                            </Flex>
                        </LayoutManagerBoxStyled>

                        <Spacer height={variable.space.spacingMD} />

                        <LayoutManagerBoxStyled flex="1 1 auto" flexDirection="column" p={3}>
                            <Flex flex="1 1 auto" flexDirection={{ d: 'column', sm: 'row' }} justifyContent="space-between">
                                <Box flex="0 0 auto">
                                    <Title5>Último Dividendo Pago</Title5>
                                </Box>

                                <Box flex="0 0 auto">
                                    <LinkTo fontSize="14px" link="/historico-dividendos">
                                        <SvgClockHistory />

                                        <Span ml={2} textDecoration="underline">
                                            Histórico de Dividendos
                                        </Span>
                                    </LinkTo>
                                </Box>
                            </Flex>
                        </LayoutManagerBoxStyled>
                    </Container>
                </LayoutManager>
            </Main>
        </>
    ) : null;
}

export default DashboardUsuario;
