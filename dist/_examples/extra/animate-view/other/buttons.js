'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { m } from 'framer-motion';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import { Iconify } from '../../../../components/iconify';
import { varHover } from '../../../../components/animate';
// ----------------------------------------------------------------------
export function AnimateButton() {
    return (_jsxs(_Fragment, { children: [_jsx(Fab, { component: m.button, whileTap: "tap", whileHover: "hover", variants: varHover(1.1, 0.95), color: "primary", size: "small", children: _jsx(Iconify, { icon: "mingcute:add-line", width: 24 }) }), _jsx(Fab, { component: m.button, whileTap: "tap", whileHover: "hover", variants: varHover(), color: "primary", size: "medium", children: _jsx(Iconify, { icon: "mingcute:add-line", width: 24 }) }), _jsx(Fab, { component: m.button, whileTap: "tap", whileHover: "hover", variants: varHover(1.08, 0.99), color: "primary", children: _jsx(Iconify, { icon: "mingcute:add-line", width: 24 }) }), _jsx(IconButton, { component: m.button, whileTap: "tap", whileHover: "hover", variants: varHover(1.1, 0.95), color: "primary", size: "small", children: _jsx(Iconify, { icon: "mingcute:add-line", width: 24 }) }), _jsx(IconButton, { component: m.button, whileTap: "tap", whileHover: "hover", variants: varHover(), color: "primary", children: _jsx(Iconify, { icon: "mingcute:add-line", width: 24 }) }), _jsx(IconButton, { component: m.button, whileTap: "tap", whileHover: "hover", variants: varHover(1.08, 0.99), color: "primary", size: "large", children: _jsx(Iconify, { icon: "mingcute:add-line", width: 24 }) })] }));
}
