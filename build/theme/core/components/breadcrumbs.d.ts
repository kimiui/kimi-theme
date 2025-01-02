import type { Theme } from '@mui/material/styles';
export declare const breadcrumbs: {
    MuiBreadcrumbs: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiBreadcrumbs"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").BreadcrumbsClasses, "MuiBreadcrumbs", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").BreadcrumbsProps> | ((props: Partial<import("@mui/material").BreadcrumbsProps> & {
                ownerState: Partial<import("@mui/material").BreadcrumbsProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
