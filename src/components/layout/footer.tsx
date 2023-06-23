import React, { ReactElement } from 'react';

import { title } from '@/configApp';

import { FooterStyled } from '@/components/layout/footerStyled';

import { Flex } from '@/styles/flex';

export function Footer(): ReactElement {
  return (
    <FooterStyled>
      <Flex alignItems="center" fontSize="12px" height="100%" justifyContent="center" p={{ d: 3, sm: 4 }}>
        {`© ${new Date().getFullYear()} ${title}`}
      </Flex>
    </FooterStyled>
  );
}
