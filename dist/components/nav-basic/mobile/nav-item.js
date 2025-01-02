import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import { stylesMode } from '../../../theme/styles';
import { Iconify } from '../../iconify';
import { useNavItem, stateClasses, sharedStyles, navSectionClasses } from '../../nav-section';
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
            [`& .${navSectionClasses.item.texts}`]: slotProps?.texts,
            [`& .${navSectionClasses.item.title}`]: slotProps?.title,
            [`& .${navSectionClasses.item.caption}`]: slotProps?.caption,
            [`& .${navSectionClasses.item.arrow}`]: slotProps?.arrow,
        }, className: stateClasses({ open: open && !active, active, disabled }), ...navItem.baseProps, ...other, children: [icon && (_jsx(Box, { component: "span", className: navSectionClasses.item.icon, children: navItem.renderIcon })), title && (_jsxs(Box, { component: "span", className: navSectionClasses.item.texts, children: [_jsx(Box, { component: "span", className: navSectionClasses.item.title, children: title }), caption && (_jsx(Tooltip, { title: caption, placement: "top-start", children: _jsx(Box, { component: "span", className: navSectionClasses.item.caption, children: caption }) }))] })), info && (_jsx(Box, { component: "span", className: navSectionClasses.item.info, children: navItem.renderInfo })), hasChild && (_jsx(Iconify, { width: 16, icon: open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill', className: navSectionClasses.item.arrow }))] }));
});
// ----------------------------------------------------------------------
const StyledNavItem = styled(ButtonBase, {
    shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open' && prop !== 'disabled' && prop !== 'depth',
})(({ depth, open, active, theme }) => {
    const rootItem = depth === 1;
    const subItem = !rootItem;
    const baseStyles = {
        item: {
            width: '100%',
            color: 'var(--nav-item-color)',
            borderRadius: 'var(--nav-item-radius)',
            paddingTop: 'var(--nav-item-pt)',
            paddingLeft: 'var(--nav-item-pl)',
            paddingRight: 'var(--nav-item-pr)',
            paddingBottom: 'var(--nav-item-pb)',
            '&:hover': {
                backgroundColor: 'var(--nav-item-hover-color)',
            },
        },
        icon: {
            ...sharedStyles.icon,
            width: 'var(--nav-icon-size)',
            height: 'var(--nav-icon-size)',
            margin: 'var(--nav-icon-margin)',
        },
        texts: {
            minWidth: 0,
            flex: '1 1 auto',
        },
        title: {
            ...sharedStyles.noWrap,
            ...theme.typography.body2,
            fontWeight: active ? theme.typography.fontWeightSemiBold : theme.typography.fontWeightMedium,
        },
        caption: {
            ...sharedStyles.noWrap,
            ...theme.typography.caption,
            color: 'var(--nav-item-caption-color)',
        },
        arrow: {
            ...sharedStyles.arrow,
        },
        info: {
            ...sharedStyles.info,
        },
    };
    return {
        /**
         * Root item
         */
        ...(rootItem && {
            ...baseStyles.item,
            minHeight: 'var(--nav-item-root-height)',
            [`& .${navSectionClasses.item.icon}`]: { ...baseStyles.icon },
            [`& .${navSectionClasses.item.texts}`]: { ...baseStyles.texts },
            [`& .${navSectionClasses.item.title}`]: { ...baseStyles.title },
            [`& .${navSectionClasses.item.caption}`]: { ...baseStyles.caption },
            [`& .${navSectionClasses.item.arrow}`]: { ...baseStyles.arrow },
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
            minHeight: 'var(--nav-item-sub-height)',
            [`& .${navSectionClasses.item.icon}`]: { ...baseStyles.icon },
            [`& .${navSectionClasses.item.texts}`]: { ...baseStyles.texts },
            [`& .${navSectionClasses.item.title}`]: { ...baseStyles.title },
            [`& .${navSectionClasses.item.caption}`]: { ...baseStyles.caption },
            [`& .${navSectionClasses.item.arrow}`]: { ...baseStyles.arrow },
            [`& .${navSectionClasses.item.info}`]: { ...baseStyles.info },
            // Shape
            '&::before': {
                width: 3,
                left: -13,
                height: 16,
                content: '""',
                borderRadius: 3,
                position: 'absolute',
                transform: 'scale(0)',
                transition: theme.transitions.create(['transform'], {
                    duration: theme.transitions.duration.short,
                }),
                ...(active && {
                    transform: 'scale(1)',
                    backgroundColor: 'currentColor',
                }),
            },
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
