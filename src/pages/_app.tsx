import React, { createContext, Dispatch, ReactElement, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { ThemeProvider } from 'styled-components';

import '@/helpers/i18next';
import { IModal } from '@/interface';
import { PageProvider } from '@/stores/page/usePage';
import { usePersistedState } from '@/stores/persistedState/usePersistedState';

import { Loader } from '@/components/loader/loader';
import { ModalCookie } from '@/components/modal/modalCookie';
import { ModalInfo } from '@/components/modal/modalInfo';
import { ModalMessage } from '@/components/modal/modalMessage';

import { Normalize } from '@/styles/normalize';
import { defaultTheme, lightTheme } from '@/styles/theme';

// DYNAMIC
const LoaderDynamic = dynamic<any>(() => import('@/components/loader/loader').then((module) => module.Loader), { ssr: false }) as typeof Loader;

const ModalCookieDynamic = dynamic<any>(() => import('@/components/modal/modalCookie').then((module) => module.ModalCookie), {
    ssr: false
}) as typeof ModalCookie;

const ModalInfoDynamic = dynamic<any>(() => import('@/components/modal/modalInfo').then((module) => module.ModalInfo), {
    ssr: false
}) as typeof ModalInfo;

const ModalMessageDynamic = dynamic<any>(() => import('@/components/modal/modalMessage').then((module) => module.ModalMessage), {
    ssr: false
}) as typeof ModalMessage;

interface IAppContext {
    stateIsLoading: number;
    stateIsServer: boolean;
    stateTheme: boolean;
    setStateIsLoading: Dispatch<SetStateAction<number>>;
    setStateModalInfo: Dispatch<SetStateAction<IModal | null>>;
    setStateModalMessage: Dispatch<SetStateAction<IModal | null>>;
    setStateTheme: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<IAppContext>({
    stateIsLoading: 0,
    stateIsServer: true,
    stateTheme: false,
    setStateIsLoading: () => 0,
    setStateModalInfo: () => null,
    setStateModalMessage: () => null,
    setStateTheme: () => false
});

export function useApp(): IAppContext {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error('useApp can only be used inside AppProvider');
    }

    return context;
}

function App({ Component, pageProps }: AppProps): ReactElement {
    // STATE
    const [stateCookieConfirm, setStateCookieConfirm] = usePersistedState<boolean>('cookie-confirm', true);
    const [stateIsLoading, setStateIsLoading] = useState<number>(0);
    // Necessário para verificação no lado do servidor NextJS,
    // importante para ter um valor default antes de carregar qualquer coisa no lado do cliente,
    // como valores em LocalStorage ou SessionStorage.
    const [stateIsServer, setStateIsServer] = useState(true);
    const [stateModalInfo, setStateModalInfo] = useState<IModal | null>(null);
    const [stateModalMessage, setStateModalMessage] = useState<IModal | null>(null);
    const [stateTheme, setStateTheme] = useState(false);

    // CONTEXT PROVIDER
    const contextProvider = useMemo(
        () => ({
            stateIsLoading: stateIsLoading,
            stateIsServer: stateIsServer,
            stateTheme: stateTheme,
            setStateIsLoading: setStateIsLoading,
            setStateModalInfo: setStateModalInfo,
            setStateModalMessage: setStateModalMessage,
            setStateTheme: setStateTheme
        }),
        [stateIsLoading, stateIsServer, stateTheme]
    );

    // USEEFFECT
    useEffect(() => {
        return setStateIsServer(false);
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <AppContext.Provider value={contextProvider}>
                <ThemeProvider theme={stateIsServer ? defaultTheme : stateTheme ? lightTheme : defaultTheme}>
                    <Normalize />

                    <PageProvider>
                        <Component {...pageProps} />
                    </PageProvider>

                    {stateIsLoading > 0 ? <LoaderDynamic /> : null}

                    {stateCookieConfirm ? <ModalCookieDynamic setActive={setStateCookieConfirm} /> : null}

                    {stateModalInfo ? (
                        <ModalInfoDynamic setActive={setStateModalInfo} type={stateModalInfo?.type} zIndex={15} {...stateModalInfo} />
                    ) : null}

                    {stateModalMessage ? (
                        <ModalMessageDynamic setActive={setStateModalMessage} type={stateModalMessage?.type} zIndex={15} {...stateModalMessage} />
                    ) : null}
                </ThemeProvider>
            </AppContext.Provider>
        </>
    );
}

export default App;
