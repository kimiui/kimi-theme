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
exports.Chart = Chart;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var react_apexcharts_1 = __importDefault(require("react-apexcharts"));
// ----------------------------------------------------------------------
function Chart(_a) {
    var sx = _a.sx, type = _a.type, series = _a.series, height = _a.height, options = _a.options, _b = _a.width, width = _b === void 0 ? '100%' : _b, other = __rest(_a, ["sx", "type", "series", "height", "options", "width"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ dir: "ltr", sx: __assign({ width: width, height: height, flexShrink: 0, borderRadius: 1.5, position: 'relative' }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(react_apexcharts_1.default, { type: type, series: series, options: options, width: "100%", height: "100%" }) })));
}
