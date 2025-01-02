'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography } from '@mui/material';
import { usePathname } from 'routes-react';
import { useState, useEffect, useCallback } from 'react';
import { isExternalLink } from '../../../utils';
import { useActiveLink } from '../../../hooks/useActiveLink';
import { NavItem } from './nav-item';
import { navSectionClasses } from '../classes';
import { NavUl, NavLi, NavCollapse } from '../styles';
// ----------------------------------------------------------------------
export function NavList({ data, render, depth, slotProps, enabledRootRedirect, }) {
    const pathname = usePathname();
    const active = useActiveLink(data.path, !!data.children);
    const [openMenu, setOpenMenu] = useState(active);
    useEffect(() => {
        if (!active) {
            handleCloseMenu();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    const handleToggleMenu = useCallback(() => {
        if (data.children) {
            setOpenMenu((prev) => !prev);
        }
    }, [data.children]);
    const handleCloseMenu = useCallback(() => {
        setOpenMenu(false);
    }, []);
    const renderNavItem = (_jsx(NavItem, { render: render, 
        // slots
        path: data.path, icon: data.icon, info: data.info, title: data.title, caption: data.caption, 
        // state
        depth: depth, active: active, disabled: data.disabled, hasChild: !!data.children, open: data.children && openMenu, externalLink: isExternalLink(data.path), enabledRootRedirect: enabledRootRedirect, 
        // styles
        slotProps: depth === 1 ? slotProps?.rootItem : slotProps?.subItem, 
        // actions
        onClick: handleToggleMenu }));
    // Hidden item by role
    if (data.roles && slotProps?.currentRole) {
        if (!data?.roles?.includes(slotProps?.currentRole)) {
            return null;
        }
    }
    // Has children
    if (data.children) {
        return (_jsxs(NavLi, { disabled: data.disabled, sx: {
                [`& .${navSectionClasses.li}`]: {
                    '&:first-of-type': { mt: 'var(--nav-item-gap)' },
                },
            }, children: [renderNavItem, _jsx(NavCollapse, { "data-group": data.title, in: openMenu, depth: depth, unmountOnExit: true, mountOnEnter: true, children: _jsx(NavSubList, { data: data.children, render: render, depth: depth, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }) })] }));
    }
    // Default
    return _jsx(NavLi, { disabled: data.disabled, children: renderNavItem });
}
// ----------------------------------------------------------------------
function NavSubList({ data, render, depth, slotProps, enabledRootRedirect }) {
    return (_jsxs(NavUl, { sx: { gap: 'var(--nav-item-gap)' }, children: [data.map((list) => (_jsx(NavList, { data: list, render: render, depth: depth + 1, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title))), _jsx(Typography, { variant: "button", sx: { px: 2, color: 'text.disabled' } })] }));
}
