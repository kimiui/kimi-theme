import type { Theme } from '@mui/material/styles';
export declare const form: {
    MuiFormLabel: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiFormLabel"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").FormLabelClasses, "MuiFormLabel", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").FormLabelProps> | ((props: Partial<import("@mui/material").FormLabelProps> & {
                ownerState: Partial<import("@mui/material").FormLabelProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiFormHelperText: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiFormHelperText"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").FormHelperTextClasses, "MuiFormHelperText", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").FormHelperTextProps> | ((props: Partial<import("@mui/material").FormHelperTextProps> & {
                ownerState: Partial<import("@mui/material").FormHelperTextProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiFormControlLabel: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiFormControlLabel"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").FormControlLabelClasses, "MuiFormControlLabel", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").FormControlLabelProps> | ((props: Partial<import("@mui/material").FormControlLabelProps> & {
                ownerState: Partial<import("@mui/material").FormControlLabelProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
