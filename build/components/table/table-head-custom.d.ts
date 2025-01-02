import type { Theme, SxProps } from '@mui/material/styles';
export type TableHeadCustomProps = {
    orderBy?: string;
    rowCount?: number;
    sx?: SxProps<Theme>;
    numSelected?: number;
    order?: 'asc' | 'desc';
    onSort?: (id: string) => void;
    headLabel: Record<string, any>[];
    onSelectAllRows?: (checked: boolean) => void;
};
export declare function TableHeadCustom({ sx, order, onSort, orderBy, headLabel, rowCount, numSelected, onSelectAllRows, }: TableHeadCustomProps): import("react/jsx-runtime").JSX.Element;
