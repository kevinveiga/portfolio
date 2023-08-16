import React, { ReactElement } from 'react'

import Link from 'next/link'

import { ILinkExternal } from '@/interface'

import { LinkToExternalStyled } from '@/components/link/linkToStyled'

export function LinkToExternal({
  ariaLabel = '',
  children,
  link = '/',
  target = '_blank',
  text = '',
  ...props
}: ILinkExternal): ReactElement {
  const acessibility = ariaLabel || text
  const linkToContent = children || text
  const rel = target === '_blank' ? 'noopener noreferrer' : ''

  return (
    <Link href={link} passHref={true}>
      <LinkToExternalStyled aria-label={acessibility} rel={rel} target={target} {...props}>
        {linkToContent}
      </LinkToExternalStyled>
    </Link>
  )
}
