import React, { ReactElement } from 'react';

import { animated, easings, useInView } from '@react-spring/web';

export function FadeInDevice({ children }: any): ReactElement {
  // ANIMATION
  const [inViewRef, inView] = useInView(
    () => ({
      from: { opacity: 0, transform: 'translateX(25%)' },
      to: { opacity: 1, transform: 'translateX(0%)' },
      config: {
        duration: 500,
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
