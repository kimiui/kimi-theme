import type { Theme } from '@mui/material/styles';
declare module '@mui/material/Pagination' {
    interface PaginationPropsVariantOverrides {
        soft: true;
    }
    interface PaginationPropsColorOverrides {
        info: true;
        success: true;
        warning: true;
        error: true;
    }
}
export declare const pagination: {
    MuiPagination: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiPagination"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").PaginationClasses, "MuiPagination", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").PaginationProps> | ((props: Partial<import("@mui/material").PaginationProps> & {
                ownerState: Partial<import("@mui/material").PaginationProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
