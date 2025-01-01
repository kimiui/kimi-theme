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
exports.AuthMain = AuthMain;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
function AuthMain(_a) {
    var _b;
    var sx = _a.sx, children = _a.children, layoutQuery = _a.layoutQuery, other = __rest(_a, ["sx", "children", "layoutQuery"]);
    var theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ component: "main", sx: __assign((_b = { px: 2, py: 5, zIndex: 9, display: 'flex', flex: '1 1 auto', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh' }, _b[theme.breakpoints.up(layoutQuery)] = {
            px: 0,
            py: 'calc(var(--layout-header-desktop-height) + 24px)',
        }, _b), sx) }, other, { children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                p: 5,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.default',
                boxShadow: theme.shadows[8],
                maxWidth: 'var(--layout-auth-content-width)',
            }, children: children }) })));
}
