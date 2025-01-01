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
exports.UploadPlaceholder = UploadPlaceholder;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var illustrations_1 = require("lib/assets/illustrations");
// ----------------------------------------------------------------------
function UploadPlaceholder(_a) {
    var other = __rest(_a, []);
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, __assign({ sx: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
        } }, other, { children: [(0, jsx_runtime_1.jsx)(illustrations_1.UploadIllustration, { hideBackground: true, sx: { width: 200 } }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, sx: { textAlign: 'center' }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: { typography: 'h6' }, children: "Drop or select file" }), (0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { typography: 'body2', color: 'text.secondary' }, children: ["Drop files here or click to", (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { mx: 0.5, color: 'primary.main', textDecoration: 'underline' }, children: "browse" }), "through your machine."] })] })] })));
}
