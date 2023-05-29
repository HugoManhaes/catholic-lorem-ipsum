import * as React from "react";
import { useState } from "react";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Collapse, List, ListItem } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { PrayerItemProps } from "@/components/PrayerItem/PrayerItemProps";


/**
 * Simple component to list a prayer. Has a collapseable button that shows the content of the prayer.
 */
export default function PrayerItem({ prayer }: PrayerItemProps): JSX.Element {
    const [checked, setChecked] = useState(false);
    return (
        <ListItem>
            <Box
                display="block"
                width="100%"
            >
                <Box
                    display= "flex"
                    justifyContent= "space-between"
                    alignItems= "center"
                    width="100%"
                >
                    <Typography component="h2" color="#FFFAFA" fontSize="24px">{prayer.prayerName}</Typography>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => {
                            setChecked(!checked);
                        }}
                    >
                        {checked
                            ? <KeyboardArrowUpIcon style={{ color: "#FFFAFA" }} />
                            : <KeyboardArrowDownIcon style={{ color: "#FFFAFA" }} />}
                    </IconButton>
                </Box>
                <Collapse in={checked} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem>
                            <Typography component="p" color="#FFFAFA" fontSize="16px">
                                {prayer.prayerContent}
                            </Typography>
                        </ListItem>
                    </List>
                </Collapse>
            </Box>
        </ListItem>
    );
}