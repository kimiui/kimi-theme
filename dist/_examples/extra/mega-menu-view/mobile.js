import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Logo } from '../../../components/logo';
import { Iconify } from '../../../components/iconify';
import { MegaMenuMobile } from '../../../components/mega-menu';
import { navItems1 } from './data';
// ----------------------------------------------------------------------
export function DemoMegaMenuMobile() {
    return (_jsx(MegaMenuMobile, { data: navItems1, cssVars: {
            '--nav-item-gap': '8px',
        }, slots: {
            button: (_jsx(Button, { color: "inherit", variant: "contained", startIcon: _jsx(Iconify, { icon: "carbon:menu" }), children: "Mobile menu" })),
            topArea: (_jsxs(Box, { sx: { px: 2.5, py: 3 }, children: [_jsx(Logo, {}), ","] })),
            bottomArea: (_jsx(Divider, { children: _jsx(Box, { sx: {
                        p: 2,
                        textAlign: 'center',
                        color: 'text.secondary',
                        typography: 'subtitle2',
                    }, children: "Bottom" }) })),
        } }));
}
