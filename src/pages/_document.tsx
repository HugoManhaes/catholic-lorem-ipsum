// noinspection HtmlRequiredTitleElement,JSUnusedGlobalSymbols

// region Imports
//======================================================================================================================
// React.js:
import React from "react";

// Next.js:
import Document, { Html, Head, Main, NextScript } from "next/document";

// Material-UI and Emotion:
import createEmotionServer from "@emotion/server/create-instance";

// Local:
import { createEmotionCache } from "@/lib/createEmotionCache";
import { roboto } from "@/themes/default_theme";

// Type:
import type { DocumentContext, DocumentInitialProps } from "next/document";
//======================================================================================================================
// endregion


/** Props passed to {@link MyDocument}. */
interface MyDocumentInitialProps extends DocumentInitialProps {
    /** A list with Emotion's style tags to be added to the document's head. */
    emotionStyleTags: JSX.Element[];
}


export default class MyDocument extends Document<MyDocumentInitialProps> {

    /**
     * Enables server-side rendering (SSR) for Material-UI and Emotion.
     *
     * Allows you to do initial data population, i.e., sending the page with the data already populated from the server.
     * This is especially useful for SEO.
     *
     * Since the app uses SSR, `renderPage` is customized here to ensure the app's compatibility with Material-UI . It's
     * important to provide the page with the required CSS, otherwise the page will render with just the HTML then wait
     * for the CSS to be injected by the client, causing it to flicker (FOUC). `getInitialProps` belongs to `_document`
     * (instead of `_app`), since it's compatible with Static Generation (server-side generation or SSG).
     *
     * Some references:
     *  * https://mui.com/guides/server-rendering/
     *  * https://github.com/mui/material-ui/blob/a49210578f5ce7713fde7a84d0b1cebeff3079a8/examples/nextjs-with-typescript/pages/_document.tsx
     *  * https://emotion.sh/docs/ssr
     *
     * @param ctx Context with a `renderPage` callback.
     */
    static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentInitialProps> {
        // Resolution order
        //
        // On the server:
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. document.getInitialProps
        // 4. app.render
        // 5. page.render
        // 6. document.render
        //
        // On the server with error:
        // 1. document.getInitialProps
        // 2. app.render
        // 3. page.render
        // 4. document.render
        //
        // On the client
        // 1. app.getInitialProps
        // 2. page.getInitialProps
        // 3. app.render
        // 4. page.render

        // Save the original `renderPage` function. It's a callback that executes the actual React rendering logic
        // (synchronously).
        const originalRenderPage = ctx.renderPage;

        // Create a new Emotion cache instance. It will be used to extract the critical styles for the HTML.
        const cache = createEmotionCache();
        const { extractCriticalToChunks } = createEmotionServer(cache);

        // Define a new `renderPage` function. In it, we are going to pass the created emotion cache to the client.
        ctx.renderPage = () => (
            originalRenderPage({
                enhanceApp: (App: any) => (
                    function EnhanceApp(props) {
                        return <App emotionCache={cache} {...props} />;
                    }
                ),
            })
        );

        // Default initial props.
        const initialProps = await Document.getInitialProps(ctx);

        // This is important. It prevents emotion from rendering invalid HTML.
        // See: https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
        const emotionStyles = extractCriticalToChunks(initialProps.html);
        const emotionStyleTags = emotionStyles.styles.map((style) => (
            <style
                data-emotion={`${style.key} ${style.ids.join(" ")}`}
                key={style.key}
                dangerouslySetInnerHTML={{ __html: style.css }}  // eslint-disable-line react/no-danger
            />
        ));

        // Return the modified initial props. They now include Emotion's style tags.
        return {
            ...initialProps,
            emotionStyleTags,
        };
    }

    /**
     * Overrides the default document's structure.
     */
    render(): JSX.Element {
        return (
            <Html lang="pt" className={roboto.className}>
                <Head>
                    {/* Charset */}
                    <meta charSet="utf-8" />

                    {/* Icon */}
                    <link rel="icon" href="/favicon.ico" />

                    {/* Inject MUI styles first to match with the `prepend: true` configuration. */}
                    <meta name="emotion-insertion-point" content="" />
                    {this.props.emotionStyleTags}
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}