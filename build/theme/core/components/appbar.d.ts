import type { Theme } from '@mui/material/styles';
export declare const appBar: {
    MuiAppBar: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiAppBar"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").AppBarClasses, "MuiAppBar", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").AppBarProps> | ((props: Partial<import("@mui/material").AppBarProps> & {
                ownerState: Partial<import("@mui/material").AppBarProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
