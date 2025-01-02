import type { Theme } from '@mui/material/styles';
export declare const select: {
    MuiSelect: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiSelect"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").SelectClasses, "MuiSelect", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").SelectProps> | ((props: Partial<import("@mui/material").SelectProps> & {
                ownerState: Partial<import("@mui/material").SelectProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiNativeSelect: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiNativeSelect"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").NativeSelectClasses, "MuiNativeSelect", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").NativeSelectProps> | ((props: Partial<import("@mui/material").NativeSelectProps> & {
                ownerState: Partial<import("@mui/material").NativeSelectProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
