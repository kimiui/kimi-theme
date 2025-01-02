'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { Iconify } from '../../../components/iconify';
import { varHover } from '../../../components/animate';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
const COLORS = [
    'inherit',
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
];
const SIZES = ['small', 'medium', 'large'];
// ----------------------------------------------------------------------
export function IconButtons() {
    return (_jsxs(Stack, { rowGap: 5, columnGap: 2.5, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }, children: [_jsxs(ComponentBlock, { title: "Base", children: [_jsx(IconButton, { color: "inherit", children: _jsx(Iconify, { icon: "ic:round-access-alarm" }) }), _jsx(IconButton, { children: _jsx(Iconify, { icon: "ic:round-access-alarm" }) }), _jsx(IconButton, { color: "primary", children: _jsx(Iconify, { icon: "ic:round-access-alarm" }) }), _jsx(IconButton, { color: "secondary", children: _jsx(Iconify, { icon: "ic:round-access-alarm" }) }), _jsx(IconButton, { disabled: true, children: _jsx(Iconify, { icon: "ic:round-access-alarm" }) })] }), _jsx(ComponentBlock, { title: "Colors", children: COLORS.map((color) => (_jsx(IconButton, { color: color, children: _jsx(Iconify, { icon: "ic:round-access-alarm" }) }, color))) }), _jsx(ComponentBlock, { title: "Sizes", children: SIZES.map((size) => (_jsx(IconButton, { size: size, color: "info", children: _jsx(Iconify, { icon: "ic:round-access-alarm" }) }, size))) }), _jsx(ComponentBlock, { title: "With Animate", children: SIZES.map((size) => (_jsx(IconButton, { component: m.button, whileTap: "tap", whileHover: "hover", variants: (size === 'small' && varHover(1.1, 0.95)) ||
                        (size === 'large' && varHover(1.08, 0.99)) ||
                        varHover(), size: size, color: "error", children: _jsx(Iconify, { fontSize: "inherit", icon: "ic:round-access-alarm" }) }, size))) })] }));
}
