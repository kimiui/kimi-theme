'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypographyView = TypographyView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var styles_1 = require("@mui/material/styles");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var paths_1 = require("../../../routes/paths");
var hooks_1 = require("../../../hooks");
var styles_2 = require("../../../theme/styles");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var VARIANTS = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle2',
    'body1',
    'body2',
    'caption',
    'overline',
    'button',
];
var BASE = VARIANTS.map(function (variant) { return ({
    name: variant[0].toUpperCase() + variant.substring(1),
    component: (0, jsx_runtime_1.jsx)(BlockVariant, { variant: variant }),
}); });
function TypographyView() {
    var DEMO = __spreadArray(__spreadArray([], BASE, true), [
        {
            name: 'Colors',
            component: ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 3, children: [['primary', 'secondary', 'disabled'].map(function (color) { return ((0, jsx_runtime_1.jsxs)(Paper_1.default, { children: [(0, jsx_runtime_1.jsxs)(Typography_1.default, { gutterBottom: true, variant: "subtitle2", sx: { color: "text.".concat(color), textTransform: 'capitalize' }, children: ["text ", color] }), (0, jsx_runtime_1.jsx)(Typography_1.default, { gutterBottom: true, variant: "body2", sx: { color: "text.".concat(color) }, children: "Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus." })] }, color)); }), ['primary', 'secondary', 'info', 'warning', 'error'].map(function (color) { return ((0, jsx_runtime_1.jsxs)(Paper_1.default, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { gutterBottom: true, variant: "subtitle2", sx: { color: "".concat(color, ".main"), textTransform: 'capitalize' }, children: color }), (0, jsx_runtime_1.jsx)(Typography_1.default, { gutterBottom: true, variant: "body2", sx: { color: "".concat(color, ".main") }, children: "Cras ultricies mi eu turpis hendrerit fringilla. Fusce vel dui. Pellentesque auctor neque nec urna. Sed cursus turpis vitae tortor. Curabitur suscipit suscipit tellus." })] }, color)); })] })),
        },
    ], false);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Typography", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Typography' }], moreLink: ['https://mui.com/components/typography'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
function BlockVariant(_a) {
    var _b, _c, _d;
    var variant = _a.variant;
    var theme = (0, styles_1.useTheme)();
    var upSm = (0, hooks_1.useResponsive)('up', 'sm');
    var upMd = (0, hooks_1.useResponsive)('up', 'md');
    var upLg = (0, hooks_1.useResponsive)('up', 'lg');
    var fontProperties = theme.typography[variant];
    var keysStartWith = function (obj) {
        return Object.keys(obj).some(function (key) { return key.startsWith('@media'); });
    };
    var hasMedia = keysStartWith(fontProperties);
    var fontSize = fontProperties.fontSize;
    if (hasMedia) {
        if (upSm) {
            fontSize = (_b = fontProperties[theme.breakpoints.up('sm')]) === null || _b === void 0 ? void 0 : _b.fontSize;
        }
        if (upMd) {
            fontSize = (_c = fontProperties[theme.breakpoints.up('md')]) === null || _c === void 0 ? void 0 : _c.fontSize;
        }
        if (upLg) {
            fontSize = (_d = fontProperties[theme.breakpoints.up('lg')]) === null || _d === void 0 ? void 0 : _d.fontSize;
        }
    }
    return ((0, jsx_runtime_1.jsxs)(Paper_1.default, { variant: "outlined", sx: { p: 3 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: variant, children: "How can you choose a typeface?" }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 0.5, sx: {
                    mt: 2,
                    typography: 'body2',
                    color: 'text.secondary',
                    fontFamily: '"Lucida Console", Courier, monospace',
                }, children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", children: ["fontSize: ", "".concat((0, styles_2.remToPx)(fontSize), "px")] }), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", children: ["lineHeight: ", Number(fontProperties.lineHeight).toFixed(2)] }), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "span", children: ["fontWeight: ", fontProperties.fontWeight] })] })] }));
}
