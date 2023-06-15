import React, { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom';

import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { IModal } from '@/interface';

import { Button } from '@/components/button/button';
import { ModalInfoStyled, ModalInfoButtonsStyled } from '@/components/modal/modalStyled';
import { SvgArrowDown, SvgClose } from '@/components/svg/svgStore';

import { Spacer } from '@/styles/layout';
import { variable } from '@/styles/variable';

export function ModalInfo({ content, onClose, setActive, ...props }: IModal): ReactElement | null {
  // CONTEXT
  const { svgColor } = useTheme();
  const { t } = useTranslation();

  // STATE
  const [stateMaximizeMinimize, setStateMaximizeMinimize] = useState(true);

  // FUNCTION
  const handleClose = (): void => {
    if (setActive) {
      setActive(null);
    }

    if (onClose) {
      onClose();
    }
  };

  const handleMaximizeMinimize = (): void => {
    setStateMaximizeMinimize((prevState) => !prevState);
  };

  return ReactDOM.createPortal(
    <ModalInfoStyled open={stateMaximizeMinimize} {...props}>
      <ModalInfoButtonsStyled open={stateMaximizeMinimize}>
        <Button
          ariaLabel={`${t(stateMaximizeMinimize ? 'minimize' : 'maximize', { ns: 'glossary' })} modal`}
          obj={{ hoverColor: variable.color.primary }}
          onClick={(): void => handleMaximizeMinimize()}
          typeStyle="button-unset"
        >
          <SvgArrowDown data-svg-maximize-minimize="true" fill={svgColor.primary} height="10px" />
        </Button>

        <Spacer />

        <Button
          ariaLabel={`${t('close', { ns: 'glossary' })} modal`}
          obj={{ hoverColor: variable.color.primary }}
          onClick={(): void => handleClose()}
          typeStyle="button-unset"
        >
          <SvgClose fill={svgColor.primary} height="14px" />
        </Button>
      </ModalInfoButtonsStyled>

      {content}
    </ModalInfoStyled>,
    document.getElementById('id-modalinfo-root') as Element
  );
}
