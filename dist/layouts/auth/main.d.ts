import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';
type MainProps = BoxProps & {
    layoutQuery: Breakpoint;
};
export declare function AuthMain({ sx, children, layoutQuery, ...other }: MainProps): import("react/jsx-runtime").JSX.Element;
export {};
