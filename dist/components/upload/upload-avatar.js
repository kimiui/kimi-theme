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
exports.UploadAvatar = UploadAvatar;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var react_1 = require("react");
var react_dropzone_1 = require("react-dropzone");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_1 = require("lib/theme/styles");
var image_1 = require("lib/components/image");
var iconify_1 = require("../iconify");
var rejection_files_1 = require("./components/rejection-files");
// ----------------------------------------------------------------------
function UploadAvatar(_a) {
    var sx = _a.sx, error = _a.error, value = _a.value, disabled = _a.disabled, helperText = _a.helperText, other = __rest(_a, ["sx", "error", "value", "disabled", "helperText"]);
    var _b = (0, react_dropzone_1.useDropzone)(__assign({ multiple: false, disabled: disabled, accept: { 'image/*': [] } }, other)), getRootProps = _b.getRootProps, getInputProps = _b.getInputProps, isDragActive = _b.isDragActive, isDragReject = _b.isDragReject, fileRejections = _b.fileRejections;
    var hasFile = !!value;
    var hasError = isDragReject || !!error;
    var _c = (0, react_1.useState)(''), preview = _c[0], setPreview = _c[1];
    (0, react_1.useEffect)(function () {
        if (typeof value === 'string') {
            setPreview(value);
        }
        else if (value instanceof File) {
            setPreview(URL.createObjectURL(value));
        }
    }, [value]);
    var renderPreview = hasFile && ((0, jsx_runtime_1.jsx)(image_1.Image, { alt: "avatar", src: preview, sx: { width: 1, height: 1, borderRadius: '50%' } }));
    var renderPlaceholder = ((0, jsx_runtime_1.jsxs)(Box_1.default, { className: "upload-placeholder", sx: __assign(__assign({ top: 0, gap: 1, left: 0, width: 1, height: 1, zIndex: 9, display: 'flex', borderRadius: '50%', position: 'absolute', alignItems: 'center', color: 'text.disabled', flexDirection: 'column', justifyContent: 'center', bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08); }, transition: function (theme) {
                return theme.transitions.create(['opacity'], {
                    duration: theme.transitions.duration.shorter,
                });
            }, '&:hover': { opacity: 0.72 } }, (hasError && {
            color: 'error.main',
            bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.error.mainChannel, 0.08); },
        })), (hasFile && {
            zIndex: 9,
            opacity: 0,
            color: 'common.white',
            bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['900Channel'], 0.64); },
        })), children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:camera-add-bold", width: 32 }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "caption", children: hasFile ? 'Update photo' : 'Upload photo' })] }));
    var renderContent = ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: {
            width: 1,
            height: 1,
            overflow: 'hidden',
            borderRadius: '50%',
            position: 'relative',
        }, children: [renderPreview, renderPlaceholder] }));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Box_1.default, __assign({}, getRootProps(), { sx: __assign(__assign(__assign(__assign(__assign({ p: 1, m: 'auto', width: 144, height: 144, cursor: 'pointer', overflow: 'hidden', borderRadius: '50%', border: function (theme) { return "1px dashed ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.2)); } }, (isDragActive && { opacity: 0.72 })), (disabled && { opacity: 0.48, pointerEvents: 'none' })), (hasError && { borderColor: 'error.main' })), (hasFile && __assign(__assign({}, (hasError && {
                    bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.error.mainChannel, 0.08); },
                })), { '&:hover .upload-placeholder': { opacity: 1 } }))), sx), children: [(0, jsx_runtime_1.jsx)("input", __assign({}, getInputProps())), renderContent] })), helperText, (0, jsx_runtime_1.jsx)(rejection_files_1.RejectionFiles, { files: fileRejections })] }));
}
