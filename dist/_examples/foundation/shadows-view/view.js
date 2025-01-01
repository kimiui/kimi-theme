'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowsView = ShadowsView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var styles_1 = require("@mui/material/styles");
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var boxProps = {
    gap: 3,
    display: 'grid',
    gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
};
// ----------------------------------------------------------------------
function ShadowsView() {
    var theme = (0, styles_1.useTheme)();
    var shadows = Object.values(theme.shadows);
    var SYSTEM = shadows.slice(1, shadows.length);
    console.log(SYSTEM);
    var DEMO = [
        {
            name: 'System',
            component: ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({}, boxProps, { children: SYSTEM.map(function (shadow, index) { return ((0, jsx_runtime_1.jsx)(ShadowCard, { title: "z".concat(index + 1), sx: { boxShadow: shadow } }, shadow)); }) }))),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Shadows", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Shadows' }] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
// ----------------------------------------------------------------------
function ShadowCard(_a) {
    var sx = _a.sx, title = _a.title;
    return ((0, jsx_runtime_1.jsx)(Paper_1.default, { sx: __assign({ p: 3, minHeight: 120, display: 'flex', alignItems: 'center', typography: 'subtitle2', justifyContent: 'center', textTransform: 'capitalize' }, sx), children: title }));
}
