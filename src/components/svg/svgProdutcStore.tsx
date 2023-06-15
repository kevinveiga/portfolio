import React, { ReactElement } from 'react';

import { ISvgStyled } from 'styled-components';

import { SvgProductDefaultSymbolStyled } from '@/components/svg/svgStyled';

export function SvgProductDefaultSymbol({ ...props }: ISvgStyled): ReactElement {
  return (
    <SvgProductDefaultSymbolStyled {...props} viewBox="0 0 11 13" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M.15.15a.5.5 0 0 1 .7 0l6 6a.5.5 0 0 1 0 .7l-6 6a.5.5 0 0 1-.7-.7L5.79 6.5.15.85a.5.5 0 0 1 0-.7z"
        data-svg-color="true"
      />

      <path
        d="M6.15 2.15c.2-.2.51-.2.7 0l4 4c.2.2.2.51 0 .7l-4 4c-.47.48-1.18-.23-.7-.7L9.79 6.5 6.15 2.85a.5.5 0 0 1 0-.7z"
        id="svg-arrow-last"
      />
    </SvgProductDefaultSymbolStyled>
  );
}
