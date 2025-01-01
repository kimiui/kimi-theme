import type { Theme, SxProps } from '@mui/material/styles';
import type { NavMainProps } from './nav/types';
export type MainLayoutProps = {
    sx?: SxProps<Theme>;
    children: React.ReactNode;
    data?: {
        nav?: NavMainProps['data'];
    };
};
export declare function MainLayout({ sx, data, children }: Readonly<MainLayoutProps>): import("react/jsx-runtime").JSX.Element;
