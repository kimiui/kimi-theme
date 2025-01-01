import type { Theme } from '@mui/material/styles';
declare module '@mui/material/Fab' {
    interface FabPropsVariantOverrides {
        outlined: true;
        outlinedExtended: true;
        soft: true;
        softExtended: true;
    }
}
export declare const fab: {
    MuiFab: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiFab"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Fab").FabClasses, "MuiFab", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/Fab").FabProps> | ((props: Partial<import("@mui/material/Fab").FabProps> & {
                ownerState: Partial<import("@mui/material/Fab").FabProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
