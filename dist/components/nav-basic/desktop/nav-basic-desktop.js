import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { NavList } from './nav-list';
import { NavUl } from '../../nav-section';
import { navBasicClasses } from '../classes';
import { navBasicCssVars } from '../css-vars';
// ----------------------------------------------------------------------
export function NavBasicDesktop({ sx, data, render, slotProps, enabledRootRedirect, cssVars: overridesVars, ...other }) {
    const theme = useTheme();
    const cssVars = {
        ...navBasicCssVars.desktop(theme),
        ...overridesVars,
    };
    return (_jsx(Stack, { component: "nav", spacing: 5, direction: "row", className: navBasicClasses.desktop.root, sx: { ...cssVars, ...sx }, ...other, children: _jsx(NavUl, { sx: { flexDirection: 'row', gap: 'var(--nav-item-gap)' }, children: data.map((list) => (_jsx(NavList, { depth: 1, data: list, render: render, cssVars: cssVars, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title))) }) }));
}
