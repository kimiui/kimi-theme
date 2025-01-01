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
exports.PlayButton = PlayButton;
exports.IndexLabel = IndexLabel;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var iconify_1 = require("../../../components/iconify");
// ----------------------------------------------------------------------
function PlayButton(_a) {
    var sx = _a.sx, isPlaying = _a.isPlaying, other = __rest(_a, ["sx", "isPlaying"]);
    return ((0, jsx_runtime_1.jsx)(Button_1.default, __assign({ size: "small", color: isPlaying ? 'error' : 'primary', variant: "contained", startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: isPlaying ? 'solar:stop-circle-bold' : 'solar:play-circle-bold' }), sx: __assign({ top: 24, right: 24, position: 'absolute' }, sx) }, other, { children: isPlaying ? 'Stop' : 'Play' })));
}
// ----------------------------------------------------------------------
function IndexLabel(_a) {
    var index = _a.index, sx = _a.sx, other = __rest(_a, ["index", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, __assign({ sx: __assign({ top: 16, left: 16, width: 24, zIndex: 9, height: 24, display: 'flex', color: 'grey.800', borderRadius: '50%', position: 'absolute', alignItems: 'center', bgcolor: 'common.white', typography: 'subtitle2', justifyContent: 'center' }, sx) }, other, { children: index })));
}
