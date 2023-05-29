import * as React from "react";

import Head from "next/head";

import { List } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import prayersJson from "../../public/prayers.json";
import Footer from "@/components/Footer";
import PrayerItem from "@/components/PrayerItem";

import type Prayer from "@/lib/shared/Prayer.interface";


const PRAYERS = JSON.parse(JSON.stringify(prayersJson)) as Array<Prayer>;

/**
 * Prayers page of the app.
 */
function Prayers(): JSX.Element {

    return (
        <>
            {/* The page's head */}
            <Head>
                <title>Prayers</title>
                <meta name="description" content={"This is the page that contains the list of latin prayers used in" +
                    "the catholic lorem ipsum."} />
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
                        Prayers
                    </Typography>

                    <List>
                        {PRAYERS.map((prayer) => (
                            <Box
                                key={prayer.prayerName}
                                bgcolor="#008F11"
                                sx={{ border: "2px solid black" }}
                                style={{ marginBottom: 5 }}
                            >
                                <PrayerItem prayer={prayer}/>
                            </Box>
                        ))}
                    </List>
                </Box>

                {/* Footer */}
                <Footer sx={{ mt: 4 }} />
            </Box>
        </>
    );
}

export default Prayers;
