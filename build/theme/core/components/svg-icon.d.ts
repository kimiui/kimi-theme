import type { Theme } from '@mui/material/styles';
export declare const svgIcon: {
    MuiSvgIcon: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiSvgIcon"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").SvgIconClasses, "MuiSvgIcon", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").SvgIconProps> | ((props: Partial<import("@mui/material").SvgIconProps> & {
                ownerState: Partial<import("@mui/material").SvgIconProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
