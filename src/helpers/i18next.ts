import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import enApp from '@/public/locales/en/app.json'
import enGlossary from '@/public/locales/en/glossary.json'
import ptBrApp from '@/public/locales/pt_BR/app.json'
import ptBrGlossary from '@/public/locales/pt_BR/glossary.json'

const defaultNS = 'app'
const resources = {
  en: {
    app: enApp,
    glossary: enGlossary
  },
  pt_BR: {
    app: ptBrApp,
    glossary: ptBrGlossary
  }
}

i18next
  .use(initReactI18next)
  .init({
    debug: false,
    defaultNS: defaultNS,
    fallbackLng: 'pt_BR',
    lng: 'pt_BR',
    ns: [defaultNS, 'glossary'],
    react: {
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: false,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
      useSuspense: false
    },
    resources: resources
  })
  .catch(() => null)

export default i18next
