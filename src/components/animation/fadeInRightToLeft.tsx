import React, { ReactElement } from 'react';

import { animated, easings, useInView } from '@react-spring/web';

import { variable } from '@/styles/variable';

export function FadeInRightToLeft({ children }: any): ReactElement {
  // ANIMATION
  const [inViewRef, inView] = useInView(
    () => ({
      from: { opacity: 0, transform: 'translateX(15%)' },
      to: { opacity: 1, transform: 'translateX(0%)' },
      config: {
        duration: parseInt(variable.animation.durationSlow, 10),
        easing: easings.easeInOutCubic
      }
    }),
    {
      rootMargin: '-25% 0%'
    }
  );

  return (
    <animated.div ref={inViewRef} style={inView}>
      {children}
    </animated.div>
  );
}
