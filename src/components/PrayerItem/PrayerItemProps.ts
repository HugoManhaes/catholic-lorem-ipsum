import type Prayer from "../../lib/shared/Prayer.interface";
import type { SxProps, Theme } from "@mui/material/styles";


/** Props for the {@link PrayerItem} component. */
export interface PrayerItemProps {
    prayer: Prayer;
    /** MUI's styling system properties to be applied to the component's root.  */
    sx?: SxProps<Theme>;
}