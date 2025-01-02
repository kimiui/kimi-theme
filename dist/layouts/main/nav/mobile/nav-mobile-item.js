'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { varAlpha } from '../../../../theme/styles';
import { Iconify } from '../../../../components/iconify';
import { useNavItem } from '../../../../components/nav-section/hooks';
// ----------------------------------------------------------------------
export const NavItem = forwardRef(({ title, path, icon, open, active, hasChild, externalLink, ...other }, ref) => {
    const navItem = useNavItem({
        path,
        icon,
        hasChild,
        externalLink,
    });
    return (_jsxs(StyledNavItem, { ref: ref, "aria-label": title, open: open, active: active, ...navItem.baseProps, ...other, children: [navItem.renderIcon, _jsx(Box, { component: "span", sx: { flex: '1 1 auto' }, children: title }), hasChild && (_jsx(Iconify, { width: 16, icon: open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill' }))] }));
});
// ----------------------------------------------------------------------
const StyledNavItem = styled(ButtonBase, {
    shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open',
})(({ active, open, theme }) => ({
    ...theme.typography.body2,
    gap: 16,
    height: 48,
    width: '100%',
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(1.5),
    color: theme.vars.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    ...(active && {
        color: theme.vars.palette.primary.main,
        fontWeight: theme.typography.fontWeightSemiBold,
        backgroundColor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
        '&:hover': { backgroundColor: varAlpha(theme.vars.palette.primary.mainChannel, 0.16) },
    }),
    ...(open && {
        color: theme.vars.palette.text.primary,
        backgroundColor: theme.vars.palette.action.hover,
    }),
}));
