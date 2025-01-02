import type { Theme } from '@mui/material/styles';
export declare const tabs: {
    MuiTabs: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiTabs"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").TabsClasses, "MuiTabs", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").TabsProps> | ((props: Partial<import("@mui/material").TabsProps> & {
                ownerState: Partial<import("@mui/material").TabsProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
    MuiTab: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiTab"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Tab").TabClasses, "MuiTab", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material/Tab").TabProps> | ((props: Partial<import("@mui/material/Tab").TabProps> & {
                ownerState: Partial<import("@mui/material/Tab").TabProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
