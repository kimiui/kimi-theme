'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { stylesMode } from '../../../theme/styles';
import { useNavItem } from '../hooks';
import { Iconify } from '../../iconify';
import { navSectionClasses } from '../classes';
import { stateClasses, sharedStyles } from '../styles';
// ----------------------------------------------------------------------
export const NavItem = forwardRef(({ path, icon, info, title, caption, 
//
open, depth, render, active, disabled, hasChild, slotProps, externalLink, enabledRootRedirect, ...other }, ref) => {
    const navItem = useNavItem({
        path,
        icon,
        info,
        depth,
        render,
        hasChild,
        externalLink,
        enabledRootRedirect,
    });
    return (_jsxs(StyledNavItem, { ref: ref, "aria-label": title, depth: depth, active: active, disabled: disabled, open: open && !active, sx: {
            ...slotProps?.sx,
            [`& .${navSectionClasses.item.icon}`]: slotProps?.icon,
            [`& .${navSectionClasses.item.title}`]: slotProps?.title,
            [`& .${navSectionClasses.item.caption}`]: slotProps?.caption,
            [`& .${navSectionClasses.item.info}`]: slotProps?.info,
            [`& .${navSectionClasses.item.arrow}`]: slotProps?.arrow,
        }, className: stateClasses({ open: open && !active, active, disabled }), ...navItem.baseProps, ...other, children: [icon && (_jsx(Box, { component: "span", className: navSectionClasses.item.icon, children: navItem.renderIcon })), title && (_jsx(Box, { component: "span", className: navSectionClasses.item.title, children: title })), caption && (_jsx(Tooltip, { title: caption, arrow: true, placement: "right", children: _jsx(Iconify, { icon: "eva:info-outline", className: navSectionClasses.item.caption }) })), info && navItem.subItem && (_jsx(Box, { component: "span", className: navSectionClasses.item.info, children: navItem.renderInfo })), hasChild && (_jsx(Iconify, { icon: "eva:arrow-ios-forward-fill", className: navSectionClasses.item.arrow }))] }));
});
// ----------------------------------------------------------------------
const StyledNavItem = styled(ButtonBase, {
    shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open' && prop !== 'disabled' && prop !== 'depth',
})(({ depth, active, open, theme }) => {
    const rootItem = depth === 1;
    const subItem = !rootItem;
    const baseStyles = {
        item: {
            width: '100%',
            borderRadius: 'var(--nav-item-radius)',
            color: 'var(--nav-item-color)',
            '&:hover': {
                backgroundColor: 'var(--nav-item-hover-bg)',
            },
        },
        title: {},
        caption: {
            width: 16,
            height: 16,
            color: 'var(--nav-item-caption-color)',
        },
        icon: {
            ...sharedStyles.icon,
            width: 'var(--nav-icon-size)',
            height: 'var(--nav-icon-size)',
        },
        arrow: { ...sharedStyles.arrow },
        info: { ...sharedStyles.info },
    };
    return {
        /**
         * Root item
         */
        ...(rootItem && {
            ...baseStyles.item,
            textAlign: 'center',
            flexDirection: 'column',
            minHeight: 'var(--nav-item-root-height)',
            padding: 'var(--nav-item-root-padding)',
            [`& .${navSectionClasses.item.icon}`]: {
                ...baseStyles.icon,
                margin: 'var(--nav-icon-root-margin)',
            },
            [`& .${navSectionClasses.item.title}`]: {
                ...baseStyles.title,
                ...sharedStyles.noWrap,
                lineHeight: '16px',
                fontSize: theme.typography.pxToRem(10),
                fontWeight: active ? theme.typography.fontWeightBold : theme.typography.fontWeightSemiBold,
            },
            [`& .${navSectionClasses.item.caption}`]: {
                ...baseStyles.caption,
                top: 11,
                left: 6,
                position: 'absolute',
            },
            [`& .${navSectionClasses.item.arrow}`]: {
                ...baseStyles.arrow,
                top: 11,
                right: 6,
                position: 'absolute',
            },
            [`& .${navSectionClasses.item.info}`]: { ...baseStyles.info },
            // State
            ...(active && {
                color: 'var(--nav-item-root-active-color)',
                backgroundColor: 'var(--nav-item-root-active-bg)',
                '&:hover': {
                    backgroundColor: 'var(--nav-item-root-active-hover-bg)',
                },
                [stylesMode.dark]: {
                    color: 'var(--nav-item-root-active-color-on-dark)',
                },
            }),
            ...(open && {
                color: 'var(--nav-item-root-open-color)',
                backgroundColor: 'var(--nav-item-root-open-bg)',
            }),
        }),
        /**
         * Sub item
         */
        ...(subItem && {
            ...baseStyles.item,
            color: theme.vars.palette.text.secondary,
            minHeight: 'var(--nav-item-sub-height)',
            padding: 'var(--nav-item-sub-padding)',
            [`& .${navSectionClasses.item.icon}`]: {
                ...baseStyles.icon,
                margin: 'var(--nav-icon-sub-margin)',
            },
            [`& .${navSectionClasses.item.title}`]: {
                ...baseStyles.title,
                ...theme.typography.body2,
                fontWeight: active
                    ? theme.typography.fontWeightSemiBold
                    : theme.typography.fontWeightMedium,
                flex: '1 1 auto',
            },
            [`& .${navSectionClasses.item.caption}`]: { ...baseStyles.caption },
            [`& .${navSectionClasses.item.arrow}`]: {
                ...baseStyles.arrow,
                marginRight: theme.spacing(-0.5),
            },
            [`& .${navSectionClasses.item.info}`]: { ...baseStyles.info },
            // State
            ...(active && {
                color: 'var(--nav-item-sub-active-color)',
                backgroundColor: 'var(--nav-item-sub-active-bg)',
            }),
            ...(open && {
                color: 'var(--nav-item-sub-open-color)',
                backgroundColor: 'var(--nav-item-sub-open-bg)',
            }),
        }),
        variants: [
            {
                props: ({ disabled }) => disabled,
                style: sharedStyles.disabled,
            },
        ],
    };
});
