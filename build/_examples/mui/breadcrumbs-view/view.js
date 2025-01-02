'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { paths } from '../../../routes/paths';
import { Iconify } from '../../../components/iconify';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
export function BreadcrumbsView() {
    const DEMO = [
        {
            name: 'Text',
            component: (_jsx(ComponentBlock, { children: _jsxs(Breadcrumbs, { children: [_jsx(Link, { color: "inherit", href: "#", children: "Material-UI" }), _jsx(Link, { color: "inherit", href: "#", children: "Core" }), _jsx(Typography, { sx: { color: 'text.primary' }, children: "Breadcrumb" })] }) })),
        },
        {
            name: 'With icon',
            component: (_jsx(ComponentBlock, { children: _jsxs(Breadcrumbs, { children: [_jsxs(Link, { color: "inherit", href: "#", sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(Iconify, { icon: "solar:home-angle-2-bold-duotone" }), "Material-UI"] }), _jsxs(Link, { color: "inherit", href: "#", sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [_jsx(Iconify, { icon: "solar:atom-bold-duotone" }), "Core"] }), _jsxs(Typography, { sx: {
                                gap: 0.5,
                                display: 'flex',
                                alignItems: 'center',
                                color: 'text.primary',
                            }, children: [_jsx(Iconify, { icon: "solar:bell-bing-bold-duotone" }), "Breadcrumb"] })] }) })),
        },
        {
            name: 'Customized',
            component: (_jsxs(Stack, { spacing: 5, children: [_jsx(ComponentBlock, { children: _jsx(CustomBreadcrumbs, { links: [
                                {
                                    name: 'Home',
                                    href: '#',
                                    icon: _jsx(Iconify, { icon: "solar:home-angle-2-bold-duotone" }),
                                },
                                {
                                    name: 'Link1',
                                    href: '#',
                                    icon: _jsx(Iconify, { icon: "eva:cube-outline" }),
                                },
                                {
                                    name: 'Link2',
                                    href: '#',
                                    icon: _jsx(Iconify, { icon: "eva:cube-outline" }),
                                },
                                { name: 'Link3', icon: _jsx(Iconify, { icon: "eva:cube-outline" }) },
                            ] }) }), _jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsx(CustomBreadcrumbs, { heading: "Heading", links: [
                                {
                                    name: 'Home',
                                    href: '#',
                                    icon: _jsx(Iconify, { icon: "solar:home-angle-2-bold-duotone" }),
                                },
                                {
                                    name: 'Link1',
                                    href: '#',
                                    icon: _jsx(Iconify, { icon: "eva:cube-outline" }),
                                },
                                {
                                    name: 'Link2',
                                    href: '#',
                                    icon: _jsx(Iconify, { icon: "eva:cube-outline" }),
                                },
                                { name: 'Link3', icon: _jsx(Iconify, { icon: "eva:cube-outline" }) },
                            ], action: _jsx(Button, { variant: "contained", startIcon: _jsx(Iconify, { icon: "mingcute:add-line" }), children: "New product" }) }) })] })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Breadcrumbs", links: [
                        { name: 'Components', href: paths.docs.components.root },
                        { name: 'Breadcrumbs' },
                    ], moreLink: ['https://mui.com/components/custom-breadcrumbs'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
