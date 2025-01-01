import type { NavItemProps } from './types';
export type UseNavItemReturn = {
    subItem: boolean;
    rootItem: boolean;
    subDeepItem: boolean;
    baseProps: Record<string, any>;
    renderIcon: React.ReactNode;
    renderInfo: React.ReactNode;
};
export type UseNavItemProps = {
    path: NavItemProps['path'];
    icon?: NavItemProps['icon'];
    info?: NavItemProps['info'];
    depth?: NavItemProps['depth'];
    render?: NavItemProps['render'];
    hasChild?: NavItemProps['hasChild'];
    externalLink?: NavItemProps['externalLink'];
    enabledRootRedirect?: NavItemProps['enabledRootRedirect'];
};
export declare function useNavItem({ path, icon, info, depth, render, hasChild, externalLink, enabledRootRedirect, }: UseNavItemProps): UseNavItemReturn;
