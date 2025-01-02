import { jsx as _jsx } from "react/jsx-runtime";
import Paper from '@mui/material/Paper';
import { NavSectionHorizontal } from '../../../components/nav-section';
import { NAV_ITEMS } from './data';
// ----------------------------------------------------------------------
export function NavHorizontal() {
    return (_jsx(Paper, { variant: "outlined", sx: {
            px: 2,
            height: 80,
            borderRadius: 2,
        }, children: _jsx(NavSectionHorizontal, { data: NAV_ITEMS, cssVars: {
                '--nav-item-gap': '24px',
            }, slotProps: {
                paper: {},
                rootItem: {
                    sx: {
                        typography: 'subtitle1',
                        fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                    },
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
