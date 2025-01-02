import type { Theme } from '@mui/material/styles';
export declare const paper: {
    MuiPaper: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiPaper"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").PaperClasses, "MuiPaper", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").PaperProps> | ((props: Partial<import("@mui/material").PaperProps> & {
                ownerState: Partial<import("@mui/material").PaperProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
