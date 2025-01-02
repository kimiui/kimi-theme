import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { Iconify } from '../../iconify';
import { useNavItem, stateClasses, sharedStyles, navSectionClasses } from '../../nav-section';
// ----------------------------------------------------------------------
export const NavItem = forwardRef(({ path, icon, info, title, 
//
open, render, active, hasChild, disabled, slotProps, externalLink, enabledRootRedirect, ...other }, ref) => {
    const navItem = useNavItem({
        path,
        icon,
        info,
        render,
        hasChild,
        externalLink,
        enabledRootRedirect,
    });
    return (_jsxs(StyledNavItem, { disableRipple: true, ref: ref, "aria-label": title, open: open, active: active, disabled: disabled, className: stateClasses({ open: open && !active, active, disabled }), sx: {
            ...slotProps?.sx,
            [`& .${navSectionClasses.item.icon}`]: slotProps?.icon,
            [`& .${navSectionClasses.item.title}`]: slotProps?.title,
            [`& .${navSectionClasses.item.info}`]: slotProps?.info,
            [`& .${navSectionClasses.item.arrow}`]: slotProps?.arrow,
        }, ...navItem.baseProps, ...other, children: [icon && (_jsx(Box, { component: "span", className: navSectionClasses.item.icon, children: navItem.renderIcon })), title && (_jsx(Box, { component: "span", className: navSectionClasses.item.title, children: title })), info && (_jsx(Box, { component: "span", className: navSectionClasses.item.info, children: navItem.renderInfo })), hasChild && (_jsx(Iconify, { icon: "eva:arrow-ios-downward-fill", className: navSectionClasses.item.arrow }))] }));
});
// ----------------------------------------------------------------------
const StyledNavItem = styled(ButtonBase, {
    shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open' && prop !== 'disabled',
})(({ theme }) => ({
    minHeight: 'var(--nav-item-height)',
    padding: 'var(--nav-item-padding)',
    borderRadius: 'var(--nav-item-radius)',
    transition: theme.transitions.create(['background-color'], {
        duration: theme.transitions.duration.standard,
    }),
    '&:hover': {
        backgroundColor: 'var(--nav-item-hover-bg)',
    },
    [`& .${navSectionClasses.item.title}`]: {
        ...theme.typography.body2,
        flexShrink: 0,
        fontWeight: theme.typography.fontWeightMedium,
    },
    [`& .${navSectionClasses.item.icon}`]: {
        ...sharedStyles.icon,
        width: 'var(--nav-icon-size)',
        height: 'var(--nav-icon-size)',
        margin: 'var(--nav-icon-margin)',
    },
    [`& .${navSectionClasses.item.arrow}`]: { ...sharedStyles.arrow },
    [`& .${navSectionClasses.item.info}`]: { ...sharedStyles.info },
    variants: [
        {
            props: { active: true },
            style: {
                [`& .${navSectionClasses.item.title}`]: {
                    fontWeight: theme.typography.fontWeightSemiBold,
                },
            },
        },
        {
            props: { active: true },
            style: {
                color: 'var(--nav-item-active-color)',
            },
        },
        {
            props: { open: true },
            style: {
                backgroundColor: 'var(--nav-item-open-bg)',
            },
        },
        {
            props: { disabled: true },
            style: sharedStyles.disabled,
        },
    ],
}));
