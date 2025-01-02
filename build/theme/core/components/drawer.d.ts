import type { Theme } from '@mui/material/styles';
export declare const drawer: {
    MuiDrawer: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiDrawer"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").DrawerClasses, "MuiDrawer", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").DrawerProps> | ((props: Partial<import("@mui/material").DrawerProps> & {
                ownerState: Partial<import("@mui/material").DrawerProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
