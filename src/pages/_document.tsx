import React, { ReactElement } from 'react';

import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { variable } from '@/styles/variable';

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<any> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            /* eslint-disable react/display-name */
            ctx.renderPage = (): any | Promise<any> =>
                originalRenderPage({
                    enhanceApp:
                        (App) =>
                        (props): any =>
                            sheet.collectStyles(<App {...props} />)
                });
            /* eslint-enable react/display-name */

            const initialProps = await Document.getInitialProps(ctx);

            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }

    render(): ReactElement {
        return (
            <Html lang="pt">
                <Head>
                    {/* BASE PATH */}
                    <base href="/" />
                    {/* END BASE PATH */}

                    <meta charSet="utf-8" />
                    <meta httpEquiv="cache-control" content="public" />
                    <meta httpEquiv="content-language" content="pt-BR" />
                    <meta name="author" content="Site" />
                    <meta name="copyright" content="© Site" />
                    <meta name="format-detection" content="telephone=no" />
                    <meta name="msapplication-TileColor" content={variable.color.primary} />
                    <meta name="theme-color" content={variable.color.white} />

                    {/* SEO */}
                    <meta name="description" content="Descrição." />
                    <meta name="robots" content="all" />
                    <meta name="google" content="notranslate" />

                    <meta property="og:description" content="Site" />
                    <meta property="og:image" content="favicon-512x512.png" />
                    <meta property="og:image:alt" content="Site" />
                    <meta property="og:image:secure_url" content="favicon-512x512.png" />
                    <meta property="og:title" content="Site" />
                    <meta property="og:type" content="website" />
                    {/* END SEO */}

                    {/* FAVICON */}
                    <link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" type="image/png" />
                    <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
                    <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
                    {/* END FAVICON */}

                    {/* MANIFEST */}
                    <link href="/manifest.webmanifest" rel="manifest" />
                    {/* END MANIFEST */}

                    {/* PRECONNECT */}
                    <link href="https://fonts.googleapis.com" rel="preconnect" />
                    <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
                    {/* END PRECONNECT */}

                    {/* STYLE */}
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
                    {/* END STYLE */}
                </Head>

                <body>
                    <Main />

                    <NextScript />

                    <div id="id-loader-root"></div>

                    <div id="id-modal-root"></div>

                    <div id="id-modalconfirm-root"></div>

                    <div id="id-modalcookie-root"></div>

                    <div id="id-modalinfo-root"></div>

                    <div id="id-modalmessage-root"></div>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
