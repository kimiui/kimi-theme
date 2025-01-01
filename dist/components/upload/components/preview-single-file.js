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
exports.SingleFilePreview = SingleFilePreview;
exports.DeleteButton = DeleteButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var styles_1 = require("../../../theme/styles");
var iconify_1 = require("../../iconify");
// ----------------------------------------------------------------------
function SingleFilePreview(_a) {
    var file = _a.file;
    var fileName = typeof file === 'string' ? file : file.name;
    var previewUrl = typeof file === 'string' ? file : URL.createObjectURL(file);
    return ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
            p: 1,
            top: 0,
            left: 0,
            width: 1,
            height: 1,
            position: 'absolute',
        }, children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "img", alt: fileName, src: previewUrl, sx: {
                width: 1,
                height: 1,
                borderRadius: 1,
                objectFit: 'cover',
            } }) }));
}
// ----------------------------------------------------------------------
function DeleteButton(_a) {
    var sx = _a.sx, other = __rest(_a, ["sx"]);
    return ((0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ size: "small", sx: __assign({ top: 16, right: 16, zIndex: 9, position: 'absolute', color: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.common.whiteChannel, 0.8); }, bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['900Channel'], 0.72); }, '&:hover': {
                bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['900Channel'], 0.48); },
            } }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:close-line", width: 18 }) })));
}
