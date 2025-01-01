import type { StackProps } from '@mui/material/Stack';
export type TableSelectedActionProps = StackProps & {
    dense?: boolean;
    rowCount: number;
    numSelected: number;
    action?: React.ReactNode;
    onSelectAllRows: (checked: boolean) => void;
};
export declare function TableSelectedAction({ dense, action, rowCount, numSelected, onSelectAllRows, sx, ...other }: TableSelectedActionProps): import("react/jsx-runtime").JSX.Element;
