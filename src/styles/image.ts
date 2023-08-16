import styled, { css, IImageStyled, IStyledSystem } from 'styled-components'
import { background, layout, position, space } from 'styled-system'

import { gradientDirection } from '@/styles/function'
import { variable } from '@/styles/variable'

export const Image = styled.img<IImageStyled>`
  ${layout};
  ${space};

  object-fit: ${({ objectFit }): string => objectFit || 'cover'};
`

export const ImageCircleContainer = styled.div<IStyledSystem>`
  ${layout};
  ${space};

  border-radius: 50%;
  ${({ height }): number | string | undefined => (height === undefined ? 'height: 150px' : undefined)};
  overflow: hidden;
  text-align: center;
  ${({ width }): number | string | undefined => (width === undefined ? 'width: 150px' : undefined)};
`

export const ImageCircleBorderContainer = styled.div`
  border-radius: 50%;
  height: 175px;
  overflow: hidden;
  width: 175px;
`

export const BgImage = styled.div<IImageStyled>`
  ${background};
  ${layout};
  ${position};

  ${({ attachment }): string | undefined => (attachment ? `background-attachment: ${attachment}` : undefined)};
  background-color: ${({ backgroundColor }): string => backgroundColor || 'transparent'};
  ${({ src }): string | undefined => (src ? `background-image: url('${src}')` : undefined)};
  ${({ backgroundPosition }): string | undefined =>
    backgroundPosition === undefined ? 'background-position: 50% 50%' : undefined};
  ${({ backgroundRepeat }): string | undefined =>
    backgroundRepeat === undefined ? 'background-repeat: no-repeat' : undefined};
  ${({ backgroundSize }): string | undefined => (backgroundSize === undefined ? 'background-size: cover' : undefined)};
  ${({ filter }): string | undefined => (filter ? `filter: ${filter}` : undefined)};
  ${({ height }): string | undefined => (height === undefined ? 'height: 100%' : undefined)};
  opacity: ${({ opacity }): number => opacity || 1};
  position: absolute;
  transition:
    filter ${variable.animation.transitionSlow},
    transform ${variable.animation.transition};
  ${({ width }): string | undefined => (width === undefined ? 'width: 100%' : undefined)};
  z-index: ${({ zIndex }): number => zIndex || -1};

  ${({ scale }): any =>
    scale
      ? css`
          transform: scale(${scale}) translate3d(0, 0, 0);
          transform-origin: 50% 50%;
        `
      : undefined};
`

export const BgImageOverlay = styled(BgImage)<IImageStyled>`
  ${({ overlayColor }): any => css`
    &::after {
      background-color: ${overlayColor || variable.color.blackTransparent1};
      content: ' ';
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 2;
    }
  `};
`

export const BgImageOverlayTopBottom = styled(BgImageOverlay)<IImageStyled>`
  ${({ colorEndPercent, overlayColorBottom, overlayColorTop, colorStartPercent }): any => css`
    &::after {
      ${gradientDirection({
        colorEnd: overlayColorBottom || variable.color.blackTransparent5,
        colorEndPercent: colorEndPercent || '100%',
        colorStart: overlayColorTop || variable.color.blackTransparent1,
        colorStartPercent: colorStartPercent || '0',
        deg: '180deg'
      })};
    }
  `};
`
