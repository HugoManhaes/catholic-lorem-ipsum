import type { SxProps, Theme } from "@mui/material/styles";


/** Props for the {@link CatholicLoremIpsum} component. */
export interface CatholicLoremIpsumProps {
    data: string[];
    /** MUI's styling system properties to be applied to the component's root.  */
    sx?: SxProps<Theme>;
}