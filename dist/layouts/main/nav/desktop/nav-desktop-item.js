'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { m } from 'framer-motion';
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { RouterLink } from 'routes-react';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import CardActionArea from '@mui/material/CardActionArea';
import { Iconify } from '../../../../components/iconify';
import { useNavItem } from '../../../../components/nav-section/hooks';
// ----------------------------------------------------------------------
export const NavItem = forwardRef(({ title, path, open, active, hasChild, externalLink, subItem, ...other }, ref) => {
    const navItem = useNavItem({ path, hasChild, externalLink });
    return (_jsxs(StyledNavItem, { disableRipple: true, ref: ref, "aria-label": title, open: open, active: active, subItem: subItem, ...navItem.baseProps, ...other, children: [title, hasChild && _jsx(Iconify, { width: 16, icon: "eva:arrow-ios-downward-fill", sx: { ml: 0.75 } })] }));
});
// ----------------------------------------------------------------------
const StyledNavItem = styled(ButtonBase, {
    shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open' && prop !== 'subItem',
})(({ active, open, subItem, theme }) => {
    const rootItem = !subItem;
    const baseStyles = {
        item: {
            ...theme.typography.body2,
            fontWeight: theme.typography.fontWeightMedium,
            transition: theme.transitions.create(['all'], {
                duration: theme.transitions.duration.shorter,
            }),
        },
        dot: {
            width: 6,
            height: 6,
            left: -12,
            opacity: 0.64,
            content: '""',
            borderRadius: '50%',
            position: 'absolute',
            backgroundColor: theme.vars.palette.text.disabled,
            ...(active && {
                opacity: 1,
                backgroundColor: theme.vars.palette.primary.main,
            }),
        },
    };
    return {
        /**
         * Root item
         */
        ...(rootItem && {
            ...baseStyles.item,
            height: '100%',
            '&:hover': { opacity: 0.64, '&::before': baseStyles.dot },
            ...(active && {
                color: theme.vars.palette.primary.main,
                fontWeight: theme.typography.fontWeightSemiBold,
                '&::before': baseStyles.dot,
            }),
            ...(open && { opacity: 0.64, '&::before': baseStyles.dot }),
        }),
        /**
         * Sub item
         */
        ...(subItem && {
            ...baseStyles.item,
            justifyContent: 'flex-start',
            color: theme.vars.palette.text.secondary,
            fontSize: theme.typography.pxToRem(13),
            '&:hover': {
                color: theme.vars.palette.text.primary,
                '&::before': baseStyles.dot,
            },
            ...(active && {
                color: theme.vars.palette.text.primary,
                fontWeight: theme.typography.fontWeightSemiBold,
                '&::before': baseStyles.dot,
            }),
        }),
    };
});
export function NavItemDashboard({ path, sx, ...other }) {
    return (_jsx(Link, { component: RouterLink, href: path, sx: { width: 1, height: 1 }, ...other, children: _jsx(CardActionArea, { sx: {
                height: 1,
                minHeight: 360,
                borderRadius: 1.5,
                color: 'text.disabled',
                bgcolor: 'background.neutral',
                px: { md: 3, lg: 10 },
                ...sx,
            }, children: _jsx(m.div, { whileTap: "tap", whileHover: "hover", variants: { hover: { scale: 1.02 }, tap: { scale: 0.98 } }, children: _jsx(Box, { component: "img", alt: "illustration-dashboard", src: "/assets/illustrations/illustration-dashboard.webp", sx: {
                        width: 640,
                        objectFit: 'cover',
                        aspectRatio: '4/3',
                    } }) }) }) }));
}
