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
exports.UploadBox = UploadBox;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var react_dropzone_1 = require("react-dropzone");
var styles_1 = require("../../theme/styles");
var iconify_1 = require("../iconify");
// ----------------------------------------------------------------------
function UploadBox(_a) {
    var placeholder = _a.placeholder, error = _a.error, disabled = _a.disabled, sx = _a.sx, other = __rest(_a, ["placeholder", "error", "disabled", "sx"]);
    var _b = (0, react_dropzone_1.useDropzone)(__assign({ disabled: disabled }, other)), getRootProps = _b.getRootProps, getInputProps = _b.getInputProps, isDragActive = _b.isDragActive, isDragReject = _b.isDragReject;
    var hasError = isDragReject || error;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, __assign({}, getRootProps(), { sx: __assign(__assign(__assign(__assign(__assign({ width: 64, height: 64, flexShrink: 0, display: 'flex', borderRadius: 1, cursor: 'pointer', alignItems: 'center', color: 'text.disabled', justifyContent: 'center', bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08); }, border: function (theme) { return "dashed 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16)); } }, (isDragActive && { opacity: 0.72 })), (disabled && { opacity: 0.48, pointerEvents: 'none' })), (hasError && {
            color: 'error.main',
            borderColor: 'error.main',
            bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.error.mainChannel, 0.08); },
        })), { '&:hover': { opacity: 0.72 } }), sx), children: [(0, jsx_runtime_1.jsx)("input", __assign({}, getInputProps())), placeholder || (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:cloud-upload-fill", width: 28 })] })));
}
