'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BreadcrumbsView = BreadcrumbsView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Link_1 = __importDefault(require("@mui/material/Link"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var Breadcrumbs_1 = __importDefault(require("@mui/material/Breadcrumbs"));
var paths_1 = require("lib/routes/paths");
var iconify_1 = require("lib/components/iconify");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
function BreadcrumbsView() {
    var DEMO = [
        {
            name: 'Text',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsxs)(Breadcrumbs_1.default, { children: [(0, jsx_runtime_1.jsx)(Link_1.default, { color: "inherit", href: "#", children: "Material-UI" }), (0, jsx_runtime_1.jsx)(Link_1.default, { color: "inherit", href: "#", children: "Core" }), (0, jsx_runtime_1.jsx)(Typography_1.default, { sx: { color: 'text.primary' }, children: "Breadcrumb" })] }) })),
        },
        {
            name: 'With icon',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsxs)(Breadcrumbs_1.default, { children: [(0, jsx_runtime_1.jsxs)(Link_1.default, { color: "inherit", href: "#", sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:home-angle-2-bold-duotone" }), "Material-UI"] }), (0, jsx_runtime_1.jsxs)(Link_1.default, { color: "inherit", href: "#", sx: { display: 'flex', alignItems: 'center', gap: 0.5 }, children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:atom-bold-duotone" }), "Core"] }), (0, jsx_runtime_1.jsxs)(Typography_1.default, { sx: {
                                gap: 0.5,
                                display: 'flex',
                                alignItems: 'center',
                                color: 'text.primary',
                            }, children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:bell-bing-bold-duotone" }), "Breadcrumb"] })] }) })),
        },
        {
            name: 'Customized',
            component: ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 5, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { links: [
                                {
                                    name: 'Home',
                                    href: '#',
                                    icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:home-angle-2-bold-duotone" }),
                                },
                                {
                                    name: 'Link1',
                                    href: '#',
                                    icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:cube-outline" }),
                                },
                                {
                                    name: 'Link2',
                                    href: '#',
                                    icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:cube-outline" }),
                                },
                                { name: 'Link3', icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:cube-outline" }) },
                            ] }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Heading", links: [
                                {
                                    name: 'Home',
                                    href: '#',
                                    icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:home-angle-2-bold-duotone" }),
                                },
                                {
                                    name: 'Link1',
                                    href: '#',
                                    icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:cube-outline" }),
                                },
                                {
                                    name: 'Link2',
                                    href: '#',
                                    icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:cube-outline" }),
                                },
                                { name: 'Link3', icon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:cube-outline" }) },
                            ], action: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line" }), children: "New product" }) }) })] })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Breadcrumbs", links: [
                        { name: 'Components', href: paths_1.paths.docs.components.root },
                        { name: 'Breadcrumbs' },
                    ], moreLink: ['https://mui.com/components/custom-breadcrumbs'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
