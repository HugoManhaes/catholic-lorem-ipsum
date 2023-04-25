import createCache from "@emotion/cache";

import type { EmotionCache } from "@emotion/cache";


/** Whether we are in a browser. */
const isBrowser = typeof document !== "undefined";


/**
 * Creates a new cache for Emotion.
 *
 * MUI is using Emotion as its default styled engine. We need to extract the styles from the Emotion instance. For
 * that, we need to share the same cache configuration for both the client and server.
 *
 * See: https://github.com/mui/material-ui/blob/master/examples/nextjs-with-typescript/src/createEmotionCache.ts
 */
export function createEmotionCache(): EmotionCache {
    // On the client side, Create a meta tag at the top of the <head> and set it as insertionPoint. This assures that
    // MUI styles are loaded first. It allows developers to easily override MUI styles with other styling solutions,
    // like CSS modules.

    let insertionPoint: HTMLMetaElement | undefined;
    if (isBrowser) {
        const metaElement = document.querySelector<HTMLMetaElement>("meta[name=\"emotion-insertion-point\"]");
        insertionPoint = metaElement ?? undefined;
    }

    return createCache({ key: "mui-style", insertionPoint });
}
