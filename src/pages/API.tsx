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
import CatholicLoremIpsum from "@/pages/CatholicLoremIpsum";
import {useEffect, useState} from "react";

/**
 * API page of the app.
 */
function API(): JSX.Element {

    let data:string[] = [];

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://catholic-lorem-ipsum.vercel.app/api/catholic-lorem-ipsum?paragraphs=5');
            data = await response.json();
        }
        fetchData();
    }, []);

    return (
        <>
            {/* The page's head */}
            <Head>
                <title>API</title>
                <meta name="description" content="This is a site to generate catholic lorem ipsum, which is to say lorem ipsum with latin prayers instead." />
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
                        API
                    </Typography>

                    <Typography component="h2" fontSize="20px" fontWeight={500}>
                        How to use
                    </Typography>

                    <Typography component="p" fontSize="16px">
                        To use the Catholic Lorem Ipsum API, here&apos;s what you should do:
                    </Typography>

                    <Box width="100%"
                         maxWidth="800px"
                         height="100%"
                         display="flex"
                         flexDirection="column"
                         mx="auto"
                         bgcolor="#0D0208">
                        <Typography component="p" fontSize="18px" color="#26A347">
                            catholic-lorem-ipsum:
                        </Typography>
                        <Typography component="p" fontSize="18px" color="#26A347" sx={{marginLeft: 10}}>
                            Arguments: paragraphs (type: number)
                        </Typography>
                        <Typography component="p" fontSize="18px" color="#26A347" sx={{marginLeft: 10}}>
                            Return: lorem ipsum content (type: json array of prayer paragraphs)
                        </Typography>

                    </Box>

                    <Typography component="h2" fontSize="20px" fontWeight={500}>
                        Example usage:
                    </Typography>

                    <Typography component="p" fontSize="16px" sx={{marginBottom: 3}}>
                        /api/catholic-lorem-ipsum?paragraphs=5
                    </Typography>

                    <Typography component="p" fontSize="16px" sx={{marginBottom: 3}}>
                        The following would be a possible result:
                    </Typography>

                    <Box width="100%"
                         maxWidth="800px"
                         height="100%"
                         display="flex"
                         flexDirection="column"
                         bgcolor="#008F11"
                         mx="auto">
                        <CatholicLoremIpsum data={data}/>
                    </Box>
                </Box>

                {/* Footer */}
                <Footer sx={{ mt: 4 }} />
            </Box>
        </>
    );
}

export default API;
