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
 * API page of the app.
 */
function API(): JSX.Element {
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
                    <Typography component="h1" fontSize="24px" fontWeight={500}>
                        API
                    </Typography>

                    <Typography component="h2" fontSize="20px" fontWeight={500}>
                        Section 1
                    </Typography>

                    <Typography component="p" fontSize="16px">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel eros vel dui eleifend mollis.
                        Donec lorem dolor, porta at nisi ornare, mollis consequat risus. Aliquam id lectus metus. Cras
                        posuere justo vel feugiat ullamcorper. Maecenas ullamcorper purus a dapibus aliquam. Donec eu
                        commodo nulla, ut interdum nisl. Donec varius mauris vel nibh pharetra malesuada. Praesent interdum
                        sagittis arcu, sit amet fermentum arcu egestas sit amet. Phasellus sit amet enim vitae arcu aliquet
                        ultrices ut a ligula. Praesent luctus tellus vel suscipit imperdiet. Integer efficitur eget felis
                        sed consectetur. Fusce venenatis massa nec nisi tincidunt vestibulum. Integer malesuada elementum
                        turpis in bibendum. Phasellus dapibus vestibulum diam sed pretium. Quisque in dolor elit. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>

                    <Typography component="h2" fontSize="20px" fontWeight={500}>
                        Section 2
                    </Typography>

                    <Typography component="p" fontSize="16px">
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class
                        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas
                        fringilla, metus vitae auctor hendrerit, nisi ante consequat justo, ac luctus mauris purus et eros.
                        Nunc a eros non leo blandit rutrum. Ut vulputate, arcu in congue imperdiet, ligula metus aliquam
                        odio, a tempus eros erat id ligula. Curabitur ac lorem interdum, vehicula mi eget, tristique lectus.
                        Donec molestie non mi ut sagittis. Pellentesque tincidunt bibendum ultricies. Donec at dignissim
                        ipsum, at fringilla justo. Quisque imperdiet sem purus, iaculis vestibulum diam fermentum at. Nunc
                        egestas dictum bibendum.
                    </Typography>

                    <Typography component="p" fontSize="16px">
                        Cras fringilla efficitur auctor. Nullam elementum, massa vel tempor faucibus, risus lacus tincidunt
                        massa, nec vehicula mauris dolor et elit. Nulla in tempor turpis. Aenean ac iaculis ligula, a
                        vehicula nisl. Sed eleifend, elit in hendrerit malesuada, sem metus mattis tellus, ac accumsan
                        sapien ligula vitae neque. Nulla vel felis sit amet ipsum ultrices pharetra. Sed ultrices nibh
                        metus, eu vulputate tortor consectetur non. Nullam porta, nisi ut blandit viverra, metus nisl
                        lobortis erat, sed egestas tortor lacus sollicitudin diam. Nullam quis metus nibh.
                    </Typography>
                </Box>

                {/* Footer */}
                <Footer sx={{ mt: 4 }} />
            </Box>
        </>
    );
}

export default API;
