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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var base_1 = require("./base");
// ----------------------------------------------------------------------
function PlanStarterIcon(_a) {
    var sx = _a.sx, other = __rest(_a, ["sx"]);
    var theme = (0, styles_1.useTheme)();
    var PRIMARY_MAIN = theme.vars.palette.primary.main;
    var PRIMARY_DARK = theme.vars.palette.primary.dark;
    var PRIMARY_DARKER = theme.vars.palette.primary.darker;
    return ((0, jsx_runtime_1.jsx)(base_1.BaseIcon, { sx: __assign({ width: 48, flexShrink: 0, height: 'auto' }, sx), children: (0, jsx_runtime_1.jsxs)("g", { transform: "translate(0 -5)", children: [(0, jsx_runtime_1.jsx)("g", { transform: "translate(0 9.15)", children: (0, jsx_runtime_1.jsxs)("g", { transform: "translate(9.167 19.963)", children: [(0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M53.333 17.467H61.666V24.953H53.333z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARKER, d: "M.935 20.45L25.963 8.015a5.052 5.052 0 014.52.012L60.74 23.263a1.685 1.685 0 01.015 3.001L35.417 39.361a5.052 5.052 0 01-4.694-.029L.893 23.446a1.685 1.685 0 01.042-2.995z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M32.5 34.204v4.185a1.133 1.133 0 01-1.566 1.047l-.1-.047v-7.537a2.494 2.494 0 011.666 2.352zM.833 15.932l30 15.92v7.537l-30-15.923v-.02l-.115-.066A1.568 1.568 0 010 22.063V14.14l.833 1.792z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_MAIN, fillRule: "nonzero", d: "M.935 12.965L25.963.528a5.052 5.052 0 014.52.012L60.74 15.777a1.685 1.685 0 01.015 3.001L35.417 31.875a5.052 5.052 0 01-4.694-.029L.893 15.96a1.685 1.685 0 01.042-2.995z" })] }) }), (0, jsx_runtime_1.jsxs)("g", { transform: "translate(9.167 19.963)", children: [(0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M53.333 17.467H61.666V24.953H53.333z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARKER, d: "M.935 20.45L25.963 8.015a5.052 5.052 0 014.52.012L60.74 23.263a1.685 1.685 0 01.015 3.001L35.417 39.361a5.052 5.052 0 01-4.694-.029L.893 23.446a1.685 1.685 0 01.042-2.995z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M32.5 34.204v4.185a1.133 1.133 0 01-1.566 1.047l-.1-.047v-7.537a2.494 2.494 0 011.666 2.352zM.833 15.932l30 15.92v7.537l-30-15.923v-.02l-.115-.066A1.568 1.568 0 010 22.063V14.14l.833 1.792z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_MAIN, fillRule: "nonzero", d: "M.935 12.965L25.963.528a5.052 5.052 0 014.52.012L60.74 15.777a1.685 1.685 0 01.015 3.001L35.417 31.875a5.052 5.052 0 01-4.694-.029L.893 15.96a1.685 1.685 0 01.042-2.995z" })] })] }) }));
}
exports.default = (0, react_1.memo)(PlanStarterIcon);
