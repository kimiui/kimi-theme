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
exports.NavHorizontal = NavHorizontal;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var styles_1 = require("lib/theme/styles");
var nav_section_1 = require("lib/components/nav-section");
function NavHorizontal(_a) {
    var _b;
    var data = _a.data, layoutQuery = _a.layoutQuery, sx = _a.sx, other = __rest(_a, ["data", "layoutQuery", "sx"]);
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: __assign({ width: 1, position: 'relative', flexDirection: 'column', display: (_b = { xs: 'none' }, _b[layoutQuery] = 'flex', _b), borderBottom: function (theme) {
                return "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08));
            } }, sx), children: [(0, jsx_runtime_1.jsx)(Divider_1.default, { sx: { top: 0, left: 0, width: 1, zIndex: 9, position: 'absolute', borderStyle: 'dashed' } }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                    px: 1.5,
                    height: 'var(--layout-nav-horizontal-height)',
                    backgroundColor: 'var(--layout-nav-horizontal-bg)',
                    backdropFilter: "blur(var(--layout-header-blur))",
                    WebkitBackdropFilter: "blur(var(--layout-header-blur))",
                }, children: (0, jsx_runtime_1.jsx)(nav_section_1.NavSectionHorizontal, __assign({ data: data }, other)) })] }));
}
