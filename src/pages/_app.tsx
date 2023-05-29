import * as React from "react";

import Head from "next/head";
import Image from "next/image";

import { CacheProvider } from "@emotion/react";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import logoIcon from "../../public/icons/cliLogo.png";
import NavBar from "../components/NavBar/NavBar";
import { createEmotionCache } from "@/lib/createEmotionCache";
import theme from "@/themes/default_theme";

import type { EmotionCache } from "@emotion/cache";
import type { AppProps } from "next/app";


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
}: MyAppProps): JSX.Element {
    return (
        <>
            {/* Head shared by all pages */}
            <Head>
                {/* Base title (should be overridden by each page) */}
                <title>Catholic Lorem Ipsum</title>

                {/* Viewport */}
                <meta
                    name="viewport"
                    key="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"  // eslint-disable-line max-len
                />
            </Head>


            <Image
                src={logoIcon}
                alt="site logo"
                fill={true}
                style={{
                    marginTop: 100,
                    opacity: 0.1,
                }}
            />


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
