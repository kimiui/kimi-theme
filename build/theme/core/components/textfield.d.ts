import type { Theme } from '@mui/material/styles';
export declare const textfield: {
    MuiInput: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiInput"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").InputClasses, "MuiInput", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").InputProps> | ((props: Partial<import("@mui/material").InputProps> & {
                ownerState: Partial<import("@mui/material").InputProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
    MuiInputBase: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiInputBase"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/InputBase").InputBaseClasses, "MuiInputBase", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material/InputBase").InputBaseProps> | ((props: Partial<import("@mui/material/InputBase").InputBaseProps> & {
                ownerState: Partial<import("@mui/material/InputBase").InputBaseProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
    MuiFilledInput: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiFilledInput"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/FilledInput").FilledInputClasses, "MuiFilledInput", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material/FilledInput").FilledInputProps> | ((props: Partial<import("@mui/material/FilledInput").FilledInputProps> & {
                ownerState: Partial<import("@mui/material/FilledInput").FilledInputProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
    MuiOutlinedInput: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiOutlinedInput"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/OutlinedInput").OutlinedInputClasses, "MuiOutlinedInput", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material/OutlinedInput").OutlinedInputProps> | ((props: Partial<import("@mui/material/OutlinedInput").OutlinedInputProps> & {
                ownerState: Partial<import("@mui/material/OutlinedInput").OutlinedInputProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
