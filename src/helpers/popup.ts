import { apiAuth } from '@/configApi';

export const authWindowOpen = (): void => {
  // Fixes dual-screen position, most browsers and Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : window.screen.height;
  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : window.screen.width;

  const popupHeight = 450;
  const popupWidth = 650;

  const left = width / 2 - popupWidth / 2 + dualScreenLeft;
  const top = height / 2 - popupHeight / 2 + dualScreenTop;

  window.open(apiAuth, 'Autenticação', `height=${popupHeight},left=${left},popup,top=${top},width=${popupWidth}`);
};
