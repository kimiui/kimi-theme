import type { NavSubListProps } from '../types';
export declare function NavSubList({ data, slotProps, ...other }: NavSubListProps): import("react/jsx-runtime").JSX.Element;
export declare const NavSubItem: import("react").ForwardRefExoticComponent<Pick<import("../types").NavItemProps, "title" | "path" | "active"> & {
    slotProps: import("../types").SlotProps["subItem"];
} & import("react").RefAttributes<HTMLAnchorElement>>;
