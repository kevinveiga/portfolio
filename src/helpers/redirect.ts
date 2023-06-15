export const redirectUrl = (value = ''): string => {
  const url = process.env.NEXT_PUBLIC_APP_URL || '';

  if (!value || value === '/') {
    return `${url}`;
  }

  return `${url}${value}`;
};
