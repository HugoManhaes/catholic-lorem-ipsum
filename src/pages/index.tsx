import * as React from "react";

import Head from "next/head";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CatholicLoremIpsumBox from "@/components/CatholicLoremIpsumBox";
import Footer from "@/components/Footer";

/*
function GenerateLoremIpsum({ data }: { data: string[] }): JSX.Element {
    return (
        <Box
            width="100%"
            maxWidth="800px"
            height="100%"
            display="flex"
            flexDirection="column"
            bgcolor="#008F11"
            mx="auto"
        >
            <CatholicLoremIpsum data={data}/>
        </Box>);
}
*/

/**
 * Home page of the app.
 */
function Home(): JSX.Element {
    return (
        <>
            {/* The page's head */}
            <Head>
                <title>Catholic Lorem Ipsum</title>
                <meta name="description" content={"This is a site to generate catholic lorem ipsum, which is to say" +
                    "lorem ipsum with latin prayers instead."} />
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
                        Catholic Lorem Ipsum
                    </Typography>

                    <Typography component="h2" fontSize="20px" fontWeight={500}>
                        Generate Catholic Lorem Ipsum:
                    </Typography>

                    <CatholicLoremIpsumBox/>
                </Box>

                {/* Footer */}
                <Footer sx={{ mt: 4 }} />
            </Box>
        </>
    );
}

export default Home;
