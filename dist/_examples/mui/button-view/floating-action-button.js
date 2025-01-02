'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Stack from '@mui/material/Stack';
import Fab, { fabClasses } from '@mui/material/Fab';
import { Iconify } from '../../../components/iconify';
import { varHover } from '../../../components/animate';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
const COLORS = [
    'default',
    'inherit',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error',
];
const SIZES = ['small', 'medium', 'large'];
// ----------------------------------------------------------------------
export function FloatingActionButton() {
    return (_jsxs(Stack, { rowGap: 5, columnGap: 2.5, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }, sx: { [`& .${fabClasses.root}`]: { textTransform: 'capitalize' } }, children: [_jsxs(ComponentBlock, { title: "Default", children: [COLORS.map((color) => (_jsx(Fab, { color: color, children: _jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, color))), COLORS.map((color) => (_jsxs(Fab, { color: color, variant: "extended", children: [_jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }), color] }, color))), _jsx(Fab, { color: "info", disabled: true, children: _jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }) }), _jsxs(Fab, { color: "info", disabled: true, variant: "extended", children: [_jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }), "disabled"] })] }), _jsxs(ComponentBlock, { title: "Outlined", children: [COLORS.map((color) => (_jsx(Fab, { color: color, variant: "outlined", children: _jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, color))), COLORS.map((color) => (_jsxs(Fab, { color: color, variant: "outlinedExtended", children: [_jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }), color] }, color))), _jsx(Fab, { color: "info", disabled: true, variant: "outlined", children: _jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }) }), _jsxs(Fab, { color: "info", disabled: true, variant: "outlinedExtended", children: [_jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }), "disabled"] })] }), _jsxs(ComponentBlock, { title: "Soft", children: [COLORS.map((color) => (_jsx(Fab, { color: color, variant: "soft", children: _jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, color))), COLORS.map((color) => (_jsxs(Fab, { color: color, variant: "softExtended", children: [_jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }), color] }, color))), _jsx(Fab, { color: "info", disabled: true, variant: "soft", children: _jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }) }), _jsxs(Fab, { color: "info", disabled: true, variant: "softExtended", children: [_jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }), "disabled"] })] }), _jsxs(ComponentBlock, { title: "Sizes", children: [SIZES.map((size) => (_jsx(Fab, { size: size, color: "info", children: _jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, size))), SIZES.map((size) => (_jsxs(Fab, { size: size, color: "info", variant: "extended", children: [_jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }), size] }, size))), SIZES.map((size) => (_jsx(Fab, { size: size, color: "info", variant: "soft", children: _jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, size))), SIZES.map((size) => (_jsxs(Fab, { size: size, color: "info", variant: "softExtended", children: [_jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }), size] }, size))), SIZES.map((size) => (_jsx(Fab, { size: size, color: "info", variant: "outlined", children: _jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }) }, size))), SIZES.map((size) => (_jsxs(Fab, { size: size, color: "info", variant: "outlinedExtended", children: [_jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }), size] }, size)))] }), _jsx(ComponentBlock, { title: "With Animate", children: SIZES.map((size) => (_jsxs(Fab, { component: m.button, whileTap: "tap", whileHover: "hover", variants: (size === 'small' && varHover(1.1, 0.95)) ||
                        (size === 'large' && varHover(1.08, 0.99)) ||
                        varHover(), variant: "extended", size: size, color: "info", children: [_jsx(Iconify, { icon: "ic:round-access-alarm", width: 24 }), size] }, size))) })] }));
}
