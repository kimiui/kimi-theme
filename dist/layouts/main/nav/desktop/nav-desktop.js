import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { NavUl } from '../../../../components/nav-section';
import { NavList } from './nav-desktop-list';
// ----------------------------------------------------------------------
export function NavDesktop({ data, sx }) {
    return (_jsx(Stack, { component: "nav", sx: { height: 1, ...sx }, children: _jsx(NavUl, { sx: {
                gap: 5,
                height: 1,
                flexDirection: 'row',
                alignItems: 'center',
            }, children: data.map((list) => (_jsx(NavList, { data: list }, list.title))) }) }));
}
