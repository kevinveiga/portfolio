import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'

import { LoaderBackgroundStyled, LoaderContentStyled } from '@/components/loader/loaderStyled'
import { SvgLogoLoader } from '@/components/svg/svgStore'

export function Loader(): ReactElement | null {
  return ReactDOM.createPortal(
    <LoaderBackgroundStyled>
      <LoaderContentStyled>
        <SvgLogoLoader />
      </LoaderContentStyled>
    </LoaderBackgroundStyled>,
    document.getElementById('id-loader-root') as Element
  )
}
