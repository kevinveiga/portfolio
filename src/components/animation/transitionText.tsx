import React, { ReactElement, useState } from 'react'

import { animated, useTransition } from '@react-spring/web'

export function TransitionText(): ReactElement {
  // STATE
  const [stateIndex, setStateIndex] = useState(0)
  const [stateOnLoadAnimation, setStateOnLoadAnimation] = useState(true)

  // ANIMATION
  const animationTexts = ['Front-End', 'React', 'NodeJS']

  const transitions = useTransition(stateIndex, {
    from: { opacity: stateOnLoadAnimation ? 1 : 0 },
    enter: [{ opacity: 1 }],
    leave: { opacity: 0 },
    key: stateIndex,
    delay: 1500,
    config: {
      duration: 1500
    },
    onRest: (_a, _b, item): void => {
      if (stateOnLoadAnimation && item === 0) {
        setStateOnLoadAnimation(false)
      }

      if (stateIndex === item) {
        setStateIndex((prevState) => (prevState + 1) % animationTexts.length)
      }
    }
  })

  return transitions((style, index) => {
    return <animated.span style={{ position: 'absolute', ...style }}>{animationTexts[index]}</animated.span>
  })
}
