'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useState, useCallback } from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ButtonBase from '@mui/material/ButtonBase';
import { Label } from '../../components/label';
import { Iconify } from '../../components/iconify';
import { usePopover, CustomPopover } from '../../components/custom-popover';
export function WorkspacesPopover({ data = [], sx, ...other }) {
    const popover = usePopover();
    const mediaQuery = 'sm';
    const [workspace, setWorkspace] = useState(data[0]);
    const handleChangeWorkspace = useCallback((newValue) => {
        setWorkspace(newValue);
        popover.onClose();
    }, [popover]);
    return (_jsxs(_Fragment, { children: [_jsxs(ButtonBase, { disableRipple: true, onClick: popover.onOpen, sx: {
                    py: 0.5,
                    gap: { xs: 0.5, [mediaQuery]: 1 },
                    ...sx,
                }, ...other, children: [_jsx(Box, { component: "img", alt: workspace?.name, src: workspace?.logo, sx: { width: 24, height: 24, borderRadius: '50%' } }), _jsx(Box, { component: "span", sx: {
                            typography: 'subtitle2',
                            display: { xs: 'none', [mediaQuery]: 'inline-flex' },
                        }, children: workspace?.name }), _jsx(Label, { color: workspace?.plan === 'Free' ? 'default' : 'info', sx: {
                            height: 22,
                            display: { xs: 'none', [mediaQuery]: 'inline-flex' },
                        }, children: workspace?.plan }), _jsx(Iconify, { width: 16, icon: "carbon:chevron-sort", sx: { color: 'text.disabled' } })] }), _jsx(CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, slotProps: { arrow: { placement: 'top-left' } }, children: _jsx(MenuList, { sx: { width: 240 }, children: data.map((option) => (_jsxs(MenuItem, { selected: option.id === workspace?.id, onClick: () => handleChangeWorkspace(option), sx: { height: 48 }, children: [_jsx(Avatar, { alt: option.name, src: option.logo, sx: { width: 24, height: 24 } }), _jsx(Box, { component: "span", sx: { flexGrow: 1 }, children: option.name }), _jsx(Label, { color: option.plan === 'Free' ? 'default' : 'info', children: option.plan })] }, option.id))) }) })] }));
}
