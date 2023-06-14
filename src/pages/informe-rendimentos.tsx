import React, { ReactElement, useEffect, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import Head from 'next/head';

import { apiInformeRendimentos } from '@/configApi';
import { title } from '@/configApp';
import { useSWRGetFetch } from '@/stores/fetch/useSWRGetFetch';
import { usePage } from '@/stores/page/usePage';

import { Button } from '@/components/button/button';
import { Input, Select } from '@/components/form/form';
import { FormStyled } from '@/components/form/formStyled';
import { OptionYear } from '@/components/form/selectOption';
import { InformeRendimentosList } from '@/components/informeRendimentos/informeRendimentosList';
import { LayoutManager } from '@/components/layout/layoutManager';
import { LayoutManagerBoxStyled } from '@/components/layout/layoutManagerStyled';
import { Pagination } from '@/components/pagination/pagination';
import { SvgClose } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Container, Main, Spacer } from '@/styles/layout';
import { P, Title4 } from '@/styles/text';
import { variable } from '@/styles/variable';

function InformeRendimentos(): ReactElement {
    // CONTEXT
    const { setStateBreadcrumb } = usePage();

    // BREADCRUMB
    useEffect(() => {
        setStateBreadcrumb([{ link: null, title: 'Informe de Rendimentos' }]);

        return undefined;
    }, [setStateBreadcrumb]);

    // VARIABLE
    const initialFilter = { ano: null, empresa: '', search: '' };
    const initialPagination = { dir: 'asc', per_page: 12, order: 'mes', page: 1 };

    // REF
    const formRef = useRef<FormHandles>(null);

    // STATE
    const [stateFilter, setStateFilter] = useState(initialFilter);
    const [statePagination, setStatePagination] = useState(initialPagination);
    const [stateSearchInput, setStateSearchInput] = useState('');

    // CUSTOM HOOK
    const { data: informeRendimentos, mutate } = useSWRGetFetch({
        apiParams: { ...stateFilter, ...statePagination },
        apiUrl: apiInformeRendimentos
    });

    const informeRendimentosData = informeRendimentos?.data?.data;
    const informeRendimentosPagination = informeRendimentos?.data;

    // PAGINATE
    const paginate = (pageNumber: number): void => {
        setStatePagination({ ...statePagination, page: pageNumber });
    };

    // FORM
    const handleCleanSearch = (): void => {
        formRef.current?.clearField('search');

        setStateFilter({ ...stateFilter, search: '' });
        setStatePagination(initialPagination);
    };

    const handleCleanForm = (): void => {
        formRef.current?.reset();

        setStateFilter(initialFilter);
        setStatePagination(initialPagination);
    };

    const handleSubmit = (formData: any): void => {
        const { ano, empresa, search } = formData;

        setStateFilter({ ano: ano, empresa: empresa, search: search });
        setStatePagination(initialPagination);
    };

    return (
        <>
            <Head>
                <title>{title} - Informe de Rendimentos</title>

                <meta name="description" content="Informe de Rendimentos" />
            </Head>

            <Main>
                <LayoutManager>
                    <Container>
                        <Title4>Lista Informe de Rendimentos</Title4>

                        <Spacer />

                        <Flex>
                            <LayoutManagerBoxStyled flex="1 0 auto" p={3}>
                                <FormStyled onSubmit={handleSubmit} ref={formRef}>
                                    <Flex flex="1 1 auto">
                                        <Box flex="1 0 auto">
                                            <Box display="block" width="100%">
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
                                                            handleCleanSearch();
                                                        }}
                                                        position="absolute"
                                                        right="10px"
                                                        title="Limpar pesquisa"
                                                        top="5px"
                                                        typeStyle="button-unset"
                                                    >
                                                        <SvgClose height="14px" />
                                                    </Button>
                                                ) : null}
                                            </Box>
                                        </Box>

                                        <Spacer width={{ d: '100%', lg: variable.space.spacingMD }} />

                                        <Box flex={{ d: '1 1 auto', xs: '0 0 100px' }}>
                                            <Select idInput="id-ir-ano" name="ano">
                                                <option value="">Ano</option>

                                                <OptionYear initialYear={2000} />
                                            </Select>
                                        </Box>
                                    </Flex>

                                    <Spacer height={variable.space.spacingMD} />

                                    <Flex flex="1 1 auto" justifyContent="flex-end">
                                        <Box>
                                            <Button small={true} text="Filtrar" typeButton="submit" />
                                        </Box>

                                        <Spacer />

                                        <Box>
                                            <Button
                                                backgroundColor={variable.color.grayLight}
                                                onClick={handleCleanForm}
                                                small={true}
                                                text="Limpar filtro"
                                            />
                                        </Box>
                                    </Flex>
                                </FormStyled>
                            </LayoutManagerBoxStyled>
                        </Flex>

                        <Spacer height={variable.space.spacingMD} />

                        <LayoutManagerBoxStyled flex="1 1 auto" p={3}>
                            {informeRendimentosData?.length > 0 ? (
                                <>
                                    <InformeRendimentosList informeRendimentosData={informeRendimentosData} mutate={mutate} />

                                    {informeRendimentosPagination &&
                                    parseInt(informeRendimentosPagination.per_page, 10) < parseInt(informeRendimentosPagination.total, 10) ? (
                                        <>
                                            <Spacer width="100%" />

                                            <Box>
                                                <Pagination
                                                    currentPage={informeRendimentosPagination.current_page}
                                                    dataPerPage={statePagination.per_page}
                                                    totalData={informeRendimentosPagination.total}
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

export default InformeRendimentos;
