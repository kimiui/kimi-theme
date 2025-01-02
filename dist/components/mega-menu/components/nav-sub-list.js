import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { RouterLink, usePathname } from 'routes-react';
import { removeLastSlash } from '../../../utils';
import { NavLi, NavUl } from '../../nav-section';
// ----------------------------------------------------------------------
export function NavSubList({ data, slotProps, ...other }) {
    const pathname = usePathname();
    return (_jsx(_Fragment, { children: data.map((list) => (_jsxs(Stack, { component: NavLi, spacing: 1, ...other, children: [list?.subheader && (_jsx(Typography, { variant: "subtitle2", noWrap: true, sx: slotProps?.subheader, children: list.subheader })), _jsx(NavUl, { sx: { gap: 1 }, children: list.items.map((item) => (_jsx(NavSubItem, { title: item.title, path: item.path, active: item.path === removeLastSlash(pathname), slotProps: slotProps?.subItem }, item.title))) })] }, list?.subheader ?? list.items[0].title))) }));
}
// ----------------------------------------------------------------------
export const NavSubItem = forwardRef(({ title, path, active, slotProps }, ref) => (_jsx(NavLi, { children: _jsx(Link, { ref: ref, component: RouterLink, href: path, noWrap: true, sx: {
            position: 'relative',
            color: 'text.secondary',
            fontSize: (theme) => theme.typography.pxToRem(13),
            lineHeight: (theme) => theme.typography.body2.lineHeight,
            transition: (theme) => theme.transitions.create('color'),
            '&:hover': { color: 'text.primary' },
            ...(active && {
                color: 'text.primary',
                textDecoration: 'underline',
                fontWeight: 'fontWeightSemiBold',
            }),
            ...slotProps,
        }, children: title }) }, title)));
