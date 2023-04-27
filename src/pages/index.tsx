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
import {Grid, Input, Slider, TextField} from '@mui/material';

import prayersJson from '../../public/prayers.json';
import {useState} from "react";

interface Prayer{
    prayerName: string;
    prayerContent: string;
    wordCount: number;
}

const prayers: Array<Prayer> = JSON.parse(JSON.stringify(prayersJson));

console.log(prayers);

function CatholicLoremIpsum({paragraphs}: {paragraphs: number | string | Array<number | string>}): JSX.Element{
    const maxWords = 150;
    const minWords = 20;

    let finalText: string[] = [];

    for(let i = 0; i < paragraphs; i++){
        let currentParagraphWordCount = Math.floor(Math.random() * (maxWords - minWords) + minWords);

        let currentWordCount = 0;
        let currentParagraphText = "";

        while(currentWordCount < currentParagraphWordCount){
            let randomIndex = Math.floor(Math.random() * prayers.length);

            currentParagraphText += prayers[randomIndex].prayerContent + " ";

            currentWordCount += prayers[randomIndex].wordCount;
        }

        finalText[i] = currentParagraphText;
    }

    return (
        <Box width="100%"
             maxWidth="800px"
             height="100%"
             display="flex"
             flexDirection="column"
             mx="auto"
        >
            {finalText.map((text, index) => (
                <Typography key={index} component="p" fontSize="16px" sx={{marginBottom: 3}}>
                    {text}
                </Typography>
            ))}
        </Box>
    );
}
function CatholicLoremIpsumBox() {
    const [value, setValue] = React.useState<number | string | Array<number | string>>(
        0,
    );

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
            setValue(0);
        } else if (value > 150) {
            setValue(150);
        }
    };

    return (
        <Box>
            <Box display= "flex"
                 justifyContent= "flex-start"
                 alignItems= "center"
                 width="100%"
                 marginBottom={3}>
                <Typography component="p" fontSize="16px">
                    How many paragraphs?
                </Typography>

                <Box sx={{ width: 250 , marginLeft: 2}}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Slider
                                value={typeof value === 'number' ? value : 0}
                                onChange={handleSliderChange}
                                aria-labelledby="input-slider"
                                defaultValue={0}
                                valueLabelDisplay="auto"
                                step={1}
                                min={0}
                                max={150}
                            />
                        </Grid>
                        <Grid item>
                            <Input
                                value={value}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 1,
                                    min: 0,
                                    max: 150,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                }}
                                sx={{backgroundColor: "#FFFAFA"}}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <CatholicLoremIpsum paragraphs={value}/>
        </Box>
    );
}

/**
 * Home page of the app.
 */
function Home(): JSX.Element {
    return (
        <>
            {/* The page's head */}
            <Head>
                <title>Catholic Lorem Ipsum</title>
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
