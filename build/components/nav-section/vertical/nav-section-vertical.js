'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { useState, useCallback } from 'react';
import Collapse from '@mui/material/Collapse';
import { useTheme } from '@mui/material/styles';
import { NavList } from './nav-list';
import { navSectionClasses } from '../classes';
import { navSectionCssVars } from '../css-vars';
import { NavUl, NavLi, Subheader } from '../styles';
// ----------------------------------------------------------------------
export function NavSectionVertical({ sx, data, render, slotProps, enabledRootRedirect, cssVars: overridesVars, }) {
    const theme = useTheme();
    const cssVars = {
        ...navSectionCssVars.vertical(theme),
        ...overridesVars,
    };
    return (_jsx(Stack, { component: "nav", className: navSectionClasses.vertical.root, sx: { ...cssVars, ...sx }, children: _jsx(NavUl, { sx: { flex: '1 1 auto', gap: 'var(--nav-item-gap)' }, children: data.map((group) => (_jsx(Group, { subheader: group.subheader, items: group.items, render: render, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, group.subheader ?? group.items[0].title))) }) }));
}
// ----------------------------------------------------------------------
function Group({ items, render, subheader, slotProps, enabledRootRedirect }) {
    const [open, setOpen] = useState(true);
    const handleToggle = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);
    const renderContent = (_jsx(NavUl, { sx: { gap: 'var(--nav-item-gap)' }, children: items.map((list) => (_jsx(NavList, { data: list, render: render, depth: 1, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title))) }));
    return (_jsx(NavLi, { children: subheader ? (_jsxs(_Fragment, { children: [_jsx(Subheader, { "data-title": subheader, open: open, onClick: handleToggle, sx: slotProps?.subheader, children: subheader }), _jsx(Collapse, { in: open, children: renderContent })] })) : (renderContent) }));
}
