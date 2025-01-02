import type { Theme } from '@mui/material/styles';
export declare const skeleton: {
    MuiSkeleton: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiSkeleton"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").SkeletonClasses, "MuiSkeleton", Theme>> | undefined;
        variants?: {
            props: Partial<import("@mui/material").SkeletonProps> | ((props: Partial<import("@mui/material").SkeletonProps> & {
                ownerState: Partial<import("@mui/material").SkeletonProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[] | undefined;
    };
};
