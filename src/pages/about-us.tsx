import * as React from "react";

import Head from "next/head";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Footer from "@/components/Footer";

/**
 * About Us page of the app.
 */
function AboutUs(): JSX.Element {
    return (
        <>
            {/* The page's head */}
            <Head>
                <title>About Us</title>
                <meta name="description" content="This is the about us page of the site." />
            </Head>

            {/* Content */}
            <Box
                width="100%"
                maxWidth="800px"
                height="100%"
                display="flex"
                flexDirection="column"
                mx="auto"
            >
                {/* Main */}
                <Box
                    component="main"
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    p={3}
                    gap={2}
                >
                    <Typography component="h1" textAlign="center" fontSize="50px" fontWeight={500}>
                        About Us
                    </Typography>

                    <Typography component="p" fontSize="16px">
                        I&apos;m Hugo Rodrigues Manhães. I&apos;m a catholic first and programmer second. I&apos;ve
                        done this website to help catholic programmers to generate placeholder text for their various
                        placeholding needs, by providing lorem ipsum, but with latin catholic prayers. I&apos;ve also
                        done this as a test to join Glau, a startup that provides AI-based essay corrections.
                    </Typography>
                </Box>

                {/* Footer */}
                <Footer sx={{ mt: 4 }} />
            </Box>
        </>
    );
}

export default AboutUs;
