import { urlManager } from '@/configApp';

export const redirectUrl = (value = ''): string => {
    const url = process.env.NEXT_PUBLIC_APP_URL || '';

    if (!value || value === '/') {
        return `${url}${urlManager}`;
    }

    return `${url}${value}`;
};
