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
exports.Upload = Upload;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var react_dropzone_1 = require("react-dropzone");
var FormHelperText_1 = __importDefault(require("@mui/material/FormHelperText"));
var styles_1 = require("lib/theme/styles");
var iconify_1 = require("../iconify");
var placeholder_1 = require("./components/placeholder");
var rejection_files_1 = require("./components/rejection-files");
var preview_multi_file_1 = require("./components/preview-multi-file");
var preview_single_file_1 = require("./components/preview-single-file");
// ----------------------------------------------------------------------
function Upload(_a) {
    var sx = _a.sx, value = _a.value, error = _a.error, disabled = _a.disabled, onDelete = _a.onDelete, onUpload = _a.onUpload, onRemove = _a.onRemove, thumbnail = _a.thumbnail, helperText = _a.helperText, onRemoveAll = _a.onRemoveAll, _b = _a.multiple, multiple = _b === void 0 ? false : _b, other = __rest(_a, ["sx", "value", "error", "disabled", "onDelete", "onUpload", "onRemove", "thumbnail", "helperText", "onRemoveAll", "multiple"]);
    var _c = (0, react_dropzone_1.useDropzone)(__assign({ multiple: multiple, disabled: disabled }, other)), getRootProps = _c.getRootProps, getInputProps = _c.getInputProps, isDragActive = _c.isDragActive, isDragReject = _c.isDragReject, fileRejections = _c.fileRejections;
    var isArray = Array.isArray(value) && multiple;
    var hasFile = !isArray && !!value;
    var hasFiles = isArray && !!value.length;
    var hasError = isDragReject || !!error;
    var renderMultiPreview = hasFiles && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(preview_multi_file_1.MultiFilePreview, { files: value, thumbnail: thumbnail, onRemove: onRemove, sx: { my: 3 } }), (onRemoveAll || onUpload) && ((0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", justifyContent: "flex-end", spacing: 1.5, children: [onRemoveAll && ((0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", variant: "outlined", size: "small", onClick: onRemoveAll, children: "Remove all" })), onUpload && ((0, jsx_runtime_1.jsx)(Button_1.default, { size: "small", variant: "contained", onClick: onUpload, startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:cloud-upload-fill" }), children: "Upload" }))] }))] }));
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: __assign({ width: 1, position: 'relative' }, sx), children: [(0, jsx_runtime_1.jsxs)(Box_1.default, __assign({}, getRootProps(), { sx: __assign(__assign(__assign(__assign({ p: 5, outline: 'none', borderRadius: 1, cursor: 'pointer', overflow: 'hidden', position: 'relative', bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08); }, border: function (theme) { return "1px dashed ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.2)); }, transition: function (theme) { return theme.transitions.create(['opacity', 'padding']); }, '&:hover': { opacity: 0.72 } }, (isDragActive && { opacity: 0.72 })), (disabled && { opacity: 0.48, pointerEvents: 'none' })), (hasError && {
                    color: 'error.main',
                    borderColor: 'error.main',
                    bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.error.mainChannel, 0.08); },
                })), (hasFile && { padding: '28% 0' })), children: [(0, jsx_runtime_1.jsx)("input", __assign({}, getInputProps())), hasFile ? (0, jsx_runtime_1.jsx)(preview_single_file_1.SingleFilePreview, { file: value }) : (0, jsx_runtime_1.jsx)(placeholder_1.UploadPlaceholder, {})] })), hasFile && (0, jsx_runtime_1.jsx)(preview_single_file_1.DeleteButton, { onClick: onDelete }), helperText && ((0, jsx_runtime_1.jsx)(FormHelperText_1.default, { error: !!error, sx: { px: 2 }, children: helperText })), (0, jsx_runtime_1.jsx)(rejection_files_1.RejectionFiles, { files: fileRejections }), renderMultiPreview] }));
}
