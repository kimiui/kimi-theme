'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadgeView = BadgeView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Badge_1 = __importDefault(require("@mui/material/Badge"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var paths_1 = require("../../../routes/paths");
var iconify_1 = require("../../../components/iconify");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
var STATUS = ['alway', 'online', 'busy', 'offline'];
// ----------------------------------------------------------------------
function BadgeView() {
    var DEMO = [
        {
            name: 'Basic',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { gap: 4 }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(Badge_1.default, { badgeContent: 4, color: color, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }, color)); }) })),
        },
        {
            name: 'Maximum value',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: { gap: 4 }, children: [(0, jsx_runtime_1.jsx)(Badge_1.default, { badgeContent: 99, color: "error", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), (0, jsx_runtime_1.jsx)(Badge_1.default, { badgeContent: 100, color: "error", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), (0, jsx_runtime_1.jsx)(Badge_1.default, { badgeContent: 1000, max: 999, color: "error", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled", width: 24 }) })] })),
        },
        {
            name: 'Dot badge',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: { gap: 4 }, children: [(0, jsx_runtime_1.jsx)(Badge_1.default, { color: "info", variant: "dot", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "fluent:mail-24-filled", width: 24 }) }), (0, jsx_runtime_1.jsx)(Badge_1.default, { color: "info", variant: "dot", children: (0, jsx_runtime_1.jsx)(Typography_1.default, { children: "Typography" }) })] })),
        },
        {
            name: 'Badge overlap',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { sx: { gap: 4 }, children: [(0, jsx_runtime_1.jsx)(Badge_1.default, { color: "info", badgeContent: " ", children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { width: 40, height: 40, bgcolor: 'warning.main' } }) }), (0, jsx_runtime_1.jsx)(Badge_1.default, { color: "info", badgeContent: " ", variant: "dot", children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { width: 40, height: 40, bgcolor: 'warning.main' } }) }), (0, jsx_runtime_1.jsx)(Badge_1.default, { color: "info", overlap: "circular", badgeContent: " ", children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                bgcolor: 'warning.main',
                            } }) }), (0, jsx_runtime_1.jsx)(Badge_1.default, { color: "info", overlap: "circular", badgeContent: " ", variant: "dot", children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                                width: 40,
                                height: 40,
                                borderRadius: '50%',
                                bgcolor: 'warning.main',
                            } }) })] })),
        },
        {
            name: 'Status',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { sx: { gap: 4 }, children: STATUS.map(function (status) { return ((0, jsx_runtime_1.jsx)(Badge_1.default, { variant: status, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            bgcolor: 'grey.400',
                        } }) }, status)); }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Badge", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Badge' }], moreLink: ['https://mui.com/components/badges'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
