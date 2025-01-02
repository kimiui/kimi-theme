import type { Breakpoint } from '@mui/material/styles';
import type { AppBarProps } from '@mui/material/AppBar';
import type { ToolbarProps } from '@mui/material/Toolbar';
import type { ContainerProps } from '@mui/material/Container';
export type HeaderSectionProps = AppBarProps & {
    layoutQuery: Breakpoint;
    disableOffset?: boolean;
    disableElevation?: boolean;
    slots?: {
        leftArea?: React.ReactNode;
        leftAreaEnd?: React.ReactNode;
        leftAreaStart?: React.ReactNode;
        rightArea?: React.ReactNode;
        rightAreaEnd?: React.ReactNode;
        rightAreaStart?: React.ReactNode;
        topArea?: React.ReactNode;
        centerArea?: React.ReactNode;
        bottomArea?: React.ReactNode;
    };
    slotProps?: {
        toolbar?: ToolbarProps;
        container?: ContainerProps;
    };
};
export declare function HeaderSection({ sx, slots, slotProps, disableOffset, disableElevation, layoutQuery, ...other }: HeaderSectionProps): import("react/jsx-runtime").JSX.Element;
