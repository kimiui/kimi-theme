import type { Breakpoint } from '@mui/material/styles';
import type { NavSectionProps } from 'lib/components/nav-section';
export type NavVerticalProps = NavSectionProps & {
    isNavMini: boolean;
    layoutQuery: Breakpoint;
    onToggleNav?: () => void;
    slotProps?: {
        top?: React.ReactNode;
        topMini?: React.ReactNode;
        bottom?: React.ReactNode;
        bottomMini?: React.ReactNode;
    };
};
export declare function NavVertical({ sx, data, slotProps, isNavMini, layoutQuery, onToggleNav, ...other }: NavVerticalProps): import("react/jsx-runtime").JSX.Element;
