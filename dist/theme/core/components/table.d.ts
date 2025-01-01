import type { Theme } from '@mui/material/styles';
export declare const table: {
    MuiTable: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiTable"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").TableClasses, "MuiTable", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").TableProps> | ((props: Partial<import("@mui/material").TableProps> & {
                ownerState: Partial<import("@mui/material").TableProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiTableRow: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiTableRow"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/TableRow").TableRowClasses, "MuiTableRow", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/TableRow").TableRowProps> | ((props: Partial<import("@mui/material/TableRow").TableRowProps> & {
                ownerState: Partial<import("@mui/material/TableRow").TableRowProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiTableCell: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiTableCell"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/TableCell").TableCellClasses, "MuiTableCell", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/TableCell").TableCellProps> | ((props: Partial<import("@mui/material/TableCell").TableCellProps> & {
                ownerState: Partial<import("@mui/material/TableCell").TableCellProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiTableContainer: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiTableContainer"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<"root", "MuiTableContainer", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").TableContainerProps> | ((props: Partial<import("@mui/material").TableContainerProps> & {
                ownerState: Partial<import("@mui/material").TableContainerProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
    MuiTablePagination: {
        defaultProps?: Partial<import("@mui/material").TablePaginationProps>;
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material").TablePaginationClasses, "MuiTablePagination", Theme>>;
        variants?: {
            props: Partial<import("@mui/material").TablePaginationProps> | ((props: Partial<import("@mui/material").TablePaginationProps> & {
                ownerState: Partial<import("@mui/material").TablePaginationProps>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
