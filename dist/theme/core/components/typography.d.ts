import type { Theme } from '@mui/material/styles';
export declare const typography: {
    MuiTypography: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiTypography"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").TypographyClasses, "MuiTypography", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").TypographyProps> | ((props: Partial<import("@mui/material").TypographyProps> & {
                ownerState: Partial<import("@mui/material").TypographyProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
