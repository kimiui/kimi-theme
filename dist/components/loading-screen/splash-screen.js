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
exports.SplashScreen = SplashScreen;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Portal_1 = __importDefault(require("@mui/material/Portal"));
var animate_1 = require("lib/components/animate");
function SplashScreen(_a) {
    var _b = _a.portal, portal = _b === void 0 ? true : _b, sx = _a.sx, other = __rest(_a, ["portal", "sx"]);
    var content = ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: { overflow: 'hidden' }, children: (0, jsx_runtime_1.jsx)(Box_1.default, __assign({ sx: __assign({ right: 0, width: 1, bottom: 0, height: 1, zIndex: 9998, display: 'flex', position: 'fixed', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(animate_1.AnimateLogo1, {}) })) }));
    if (portal) {
        return (0, jsx_runtime_1.jsx)(Portal_1.default, { children: content });
    }
    return content;
}
