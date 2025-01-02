'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Paper from '@mui/material/Paper';
import { usePathname } from 'routes-react';
import Popover from '@mui/material/Popover';
import { useTheme } from '@mui/material/styles';
import { useRef, useState, useEffect, useCallback } from 'react';
import { paper } from '../../../theme/styles';
import { isExternalLink } from '../../../utils';
import { useActiveLink } from '../../../hooks/useActiveLink';
import { NavItem } from './nav-item';
import { NavLi, NavUl, navSectionClasses } from '../../nav-section';
// ----------------------------------------------------------------------
export function NavList({ data, depth, render, cssVars, slotProps, enabledRootRedirect, }) {
    const theme = useTheme();
    const pathname = usePathname();
    const navItemRef = useRef(null);
    const active = useActiveLink(data.path, !!data.children);
    const [openMenu, setOpenMenu] = useState(false);
    useEffect(() => {
        if (openMenu) {
            handleCloseMenu();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    const handleOpenMenu = useCallback(() => {
        if (data.children) {
            setOpenMenu(true);
        }
    }, [data.children]);
    const handleCloseMenu = useCallback(() => {
        setOpenMenu(false);
    }, []);
    const renderNavItem = (_jsx(NavItem, { ref: navItemRef, render: render, 
        // slots
        path: data.path, icon: data.icon, info: data.info, title: data.title, caption: data.caption, 
        // state
        depth: depth, active: active, disabled: data.disabled, hasChild: !!data.children, open: data.children && openMenu, enabledRootRedirect: enabledRootRedirect, externalLink: isExternalLink(data.path), 
        // styles
        slotProps: depth === 1 ? slotProps?.rootItem : slotProps?.subItem, 
        // actions
        onMouseEnter: handleOpenMenu, onMouseLeave: handleCloseMenu }));
    if (data.children) {
        return (_jsxs(NavLi, { disabled: data.disabled, children: [renderNavItem, _jsx(Popover, { disableScrollLock: true, open: openMenu, anchorEl: navItemRef.current, anchorOrigin: depth === 1
                        ? { vertical: 'bottom', horizontal: 'left' }
                        : { vertical: 'center', horizontal: 'right' }, transformOrigin: depth === 1
                        ? { vertical: 'top', horizontal: 'left' }
                        : { vertical: 'center', horizontal: 'left' }, slotProps: {
                        paper: {
                            onMouseEnter: handleOpenMenu,
                            onMouseLeave: handleCloseMenu,
                            sx: {
                                px: 0.75,
                                overflow: 'unset',
                                boxShadow: 'none',
                                backdropFilter: 'none',
                                background: 'transparent',
                                ...(depth === 1 && { pt: 1, ml: -0.75 }),
                                ...(openMenu && { pointerEvents: 'auto' }),
                            },
                        },
                    }, sx: { ...cssVars, pointerEvents: 'none' }, children: _jsx(Paper, { className: navSectionClasses.paper, sx: {
                            minWidth: 180,
                            ...paper({ theme, dropdown: true }),
                            ...slotProps?.paper,
                        }, children: _jsx(NavSubList, { data: data.children, depth: depth, render: render, cssVars: cssVars, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }) }) })] }));
    }
    return _jsx(NavLi, { disabled: data.disabled, children: renderNavItem });
}
// ----------------------------------------------------------------------
function NavSubList({ data, depth, render, cssVars, slotProps, enabledRootRedirect, }) {
    return (_jsx(NavUl, { sx: { gap: 0.5 }, children: data.map((list) => (_jsx(NavList, { data: list, render: render, depth: depth + 1, cssVars: cssVars, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title))) }));
}
