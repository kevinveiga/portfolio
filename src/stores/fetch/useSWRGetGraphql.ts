import { useEffect } from 'react';

import useSWR from 'swr';

import { useApp } from '@/pages/_app';
import { getGraphql } from '@/services/graphqlQuery';

interface IUseSWRGetGraphql {
    graphqlQuery: string;
    graphqlRequestHeaders?: Record<string, any>;
    graphqlVariables?: Record<string, any>;
}

export function useSWRGetGraphql({ graphqlQuery, graphqlRequestHeaders, graphqlVariables }: IUseSWRGetGraphql): Record<string, any> {
    // CONTEXT
    const { setStateIsLoading } = useApp();

    // API
    const { data, error, mutate } = useSWR(
        graphqlQuery
            ? {
                  query: graphqlQuery,
                  requestHeaders: graphqlRequestHeaders,
                  variables: graphqlVariables
              }
            : null,
        ({ query, requestHeaders, variables }) => getGraphql({ query, requestHeaders, variables })
    );

    useEffect(() => {
        if (data !== undefined && error !== undefined) {
            setStateIsLoading((prevState: number) => (!data && !error ? prevState + 1 : prevState - 1));
        }

        return undefined;
    }, [data, error, setStateIsLoading]);

    return {
        data: data,
        isError: error,
        isLoading: !data && !error,
        mutate: mutate
    };
}
