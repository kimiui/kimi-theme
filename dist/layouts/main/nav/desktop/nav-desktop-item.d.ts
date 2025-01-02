import type { LinkProps } from '@mui/material/Link';
import type { NavItemProps } from '../types';
export declare const NavItem: import("react").ForwardRefExoticComponent<Omit<NavItemProps, "ref"> & import("react").RefAttributes<HTMLButtonElement>>;
type NavItemDashboardProps = LinkProps & {
    path: string;
};
export declare function NavItemDashboard({ path, sx, ...other }: NavItemDashboardProps): import("react/jsx-runtime").JSX.Element;
export {};
