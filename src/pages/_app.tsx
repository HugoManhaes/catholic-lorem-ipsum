import Head from "next/head";
import { createEmotionCache } from "@/lib/createEmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/themes/default_theme";

import type { AppProps } from "next/app";
import type { EmotionCache } from "@emotion/cache";
import NavBar from "./NavBar";


// Client-side Emotion cache, shared for the whole session of the user in the browser. This is only used if the server
// doesn't send us an existing cache (fallback).
const clientSideEmotionCache = createEmotionCache();


/** Props for the {@link MyApp} component. */
interface MyAppProps extends AppProps {
    /** The Emotion cache sent by the server. */
    emotionCache: EmotionCache;
}


/**
 * This component wraps all the app's pages.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-app
 */
export default function MyApp({
    Component,
    pageProps,
    emotionCache=clientSideEmotionCache,
}: MyAppProps) {
    return (
        <>
            {/* Head shared by all pages */}
            <Head>
                {/* Base title (should be overridden by each page) */}
                <title>Sample App</title>

                {/* Viewport */}
                <meta
                    name="viewport"
                    key="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"  // eslint-disable-line max-len
                />
            </Head>

            {/* Content */}
            <div>
                <NavBar/>
            </div>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    {/* MUI's css baseline (kick-starts an elegant and consistent baseline to build upon) */}
                    <CssBaseline />

                    {/* The component representing the page */}
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </>
    );
}
