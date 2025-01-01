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
exports.LoadingScreen = LoadingScreen;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Portal_1 = __importDefault(require("@mui/material/Portal"));
var LinearProgress_1 = __importDefault(require("@mui/material/LinearProgress"));
function LoadingScreen(_a) {
    var portal = _a.portal, sx = _a.sx, other = __rest(_a, ["portal", "sx"]);
    var content = ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ sx: __assign({ px: 5, width: 1, flexGrow: 1, minHeight: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(LinearProgress_1.default, { color: "inherit", sx: { width: 1, maxWidth: 360 } }) })));
    if (portal) {
        return (0, jsx_runtime_1.jsx)(Portal_1.default, { children: content });
    }
    return content;
}
