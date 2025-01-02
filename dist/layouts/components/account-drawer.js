'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import Tooltip from '@mui/material/Tooltip';
import { useState, useCallback } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useRouter, usePathname } from 'routes-react';
import { _mock } from '../../_mock';
import { paths } from '../../routes/paths';
import { varAlpha } from '../../theme/styles';
import { Label } from '../../components/label';
import { Iconify } from '../../components/iconify';
import { Scrollbar } from '../../components/scrollbar';
import { AnimateAvatar } from '../../components/animate';
import { UpgradeBlock } from './nav-helper';
import { AccountButton } from './account-button';
import { SignOutButton } from './sign-out-button';
export function AccountDrawer({ data = [], sx, ...other }) {
    const theme = useTheme();
    const router = useRouter();
    const pathname = usePathname();
    const { user } = _mock;
    const [open, setOpen] = useState(false);
    const handleOpenDrawer = useCallback(() => {
        setOpen(true);
    }, []);
    const handleCloseDrawer = useCallback(() => {
        setOpen(false);
    }, []);
    const handleClickItem = useCallback((path) => {
        handleCloseDrawer();
        router.push(path);
    }, [handleCloseDrawer, router]);
    const renderAvatar = (_jsx(AnimateAvatar, { width: 96, slotProps: {
            avatar: { src: user?.photoURL, alt: user?.displayName },
            overlay: {
                border: 2,
                spacing: 3,
                color: `linear-gradient(135deg, ${varAlpha(theme.vars.palette.primary.mainChannel, 0)} 25%, ${theme.vars.palette.primary.main} 100%)`,
            },
        }, children: user?.displayName?.charAt(0).toUpperCase() }));
    return (_jsxs(_Fragment, { children: [_jsx(AccountButton, { open: open, onClick: handleOpenDrawer, photoURL: user?.photoURL, displayName: user?.displayName, sx: sx, ...other }), _jsxs(Drawer, { open: open, onClose: handleCloseDrawer, anchor: "right", slotProps: { backdrop: { invisible: true } }, PaperProps: { sx: { width: 320 } }, children: [_jsx(IconButton, { onClick: handleCloseDrawer, sx: { top: 12, left: 12, zIndex: 9, position: 'absolute' }, children: _jsx(Iconify, { icon: "mingcute:close-line" }) }), _jsxs(Scrollbar, { children: [_jsxs(Stack, { alignItems: "center", sx: { pt: 8 }, children: [renderAvatar, _jsx(Typography, { variant: "subtitle1", noWrap: true, sx: { mt: 2 }, children: user?.displayName }), _jsx(Typography, { variant: "body2", sx: { color: 'text.secondary', mt: 0.5 }, noWrap: true, children: user?.email })] }), _jsxs(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", justifyContent: "center", sx: { p: 3 }, children: [[...Array(3)].map((_, index) => (_jsx(Tooltip, { title: `Switch to: ${_mock.fullName(index + 1)}`, children: _jsx(Avatar, { alt: _mock.fullName(index + 1), src: _mock.image.avatar(index + 1), onClick: () => { } }) }, _mock.fullName(index + 1)))), _jsx(Tooltip, { title: "Add account", children: _jsx(IconButton, { sx: {
                                                bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                                                border: `dashed 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.32)}`,
                                            }, children: _jsx(Iconify, { icon: "mingcute:add-line" }) }) })] }), _jsx(Stack, { sx: {
                                    py: 3,
                                    px: 2.5,
                                    borderTop: `dashed 1px ${theme.vars.palette.divider}`,
                                    borderBottom: `dashed 1px ${theme.vars.palette.divider}`,
                                }, children: data.map((option) => {
                                    const rootLabel = pathname.includes('/dashboard') ? 'Home' : 'Dashboard';
                                    const rootHref = pathname.includes('/dashboard') ? '/' : paths.dashboard.root;
                                    return (_jsxs(MenuItem, { onClick: () => handleClickItem(option.label === 'Home' ? rootHref : option.href), sx: {
                                            py: 1,
                                            color: 'text.secondary',
                                            '& svg': { width: 24, height: 24 },
                                            '&:hover': { color: 'text.primary' },
                                        }, children: [option.icon, _jsx(Box, { component: "span", sx: { ml: 2 }, children: option.label === 'Home' ? rootLabel : option.label }), option.info && (_jsx(Label, { color: "error", sx: { ml: 1 }, children: option.info }))] }, option.label));
                                }) }), _jsx(Box, { sx: { px: 2.5, py: 3 }, children: _jsx(UpgradeBlock, {}) })] }), _jsx(Box, { sx: { p: 2.5 }, children: _jsx(SignOutButton, { onClose: handleCloseDrawer }) })] })] }));
}
