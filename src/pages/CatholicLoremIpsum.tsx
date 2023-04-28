import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

import prayersJson from '../../public/prayers.json';

interface Prayer{
    prayerName: string;
    prayerContent: string;
    wordCount: number;
}

const prayers: Array<Prayer> = JSON.parse(JSON.stringify(prayersJson));

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
                <Typography key={index} component="p" fontSize="16px" sx={{marginLeft: 0.5, marginBottom: 3, color: "#FFFAFA"}}>
                    {text}
                </Typography>
            ))}
        </Box>
    );
}

export default CatholicLoremIpsum;