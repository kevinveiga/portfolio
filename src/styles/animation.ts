import { css, IAnimation, keyframes, Keyframes } from 'styled-components'

export const animation = css<IAnimation>`
  animation-delay: ${({ delay }): string => delay || '0s'};
  animation-direction: ${({ direction }): string => direction || 'normal'};
  animation-duration: ${({ duration }): string => duration || '1s'};
  animation-fill-mode: ${({ fillMode }): string => fillMode || 'both'};
  animation-iteration-count: ${({ iterationCount }): string | number => iterationCount || 1};
  animation-play-state: ${({ playState }): string => playState || 'running'};
  animation-timing-function: ${({ timingFunction }): string => timingFunction || 'ease-in-out'};
`

export const animationFadeIn = (obj = { opacity: 1, visibility: 'visible' }): Keyframes => keyframes`
    0% {
        opacity: 0;
        visibility: hidden;
    }
    1% {
        visibility: ${obj.visibility};
    }
    100% {
        opacity: ${obj.opacity};
    }
`

export const animationFadeOut = (obj = { opacity: 1, visibility: 'visible' }): Keyframes => keyframes`
    0% {
        opacity: ${obj.opacity};
        visibility: ${obj.visibility};
    }
    99% {
        visibility: ${obj.visibility};
    }
    100% {
        opacity: 0;
        visibility: hidden;
    }
`

export const animationMoveDown = (obj = { move: '2px' }): Keyframes => keyframes`
    0% {
      transform: translateY(0);
    }
    10% {
      transform: translateY(${obj.move});
    }
    20% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
`
