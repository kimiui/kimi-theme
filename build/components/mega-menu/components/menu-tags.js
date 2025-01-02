import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { RouterLink } from 'routes-react';
import Typography from '@mui/material/Typography';
// ----------------------------------------------------------------------
export function MenuTags({ tags, ...other }) {
    return (_jsxs(Box, { ...other, children: [_jsx(Typography, { variant: "caption", sx: { mr: 0.5, fontWeight: 'fontWeightBold' }, children: "Hot products:" }), tags.map((tag, index) => (_jsx(Link, { component: RouterLink, href: tag.path, variant: "caption", sx: {
                    color: 'text.secondary',
                    transition: (theme) => theme.transitions.create(['color']),
                    '&:hover': { color: 'text.primary' },
                }, children: index === 0 ? tag.title : `, ${tag.title} ` }, tag.title)))] }));
}
