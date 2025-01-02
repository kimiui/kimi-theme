import type { Theme } from '@mui/material/styles';
export declare const link: {
    MuiLink: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiLink"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").LinkClasses, "MuiLink", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").LinkProps> | ((props: Partial<import("@mui/material").LinkProps> & {
                ownerState: Partial<import("@mui/material").LinkProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
