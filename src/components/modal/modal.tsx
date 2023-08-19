import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom'

import { IModal } from '@/interface'

import { ModalBackgroundStyled, ModalStyled } from '@/components/modal/modalStyled'

export function Modal({ children, content, onClose, setActive, ...props }: IModal): ReactElement | null {
  // VARIABLE
  const modalContent = children || content

  // FUNCTION
  const handleClose = (): void => {
    if (setActive) {
      setActive(null)
    }

    if (onClose) {
      onClose()
    }
  }

  return ReactDOM.createPortal(
    <>
      <ModalBackgroundStyled onClick={(): void => handleClose()} />

      <ModalStyled {...props}>{modalContent}</ModalStyled>
    </>,
    document.getElementById('id-modal-root') as Element
  )
}
