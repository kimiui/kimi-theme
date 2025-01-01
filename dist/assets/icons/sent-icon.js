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
function SentIcon(_a) {
    var sx = _a.sx;
    var theme = (0, styles_1.useTheme)();
    var PRIMARY_MAIN = theme.vars.palette.primary.main;
    var PRIMARY_DARK = theme.vars.palette.primary.dark;
    return ((0, jsx_runtime_1.jsxs)(base_1.BaseIcon, { sx: __assign({ width: 96, flexShrink: 0, height: 'auto' }, sx), children: [(0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_DARK, d: "M80.476 16.01c-2-2-48.544 35.833-52.269 43.652 0 0-.155 29.249 5.21 30.093 2.904 0 8.228-15.41 9.35-18.755.143-.428.339-.805.612-1.163 11.697-15.343 39.074-51.85 37.097-53.827z" }), (0, jsx_runtime_1.jsx)("path", { fill: PRIMARY_MAIN, d: "M11.167 39.109c-2.51 1.716-2.606 4.943-.319 6.946 3.06 2.68 8.372 7.018 17.359 13.62v-.013c3.724-7.82 50.269-45.652 52.269-43.652 1.977 1.977-25.4 38.484-37.097 53.826-.273.36-.47.736-.613 1.163-1.082 3.227-6.071 17.672-9.03 18.699 6.326-1.22 12.623-6.279 18.458-13.265 7.403 4.887 12.643 8.034 15.829 9.86 2.228 1.279 4.962.804 6.134-1.482 6.764-13.202 14.387-52.323 15.821-72.819.231-3.305-2.447-5.951-5.707-5.355-20.295 3.714-59.214 22.977-73.104 32.472zM33.417 89.755z" }), (0, jsx_runtime_1.jsx)("g", { style: { mixBlendMode: 'overlay' }, fill: "#fff", fillOpacity: "0.04", filter: "url(#filter0_i_1870_134242)", children: (0, jsx_runtime_1.jsx)("path", { d: "M11.167 39.109c-2.51 1.716-2.606 4.943-.319 6.946 3.06 2.68 8.372 7.018 17.359 13.62v-.013c3.724-7.82 50.269-45.652 52.269-43.652 1.977 1.977-25.4 38.484-37.097 53.826-.273.36-.47.736-.613 1.163-1.082 3.227-6.071 17.672-9.03 18.699 6.326-1.22 12.623-6.279 18.458-13.265 7.403 4.887 12.643 8.034 15.829 9.86 2.228 1.279 4.962.804 6.134-1.482 6.764-13.202 14.387-52.323 15.821-72.819.231-3.305-2.447-5.951-5.707-5.355-20.295 3.714-59.214 22.977-73.104 32.472zM33.417 89.755z" }) }), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsxs)("filter", { id: "filter0_i_1870_134242", width: "82.787", height: "85.202", x: "7.205", y: "4.553", colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", children: [(0, jsx_runtime_1.jsx)("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }), (0, jsx_runtime_1.jsx)("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }), (0, jsx_runtime_1.jsx)("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }), (0, jsx_runtime_1.jsx)("feOffset", { dx: "-2", dy: "-2" }), (0, jsx_runtime_1.jsx)("feGaussianBlur", { stdDeviation: "2" }), (0, jsx_runtime_1.jsx)("feComposite", { in2: "hardAlpha", k2: "-1", k3: "1", operator: "arithmetic" }), (0, jsx_runtime_1.jsx)("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" }), (0, jsx_runtime_1.jsx)("feBlend", { in2: "shape", result: "effect1_innerShadow_1870_134242" })] }) })] }));
}
exports.default = (0, react_1.memo)(SentIcon);
