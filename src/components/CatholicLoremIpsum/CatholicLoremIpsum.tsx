import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { CatholicLoremIpsumProps } from "@/components/CatholicLoremIpsum/CatholicLoremIpsumProps";


/**
 * A simple component that shows the response from the Api of the requested Catholic Lorem Ipsum by the user.
 * It essentially is a list of paragraphs (using Typography components) inside a Box component.
 */
function CatholicLoremIpsum({ data }: CatholicLoremIpsumProps): JSX.Element{
    return (
        <Box
            width="100%"
            maxWidth="800px"
            height="100%"
            display="flex"
            flexDirection="column"
            mx="auto"
        >
            {data && data.map((text, index) => (
                <Typography
                    key={index}
                    component="p"
                    fontSize="16px"
                    sx={{ marginLeft: 0.5, marginBottom: 3, color: "#FFFAFA" }}
                >
                    {text}
                </Typography>
            ))}
        </Box>
    );
}

export default CatholicLoremIpsum;