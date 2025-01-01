import type { Breakpoint } from '@mui/material/styles';
import type { NavSectionProps } from 'lib/components/nav-section';
export type NavHorizontalProps = NavSectionProps & {
    layoutQuery: Breakpoint;
};
export declare function NavHorizontal({ data, layoutQuery, sx, ...other }: NavHorizontalProps): import("react/jsx-runtime").JSX.Element;
