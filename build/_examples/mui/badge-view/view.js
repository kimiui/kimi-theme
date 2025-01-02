'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import { paths } from '../../../routes/paths';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
const STATUS = ['alway', 'online', 'busy', 'offline'];
// ----------------------------------------------------------------------
export function BadgeView() {
    const DEMO = [
        {
            name: 'Basic',
            component: (_jsx(ComponentBlock, { sx: { gap: 4 }, children: COLORS.map((color) => (_jsx(Badge, { badgeContent: 4, color: color, children: _jsx(Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }, color))) })),
        },
        {
            name: 'Maximum value',
            component: (_jsxs(ComponentBlock, { sx: { gap: 4 }, children: [_jsx(Badge, { badgeContent: 99, color: "error", children: _jsx(Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), _jsx(Badge, { badgeContent: 100, color: "error", children: _jsx(Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), _jsx(Badge, { badgeContent: 1000, max: 999, color: "error", children: _jsx(Iconify, { icon: "fluent:mail-24-filled", width: 24 }) })] })),
        },
        {
            name: 'Dot badge',
            component: (_jsxs(ComponentBlock, { sx: { gap: 4 }, children: [_jsx(Badge, { color: "info", variant: "dot", children: _jsx(Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), _jsx(Badge, { color: "info", variant: "dot", children: _jsx(Typography, { children: "Typography" }) })] })),
        },
        {
            name: 'Badge overlap',
            component: (_jsxs(ComponentBlock, { sx: { gap: 4 }, children: [_jsx(Badge, { color: "info", badgeContent: " ", children: _jsx(Box, { sx: { width: 40, height: 40, bgcolor: 'warning.main' } }) }), _jsx(Badge, { color: "info", badgeContent: " ", variant: "dot", children: _jsx(Box, { sx: { width: 40, height: 40, bgcolor: 'warning.main' } }) }), _jsx(Badge, { color: "info", overlap: "circular", badgeContent: " ", children: _jsx(Box, { sx: {
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                bgcolor: 'warning.main',
                            } }) }), _jsx(Badge, { color: "info", overlap: "circular", badgeContent: " ", variant: "dot", children: _jsx(Box, { sx: {
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                bgcolor: 'warning.main',
                            } }) })] })),
        },
        {
            name: 'Status',
            component: (_jsx(ComponentBlock, { sx: { gap: 4 }, children: STATUS.map((status) => (_jsx(Badge, { variant: status, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, children: _jsx(Box, { sx: {
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            bgcolor: 'grey.400',
                        } }) }, status))) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Badge", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Badge' }], moreLink: ['https://mui.com/components/badges'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
