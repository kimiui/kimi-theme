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
exports.ColorsView = ColorsView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_1 = require("@mui/material/styles");
var paths_1 = require("../../../routes/paths");
var hooks_1 = require("../../../hooks");
var snackbar_1 = require("../../../components/snackbar");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var PALETTE = ['primary', 'secondary', 'info', 'success', 'warning', 'error'];
var VARIATIONS = ['lighter', 'light', 'main', 'dark', 'darker'];
var GREY = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'];
var boxProps = {
    display: 'grid',
    gridTemplateColumns: {
        xs: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(5, 1fr)',
    },
};
// ----------------------------------------------------------------------
function ColorsView() {
    var theme = (0, styles_1.useTheme)();
    var copy = (0, hooks_1.useCopyToClipboard)().copy;
    var onCopy = function (color) {
        if (color) {
            snackbar_1.toast.success("Copied: ".concat(color));
            copy(color);
        }
    };
    var BASE = PALETTE.map(function (color) { return ({
        name: color[0].toUpperCase() + color.substring(1),
        component: ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({}, boxProps, { children: VARIATIONS.map(function (variation) { return ((0, jsx_runtime_1.jsx)(ColorCard, { variation: variation, varColor: theme.vars.palette[color][variation], hexColor: theme.palette[color][variation], onCopy: function () { return onCopy(theme.palette[color][variation]); } }, variation)); }) }))),
    }); });
    var DEMO = __spreadArray(__spreadArray([], BASE, true), [
        {
            name: 'Grey',
            component: ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({}, boxProps, { children: GREY.map(function (variation) { return ((0, jsx_runtime_1.jsx)(ColorCard, { variation: variation, varColor: theme.vars.palette.grey[variation], hexColor: theme.palette.grey[variation], onCopy: function () { return onCopy(theme.palette.grey[variation]); } }, variation)); }) }))),
        },
    ], false);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Color", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Color' }], moreLink: ['https://mui.com/customization/color', 'https://colors.eva.design'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
function ColorCard(_a) {
    var varColor = _a.varColor, hexColor = _a.hexColor, variation = _a.variation, onCopy = _a.onCopy;
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, onClick: onCopy, sx: {
            p: 2,
            cursor: 'pointer',
            bgcolor: varColor,
            color: function (theme) { return theme.palette.getContrastText(hexColor); },
            transition: function (theme) {
                return theme.transitions.create(['opacity', 'background-color'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.shorter,
                });
            },
            '&:hover': { opacity: 0.8 },
        }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", sx: { textTransform: 'capitalize', flexGrow: 1 }, children: variation }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: { typography: 'caption' }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { opacity: 0.64 }, children: "Var" }), varColor] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: { typography: 'caption' }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { opacity: 0.64 }, children: "Hex" }), hexColor] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: { typography: 'caption' }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { opacity: 0.64 }, children: "Rgb" }), (0, styles_1.hexToRgb)(hexColor).replace('rgb(', '').replace(')', '')] })] }));
}
