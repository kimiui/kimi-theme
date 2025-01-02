'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import ListSubheader from '@mui/material/ListSubheader';
import { stylesMode } from '../../theme/styles';
import { navSectionClasses } from './classes';
import { svgColorClasses } from '../svg-color';
import { Iconify, iconifyClasses } from '../iconify';
// ----------------------------------------------------------------------
export function stateClasses({ open, active, disabled, }) {
    let classes = navSectionClasses.item.root;
    if (active) {
        classes += ` ${navSectionClasses.state.active}`;
    }
    else if (open) {
        classes += ` ${navSectionClasses.state.open}`;
    }
    else if (disabled) {
        classes += ` ${navSectionClasses.state.disabled}`;
    }
    return classes;
}
// ----------------------------------------------------------------------
export const sharedStyles = {
    icon: {
        flexShrink: 0,
        display: 'inline-flex',
        [`& svg, & img, & .${iconifyClasses.root}, & .${svgColorClasses.root}`]: {
            width: '100%',
            height: '100%',
        },
    },
    arrow: {
        width: 16,
        height: 16,
        flexShrink: 0,
        marginLeft: '6px',
        display: 'inline-flex',
    },
    info: {
        fontSize: 12,
        flexShrink: 0,
        fontWeight: 600,
        marginLeft: '6px',
        lineHeight: 18 / 12,
        display: 'inline-flex',
    },
    noWrap: {
        width: '100%',
        maxWidth: '100%',
        display: 'block',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    disabled: { opacity: 0.48, pointerEvents: 'none' },
};
// ----------------------------------------------------------------------
export function Subheader({ sx, open, children, ...other }) {
    return (_jsxs(ListSubheader, { disableSticky: true, component: "div", className: navSectionClasses.subheader, sx: {
            gap: 1,
            cursor: 'pointer',
            alignItems: 'center',
            position: 'relative',
            typography: 'overline',
            display: 'inline-flex',
            alignSelf: 'flex-start',
            color: 'var(--nav-subheader-color)',
            padding: (theme) => theme.spacing(2, 1, 1, 1.5),
            fontSize: (theme) => theme.typography.pxToRem(11),
            transition: (theme) => theme.transitions.create(['color', 'padding-left'], {
                duration: theme.transitions.duration.standard,
            }),
            '&:hover': {
                pl: 2,
                color: 'var(--nav-subheader-hover-color)',
                [`& .${iconifyClasses.root}`]: { opacity: 1 },
            },
            ...sx,
        }, ...other, children: [_jsx(Iconify, { width: 16, icon: open ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill', sx: {
                    left: -4,
                    opacity: 0,
                    position: 'absolute',
                    transition: (theme) => theme.transitions.create(['opacity'], {
                        duration: theme.transitions.duration.standard,
                    }),
                } }), children] }));
}
// ----------------------------------------------------------------------
export function NavCollapse({ sx, depth, children, ...other }) {
    return (_jsx(Collapse, { sx: {
            ...(depth + 1 !== 1 && {
                pl: 'calc(var(--nav-item-pl) + var(--nav-icon-size) / 2)',
                [`& .${navSectionClasses.ul}`]: {
                    position: 'relative',
                    pl: 'var(--nav-bullet-size)',
                    '&::before': {
                        top: 0,
                        left: 0,
                        width: '2px',
                        content: '""',
                        position: 'absolute',
                        bottom: 'calc(var(--nav-item-sub-height) - 2px - var(--nav-bullet-size) / 2)',
                        bgcolor: 'var(--nav-bullet-light-color)',
                        [stylesMode.dark]: {
                            bgcolor: 'var(--nav-bullet-dark-color)',
                        },
                    },
                },
            }),
            ...sx,
        }, ...other, children: children }));
}
// ----------------------------------------------------------------------
const StyledNavUl = styled('ul', {
    shouldForwardProp: (propName) => propName !== 'sx',
})(({ theme }) => ({
    paddingLeft: 0,
}));
const StyledNavLi = styled('li', {
    shouldForwardProp: (propName) => propName !== 'sx',
})(({ theme }) => ({}));
export function NavLi({ sx, children, disabled, }) {
    return (_jsx(StyledNavLi, { className: navSectionClasses.li, sx: {
            display: 'flex',
            flexDirection: 'column',
            ...(disabled && { cursor: 'not-allowed' }),
            ...sx,
        }, children: children }));
}
// ----------------------------------------------------------------------
export function NavUl({ children, sx }) {
    return (_jsx(StyledNavUl, { className: navSectionClasses.ul, sx: {
            display: 'flex',
            flexDirection: 'column',
            ...sx,
        }, children: children }));
}
