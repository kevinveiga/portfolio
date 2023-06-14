import React, { ReactElement, useEffect, useState } from 'react';

import Head from 'next/head';

import { apiVariaveisCalculosMensal } from '@/configApi';
import { title } from '@/configApp';
import { useSWRGetFetch } from '@/stores/fetch/useSWRGetFetch';
import { usePage } from '@/stores/page/usePage';

import { LayoutManager } from '@/components/layout/layoutManager';
import { LayoutManagerBoxStyled } from '@/components/layout/layoutManagerStyled';
import { Pagination } from '@/components/pagination/pagination';
import { VariaveisCalculosMensalInserirEditar } from '@/components/variaveisCalculosMensal/variaveisCalculosMensalInserirEditar';
import { VariaveisCalculosMensalList } from '@/components/variaveisCalculosMensal/variaveisCalculosMensalList';

import { Box } from '@/styles/flex';
import { Container, Main, Spacer } from '@/styles/layout';
import { Title4 } from '@/styles/text';
import { variable } from '@/styles/variable';

function VariaveisCalculosMensal(): ReactElement {
    // CONTEXT
    const { setStateBreadcrumb } = usePage();

    // BREADCRUMB
    useEffect(() => {
        setStateBreadcrumb([{ link: null, title: 'Cálculo mensal' }]);

        return undefined;
    }, [setStateBreadcrumb]);

    // VARIABLE
    const initialParams = { dir: 'asc', per_page: 12, order: 'mes', page: 1 };

    // STATE
    const [statePagination, setStatePagination] = useState(initialParams);

    // CUSTOM HOOK
    const { data: variaveisCalculosMensal, mutate } = useSWRGetFetch({
        apiParams: { page: statePagination.page, per_page: statePagination.per_page },
        apiUrl: apiVariaveisCalculosMensal
    });

    const variaveisCalculosMensalData = variaveisCalculosMensal?.data?.data;
    const variaveisCalculosMensalPagination = variaveisCalculosMensal?.data;

    // PAGINATE
    const paginate = (pageNumber: number): void => {
        setStatePagination({ ...statePagination, page: pageNumber });
    };

    return (
        <>
            <Head>
                <title>{title} - Dados de Cálculos Mensais</title>

                <meta name="description" content="Dados de Cálculos Mensais" />
            </Head>

            <Main>
                <LayoutManager>
                    <Container>
                        <Title4>Informações para cálculos gerais do mês atual</Title4>

                        <Spacer height={variable.space.spacingMD} />

                        <VariaveisCalculosMensalInserirEditar mutate={mutate} />

                        <Spacer height={variable.space.spacingMD} />

                        <Title4>Cálculos gerais dos últimos meses</Title4>

                        <Spacer height={variable.space.spacingMD} />

                        <LayoutManagerBoxStyled flex="1 1 auto" p={3}>
                            <VariaveisCalculosMensalList variaveisCalculosMensalData={variaveisCalculosMensalData} />

                            {variaveisCalculosMensalPagination &&
                            parseInt(variaveisCalculosMensalPagination.per_page, 10) < parseInt(variaveisCalculosMensalPagination.total, 10) ? (
                                <>
                                    <Spacer width="100%" />

                                    <Box>
                                        <Pagination
                                            currentPage={variaveisCalculosMensalPagination.current_page}
                                            dataPerPage={statePagination.per_page}
                                            totalData={variaveisCalculosMensalPagination.total}
                                            paginate={paginate}
                                        />
                                    </Box>
                                </>
                            ) : null}
                        </LayoutManagerBoxStyled>
                    </Container>
                </LayoutManager>
            </Main>
        </>
    );
}

export default VariaveisCalculosMensal;
