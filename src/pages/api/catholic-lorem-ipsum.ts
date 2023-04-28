// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";
import prayersJson from "../../../public/prayers.json";

interface RequestData {
    paragraphs: string[]
}

interface Prayers{
    prayerName: string;
    prayerContent: string;
    wordCount: number;
}

const prayers: Array<Prayers> = JSON.parse(JSON.stringify(prayersJson));

function generateCatholicLoremIpsum(paragraphs: number): string[]{
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

    return finalText;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<RequestData>): void {
    const query = req.query as {paragraphs: string};

    const requestData: RequestData = {paragraphs: generateCatholicLoremIpsum(parseInt(query.paragraphs))};

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.status(200).json(requestData);
}
