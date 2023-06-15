import React, { ReactElement } from 'react';

import Link from 'next/link';

import { ILink } from '@/interface';

import { LinkToStyled } from '@/components/link/linkToStyled';

export function LinkTo({ ariaLabel = '', children, link = '/', text = '', ...props }: ILink): ReactElement {
  const acessibility = ariaLabel || text;
  const linkContent = children || text;

  return (
    <Link href={link} passHref={true}>
      <LinkToStyled aria-label={acessibility} {...props}>
        {linkContent}
      </LinkToStyled>
    </Link>
  );
}
