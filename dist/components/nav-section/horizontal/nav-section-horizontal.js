import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { NavList } from './nav-list';
import { NavUl, NavLi } from '../styles';
import { Scrollbar } from '../../scrollbar';
import { navSectionClasses } from '../classes';
import { navSectionCssVars } from '../css-vars';
// ----------------------------------------------------------------------
export function NavSectionHorizontal({ sx, data, render, slotProps, enabledRootRedirect, cssVars: overridesVars, }) {
    const theme = useTheme();
    const cssVars = {
        ...navSectionCssVars.horizontal(theme),
        ...overridesVars,
    };
    return (_jsx(Scrollbar, { sx: { height: 1 }, slotProps: {
            content: { height: 1, display: 'flex', alignItems: 'center' },
        }, children: _jsx(Stack, { component: "nav", direction: "row", alignItems: "center", className: navSectionClasses.horizontal.root, sx: {
                ...cssVars,
                mx: 'auto',
                height: 1,
                minHeight: 'var(--nav-height)',
                ...sx,
            }, children: _jsx(NavUl, { sx: { flexDirection: 'row', gap: 'var(--nav-item-gap)' }, children: data.map((group) => (_jsx(Group, { render: render, cssVars: cssVars, items: group.items, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, group.subheader ?? group.items[0].title))) }) }) }));
}
// ----------------------------------------------------------------------
function Group({ items, render, slotProps, enabledRootRedirect, cssVars }) {
    return (_jsx(NavLi, { children: _jsx(NavUl, { sx: { flexDirection: 'row', gap: 'var(--nav-item-gap)' }, children: items.map((list) => (_jsx(NavList, { depth: 1, data: list, render: render, cssVars: cssVars, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title))) }) }));
}
