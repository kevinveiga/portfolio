import React, { ReactElement } from 'react';

import { animated, easings, useInView } from '@react-spring/web';

export function FadeInIcon({ children }: any): ReactElement {
  // ANIMATION
  const [inViewRef, inView] = useInView(
    () => ({
      from: { opacity: 0, transform: 'scale(1.2)' },
      to: { opacity: 1, transform: 'scale(1)' },
      config: {
        duration: 500,
        easing: easings.easeInOutBack
      }
    }),
    {
      rootMargin: '-5% 0%'
    }
  );

  return (
    <animated.div ref={inViewRef} style={inView}>
      {children}
    </animated.div>
  );
}
