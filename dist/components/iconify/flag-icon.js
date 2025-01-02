import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import { Iconify } from './iconify';
export const FlagIcon = forwardRef(({ code, sx, ...other }, ref) => {
    const baseStyles = {
        width: 26,
        height: 20,
        flexShrink: 0,
        overflow: 'hidden',
        borderRadius: '5px',
        display: 'inline-flex',
        bgcolor: 'background.neutral',
    };
    const renderFallback = _jsx(Box, { component: "span", sx: { ...baseStyles, ...sx } });
    if (!code) {
        return null;
    }
    return (_jsx(NoSsr, { fallback: renderFallback, children: _jsx(Box, { ref: ref, component: "span", sx: { ...baseStyles, ...sx }, ...other, children: _jsx(Iconify, { icon: `flag:${code?.toLowerCase()}-1x1`, sx: { width: 26, height: 20 } }) }) }));
});
