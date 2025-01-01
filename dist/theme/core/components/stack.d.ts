import type { Theme } from '@mui/material/styles';
export declare const stack: {
    MuiStack: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiStack"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<"root", "MuiStack", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").StackProps> | ((props: Partial<import("@mui/material").StackProps> & {
                ownerState: Partial<import("@mui/material").StackProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
