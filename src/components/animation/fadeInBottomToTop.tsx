import React, { ReactElement } from 'react';

import { animated, easings, useInView } from '@react-spring/web';

import { variable } from '@/styles/variable';

export function FadeInBottomToTop({ children }: any): ReactElement {
  // ANIMATION
  const [inViewRef, inView] = useInView(
    () => ({
      from: { opacity: 0, transform: 'translateY(5%)' },
      to: { opacity: 1, transform: 'translateY(0%)' },
      config: {
        duration: parseInt(variable.animation.durationSlow, 10),
        easing: easings.easeInOutCubic
      }
    }),
    {
      rootMargin: '-35% 0%'
    }
  );

  return (
    <animated.div ref={inViewRef} style={inView}>
      {children}
    </animated.div>
  );
}
