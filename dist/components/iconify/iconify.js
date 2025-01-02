'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import { Icon, disableCache } from '@iconify/react';
import { iconifyClasses } from './classes';
// ----------------------------------------------------------------------
export const Iconify = forwardRef(({ children, className, width = 20, sx, ...other }, ref) => {
    const baseStyles = {
        width,
        height: width,
        flexShrink: 0,
        display: 'inline-flex',
    };
    const renderFallback = (_jsx(Box, { component: "span", className: iconifyClasses.root.concat(className ? ` ${className}` : ''), sx: { ...baseStyles, ...sx } }));
    return (_jsxs(NoSsr, { fallback: renderFallback, children: [_jsx(Box, { ssr: true, ref: ref, component: Icon, className: iconifyClasses.root.concat(className ? ` ${className}` : ''), sx: { ...baseStyles, ...sx }, ...other }), children] }));
});
// https://iconify.design/docs/iconify-icon/disable-cache.html
disableCache('local');
