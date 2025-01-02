'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { usePathname } from 'routes-react';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import { Logo } from '../../components/logo';
import { Scrollbar } from '../../components/scrollbar';
import { NavSectionVertical } from '../../components/nav-section';
import { NavHelper } from '../components/nav-helper';
export function NavMobile({ data, open, onClose, slots, sx, ...other }) {
    const pathname = usePathname();
    useEffect(() => {
        if (open) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    return (_jsxs(Drawer, { open: open, onClose: onClose, sx: {
            [`& .${drawerClasses.paper}`]: {
                overflow: 'unset',
                bgcolor: 'var(--layout-nav-bg)',
                width: 'var(--layout-nav-mobile-width)',
                ...sx,
            },
        }, children: [slots?.topArea ?? (_jsx(Box, { sx: { pl: 3.5, pt: 2.5, pb: 1 }, children: _jsx(Logo, {}) })), _jsxs(Scrollbar, { fillContent: true, children: [_jsx(NavSectionVertical, { data: data, sx: { px: 2, flex: '1 1 auto' }, ...other }), _jsx(NavHelper, {})] }), slots?.bottomArea] }));
}
