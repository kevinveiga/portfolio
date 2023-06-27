import { sleep } from '@/helpers/sleep';

import { variable } from '@/styles/variable';

let scrollOnce = false;

const fnElementPosition = (elementPosition: Element | null): number => {
  return elementPosition
    ? elementPosition.getBoundingClientRect().y -
        document.body.getBoundingClientRect().y +
        (window.innerWidth < parseInt(variable.breakpoint.md, 10) ? 0 : 80)
    : 0;
};

const fnScroll = (anchor: number, context: Element | (Window & typeof globalThis) | null): void => {
  if (context) {
    try {
      context.scroll({
        behavior: 'smooth',
        left: 0,
        top: anchor
      });
    } catch (error) {
      context.scrollTo(0, anchor);
    }
  }
};

export const scrollTo = (
  anchorElementString = '',
  doScroll = true,
  offset = 0,
  timer = 0,
  scrollContextString = ''
): void => {
  if (doScroll) {
    // Verifica se o scroll já está sendo feito
    if (!scrollOnce) {
      const anchorElement = anchorElementString ? document.querySelector(anchorElementString) : null;
      const newOffset = offset || window.innerWidth > 1000 ? -120 : -20;
      const scrollContext = scrollContextString ? document.querySelector(scrollContextString) : window;
      const scrollYPos = window.scrollY || document.documentElement.scrollTop;

      let scrollTimer = timer;

      // Se o scroll deve ir para um elemento, então é adicionado um timer de 750ms para fazer o scroll corretamente
      if (anchorElementString && Math.trunc(fnElementPosition(anchorElement)) !== Math.trunc(scrollYPos)) {
        scrollTimer = 250;
      }

      const delay = async (): Promise<void> => {
        await sleep(scrollTimer);

        fnScroll(fnElementPosition(anchorElement) + newOffset, scrollContext);
      };

      delay().catch(() => null);

      scrollOnce = true;
    }

    // Reseta a verificação se o scroll já estava sendo feito
    const delay = async (): Promise<void> => {
      await sleep(1000);

      scrollOnce = false;
    };

    delay().catch(() => null);
  }
};
