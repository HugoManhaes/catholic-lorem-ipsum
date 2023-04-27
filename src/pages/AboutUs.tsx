import Head from "next/head";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Footer from "@/components/Footer";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

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
                        I'm Hugo Rodrigues Manhães. I'm a catholic first and programmer second. I've done this website to help catholic
                        programmers to generate placeholder text for their various placeholding needs, by providing lorem ipsum, but with
                        latin catholic prayers. I've also done this as a test to join Glau, a startup that provides AI-based essay corrections.
                    </Typography>
                </Box>

                {/* Footer */}
                <Footer sx={{ mt: 4 }} />
            </Box>
        </>
    );
}

export default AboutUs;
