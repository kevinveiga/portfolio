import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { SWRConfig } from 'swr';

import { IBreadcrumb } from '@/interface';
import { useApp } from '@/pages/_app';
import { useAxiosInterceptor } from '@/hooks/axiosInterceptor/useAxiosInterceptor';
import { usePersistedState } from '@/hooks/persistedState/usePersistedState';
import { TLanguage } from '@/type';

interface IPageContext {
  stateBreadcrumb: IBreadcrumb[] | null;
  stateLanguage: TLanguage;
  setStateBreadcrumb: Dispatch<SetStateAction<IBreadcrumb[] | null>>;
  setStateLanguage: Dispatch<SetStateAction<TLanguage>>;
}

const PageContext = createContext<IPageContext>({
  stateBreadcrumb: null,
  stateLanguage: 'en',
  setStateBreadcrumb: () => null,
  setStateLanguage: () => 'en'
});

export function usePage(): IPageContext {
  const context = useContext(PageContext);

  if (context === undefined) {
    throw new Error('usePage can only be used inside PageProvider');
  }

  return context;
}

export function PageProvider({ children }: any): ReactElement {
  // CONTEXT
  useAxiosInterceptor();
  const { setStateIsLoading, setStateModalMessage } = useApp();
  const router = useRouter();
  const { i18n } = useTranslation();

  // STATE
  const [stateBreadcrumb, setStateBreadcrumb] = useState<IBreadcrumb[] | null>(null);
  const [stateLanguage, setStateLanguage] = usePersistedState<TLanguage>('language', 'pt_BR');

  // CONTEXT PROVIDER
  const contextProvider = useMemo(
    () => ({
      stateBreadcrumb: stateBreadcrumb,
      stateLanguage: stateLanguage,
      setStateBreadcrumb: setStateBreadcrumb,
      setStateLanguage: setStateLanguage
    }),
    [stateBreadcrumb, stateLanguage, setStateLanguage]
  );

  // SWR Config
  const swrConfigObj = {
    errorRetryCount: 0,
    onError: (error: any): void => {
      const { message = '', response: { status = 0 } = {} } = error;

      // If not logged in, clean stateAuth and redirects to sign in
      if (status !== 200) {
        setStateModalMessage({ content: `Unavailable service: ${message as string}`, type: 'error' });
      }
    }
  };

  // LANGUAGE
  useEffect(() => {
    i18n.changeLanguage(stateLanguage).catch(() => null);

    return undefined;
  }, [i18n, stateLanguage]);

  // LOADER IN CHANGE ROUTE
  useEffect(() => {
    const handleRouteChangeStart = (): void => {
      setStateIsLoading((prevState: number) => prevState + 1);
    };

    const handleRouteChangeComplete = (): void => {
      setStateIsLoading((prevState: number) => prevState - 1);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router, setStateIsLoading]);

  return (
    <PageContext.Provider value={contextProvider}>
      <SWRConfig value={swrConfigObj}>{children}</SWRConfig>
    </PageContext.Provider>
  );
}
