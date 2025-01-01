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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
// ----------------------------------------------------------------------
var ViewBox = (0, styles_1.styled)('svg')(function (_a) {
    var theme = _a.theme;
    return ({
        width: '100%',
        height: '100%',
        fill: 'none',
        viewBox: '0 0 144 62',
        xmlns: 'http://www.w3.org/2000/svg',
    });
});
function AvatarShape(_a) {
    var sx = _a.sx, other = __rest(_a, ["sx"]);
    return ((0, jsx_runtime_1.jsx)(ViewBox, { sx: __assign({ color: 'background.paper' }, sx), children: (0, jsx_runtime_1.jsx)("path", { d: "m111.34 23.88c-10.62-10.46-18.5-23.88-38.74-23.88h-1.2c-20.24 0-28.12 13.42-38.74 23.88-7.72 9.64-19.44 11.74-32.66 12.12v26h144v-26c-13.22-.38-24.94-2.48-32.66-12.12z", fill: "currentColor", fillRule: "evenodd" }) }));
}
exports.default = (0, react_1.memo)(AvatarShape);
