import { jsx as _jsx } from "react/jsx-runtime";
import Paper from '@mui/material/Paper';
import { NavSectionMini } from '../../../components/nav-section';
import { NAV_ITEMS } from './data';
// ----------------------------------------------------------------------
export function NavMini() {
    return (_jsx(Paper, { variant: "outlined", sx: {
            p: 0.5,
            mx: 'auto',
            maxWidth: 96,
            borderRadius: 1,
        }, children: _jsx(NavSectionMini, { data: NAV_ITEMS, cssVars: {
                '--nav-item-gap': '8px',
            }, slotProps: {
                paper: {},
                rootItem: {
                    sx: {},
                    icon: {},
                    title: {},
                    caption: {},
                    info: {},
                    arrow: {},
                },
                subItem: {
                    sx: {},
                    icon: {},
                    title: {},
                    caption: {},
                    info: {},
                    arrow: {},
                },
            } }) }));
}
