import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useMemo } from 'react';

// import { ModalMessage } from '@/components/modal/modalMessage';

import { usePersistedState } from '@/stores/persistedState/usePersistedState';

// DYNAMIC
// const ModalMessageDynamic = dynamic<any>(() => import('@/components/modal/modalMessage').then((module) => module.ModalMessage), { ssr: false }) as typeof ModalMessage;

interface IAuthContext {
    stateAuth: string | null;
    setStateAuth: Dispatch<SetStateAction<string | null>>;
}

const AuthContext = createContext<IAuthContext>({
    stateAuth: null,
    setStateAuth: () => null
});

export function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth can only be used inside AuthProvider');
    }

    return context;
}

export function AuthProvider({ children }: any): PropsWithChildren<any> {
    // STATE
    const [stateAuth, setStateAuth] = usePersistedState<string | null>('auth', null);

    // Autenticação externa
    // const [stateAuthModal, setStateAuthModal] = useState(false);

    // Verifica se o usuário está logado, se não estiver, abre o popup de autenticação
    // useEffect(() => {
    //     if (!stateAuth) {
    //         setStateAuthModal(true);
    //     }

    //     return undefined;
    // }, [stateAuth, setStateAuthModal]);

    // Ao receber a resposta do popup de autenticação,
    // atualiza os dados do usuário
    // useEffect(() => {
    //     const onMessageReceived = (event: any): void => {
    //         // Verificação de segurança se o endereço da mensagem é o mesmo do projeto,
    //         // ou se for definido como * (development)
    //         if (event.origin === apiUrl) {
    //             const { data } = event;

    //             setStateAuth(data);
    //             setStateAuthModal(false);
    //         }
    //     };

    //     window.addEventListener('message', onMessageReceived);

    //     return () => {
    //         window.removeEventListener('message', onMessageReceived);
    //     };
    // }, [setStateAuth, setStateAuthModal]);

    // CONTEXT PROVIDER
    const contextProvider = useMemo(
        () => ({
            stateAuth: stateAuth,
            setStateAuth: setStateAuth
        }),
        [stateAuth, setStateAuth]
    );

    return (
        <AuthContext.Provider value={contextProvider}>
            {children}

            {/* Modal para realizar autenticação externa */}
            {/* {stateAuthModal ? (
                <ModalMessageDynamic setActive={setStateAuthModal} showCloseBtn={false}>
                    <P textAlign="center">Realize a autenticação</P>

                    <Spacer width="100%" />

                    <Button onClick={(): void => authWindowOpen()} text="Autenticação" />
                </ModalMessageDynamic>
            ) : null} */}
        </AuthContext.Provider>
    );
}
