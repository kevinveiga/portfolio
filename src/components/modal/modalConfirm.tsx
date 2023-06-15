import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import parse from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { IModalConfirm } from '@/interface';

import { Button } from '@/components/button/button';
import { ModalConfirmStyled, ModalConfirmContentStyled } from '@/components/modal/modalStyled';
import { SvgClose } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { Spacer } from '@/styles/layout';
import { P } from '@/styles/text';
import { variable } from '@/styles/variable';

export function ModalConfirm({ cbFunction, message, setActive, ...props }: IModalConfirm): ReactElement | null {
  // CONTEXT
  const { titleTheme } = useTheme();
  const { t } = useTranslation();

  // FUNCTION
  const handleNo = (): void => {
    setActive(null);
  };

  const handleYes = (): void => {
    setActive(null);

    if (cbFunction) {
      cbFunction();
    }
  };

  return ReactDOM.createPortal(
    <ModalConfirmStyled {...props}>
      <Flex alignItems="flex-start" justifyContent="space-between" p={4}>
        <ModalConfirmContentStyled>
          <Flex flex="1 1 auto" justifyContent="center">
            <Box textAlign="center">
              <P>{parse(message || '')}</P>
            </Box>

            <Spacer width="100%" />

            <Box>
              <Button backgroundColor={variable.color.gray} onClick={handleNo} text="Não" />

              <Spacer width={variable.space.spacingMD} />

              <Button onClick={handleYes} text="Sim" />
            </Box>
          </Flex>
        </ModalConfirmContentStyled>

        <Box flex="0 0 auto" pl={{ d: 3, md: 4 }}>
          <Button
            ariaLabel={`${t('close', { ns: 'glossary' })} modal`}
            onClick={(): void => handleNo()}
            typeStyle="button-unset"
          >
            <SvgClose fill={titleTheme === 'light' ? variable.color.black : variable.color.white} height="14px" />
          </Button>
        </Box>
      </Flex>
    </ModalConfirmStyled>,
    document.getElementById('id-modalconfirm-root') as Element
  );
}
