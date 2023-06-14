import NextAuth, { NextAuthOptions, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';

import { apiAuth } from '@/configApi';
import { postFetchNoInterceptor } from '@/services/fetch';

const authOptions: NextAuthOptions = {
    callbacks: {
        async jwt({ account, isNewUser, profile, token, user }: any): Promise<JWT> {
            // console.info('jwt: ', token);
            // console.info('user: ', user);

            const newToken = token;

            // Role
            if (user?.role) {
                newToken.role = user.role;
            } else {
                newToken.role = 'user';
            }

            if (user?.token) {
                newToken.token = user.token;
            }

            return Promise.resolve(newToken);
        },
        async redirect({ baseUrl, url }): Promise<string> {
            // console.info('baseUrl: ', baseUrl);
            // console.info('url: ', url);

            const redirectUrl = url;

            return Promise.resolve(redirectUrl);
        },
        async session({ session, token, user }): Promise<Session> {
            // console.info('session: ', session);
            // console.info('token: ', token);
            // console.info('user: ', user);
            // console.info('newSession: ', { ...session, user: { ...session.user, id: token.sub, role: token.role, token: token.token } });

            return Promise.resolve({ ...session, user: { ...session.user, id: token.sub, role: token.role, token: token.token } });
        },
        async signIn({ account, credentials, email, profile, user }): Promise<boolean> {
            // console.info('account: ', account);
            // console.info('credentials: ', credentials);
            // console.info('email: ', email);
            // console.info('profile: ', profile);
            // console.info('user: ', user);

            return Promise.resolve(true);
        }
    },
    debug: process.env.NODE_ENV === 'development',
    pages: {
        // Error code passed in query string as ?error=
        error: '/auth/error',
        // New users will be directed here on first sign in (leave the property out if not of interest)
        newUser: '/auth/new-user',
        signIn: '/auth/sign-in',
        signOut: '/auth/sign-out',
        // (used for check email message)
        verifyRequest: '/auth/verify-request'
    },
    providers: [
        CredentialsProvider({
            credentials: {},
            type: 'credentials',
            async authorize(credentials): Promise<any> {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                try {
                    const { email, password } = credentials as { email: string; password: string };

                    // const response = await postFetchNoInterceptor({ fetchData: { email, password }, url: apiAuth });

                    // const { data: { body: { message = '', token = '', user = {} } = {}, statusCode = 0 } = {} } = response;

                    // if (statusCode === 200) {
                    //     return { ...user, name: user.full_name, token: token };
                    // }

                    // throw new Error(message);

                    // TEST
                    if (email !== 'kevin,veiga@gmail.com' || password !== '123456') {
                        throw new Error('Next Auth - Authorize: Authentication error');
                    }

                    // TEST
                    return Promise.resolve({ email: 'kevin,veiga@gmail.com', id: '123', name: 'Kevin Veiga', role: 'user', token: 'poi654çlk' });
                } catch (err) {
                    throw new Error('Next Auth - Authorize: Authentication error');
                }
            }
        })
    ],
    session: {
        strategy: 'jwt'
    }
};

export default NextAuth(authOptions);
