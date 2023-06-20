import styled, { IActiveStyled, IModalStyled, IStyledSystem } from 'styled-components';
import { space } from 'styled-system';

import { gradientDirection, scrollbar } from '@/styles/function';
import { variable } from '@/styles/variable';

export const ModalStyled = styled.div<IStyledSystem>`
  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.primary};
  border-radius: ${variable.layout.borderRadiusPrimary};
  box-shadow: ${variable.layout.boxShadowPrimary};
  color: ${({ theme }): string => theme.textColor.primary};
  left: 50%;
  max-width: ${({ maxWidth }): string => maxWidth || variable.breakpoint.sm};
  min-width: 350px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ zIndex }): number => zIndex || 12};

  @media (max-width: ${variable.breakpoint.sm}) {
    width: 90%;
  }
`;

export const ModalBackgroundStyled = styled.div<IStyledSystem>`
  background-color: ${variable.color.blackTransparent3};
  backdrop-filter: blur(5px);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 11;

  @supports not ((backdrop-filter: blur(5px)) or (-webkit-backdrop-filter: blur(5px))) {
    background-color: transparent;

    ${gradientDirection({
      colorEnd: variable.color.blackTransparent5,
      colorEndPercent: '100%',
      colorStart: variable.color.black,
      colorStartPercent: '0',
      deg: '0deg'
    })}
  }
`;

export const ModalConfirmStyled = styled.div<IStyledSystem>`
  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.tertiary};
  border-radius: ${variable.layout.borderRadiusPrimary};
  box-shadow: ${variable.layout.boxShadowPrimary};
  color: ${({ color }): string => color || 'unset'};
  left: 50%;
  max-width: ${variable.breakpoint.sm};
  min-width: 350px;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: ${({ zIndex }): number => zIndex || 13};

  @media (max-width: ${variable.breakpoint.sm}) {
    width: 90%;
  }
`;

export const ModalConfirmContentStyled = styled.div`
  display: flex;
  flex: 1 0 0;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  word-break: break-all;
`;

export const ModalContentStyled = styled.div<IStyledSystem>`
  ${space};

  ${scrollbar()};

  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  height: 80vh;
  overflow-y: auto;
`;

export const ModalCookieStyled = styled.div`
  background-color: ${({ theme }): string => theme.bgColor.tertiary};
  border-radius: ${variable.layout.borderRadiusPrimary};
  bottom: 25px;
  box-shadow: ${variable.layout.boxShadowPrimary};
  left: 50%;
  position: fixed;
  transform: translateX(-50%);
  width: 90%;
  z-index: 10;

  @media (min-width: ${variable.breakpoint.sm}) {
    width: 720px;
  }
`;

export const ModalInfoStyled = styled.div<IActiveStyled>`
  background-color: ${({ backgroundColor, theme }): string => backgroundColor || theme.bgColor.primary};
  border: 1px solid ${({ borderColor, theme }): string => borderColor || theme.borderColor.primary};
  border-radius: ${variable.layout.borderRadiusPrimary};
  bottom: ${variable.space.spacingXS};
  box-shadow: ${variable.layout.boxShadowPrimary};
  color: ${({ theme }): string => theme.textColor.primary};
  height: ${({ open }): any => (open ? 'auto' : '50px')};
  overflow: ${({ open }): any => (open ? 'visible' : 'hidden')};
  position: fixed;
  right: ${variable.space.spacingXS};
  transition: min-height ${variable.animation.transitionFast};
  width: 480px;
  z-index: ${({ zIndex }): number => zIndex || 11};

  @media (max-width: ${variable.breakpoint.sm}) {
    width: 90%;
  }
`;

export const ModalInfoButtonsStyled = styled.div<IActiveStyled>`
  display: flex;
  position: absolute;
  right: ${variable.space.spacingSM};
  top: ${variable.space.spacingSM};
  z-index: 2;

  [data-svg-maximize-minimize='true'] {
    transform: ${({ open }): string => (open ? 'rotate(0deg)' : 'rotate(180deg)')};
  }
`;

export const ModalInfoContentStyled = styled.div<IStyledSystem>`
  ${space};

  ${scrollbar()};

  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  max-height: 200px;
  min-height: 100px;
  overflow-y: auto;
`;

export const ModalTopStyled = styled.div<IModalStyled>`
  ${space};

  background-color: ${({ type }): string =>
    type === 'error'
      ? variable.color.secondary
      : type === 'success'
      ? variable.color.tertiary
      : type || variable.color.tertiary};
  color: ${({ type, theme }): string =>
    type === 'error' || type === 'success' ? variable.color.black : type || theme.textColor.primary};
  display: flex;
  flex: 1 1 auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;
