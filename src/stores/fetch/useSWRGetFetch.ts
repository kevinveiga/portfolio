import { useEffect } from 'react';

import useSWR from 'swr';

import { useApp } from '@/pages/_app';
import { getFetch } from '@/services/fetch';

interface IUseSWRGetFetch {
    apiParams?: Record<string, any>;
    apiUrl: string;
}

export function useSWRGetFetch({ apiParams, apiUrl }: IUseSWRGetFetch): Record<string, any> {
    // CONTEXT
    const { setStateIsLoading } = useApp();

    // API
    const { data, error, mutate } = useSWR(apiUrl ? { params: apiParams, url: apiUrl } : null, ({ params, url }) => getFetch({ params, url }));

    useEffect(() => {
        if (data !== undefined && error !== undefined) {
            setStateIsLoading((prevState: number) => (!data && !error ? prevState + 1 : prevState - 1));
        }

        return undefined;
    }, [data, error, setStateIsLoading]);

    return {
        data: data?.data?.data,
        isError: error,
        isLoading: !data?.data?.data && !error,
        mutate: mutate
    };
}
