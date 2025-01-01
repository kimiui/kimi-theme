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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavOptions = NavOptions;
exports.LayoutOption = LayoutOption;
exports.ColorOption = ColorOption;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var styles_1 = require("@mui/material/styles");
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var styles_2 = require("../../../theme/styles");
var styles_3 = require("./styles");
var svg_color_1 = require("../../svg-color");
function NavOptions(_a) {
    var options = _a.options, value = _a.value, onClickOption = _a.onClickOption, hideNavColor = _a.hideNavColor, hideNavLayout = _a.hideNavLayout;
    var theme = (0, styles_1.useTheme)();
    var cssVars = {
        '--item-radius': '12px',
        '--item-bg': theme.vars.palette.grey[500],
        '--item-border-color': (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
        '--item-active-color': "linear-gradient(135deg, ".concat(theme.vars.palette.primary.light, " 0%, ").concat(theme.vars.palette.primary.main, " 100%)"),
        '--item-active-shadow-light': "-8px 8px 20px -4px ".concat((0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12)),
        '--item-active-shadow-dark': "-8px 8px 20px -4px ".concat((0, styles_2.varAlpha)(theme.vars.palette.common.blackChannel, 0.12)),
    };
    var labelStyles = {
        display: 'block',
        lineHeight: '14px',
        color: 'text.secondary',
        fontWeight: 'fontWeightSemiBold',
        fontSize: theme.typography.pxToRem(11),
    };
    var renderLayout = ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: labelStyles, children: "Layout" }), (0, jsx_runtime_1.jsx)(Box_1.default, { gap: 1.5, display: "flex", sx: { mt: 1.5 }, children: options.layouts.map(function (option) { return ((0, jsx_runtime_1.jsx)(LayoutOption, { option: option, selected: value.layout === option, onClick: function () { return onClickOption.layout(option); } }, option)); }) })] }));
    var renderColor = ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: labelStyles, children: "Color" }), (0, jsx_runtime_1.jsx)(Box_1.default, { gap: 1.5, display: "flex", sx: { mt: 1.5 }, children: options.colors.map(function (option) { return ((0, jsx_runtime_1.jsx)(ColorOption, { option: option, selected: value.color === option, onClick: function () { return onClickOption.color(option); } }, option)); }) })] }));
    return ((0, jsx_runtime_1.jsxs)(styles_3.Block, { title: "Nav", tooltip: "Dashboard only", sx: __assign(__assign({}, cssVars), { gap: 2.5 }), children: [!hideNavLayout && renderLayout, !hideNavColor && renderColor] }));
}
function LayoutOption(_a) {
    var _b;
    var option = _a.option, selected = _a.selected, sx = _a.sx, other = __rest(_a, ["option", "selected", "sx"]);
    var renderNav = function () {
        var baseStyles = {
            flexShrink: 0,
            borderRadius: 1,
            bgcolor: 'var(--item-bg)',
        };
        var circle = ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: __assign(__assign(__assign({}, baseStyles), { width: 10, height: 10, opacity: 0.8 }), (selected && {
                opacity: 1,
                background: 'var(--item-active-color)',
            })) }));
        var primaryItem = ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: __assign(__assign(__assign(__assign({}, baseStyles), { width: 1, height: 4, opacity: 0.48 }), (option === 'horizontal' && { width: 16 })), (selected && { background: 'var(--item-active-color)' })) }));
        var secondaryItem = ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: __assign(__assign(__assign(__assign({}, baseStyles), { width: 1, height: 4, maxWidth: 14, opacity: 0.24 }), (option === 'horizontal' && { maxWidth: 10 })), (selected && { background: 'var(--item-active-color)' })) }));
        return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 0.5, flexShrink: 0, sx: __assign(__assign({ p: 0.75, width: 32, height: 1, borderRightWidth: 1, borderRightStyle: 'solid', borderRightColor: 'var(--item-border-color)' }, (option === 'mini' && {
                width: 22,
            })), (option === 'horizontal' && {
                width: 1,
                height: 22,
                borderRight: 'none',
                alignItems: 'center',
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomStyle: 'solid',
                borderBottomColor: 'var(--item-border-color)',
            })), children: [circle, primaryItem, secondaryItem] }));
    };
    var renderContent = ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: { p: 0.5, width: 1, height: 1, flexGrow: 1 }, children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: __assign({ width: 1, height: 1, opacity: 0.2, borderRadius: 0.75, bgcolor: 'var(--item-bg)' }, (selected && {
                background: 'var(--item-active-color)',
            })) }) }));
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, { direction: "column", sx: { width: 1 }, children: (0, jsx_runtime_1.jsxs)(ButtonBase_1.default, __assign({ disableRipple: true, sx: __assign(__assign(__assign({ width: 1, height: 64, borderWidth: 1, borderStyle: 'solid', borderRadius: 'var(--item-radius)', borderColor: 'var(--item-border-color)' }, (option === 'horizontal' && { flexDirection: 'column' })), (selected && (_b = {
                    boxShadow: 'var(--item-active-shadow-light)'
                },
                _b[styles_2.stylesMode.dark] = {
                    boxShadow: 'var(--item-active-shadow-dark)',
                },
                _b))), sx) }, other, { children: [renderNav(), renderContent] })) }));
}
// ----------------------------------------------------------------------
function ColorOption(_a) {
    var _b;
    var option = _a.option, selected = _a.selected, sx = _a.sx, other = __rest(_a, ["option", "selected", "sx"]);
    return ((0, jsx_runtime_1.jsxs)(ButtonBase_1.default, __assign({ disableRipple: true, sx: __assign(__assign({ gap: 1.5, width: 1, height: 56, color: 'text.disabled', borderRadius: 'var(--item-radius)' }, (selected && (_b = {
                borderWidth: 1,
                borderStyle: 'solid',
                color: 'text.primary',
                borderColor: 'var(--item-border-color)',
                boxShadow: 'var(--item-active-shadow-light)'
            },
            _b["& .".concat(svg_color_1.svgColorClasses.root)] = {
                background: 'var(--item-active-color)',
            },
            _b[styles_2.stylesMode.dark] = {
                boxShadow: 'var(--item-active-shadow-dark)',
            },
            _b))), sx) }, other, { children: [(0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/setting/ic-sidebar-".concat(option === 'integrate' ? 'outline' : 'filled', ".svg") }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: {
                    lineHeight: '18px',
                    textTransform: 'capitalize',
                    fontWeight: 'fontWeightSemiBold',
                    fontSize: function (theme) { return theme.typography.pxToRem(13); },
                }, children: option })] })));
}
