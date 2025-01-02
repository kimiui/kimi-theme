'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Portal from '@mui/material/Portal';
import { usePathname } from 'routes-react';
import { useTheme } from '@mui/material/styles';
import ListSubheader from '@mui/material/ListSubheader';
import { useRef, useState, useEffect, useCallback } from 'react';
import { paper } from '../../../../theme/styles';
import { useActiveLink } from '../../../../hooks/useActiveLink';
import { NavLi, NavUl } from '../../../../components/nav-section';
import { isExternalLink, removeLastSlash } from '../../../../utils';
import { NavItem, NavItemDashboard } from './nav-desktop-item';
// ----------------------------------------------------------------------
export function NavList({ data }) {
    const theme = useTheme();
    const navItemRef = useRef(null);
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(false);
    const active = useActiveLink(data.path, !!data.children);
    const [clientRect, setClientRect] = useState({
        top: 0,
        height: 0,
    });
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
    const renderNavItem = (_jsx(NavItem, { ref: navItemRef, 
        // slots
        title: data.title, path: data.path, 
        // state
        active: active, hasChild: !!data.children, open: data.children && !!openMenu, externalLink: isExternalLink(data.path), 
        // action
        onMouseEnter: handleOpenMenu, onMouseLeave: handleCloseMenu }));
    const handleGetClientRect = useCallback(() => {
        const element = navItemRef.current;
        if (element) {
            const rect = element.getBoundingClientRect();
            setClientRect({ top: rect.top, height: rect.height });
        }
    }, []);
    useEffect(() => {
        handleGetClientRect();
        window.addEventListener('scroll', handleGetClientRect);
        return () => {
            window.removeEventListener('scroll', handleGetClientRect);
        };
    }, [handleGetClientRect]);
    if (data.children) {
        return (_jsxs(NavLi, { sx: { height: 1 }, children: [renderNavItem, openMenu && (_jsx(Portal, { children: _jsx(Fade, { in: true, children: _jsx(Box, { onMouseEnter: handleOpenMenu, onMouseLeave: handleCloseMenu, sx: {
                                pt: 0.5,
                                left: 0,
                                right: 0,
                                mx: 'auto',
                                position: 'fixed',
                                zIndex: theme.zIndex.modal,
                                maxWidth: theme.breakpoints.values.lg,
                                top: Math.round(clientRect.top + clientRect.height),
                            }, children: _jsx(Box, { component: "nav", sx: {
                                    ...paper({ theme, dropdown: true }),
                                    borderRadius: 2,
                                    p: theme.spacing(5, 1, 1, 4),
                                }, children: _jsx(NavUl, { sx: {
                                        gap: 3,
                                        width: 1,
                                        flexWrap: 'wrap',
                                        flexDirection: 'row',
                                    }, children: data.children.map((list) => (_jsx(NavSubList, { subheader: list.subheader, data: list.items }, list.subheader))) }) }) }) }) }))] }));
    }
    return _jsx(NavLi, { sx: { height: 1 }, children: renderNavItem });
}
// ----------------------------------------------------------------------
function NavSubList({ data, subheader, sx, ...other }) {
    const pathname = usePathname();
    const isDashboard = subheader === 'Dashboard';
    return (_jsx(Stack, { component: NavLi, alignItems: "flex-start", sx: {
            flex: '1 1 auto',
            ...(isDashboard && { maxWidth: { md: 1 / 3, lg: 540 } }),
            ...sx,
        }, ...other, children: _jsxs(NavUl, { children: [_jsx(ListSubheader, { disableSticky: true, disableGutters: true, sx: { fontSize: 11, color: 'text.primary', typography: 'overline' }, children: subheader }), data.map((item) => isDashboard ? (_jsx(NavLi, { sx: { mt: 1.5 }, children: _jsx(NavItemDashboard, { path: item.path }) }, item.title)) : (_jsx(NavLi, { sx: { mt: 1.5 }, children: _jsx(NavItem, { subItem: true, title: item.title, path: item.path, active: item.path === removeLastSlash(pathname) }) }, item.title)))] }) }));
}
