import React, { ReactElement } from 'react'

import { ILanguage } from '@/interface'

import { SvgFlagBrazil, SvgFlagSpain, SvgFlagUsa } from '@/components/svg/svgStore'

export function LanguageFlag({ language, ...props }: ILanguage): ReactElement {
  switch (language) {
    case 'pt_BR':
      return <SvgFlagBrazil {...props} />

    case 'es':
      return <SvgFlagSpain {...props} />

    default:
      return <SvgFlagUsa {...props} />
  }
}
