import type { Theme } from '@mui/material/styles';
export declare const tooltip: {
    MuiTooltip: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiTooltip"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Tooltip").TooltipClasses, "MuiTooltip", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material/Tooltip").TooltipProps> | ((props: Partial<import("@mui/material/Tooltip").TooltipProps> & {
                ownerState: Partial<import("@mui/material/Tooltip").TooltipProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
