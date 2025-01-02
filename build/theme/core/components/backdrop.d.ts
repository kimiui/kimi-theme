import type { Theme } from '@mui/material/styles';
export declare const backdrop: {
    MuiBackdrop: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiBackdrop"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").BackdropClasses, "MuiBackdrop", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").BackdropProps> | ((props: Partial<import("@mui/material").BackdropProps> & {
                ownerState: Partial<import("@mui/material").BackdropProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
