import type { Breakpoint } from '@mui/material/styles';
export type Query = 'up' | 'down' | 'between' | 'only';
export type Value = Breakpoint | number;
export declare function useResponsive(query: Query, start?: Value, end?: Value): boolean;
type UseWidthReturn = Breakpoint;
export declare function useWidth(): UseWidthReturn;
export {};
