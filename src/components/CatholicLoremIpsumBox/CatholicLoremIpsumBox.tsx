import * as React from "react";

import { Grid, Input, Slider } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CatholicLoremIpsum from "@/components/CatholicLoremIpsum";

/**
 * A Simple component that contains the necessary elements to let the user tell the Api how many paragraphs will be
 * requested. Has a slider to select the quantity of paragraphs and an input box to also specify this, whichever the
 * user prefers. All of this is stored inside a Box component, for layout purposes.
 */
export default function CatholicLoremIpsumBox(): JSX.Element {
    const [value, setValue] = React.useState<number | string | Array<number | string>>(
        0,
    );

    const handleSliderChange = (event: Event, newValue: number | number[]): void => {
        setValue(newValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(event.target.value === "" ? "" : Number(event.target.value));
    };

    const handleBlur = (): void => {
        if (value < 0) {
            setValue(0);
        }
        else if (value > 150) {
            setValue(150);
        }
    };

    const [data, setData] = React.useState<string[]>([]);

    const fetchAddress = "https://catholic-lorem-ipsum.vercel.app/api/catholic-lorem-ipsum?paragraphs=";

    const generateCatholicLoremIpsum = async (pValue: number | string | Array<number | string>): Promise<void> => {
        const response = await fetch(fetchAddress + (pValue as string));
        const myResponse = await response.json() as { paragraphs: string[] };

        setData(myResponse.paragraphs);
    };

    return (
        <Box>
            <Box
                display= "flex"
                justifyContent= "flex-start"
                alignItems= "center"
                width="100%"
                marginBottom={3}
            >
                <Typography component="p" fontSize="16px">
                    How many paragraphs?
                </Typography>

                <Box sx={{ width: 250, marginLeft: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Slider
                                value={typeof value === "number" ? value : 0}
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
                                    type: "number",
                                    "aria-labelledby": "input-slider",
                                }}
                                sx={{ backgroundColor: "#FFFAFA" }}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Button
                    onClick={() => void generateCatholicLoremIpsum(value)}
                    sx={{
                        my: 2,
                        color: "white",
                        backgroundColor: "#008F11",
                        marginLeft: 1,
                        "&:hover": {
                            backgroundColor: "rgba(0, 143, 17, 0.8)",
                        },
                    }}
                >
                    Generate
                </Button>
            </Box>
            <CatholicLoremIpsum data={data}/>
        </Box>
    );
}