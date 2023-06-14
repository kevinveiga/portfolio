import axios, { AxiosResponse } from 'axios';

import { getSession } from 'next-auth/react';

import { IFetch } from '@/interface';

const axiosNoInterceptor = axios.create();

export const deleteFetch = async ({ config, url }: IFetch): Promise<AxiosResponse<any>> => {
    const session: any = await getSession();

    const newConfig = session?.user?.token
        ? { ...config, headers: { ...config?.headers, Authorization: `Bearer ${session?.user?.token as string}` } }
        : config;

    const response = await axios.delete(url, newConfig);

    return response;
};

export const deleteFetchNoInterceptor = async ({ config, url }: IFetch): Promise<AxiosResponse<any>> => {
    const session: any = await getSession();

    const newConfig = session?.user?.token
        ? { ...config, headers: { ...config?.headers, Authorization: `Bearer ${session?.user?.token as string}` } }
        : config;

    const response = await axiosNoInterceptor.delete(url, newConfig);

    return response;
};

export const getFetch = async ({ config, params, url }: IFetch): Promise<AxiosResponse<any>> => {
    const session: any = await getSession();

    const newConfig = session?.user?.token
        ? { ...config, headers: { ...config?.headers, Authorization: `Bearer ${session?.user?.token as string}` }, params: params }
        : { config, params: params };

    const response = await axios.get(url, newConfig);

    return response;
};

export const getFetchNoInterceptor = async ({ config, params, url }: IFetch): Promise<AxiosResponse<any>> => {
    const session: any = await getSession();

    const newConfig = session?.user?.token
        ? { ...config, headers: { ...config?.headers, Authorization: `Bearer ${session?.user?.token as string}` }, params: params }
        : { config, params: params };

    const response = await axiosNoInterceptor.get(url, newConfig);

    return response;
};

export const postFetch = async ({ config, fetchData, url }: IFetch): Promise<AxiosResponse<any>> => {
    const session: any = await getSession();

    const newConfig = session?.user?.token
        ? { ...config, headers: { ...config?.headers, Authorization: `Bearer ${session?.user?.token as string}` } }
        : config;

    const response = await axios.post(url, fetchData, newConfig);

    return response;
};

export const postFetchNoInterceptor = async ({ config, fetchData, url }: IFetch): Promise<AxiosResponse<any>> => {
    const session: any = await getSession();

    const newConfig = session?.user?.token
        ? { ...config, headers: { ...config?.headers, Authorization: `Bearer ${session?.user?.token as string}` } }
        : config;

    const response = await axiosNoInterceptor.post(url, fetchData, newConfig);

    return response;
};

export const putFetch = async ({ config, fetchData, url }: IFetch): Promise<AxiosResponse<any>> => {
    const session: any = await getSession();

    const newConfig = session?.user?.token
        ? { ...config, headers: { ...config?.headers, Authorization: `Bearer ${session?.user?.token as string}` } }
        : config;

    const response = await axios.put(url, fetchData, newConfig);

    return response;
};

export const putFetchNoInterceptor = async ({ config, fetchData, url }: IFetch): Promise<AxiosResponse<any>> => {
    const session: any = await getSession();

    const newConfig = session?.user?.token
        ? { ...config, headers: { ...config?.headers, Authorization: `Bearer ${session?.user?.token as string}` } }
        : config;

    const response = await axiosNoInterceptor.put(url, fetchData, newConfig);

    return response;
};
