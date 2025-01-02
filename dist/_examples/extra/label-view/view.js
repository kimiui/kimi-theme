'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Tooltip from '@mui/material/Tooltip';
import { paths } from '../../../routes/paths';
import { Label } from '../../../components/label';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
// ----------------------------------------------------------------------
export function LabelView() {
    const DEMO = [
        {
            name: 'Filled',
            component: (_jsx(ComponentBlock, { sx: { gap: 1 }, children: COLORS.map((color) => (_jsx(Tooltip, { title: color, children: _jsx(Label, { color: color, variant: "filled", children: color }) }, color))) })),
        },
        {
            name: 'Outlined',
            component: (_jsx(ComponentBlock, { sx: { gap: 1 }, children: COLORS.map((color) => (_jsx(Label, { color: color, variant: "outlined", children: color }, color))) })),
        },
        {
            name: 'Soft',
            component: (_jsx(ComponentBlock, { sx: { gap: 1 }, children: COLORS.map((color) => (_jsx(Label, { color: color, variant: "soft", children: color }, color))) })),
        },
        {
            name: 'Inverted',
            component: (_jsx(ComponentBlock, { sx: { gap: 1 }, children: COLORS.map((color) => (_jsx(Label, { color: color, variant: "inverted", children: color }, color))) })),
        },
        {
            name: 'With icon',
            component: (_jsxs(ComponentBlock, { sx: { gap: 1 }, children: [_jsx(Label, { variant: "filled", color: "primary", startIcon: _jsx(Iconify, { icon: "fluent:mail-24-filled" }), children: "Start icon" }), _jsx(Label, { variant: "filled", color: "primary", endIcon: _jsx(Iconify, { icon: "fluent:mail-24-filled" }), children: "End icon" }), _jsx(Label, { variant: "outlined", color: "primary", startIcon: _jsx(Iconify, { icon: "fluent:mail-24-filled" }), children: "Start icon" }), _jsx(Label, { variant: "outlined", color: "primary", endIcon: _jsx(Iconify, { icon: "fluent:mail-24-filled" }), children: "End icon" }), _jsx(Label, { color: "primary", startIcon: _jsx(Iconify, { icon: "fluent:mail-24-filled" }), children: "Start icon" }), _jsx(Label, { color: "primary", endIcon: _jsx(Iconify, { icon: "fluent:mail-24-filled" }), children: "End icon" })] })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Label", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Label' }] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
