import type { Theme } from '@mui/material/styles';
export declare const card: {
    MuiCard: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiCard"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<"root", "MuiCard", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").CardProps> | ((props: Partial<import("@mui/material").CardProps> & {
                ownerState: Partial<import("@mui/material").CardProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
    MuiCardHeader: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiCardHeader"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").CardHeaderClasses, "MuiCardHeader", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").CardHeaderProps> | ((props: Partial<import("@mui/material").CardHeaderProps> & {
                ownerState: Partial<import("@mui/material").CardHeaderProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
    MuiCardContent: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiCardContent"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<"root", "MuiCardContent", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").CardContentProps> | ((props: Partial<import("@mui/material").CardContentProps> & {
                ownerState: Partial<import("@mui/material").CardContentProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
