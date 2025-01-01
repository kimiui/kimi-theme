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
exports.NavSubItem = void 0;
exports.NavSubList = NavSubList;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Link_1 = __importDefault(require("@mui/material/Link"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var routes_react_1 = require("routes-react");
var utils_1 = require("lib/utils");
var nav_section_1 = require("../../nav-section");
// ----------------------------------------------------------------------
function NavSubList(_a) {
    var data = _a.data, slotProps = _a.slotProps, other = __rest(_a, ["data", "slotProps"]);
    var pathname = (0, routes_react_1.usePathname)();
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data.map(function (list) {
            var _a;
            return ((0, jsx_runtime_1.jsxs)(Stack_1.default, __assign({ component: nav_section_1.NavLi, spacing: 1 }, other, { children: [(list === null || list === void 0 ? void 0 : list.subheader) && ((0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", noWrap: true, sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.subheader, children: list.subheader })), (0, jsx_runtime_1.jsx)(nav_section_1.NavUl, { sx: { gap: 1 }, children: list.items.map(function (item) { return ((0, jsx_runtime_1.jsx)(exports.NavSubItem, { title: item.title, path: item.path, active: item.path === (0, utils_1.removeLastSlash)(pathname), slotProps: slotProps === null || slotProps === void 0 ? void 0 : slotProps.subItem }, item.title)); }) })] }), (_a = list === null || list === void 0 ? void 0 : list.subheader) !== null && _a !== void 0 ? _a : list.items[0].title));
        }) }));
}
// ----------------------------------------------------------------------
exports.NavSubItem = (0, react_1.forwardRef)(function (_a, ref) {
    var title = _a.title, path = _a.path, active = _a.active, slotProps = _a.slotProps;
    return ((0, jsx_runtime_1.jsx)(nav_section_1.NavLi, { children: (0, jsx_runtime_1.jsx)(Link_1.default, { ref: ref, component: routes_react_1.RouterLink, href: path, noWrap: true, sx: __assign(__assign({ position: 'relative', color: 'text.secondary', fontSize: function (theme) { return theme.typography.pxToRem(13); }, lineHeight: function (theme) { return theme.typography.body2.lineHeight; }, transition: function (theme) { return theme.transitions.create('color'); }, '&:hover': { color: 'text.primary' } }, (active && {
                color: 'text.primary',
                textDecoration: 'underline',
                fontWeight: 'fontWeightSemiBold',
            })), slotProps), children: title }) }, title));
});
