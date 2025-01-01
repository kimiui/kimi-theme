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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var base_1 = require("./base");
// ----------------------------------------------------------------------
function PlanPremiumIcon(_a) {
    var sx = _a.sx;
    var theme = (0, styles_1.useTheme)();
    var PRIMARY_MAIN = theme.vars.palette.primary.main;
    var PRIMARY_DARK = theme.vars.palette.primary.dark;
    var PRIMARY_DARKER = theme.vars.palette.primary.darker;
    return ((0, jsx_runtime_1.jsx)(base_1.BaseIcon, { sx: __assign({ width: 48, flexShrink: 0, height: 'auto' }, sx), children: (0, jsx_runtime_1.jsxs)("g", { transform: "translate(0 -9)", children: [(0, jsx_runtime_1.jsx)("g", { transform: "translate(0 18.271)", children: (0, jsx_runtime_1.jsxs)("g", { transform: "translate(9.167 19.932)", children: [(0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M53.333 17.441H61.666V24.915999999999997H53.333z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARKER, d: "M.935 20.42L25.963 8.001a5.059 5.059 0 014.52.012L60.74 23.228a1.68 1.68 0 01.015 2.996L35.417 39.301a5.059 5.059 0 01-4.694-.029L.893 23.41a1.68 1.68 0 01.042-2.99z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M32.5 34.151v4.18a1.132 1.132 0 01-1.566 1.045l-.1-.047v-7.525A2.49 2.49 0 0132.5 34.15zM.833 15.908l30 15.896v7.525l-30-15.899v-.019l-.115-.066A1.565 1.565 0 010 22.029v-7.91l.833 1.789z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_MAIN, fillRule: "nonzero", d: "M.935 12.945L25.963.527a5.059 5.059 0 014.52.012L60.74 15.753a1.68 1.68 0 01.015 2.997L35.417 31.827a5.059 5.059 0 01-4.694-.03L.893 15.937a1.68 1.68 0 01.042-2.991z" })] }) }), (0, jsx_runtime_1.jsx)("g", { transform: "translate(0 9.136)", children: (0, jsx_runtime_1.jsxs)("g", { transform: "translate(9.167 19.932)", children: [(0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M53.333 17.441H61.666V24.915999999999997H53.333z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARKER, d: "M.935 20.42L25.963 8.001a5.059 5.059 0 014.52.012L60.74 23.228a1.68 1.68 0 01.015 2.996L35.417 39.301a5.059 5.059 0 01-4.694-.029L.893 23.41a1.68 1.68 0 01.042-2.99z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M32.5 34.151v4.18a1.132 1.132 0 01-1.566 1.045l-.1-.047v-7.525A2.49 2.49 0 0132.5 34.15zM.833 15.908l30 15.896v7.525l-30-15.899v-.019l-.115-.066A1.565 1.565 0 010 22.029v-7.91l.833 1.789z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_MAIN, fillRule: "nonzero", d: "M.935 12.945L25.963.527a5.059 5.059 0 014.52.012L60.74 15.753a1.68 1.68 0 01.015 2.997L35.417 31.827a5.059 5.059 0 01-4.694-.03L.893 15.937a1.68 1.68 0 01.042-2.991z" })] }) }), (0, jsx_runtime_1.jsxs)("g", { transform: "translate(9.167 19.932)", children: [(0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M53.333 17.441H61.666V24.915999999999997H53.333z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARKER, d: "M.935 20.42L25.963 8.001a5.059 5.059 0 014.52.012L60.74 23.228a1.68 1.68 0 01.015 2.996L35.417 39.301a5.059 5.059 0 01-4.694-.029L.893 23.41a1.68 1.68 0 01.042-2.99z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M32.5 34.151v4.18a1.132 1.132 0 01-1.566 1.045l-.1-.047v-7.525A2.49 2.49 0 0132.5 34.15zM.833 15.908l30 15.896v7.525l-30-15.899v-.019l-.115-.066A1.565 1.565 0 010 22.029v-7.91l.833 1.789z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_MAIN, fillRule: "nonzero", d: "M.935 12.945L25.963.527a5.059 5.059 0 014.52.012L60.74 15.753a1.68 1.68 0 01.015 2.997L35.417 31.827a5.059 5.059 0 01-4.694-.03L.893 15.937a1.68 1.68 0 01.042-2.991z" })] })] }) }));
}
exports.default = (0, react_1.memo)(PlanPremiumIcon);
