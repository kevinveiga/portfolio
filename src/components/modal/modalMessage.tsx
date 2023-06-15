import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { IModal } from '@/interface';

import { Button } from '@/components/button/button';
import { ModalStyled, ModalBackgroundStyled, ModalTopStyled } from '@/components/modal/modalStyled';
import { SvgClose } from '@/components/svg/svgStore';

import { Box, Flex } from '@/styles/flex';
import { P } from '@/styles/text';
import { variable } from '@/styles/variable';

export function ModalMessage({
  children,
  content,
  onClose,
  setActive,
  showTop = true,
  title = 'message',
  ...props
}: IModal): ReactElement | null {
  // CONTEXT
  const { bgColor } = useTheme();
  const { t } = useTranslation();

  // VARIABLE
  const modalContent = children || content;

  // FUNCTION
  const handleClose = (): void => {
    if (setActive) {
      setActive(null);
    }

    if (onClose) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <>
      <ModalBackgroundStyled onClick={(): void => handleClose()} />

      <ModalStyled {...props}>
        <Flex flexDirection="column">
          {showTop ? (
            <ModalTopStyled px={4} py={3} {...props}>
              <div>
                <P>{t(title, { ns: 'glossary' })}:</P>
              </div>

              <div>
                <Button
                  ariaLabel={`${t('close', { ns: 'glossary' })} modal`}
                  obj={{ hoverColor: variable.color.primary }}
                  onClick={(): void => handleClose()}
                  typeStyle="button-unset"
                >
                  <SvgClose fill={bgColor.primary} height="14px" />
                </Button>
              </div>
            </ModalTopStyled>
          ) : null}

          <Box flex="1 1 auto" px={4} py={5}>
            {modalContent}
          </Box>
        </Flex>
      </ModalStyled>
    </>,
    document.getElementById('id-modalmessage-root') as Element
  );
}
