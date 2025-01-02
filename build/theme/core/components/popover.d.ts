import type { Theme } from '@mui/material/styles';
export declare const popover: {
    MuiPopover: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiPopover"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").PopoverClasses, "MuiPopover", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").PopoverProps> | ((props: Partial<import("@mui/material").PopoverProps> & {
                ownerState: Partial<import("@mui/material").PopoverProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
