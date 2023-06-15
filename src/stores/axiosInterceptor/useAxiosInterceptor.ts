import { useEffect, useMemo } from 'react';

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import { useApp } from '@/pages/_app';

export function useAxiosInterceptor(): void {
  // CONTEXT
  const { setStateIsLoading, setStateModalMessage } = useApp();

  // Mostrar loader no request, ocultar loader no response
  const interceptors = useMemo(
    () => ({
      request: (response: AxiosRequestConfig): AxiosRequestConfig => {
        setStateIsLoading((prevState: number) => prevState + 1);

        const config = response;

        return config;
      },
      response: (response: AxiosResponse): AxiosResponse => {
        setStateIsLoading((prevState: number) => prevState - 1);

        return response;
      },
      error: (error: any): Promise<any> => {
        setStateIsLoading(0);

        // TODO: tratar 401 e revalidar token
        if (error.response.status === 401) {
          console.error('Error: 401');
        }

        setStateModalMessage({ content: 'Unavailable service', type: 'error' });

        return Promise.reject(error);
      }
    }),
    [setStateIsLoading, setStateModalMessage]
  );

  // INTERCEPTOR
  useEffect(() => {
    const interceptorRequest = axios.interceptors.request.use(interceptors.request, interceptors.error);
    const interceptorResponse = axios.interceptors.response.use(interceptors.response, interceptors.error);

    return (): void => {
      axios.interceptors.request.eject(interceptorRequest);
      axios.interceptors.response.eject(interceptorResponse);
    };
  }, [interceptors]);
}
