import { Roboto } from "next/font/google";

import { grey } from "@mui/material/colors";
import { createTheme, alpha } from "@mui/material/styles";


/** Roboto font. */
export const roboto = Roboto({  // eslint-disable-line new-cap
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    fallback: ["Helvetica", "Arial", "sans-serif"],
});


// Expand MUI's styling types.
declare module "@mui/material/styles" {
    // Custom breakpoints;
    interface BreakpointOverrides {
        xxl: true;
    }

    // Custom colors.
    interface Palette {
        neutralGrey: Palette["primary"];
    }
    interface PaletteOptions {
        neutralGrey: PaletteOptions["primary"];
    }

    // Custom properties for the palette colors.
    interface PaletteColor {
        gradient?: string;
    }
    interface SimplePaletteColorOptions {
        gradient?: string;
    }
}


// Add the "grey" color type to MUI buttons.
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        neutralGrey: true;
    }
}


// Base theme with the main attributes.
const themeBase = createTheme({
    // Specify "Roboto" font.
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    // Colors.
    palette: {
        primary: {
            main: "#39B900",
            gradient: "linear-gradient(105deg, #39B900 70%, rgba(0,255,175,1) 95%)",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#144003",
        },
        error: {
            main: "#c62828",
        },
        background: {
            default: "#FAF9CA",
        },
        neutralGrey: {
            main: grey[300],
            dark: grey[400],
        },
    },
    // Breakpoints.
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 1800,
        },
    },
});

// Append MUI component style overrides to the base theme.
const themeComponents = createTheme(themeBase, {
    components: {
        // Button
        // Add the "neutralGrey" color (default color in MUI v4).
        MuiButton: {
            variants: [
                // Grey contained button.
                {
                    props: { variant: "contained", color: "neutralGrey" },
                    style: {
                        color: themeBase.palette.getContrastText(themeBase.palette.neutralGrey.main),
                    },
                },
                // Grey outlined button.
                {
                    props: { variant: "outlined", color: "neutralGrey" },
                    style: {
                        color: themeBase.palette.text.primary,
                        borderColor:
                            themeBase.palette.mode === "light"
                                ? "rgba(0, 0, 0, 0.23)"
                                : "rgba(255, 255, 255, 0.23)",
                        "&.Mui-disabled": {
                            border: `1px solid ${themeBase.palette.action.disabledBackground}`,
                        },
                        "&:hover": {
                            borderColor:
                                themeBase.palette.mode === "light"
                                    ? "rgba(0, 0, 0, 0.23)"
                                    : "rgba(255, 255, 255, 0.23)",
                            backgroundColor: alpha(
                                themeBase.palette.text.primary,
                                themeBase.palette.action.hoverOpacity
                            ),
                        },
                    },
                },
                // Grey text button.
                {
                    props: { color: "neutralGrey", variant: "text" },
                    style: {
                        color: themeBase.palette.text.primary,
                        "&:hover": {
                            backgroundColor: alpha(
                                themeBase.palette.text.primary,
                                themeBase.palette.action.hoverOpacity
                            ),
                        },
                    },
                },
            ],
        },

        // List item button
        // Change the default selected color.
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: themeBase.palette.action.selected,
                        "&:hover": {
                            backgroundColor: alpha(
                                "#000000",
                                themeBase.palette.action.selectedOpacity + themeBase.palette.action.hoverOpacity,
                            ),
                        },
                    },
                },
            },
        },

        // Menu item button
        // Change the default selected color.
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected": {
                        backgroundColor: themeBase.palette.action.selected,
                        "&:hover": {
                            backgroundColor: alpha(
                                "#000000",
                                themeBase.palette.action.selectedOpacity + themeBase.palette.action.hoverOpacity,
                            ),
                        },
                    },
                },
            },
        },
    },
});

/** Default MUI theme of the app. */
const theme = themeComponents;

export default theme;
