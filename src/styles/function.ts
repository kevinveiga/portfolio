import { css } from 'styled-components';

import { IGradient, IGradient3Colors } from '@/interface';

import { variable } from '@/styles/variable';

export const gradientDirection = ({
  colorEnd = variable.color.secondary,
  colorEndPercent = '100%',
  colorStart = variable.color.primary,
  colorStartPercent = 0,
  deg = '90deg'
}: IGradient): any => {
  return css`
    background-image: linear-gradient(${deg}, ${colorStart} ${colorStartPercent}, ${colorEnd} ${colorEndPercent});
    background-repeat: repeat-x;
  `;
};

export const gradientDirection3Colors = ({
  colorEnd = variable.color.secondary,
  colorEndPercent = '100%',
  colorMid = variable.color.tertiary,
  colorMidPercent = '50%',
  colorStart = variable.color.primary,
  colorStartPercent = 0,
  deg = '90deg'
}: IGradient3Colors): any => {
  return css`
    background-image: linear-gradient(
      ${deg},
      ${colorStart} ${colorStartPercent},
      ${colorMid} ${colorMidPercent},
      ${colorEnd} ${colorEndPercent}
    );
    background-repeat: repeat-x;
  `;
};

export const gradientDirectionRepeat = ({
  colorEnd = variable.color.secondary,
  colorEndPercent = '100%',
  colorStart = variable.color.primary,
  colorStartPercent = 0,
  deg = '90deg'
}: IGradient): any => {
  return css`
    background-image: repeating-linear-gradient(
      ${deg},
      ${colorStart} ${colorStartPercent},
      ${colorEnd} ${colorEndPercent}
    );
  `;
};

export const gradientDirection3ColorsRepeat = ({
  colorEnd = variable.color.secondary,
  colorEndPercent = '100%',
  colorMid = variable.color.tertiary,
  colorMidPercent = '50%',
  colorStart = variable.color.primary,
  colorStartPercent = 0,
  deg = '90deg'
}: IGradient3Colors): any => {
  return css`
    background-image: repeating-linear-gradient(
      ${deg},
      ${colorStart} ${colorStartPercent},
      ${colorMid} ${colorMidPercent},
      ${colorEnd} ${colorEndPercent}
    );
  `;
};

export const gradientRadial = ({
  colorEnd = variable.color.secondary,
  colorEndPercent = '100%',
  colorStart = variable.color.primary,
  colorStartPercent = 0
}: IGradient): any => {
  return css`
    background-image: radial-gradient(circle, ${colorStart} ${colorStartPercent}, ${colorEnd} ${colorEndPercent});
  `;
};

export const gradientRadialRepeat = ({
  colorEnd = variable.color.secondary,
  colorEndPercent = '100%',
  colorStart = variable.color.primary,
  colorStartPercent = 0
}: IGradient): any => {
  return css`
    background-image: repeating-radial-gradient(
      circle,
      ${colorStart} ${colorStartPercent},
      ${colorEnd} ${colorEndPercent}
    );
  `;
};

export const letterSpacing = (value = '0', align = ''): any => {
  return css`
    letter-spacing: ${value};
    ${align === 'center' && `padding-left: ${value};`}
    ${align === 'right' && `margin-right: -${value};`}
  `;
};

export const scrollbar = (colorPrimary = '', colorSecondary = '', scrollbarSize = '8px'): any => {
  return css`
    &::-webkit-scrollbar {
      height: ${scrollbarSize};
      width: ${scrollbarSize};
    }

    &::-webkit-scrollbar-button {
      background-color: ${({ theme }): string => colorSecondary || theme.bgColor.primary};
      display: none;
    }

    &::-webkit-scrollbar-corner {
      background-color: ${({ theme }): string => colorSecondary || theme.bgColor.primary};
    }

    &::-webkit-resizer {
      background-color: ${({ theme }): string => colorSecondary || theme.bgColor.primary};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }): string => colorPrimary || theme.brandColor.primary};
      height: 50px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: ${({ theme }): string => colorSecondary || theme.bgColor.primary};
      margin: 0;
    }
  `;
};

export const scrollbarInvisible = (): any => {
  return css`
    &::-webkit-scrollbar {
      height: 100%;
      width: 0;
    }

    &::-webkit-scrollbar-button {
      background-color: transparent;
      display: none;
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    &::-webkit-resizer {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
      height: 0;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
      margin: 0;
    }
  `;
};

export const scrollbarTable = (colorPrimary = '', colorSecondary = '', scrollbarSize = '6px'): any => {
  return css`
    &::-webkit-scrollbar {
      height: ${scrollbarSize};
      margin-bottom: ${variable.space.spacingSM};
      width: ${scrollbarSize};
    }

    &::-webkit-scrollbar-button {
      background-color: ${({ theme }): string => colorSecondary || theme.bgColor.tertiary};
      display: none;
    }

    &::-webkit-scrollbar-corner {
      background-color: ${({ theme }): string => colorSecondary || theme.bgColor.tertiary};
    }

    &::-webkit-resizer {
      background-color: ${({ theme }): string => colorSecondary || theme.bgColor.tertiary};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }): string => colorPrimary || theme.bgColor.quaternary};
      border-radius: ${variable.layout.borderRadiusPrimary};
      height: 50px;
    }

    &::-webkit-scrollbar-track {
      background-color: ${colorSecondary};
      border-radius: ${variable.layout.borderRadiusPrimary};
      box-shadow: inset 0 0 0 1px ${variable.color.gray2};
    }

    &::-webkit-scrollbar-track-piece {
      background-color: transparent;
      margin: 0;
    }
  `;
};
