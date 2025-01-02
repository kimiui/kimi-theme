import type { Theme, SxProps } from '@mui/material/styles';
import type { NavSectionProps } from '../../components/nav-section';
export type DashboardLayoutProps = {
    sx?: SxProps<Theme>;
    children: React.ReactNode;
    data?: {
        nav?: NavSectionProps['data'];
        sidebar?: {
            top?: React.ReactNode;
            topMini?: React.ReactNode;
            bottom?: React.ReactNode;
        };
    };
    slotProps?: {
        header?: {
            slotsDisplay?: {};
        };
        sidebar?: {
            toggleNav?: {
                display?: boolean;
            };
            rootItem?: any;
        };
    };
};
export declare function DashboardLayout({ sx, children, data, slotProps }: Readonly<DashboardLayoutProps>): import("react/jsx-runtime").JSX.Element;
