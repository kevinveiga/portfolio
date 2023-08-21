import React, {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import '@/helpers/i18next'
import { PageProvider } from '@/contexts/page/usePage'
import { usePersistedState } from '@/hooks/persistedState/usePersistedState'
import { IModal } from '@/interface'

import { Loader } from '@/components/loader/loader'
import { ModalInfo } from '@/components/modal/modalInfo'
import { ModalMessage } from '@/components/modal/modalMessage'

import { Normalize } from '@/styles/normalize'
import { defaultTheme, lightTheme } from '@/styles/theme'
import { variable } from '@/styles/variable'

// DYNAMIC
const LoaderDynamic = dynamic<any>(() => import('@/components/loader/loader').then((module) => module.Loader), {
  ssr: false
}) as typeof Loader

const ModalInfoDynamic = dynamic<any>(() => import('@/components/modal/modalInfo').then((module) => module.ModalInfo), {
  ssr: false
}) as typeof ModalInfo

const ModalMessageDynamic = dynamic<any>(
  () => import('@/components/modal/modalMessage').then((module) => module.ModalMessage),
  {
    ssr: false
  }
) as typeof ModalMessage

interface IAppContext {
  stateIsLoading: number
  stateIsServer: boolean
  stateTheme: boolean
  setStateIsLoading: Dispatch<SetStateAction<number>>
  setStateModalInfo: Dispatch<SetStateAction<IModal | null>>
  setStateModalMessage: Dispatch<SetStateAction<IModal | null>>
  setStateTheme: Dispatch<SetStateAction<boolean>>
}

const AppContext = createContext<IAppContext>({
  stateIsLoading: 0,
  stateIsServer: true,
  stateTheme: false,
  setStateIsLoading: () => 0,
  setStateModalInfo: () => null,
  setStateModalMessage: () => null,
  setStateTheme: () => false
})

export function useApp(): IAppContext {
  const context = useContext(AppContext)

  if (context === undefined) {
    throw new Error('useApp can only be used inside AppProvider')
  }

  return context
}

function App({ Component, pageProps }: AppProps): ReactElement {
  // STATE
  const [stateIsLoading, setStateIsLoading] = useState<number>(0)
  // Necessário para verificação no lado do servidor NextJS,
  // importante para ter um valor default antes de carregar qualquer coisa no lado do cliente,
  // como valores em LocalStorage ou SessionStorage.
  const [stateIsServer, setStateIsServer] = useState(true)
  const [stateModalInfo, setStateModalInfo] = useState<IModal | null>(null)
  const [stateModalMessage, setStateModalMessage] = useState<IModal | null>(null)
  const [stateTheme, setStateTheme] = usePersistedState<boolean>('theme', false)

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
    [stateIsLoading, stateIsServer, stateTheme, setStateTheme]
  )

  // USEEFFECT
  useEffect(() => {
    if (!stateIsServer) {
      console.log('%c© Portfolio - Kevin M. Veiga', `color: ${variable.color.turquoise}`)
      console.log(
        '%cTecnologias utilizadas: React, NextJS, Typescript, Styled Components',
        `color: ${variable.color.turquoise}`
      )
      console.log('%cFerramentas utilizadas: Babel, ESLint, Prettier, Husky', `color: ${variable.color.turquoise}`)
    }

    return setStateIsServer(false)
  }, [stateIsServer])

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <AppContext.Provider value={contextProvider}>
        <ThemeProvider theme={stateIsServer ? lightTheme : stateTheme ? defaultTheme : lightTheme}>
          <Normalize />

          <PageProvider>
            <Component {...pageProps} />
          </PageProvider>

          {stateIsLoading > 0 ? <LoaderDynamic /> : null}

          {stateModalInfo ? (
            <ModalInfoDynamic
              setActive={setStateModalInfo}
              type={stateModalInfo?.type}
              zIndex={15}
              {...stateModalInfo}
            />
          ) : null}

          {stateModalMessage ? (
            <ModalMessageDynamic
              setActive={setStateModalMessage}
              type={stateModalMessage?.type}
              zIndex={15}
              {...stateModalMessage}
            />
          ) : null}
        </ThemeProvider>
      </AppContext.Provider>
    </>
  )
}

export default App
