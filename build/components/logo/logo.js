'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';
import { RouterLink } from 'routes-react';
import { logoClasses } from './classes';
export const Logo = forwardRef(({ width = 40, height = 40, disableLink = false, className, href = '/', sx, ...other }, ref) => {
    const logo = (_jsx(Box, { alt: "logo", component: "img", src: "/logo/logo-single.svg", width: width, height: height }));
    return (_jsx(NoSsr, { fallback: _jsx(Box, { width: width, height: height, className: logoClasses.root.concat(className ? ` ${className}` : ''), sx: {
                flexShrink: 0,
                display: 'inline-flex',
                verticalAlign: 'middle',
                ...sx,
            } }), children: _jsx(Box, { component: RouterLink, ref: ref, href: href, className: logoClasses.root.concat(className ? ` ${className}` : ''), "aria-label": "logo", sx: {
                width,
                height,
                flexShrink: 0,
                display: 'inline-flex',
                verticalAlign: 'middle',
                ...(disableLink && { pointerEvents: 'none' }),
                ...sx,
            }, children: logo }) }));
});
