import type { TableProps } from './types';
type UseTableReturn = TableProps;
export type UseTableProps = {
    defaultDense?: boolean;
    defaultOrder?: 'asc' | 'desc';
    defaultOrderBy?: string;
    defaultSelected?: string[];
    defaultRowsPerPage?: number;
    defaultCurrentPage?: number;
};
export declare function useTable(props?: UseTableProps): UseTableReturn;
export {};
