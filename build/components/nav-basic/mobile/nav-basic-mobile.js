import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { NavList } from './nav-list';
import { NavUl } from '../../nav-section';
import { navBasicClasses } from '../classes';
import { navBasicCssVars } from '../css-vars';
// ----------------------------------------------------------------------
export function NavBasicMobile({ sx, data, render, slotProps, enabledRootRedirect, cssVars: overridesVars, ...other }) {
    const theme = useTheme();
    const cssVars = {
        ...navBasicCssVars.mobile(theme),
        ...overridesVars,
    };
    return (_jsx(Stack, { component: "nav", className: navBasicClasses.mobile.root, sx: { ...cssVars, ...sx }, ...other, children: _jsx(NavUl, { sx: { flex: '1 1 auto', gap: 'var(--nav-item-gap)' }, children: data.map((list) => (_jsx(NavList, { depth: 1, data: list, render: render, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title))) }) }));
}
