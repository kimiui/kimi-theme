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
exports.DownloadButton = DownloadButton;
exports.RemoveButton = RemoveButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var styles_1 = require("lib/theme/styles");
var iconify_1 = require("../iconify");
// ----------------------------------------------------------------------
function DownloadButton(_a) {
    var sx = _a.sx, other = __rest(_a, ["sx"]);
    return ((0, jsx_runtime_1.jsx)(ButtonBase_1.default, __assign({ sx: __assign({ p: 0, top: 0, right: 0, width: 1, height: 1, zIndex: 9, opacity: 0, position: 'absolute', color: 'common.white', borderRadius: 'inherit', transition: function (theme) { return theme.transitions.create(['opacity']); }, '&:hover': function (theme) { return (__assign(__assign({}, (0, styles_1.bgBlur)({
                color: (0, styles_1.varAlpha)(theme.vars.palette.grey['900Channel'], 0.64),
            })), { opacity: 1 })); } }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrow-circle-down-fill", width: 24 }) })));
}
// ----------------------------------------------------------------------
function RemoveButton(_a) {
    var sx = _a.sx, other = __rest(_a, ["sx"]);
    return ((0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ size: "small", sx: __assign({ p: 0.35, top: 4, right: 4, position: 'absolute', color: 'common.white', bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['900Channel'], 0.48); }, '&:hover': {
                bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['900Channel'], 0.72); },
            } }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:close-line", width: 12 }) })));
}
