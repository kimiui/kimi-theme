'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import { usePathname } from 'routes-react';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useState, useEffect, useCallback } from 'react';
import { useActiveLink } from '../../../hooks';
import { isExternalLink } from '../../../utils';
import { Scrollbar } from '../../../components/scrollbar';
import { NavItem } from './nav-item';
import { Iconify } from '../../iconify';
import { NavUl, NavLi } from '../../nav-section';
import { NavSubList } from '../components/nav-sub-list';
// ----------------------------------------------------------------------
export function NavList({ data, render, cssVars, slotProps }) {
    const pathname = usePathname();
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
    const renderNavItem = (_jsx(NavItem, { render: render, 
        // slots
        path: data.path, icon: data.icon, info: data.info, title: data.title, 
        // state
        active: active, disabled: data.disabled, hasChild: !!data.children, open: data.children && !!openMenu, externalLink: isExternalLink(data.path), 
        // styles
        slotProps: slotProps?.rootItem, 
        // actions
        onClick: handleOpenMenu }));
    if (data.children) {
        return (_jsxs(NavLi, { disabled: data.disabled, children: [renderNavItem, _jsxs(Drawer, { open: openMenu, onClose: handleCloseMenu, slotProps: { backdrop: { invisible: true } }, PaperProps: {
                        sx: {
                            display: 'flex',
                            flexDirection: 'column',
                            width: 'calc(var(--nav-width) - 8px)',
                        },
                    }, sx: { ...cssVars }, children: [_jsxs(Stack, { direction: "row", alignItems: "center", spacing: 1, sx: { px: 1, py: 1.5 }, children: [_jsx(IconButton, { onClick: handleCloseMenu, children: _jsx(Iconify, { icon: "eva:arrow-ios-back-fill", width: 16 }) }), _jsx(Typography, { noWrap: true, variant: "subtitle1", sx: { textTransform: 'capitalize' }, children: data.title })] }), _jsx(Divider, {}), _jsx(Scrollbar, { fillContent: true, sx: { p: 2 }, children: _jsx(Stack, { component: "nav", spacing: 4, children: _jsx(NavUl, { sx: { gap: 3 }, children: _jsx(NavSubList, { data: data.children, slotProps: slotProps }) }) }) })] })] }));
    }
    return _jsx(NavLi, { disabled: data.disabled, children: renderNavItem });
}
