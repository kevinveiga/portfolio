import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { IModal } from '@/interface';

import { Button } from '@/components/button/button';
import { ModalCookieStyled } from '@/components/modal/modalStyled';
import { SvgClose } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { P } from '@/styles/text';
import { variable } from '@/styles/variable';

export function ModalCookie({ setActive }: IModal): ReactElement | null {
  // CONTEXT
  const { titleTheme } = useTheme();
  const { t } = useTranslation();

  // FUNCTION
  const handleCookieConfirm = (): void => {
    if (setActive) {
      setActive(false);
    }
  };

  return ReactDOM.createPortal(
    <ModalCookieStyled>
      <Flex alignItems="flex-start" flexWrap="nowrap" justifyContent="space-between" p={3}>
        <Box fontSize={{ d: '12px', md: '14px' }} justifyContent="center" textAlign="center">
          <P>
            {t('this website uses cookies to improve your browsing experience and deliver the best possible service', {
              ns: 'glossary'
            })}
            .
          </P>

          <P>{t('by continuing to browse the site, you consent to its use', { ns: 'glossary' })}.</P>
        </Box>

        <Box pl={{ d: 3, md: 4 }}>
          <Button
            ariaLabel={`${t('close', { ns: 'glossary' })} modal`}
            onClick={(): void => handleCookieConfirm()}
            typeStyle="button-unset"
          >
            <SvgClose fill={titleTheme === 'light' ? variable.color.black : variable.color.white} height="14px" />
          </Button>
        </Box>
      </Flex>
    </ModalCookieStyled>,
    document.getElementById('id-modalcookie-root') as Element
  );
}
