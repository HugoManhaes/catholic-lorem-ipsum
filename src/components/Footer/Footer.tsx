// region Imports
//======================================================================================================================
// React.js:

// Next.js:

// External:

// Material-UI:
import Box from "@mui/material/Box";

// Local:

// Type:
import type { FooterProps } from "./FooterProps";
import Typography from "@mui/material/Typography";
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
                © All rights reserved.
            </Typography>
        </Box>
    );
}


export default Footer;