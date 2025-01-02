import type { AlertProps } from '@mui/material/Alert';
import type { Theme } from '@mui/material/styles';
declare module '@mui/material/styles' {
    interface CssThemeVariables {
        enabled: true;
    }
}
export declare const alert: {
    MuiAlert: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiAlert"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Alert").AlertClasses, "MuiAlert", Theme>> | undefined;
        variants?: {
            props: Partial<AlertProps> | ((props: Partial<AlertProps> & {
                ownerState: Partial<AlertProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
    MuiAlertTitle: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiAlertTitle"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<"root", "MuiAlertTitle", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").AlertTitleProps> | ((props: Partial<import("@mui/material").AlertTitleProps> & {
                ownerState: Partial<import("@mui/material").AlertTitleProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
