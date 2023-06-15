import { urlManager } from '@/configApp';

export const verifyUrlsNeedAuthentication = (pathname: string): boolean => {
  const urlsNeedAuthenticationRegex = `^(${urlManager}|${urlManager}/.*)$`;
  const regex = new RegExp(urlsNeedAuthenticationRegex);

  return regex.test(pathname);
};
