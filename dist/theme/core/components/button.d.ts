import type { Theme } from '@mui/material/styles';
declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        soft: true;
    }
}
export declare const button: {
    MuiButtonBase: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiButtonBase"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").ButtonBaseClasses, "MuiButtonBase", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").ButtonBaseProps> | ((props: Partial<import("@mui/material").ButtonBaseProps> & {
                ownerState: Partial<import("@mui/material").ButtonBaseProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiButton: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiButton"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Button").ButtonClasses, "MuiButton", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/Button").ButtonProps> | ((props: Partial<import("@mui/material/Button").ButtonProps> & {
                ownerState: Partial<import("@mui/material/Button").ButtonProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
