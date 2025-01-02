import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from '@mui/material/Link';
import { RouterLink } from 'routes-react';
import { Iconify } from '../../iconify';
// ----------------------------------------------------------------------
export function MenuMoreLink({ title, path, sx, ...other }) {
    return (_jsxs(Link, { component: RouterLink, href: path, color: "inherit", sx: {
            alignItems: 'center',
            typography: 'caption',
            display: 'inline-flex',
            fontWeight: 'fontWeightSemiBold',
            ...sx,
        }, ...other, children: [title, " ", _jsx(Iconify, { icon: "eva:arrow-ios-forward-fill", width: 16 })] }));
}
