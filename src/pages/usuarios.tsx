import React, { ReactElement, useEffect, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import Head from 'next/head';

import { apiUsuarios } from '@/configApi';
import { title } from '@/configApp';
import { useSWRGetFetch } from '@/stores/fetch/useSWRGetFetch';
import { usePage } from '@/stores/page/usePage';

import { Button } from '@/components/button/button';
import { Input } from '@/components/form/form';
import { FormStyled } from '@/components/form/formStyled';
import { LayoutManager } from '@/components/layout/layoutManager';
import { LayoutManagerBoxStyled } from '@/components/layout/layoutManagerStyled';
import { Pagination } from '@/components/pagination/pagination';
import { UsuarioList } from '@/components/usuario/usuarioList';
import { SvgClose } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Container, Main, Spacer } from '@/styles/layout';
import { P, Title4 } from '@/styles/text';
import { variable } from '@/styles/variable';

function Usuarios(): ReactElement {
    // CONTEXT
    const { setStateBreadcrumb } = usePage();

    // BREADCRUMB
    useEffect(() => {
        setStateBreadcrumb([{ link: null, title: 'Usuários' }]);

        return undefined;
    }, [setStateBreadcrumb]);

    // VARIABLE
    const initialFilter = { search: '' };
    const initialPagination = { dir: 'asc', per_page: 12, order: 'name', page: 1 };

    // REF
    const formRef = useRef<FormHandles>(null);

    // STATE
    const [stateFilter, setStateFilter] = useState(initialFilter);
    const [statePagination, setStatePagination] = useState(initialPagination);
    const [stateSearchInput, setStateSearchInput] = useState('');

    // CUSTOM HOOK
    const { data: usuarios, mutate } = useSWRGetFetch({
        apiParams: { ...stateFilter, ...statePagination },
        apiUrl: apiUsuarios
    });

    const usuariosData = usuarios?.data?.data;
    const usuariosPagination = usuarios?.data;

    // PAGINATE
    const paginate = (pageNumber: number): void => {
        setStatePagination({ ...statePagination, page: pageNumber });
    };

    // FORM
    const handleCleanForm = (): void => {
        formRef.current?.reset();

        setStateFilter(initialFilter);
        setStatePagination(initialPagination);
    };

    const handleSubmit = (formData: any): void => {
        const { search } = formData;

        setStateFilter({ search: search });
        setStatePagination(initialPagination);
    };

    return (
        <>
            <Head>
                <title>{title} - Usuários</title>

                <meta name="description" content="Usuários" />
            </Head>

            <Main>
                <LayoutManager>
                    <Container>
                        <Title4>Usuários</Title4>

                        <Spacer />

                        <Flex>
                            <LayoutManagerBoxStyled flex="1 1 auto" p={3}>
                                <FormStyled onSubmit={handleSubmit} ref={formRef}>
                                    <Flex flex="1 1 auto">
                                        <Box flex="1 1 auto">
                                            <Input
                                                cbFunction={setStateSearchInput}
                                                idInput="id-ir-usuario-search"
                                                name="search"
                                                placeholder="Nome do usuário"
                                            />

                                            {stateSearchInput ? (
                                                <Button
                                                    ariaLabel="Limpar pesquisa"
                                                    onClick={(): void => {
                                                        handleCleanForm();
                                                    }}
                                                    position="absolute"
                                                    right="10px"
                                                    title="Limpar pesquisa"
                                                    top="10px"
                                                    typeStyle="button-unset"
                                                >
                                                    <SvgClose height="14px" />
                                                </Button>
                                            ) : null}
                                        </Box>

                                        <Spacer />

                                        <Box flex="0 0 auto">
                                            <Button small={true} text="Pesquisar" typeButton="submit" />
                                        </Box>
                                    </Flex>
                                </FormStyled>
                            </LayoutManagerBoxStyled>
                        </Flex>

                        <Spacer height={variable.space.spacingMD} />

                        <LayoutManagerBoxStyled flex="1 1 auto" p={3}>
                            {usuariosData?.length > 0 ? (
                                <>
                                    <UsuarioList mutate={mutate} usuariosData={usuariosData} />

                                    {usuariosPagination && parseInt(usuariosPagination.per_page, 10) < parseInt(usuariosPagination.total, 10) ? (
                                        <>
                                            <Spacer width="100%" />

                                            <Box>
                                                <Pagination
                                                    currentPage={usuariosPagination.current_page}
                                                    dataPerPage={statePagination.per_page}
                                                    totalData={usuariosPagination.total}
                                                    paginate={paginate}
                                                />
                                            </Box>
                                        </>
                                    ) : null}
                                </>
                            ) : (
                                <P>Nenhum resultado</P>
                            )}
                        </LayoutManagerBoxStyled>
                    </Container>
                </LayoutManager>
            </Main>
        </>
    );
}

export default Usuarios;
