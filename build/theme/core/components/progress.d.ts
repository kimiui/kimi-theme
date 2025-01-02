import type { LinearProgressProps } from '@mui/material/LinearProgress';
import type { Theme } from '@mui/material/styles';
export declare const progress: {
    MuiLinearProgress: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiLinearProgress"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/LinearProgress").LinearProgressClasses, "MuiLinearProgress", Theme>>;
        variants?: {
            props: Partial<LinearProgressProps> | ((props: Partial<LinearProgressProps> & {
                ownerState: Partial<LinearProgressProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
