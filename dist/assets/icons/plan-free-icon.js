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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
// ----------------------------------------------------------------------
function PlanFreeIcon(_a) {
    var sx = _a.sx;
    var theme = (0, styles_1.useTheme)();
    var PRIMARY_MAIN = theme.vars.palette.primary.main;
    var PRIMARY_DARK = theme.vars.palette.primary.dark;
    var PRIMARY_DARKER = theme.vars.palette.primary.darker;
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "svg", sx: __assign({ width: 48, flexShrink: 0, height: 'auto' }, sx), children: (0, jsx_runtime_1.jsxs)("g", { transform: "translate(9.167 20)", children: [(0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M53.333 17.5H61.666V25H53.333z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARKER, d: "M.935 20.489l25.028-12.46a5.044 5.044 0 014.52.012L60.74 23.307a1.69 1.69 0 01.015 3.007l-25.338 13.12a5.044 5.044 0 01-4.694-.028L.893 23.49a1.69 1.69 0 01.042-3.001z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M32.5 34.268v4.193a1.134 1.134 0 01-1.566 1.049l-.1-.047v-7.551a2.498 2.498 0 011.666 2.356zM.833 15.962l30 15.95v7.55l-30-15.952v-.02l-.115-.066A1.571 1.571 0 010 22.104v-7.937l.833 1.795z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_MAIN, fillRule: "nonzero", d: "M.935 12.989L25.963.529a5.044 5.044 0 014.52.012L60.74 15.807a1.69 1.69 0 01.015 3.007l-25.338 13.12a5.044 5.044 0 01-4.694-.028L.893 15.99a1.69 1.69 0 01.042-3.001z" })] }) }));
}
exports.default = (0, react_1.memo)(PlanFreeIcon);
