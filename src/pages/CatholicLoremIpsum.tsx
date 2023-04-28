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

function CatholicLoremIpsum({data} : {data: string[]}): JSX.Element{
    return (
        <Box width="100%"
             maxWidth="800px"
             height="100%"
             display="flex"
             flexDirection="column"
             mx="auto"
        >
            {data && data.map((text, index) => (
                <Typography key={index} component="p" fontSize="16px" sx={{marginLeft: 0.5, marginBottom: 3, color: "#FFFAFA"}}>
                    {text}
                </Typography>
            ))}
        </Box>
    );
}

export default CatholicLoremIpsum;