'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { usePathname } from 'routes-react';
import { Logo } from '../../../../components/logo';
import { NavUl } from '../../../../components/nav-section';
import { Scrollbar } from '../../../../components/scrollbar';
import { NavList } from './nav-mobile-list';
export function NavMobile({ data, open, onClose, slots, sx }) {
    const pathname = usePathname();
    useEffect(() => {
        if (open) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    return (_jsxs(Drawer, { open: open, onClose: onClose, PaperProps: {
            sx: {
                display: 'flex',
                flexDirection: 'column',
                width: 'var(--layout-nav-mobile-width)',
                ...sx,
            },
        }, children: [slots?.topArea ?? (_jsx(Box, { display: "flex", sx: { pt: 3, pb: 2, pl: 2.5 }, children: _jsx(Logo, {}) })), _jsx(Scrollbar, { fillContent: true, children: _jsx(Box, { component: "nav", display: "flex", flexDirection: "column", flex: "1 1 auto", sx: { pb: 3 }, children: _jsx(NavUl, { children: data.map((list) => (_jsx(NavList, { data: list }, list.title))) }) }) }), slots?.bottomArea] }));
}
