import type { TabsProps } from '@mui/material/Tabs';
import type { Theme, SxProps } from '@mui/material/styles';
export type CustomTabsProps = TabsProps & {
    slotProps?: TabsProps['slotProps'] & {
        scroller?: SxProps<Theme>;
        indicator?: SxProps<Theme>;
        tab?: SxProps<Theme>;
        selected?: SxProps<Theme>;
        scrollButtons?: SxProps<Theme>;
        flexContainer?: SxProps<Theme>;
    };
};
export declare function CustomTabs({ children, slotProps, sx, ...other }: CustomTabsProps): import("react/jsx-runtime").JSX.Element;
