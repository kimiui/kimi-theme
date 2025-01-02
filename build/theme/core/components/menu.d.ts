import type { Theme } from '@mui/material/styles';
export declare const menu: {
    MuiMenuItem: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiMenuItem"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").MenuItemClasses, "MuiMenuItem", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").MenuItemProps> | ((props: Partial<import("@mui/material").MenuItemProps> & {
                ownerState: Partial<import("@mui/material").MenuItemProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
