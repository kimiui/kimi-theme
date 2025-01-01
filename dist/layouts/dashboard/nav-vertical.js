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
exports.NavVertical = NavVertical;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var scrollbar_1 = require("../../components/scrollbar");
var styles_2 = require("../../theme/styles");
var nav_section_1 = require("../../components/nav-section");
var nav_toggle_button_1 = require("../components/nav-toggle-button");
function NavVertical(_a) {
    var _b, _c;
    var sx = _a.sx, data = _a.data, slotProps = _a.slotProps, isNavMini = _a.isNavMini, layoutQuery = _a.layoutQuery, onToggleNav = _a.onToggleNav, other = __rest(_a, ["sx", "data", "slotProps", "isNavMini", "layoutQuery", "onToggleNav"]);
    var theme = (0, styles_1.useTheme)();
    var renderNavVertical = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [slotProps === null || slotProps === void 0 ? void 0 : slotProps.top, (0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { fillContent: true, children: (0, jsx_runtime_1.jsx)(nav_section_1.NavSectionVertical, __assign({ data: data, sx: { px: 2, flex: '1 1 auto' }, slotProps: slotProps }, other)) }), slotProps === null || slotProps === void 0 ? void 0 : slotProps.bottom] }));
    var renderNavMini = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [slotProps === null || slotProps === void 0 ? void 0 : slotProps.topMini, (0, jsx_runtime_1.jsx)(nav_section_1.NavSectionMini, __assign({ data: data, sx: __assign(__assign({ pb: 2, px: 0.5 }, styles_2.hideScrollY), { flex: '1 1 auto', overflowY: 'auto' }) }, other)), slotProps === null || slotProps === void 0 ? void 0 : slotProps.bottomMini] }));
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: __assign((_b = { top: 0, left: 0, height: 1, display: 'none', position: 'fixed', flexDirection: 'column', bgcolor: 'var(--layout-nav-bg)', zIndex: 'var(--layout-nav-zIndex)', width: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)', borderRight: "1px solid var(--layout-nav-border-color, ".concat((0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12), ")"), transition: theme.transitions.create(['width'], {
                    easing: 'var(--layout-transition-easing)',
                    duration: 'var(--layout-transition-duration)',
                }) }, _b[theme.breakpoints.up(layoutQuery)] = {
            display: 'flex',
        }, _b), sx), children: [onToggleNav && ((0, jsx_runtime_1.jsx)(nav_toggle_button_1.NavToggleButton, { isNavMini: isNavMini, onClick: onToggleNav, sx: (_c = {
                        display: 'none'
                    },
                    _c[theme.breakpoints.up(layoutQuery)] = {
                        display: 'inline-flex',
                    },
                    _c) })), isNavMini ? renderNavMini : renderNavVertical] }));
}
