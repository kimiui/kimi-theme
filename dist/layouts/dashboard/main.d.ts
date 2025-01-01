import type { BoxProps } from '@mui/material/Box';
import type { ContainerProps } from '@mui/material/Container';
type MainProps = BoxProps & {
    isNavHorizontal: boolean;
};
export declare function Main({ children, isNavHorizontal, sx, ...other }: MainProps): import("react/jsx-runtime").JSX.Element;
type DashboardContentProps = ContainerProps & {
    disablePadding?: boolean;
};
export declare function DashboardContent({ sx, children, disablePadding, maxWidth, ...other }: DashboardContentProps): import("react/jsx-runtime").JSX.Element;
export {};
