import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import { NavList } from './nav-list';
import { NavUl } from '../../nav-section';
import { megaMenuClasses } from '../classes';
import { megaMenuCssVars } from '../css-vars';
// ----------------------------------------------------------------------
export function MegaMenuHorizontal({ sx, data, render, slotProps, enabledRootRedirect, cssVars: overridesVars, ...other }) {
    const theme = useTheme();
    const cssVars = {
        ...megaMenuCssVars.horizontal(theme),
        ...overridesVars,
    };
    return (_jsx(Stack, { component: "nav", className: megaMenuClasses.horizontal.root, sx: { ...cssVars, ...sx }, ...other, children: _jsx(NavUl, { sx: { gap: 'var(--nav-item-gap)', flexDirection: 'row' }, children: data.map((list) => (_jsx(NavList, { data: list, render: render, cssVars: cssVars, slotProps: slotProps, enabledRootRedirect: enabledRootRedirect }, list.title))) }) }));
}
