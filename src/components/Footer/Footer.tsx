// region Imports
//======================================================================================================================
// React.js:

// Next.js:

// External:

// Material-UI:
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Local:

// Type:
import type { FooterProps } from "./FooterProps";

//======================================================================================================================
// endregion


/**
 * The app's footer.
 */
function Footer({ sx = [] }: FooterProps): JSX.Element {
    return (
        <Box
            component="footer"
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={sx}
        >
            <Typography fontSize="14px">
                Hugo Rodrigues Manhães © All rights reserved.
            </Typography>
        </Box>
    );
}


export default Footer;
