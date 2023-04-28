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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import {Collapse, List, ListItem, ListItemIcon, ListItemText} from "@mui/material";
import prayersJson from '../../public/prayers.json';
import {useState} from "react";

interface Prayers{
    prayerName: string;
    prayerContent: string;
    wordCount: number;
}

const prayers: Array<Prayers> = JSON.parse(JSON.stringify(prayersJson));

function PrayerItem({prayer}: {prayer: Prayers}): JSX.Element {
    const [checked, setChecked] = useState(false);
    return (
        <ListItem>
            <Box display="block"
                 width="100%">
                <Box display= "flex"
                     justifyContent= "space-between"
                     alignItems= "center"
                     width="100%">
                    <Typography component="h2" color="#FFFAFA" fontSize="24px">{prayer.prayerName}</Typography>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {setChecked(!checked)}}
                    >
                        {checked ? <KeyboardArrowUpIcon style={{color: "#FFFAFA"}}/> : <KeyboardArrowDownIcon style={{color: "#FFFAFA"}}/>}
                    </IconButton>
                </Box>
                <Collapse in={checked} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem>
                            <Typography component="p" color="#FFFAFA" fontSize="16px">{prayer.prayerContent}</Typography>
                        </ListItem>
                    </List>
                </Collapse>
            </Box>
        </ListItem>
    );
}

/**
 * Prayers page of the app.
 */
function Prayers(): JSX.Element {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            {/* The page's head */}
            <Head>
                <title>Prayers</title>
                <meta name="description" content="This is the page that contains the list of latin prayers used in the catholic lorem ipsum." />
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
                        {prayers.map((prayer) => (
                            <Box key={prayer.prayerName}
                                 bgcolor="#008F11"
                                 sx={{ border: "2px solid black"}}
                                 style={{marginBottom: 5}}>
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
