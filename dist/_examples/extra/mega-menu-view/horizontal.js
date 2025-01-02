import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Label } from '../../../components/label';
import { Iconify } from '../../../components/iconify';
import { MegaMenuHorizontal } from '../../../components/mega-menu';
import { navItems2 } from './data';
// ----------------------------------------------------------------------
export function DemoMegaMenuHorizontal() {
    return (_jsx(AppBar, { position: "sticky", sx: { bgcolor: 'background.paper', boxShadow: (theme) => theme.shadows[8] }, children: _jsxs(Toolbar, { component: Container, children: [_jsx(Typography, { variant: "h6", sx: { flexGrow: 1 }, children: "Horizontal menu" }), _jsx(MegaMenuHorizontal, { data: navItems2, render: {
                        navIcon: NAV_ICONS,
                        navInfo: NAV_INFO,
                    }, cssVars: {
                        '--nav-item-gap': '8px',
                    }, slotProps: {
                        rootItem: {
                            sx: {},
                            icon: {},
                            title: {
                                typography: 'subtitle1',
                                fontFamily: (theme) => theme.typography.fontSecondaryFamily,
                            },
                            info: {},
                            arrow: {},
                        },
                        subItem: {},
                        paper: {},
                        subheader: {},
                        tags: {},
                        moreLink: {},
                        carousel: { sx: {}, displayCount: 8 },
                    } })] }) }));
}
// ----------------------------------------------------------------------
const NAV_ICONS = {
    'icon.item1': _jsx(Iconify, { icon: "solar:home-2-outline" }),
    'icon.item2': _jsx(Iconify, { icon: "solar:atom-outline" }),
    'icon.item3': _jsx(Iconify, { icon: "solar:chart-square-outline" }),
    'icon.item4': _jsx(Iconify, { icon: "solar:confetti-minimalistic-outline" }),
    'icon.item5': _jsx(Iconify, { icon: "solar:gallery-circle-outline" }),
};
const NAV_INFO = (val) => ({
    'info.item3': _jsx(Label, { color: "info", children: val }),
    'info.item4': _jsx(_Fragment, { children: val }),
});
