import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

import { urlSignIn, urlManager } from '@/configApp';

export default withAuth(
    async function middleware(req: NextRequestWithAuth): Promise<NextResponse> {
        const { pathname } = req.nextUrl;

        if (pathname === '/') {
            return NextResponse.redirect(new URL(urlSignIn, req.url));
        }

        if (pathname.startsWith(urlManager)) {
            const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

            if (!session) {
                return NextResponse.redirect(new URL(urlSignIn, req.url));
            }
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized({ token }) {
                // Role
                return token?.role === 'user';
            }
        }
    }
);

export const config = {
    matcher: ['/', '/manager/:path*']
};
