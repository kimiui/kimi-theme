import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { NavList } from './nav-list';
import { NavUl, NavLi } from '../styles';
import { navSectionClasses } from '../classes';
import { navSectionCssVars } from '../css-vars';
// ----------------------------------------------------------------------
export function NavSectionMini({ sx, data, render, slotProps, enabledRootRedirect, cssVars: overridesVars, }) {
    const theme = useTheme();
    const cssVars = {
        ...navSectionCssVars.mini(theme),
        ...overridesVars,
    };
    return (_jsx(Stack, { component: "nav", className: navSectionClasses.mini.root, sx: { ...cssVars, ...sx }, children: _jsx(NavUl, { sx: { flex: '1 1 auto', gap: 'var(--nav-item-gap)' }, children: data.map((group) => (_jsx(Group, { render: render, cssVars: cssVars, items: group.items, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, group.subheader ?? group.items[0].title))) }) }));
}
// ----------------------------------------------------------------------
function Group({ items, render, slotProps, enabledRootRedirect, cssVars }) {
    return (_jsx(NavLi, { children: _jsx(NavUl, { sx: { gap: 'var(--nav-item-gap)' }, children: items.map((list) => (_jsx(NavList, { depth: 1, data: list, render: render, cssVars: cssVars, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title))) }) }));
}
