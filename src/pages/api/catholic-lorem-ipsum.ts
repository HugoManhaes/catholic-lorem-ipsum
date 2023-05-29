import prayersJson from "../../../public/prayers.json";

import type Prayer from "../../lib/shared/Prayer.interface";
import type RequestData from "../../lib/shared/RequestData.interface";
import type { NextApiRequest, NextApiResponse } from "next";


const prayers = JSON.parse(JSON.stringify(prayersJson)) as Array<Prayer>;

/**
 * Function that generate the list of paragraphs of catholic lorem ipsum. Randomly selects size and content.
 *
 * @param paragraphs The number of required paragraphs for the catholic lorem ipsum.
 * @return A string array containing the generated catholic lorem ipsum paragraphs.
 */
function generateCatholicLoremIpsum(paragraphs: number): string[]{
    const maxWords = 150;
    const minWords = 20;

    const finalText: string[] = [];

    for (let i = 0; i < paragraphs; i++){
        const currentParagraphWordCount = Math.floor(Math.random() * (maxWords - minWords) + minWords);

        let currentWordCount = 0;
        let currentParagraphText = "";

        while (currentWordCount < currentParagraphWordCount){
            const randomIndex = Math.floor(Math.random() * prayers.length);

            currentParagraphText += prayers[randomIndex].prayerContent + " ";

            currentWordCount += prayers[randomIndex].wordCount;
        }

        finalText.push(currentParagraphText);
    }

    return finalText;
}

/**
 * Function to Request catholic lorem ipsum to the Api. Expects a paragraphs number value in the query,
 * and returns an object with a paragraphs item that contains a string array of paragraphs.
 *
 * @param req The request to be sent to the Api.
 * @param res The response sent by the Api.
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<RequestData>): void {
    const query = req.query as { paragraphs: string };

    const requestData: RequestData = { paragraphs: generateCatholicLoremIpsum(parseInt(query.paragraphs)) };

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.status(200).json(requestData);
}
