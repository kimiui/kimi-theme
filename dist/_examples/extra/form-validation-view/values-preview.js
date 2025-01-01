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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValuesPreview = ValuesPreview;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Portal_1 = __importDefault(require("@mui/material/Portal"));
var Collapse_1 = __importDefault(require("@mui/material/Collapse"));
var styles_1 = require("@mui/material/styles");
var react_hook_form_1 = require("react-hook-form");
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var iconify_1 = require("../../../components/iconify");
var styles_2 = require("../../../theme/styles");
var file_thumbnail_1 = require("../../../components/file-thumbnail");
// ----------------------------------------------------------------------
var classes = { item: 'item', key: 'item__key', value: 'item__value' };
function ValuesPreview(_a) {
    var sx = _a.sx;
    var theme = (0, styles_1.useTheme)();
    var _b = (0, react_hook_form_1.useFormContext)(), watch = _b.watch, formState = _b.formState;
    var values = watch();
    var totalValues = Object.keys(values).length;
    var totalErrors = Object.keys(formState.errors).length;
    return ((0, jsx_runtime_1.jsx)(Portal_1.default, { children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: __assign(__assign(__assign({}, (0, styles_2.bgBlur)({
                color: (0, styles_2.varAlpha)(theme.vars.palette.grey['900Channel'], 0.9),
            })), { top: 0, right: 0, height: 1, width: 320, position: 'fixed', overflowY: 'auto', color: 'common.white', zIndex: theme.zIndex.drawer }), sx), children: [(0, jsx_runtime_1.jsx)(Group, { label: "State", sx: { color: 'success.light' }, children: [
                        'submitCount',
                        'isDirty',
                        'isValid',
                        'disabled',
                        'isLoading',
                        'isSubmitted',
                        'isSubmitting',
                        'isValidating',
                        'isSubmitSuccessful',
                    ].map(function (item) { return ((0, jsx_runtime_1.jsxs)("div", { className: classes.item, children: [(0, jsx_runtime_1.jsx)("span", { className: classes.key, children: item }), (0, jsx_runtime_1.jsx)("span", { className: classes.value, children: JSON.stringify(formState[item], null, 2) })] }, item)); }) }), (0, jsx_runtime_1.jsx)(Group, { label: "Values (".concat(totalValues, ")"), sx: { color: 'warning.light' }, children: Object.keys(values).map(function (value) { return ((0, jsx_runtime_1.jsxs)("div", { className: classes.item, children: [(0, jsx_runtime_1.jsx)("span", { className: classes.key, children: value }), (0, jsx_runtime_1.jsx)("span", { className: classes.value, children: parseValue(values, value) })] }, value)); }) }), (0, jsx_runtime_1.jsx)(Group, { label: "Errors (".concat(totalErrors, ")"), sx: { color: 'error.light' }, children: JSON.stringify(Object.keys(formState.errors), null, 2) }), (0, jsx_runtime_1.jsx)(Group, { label: "Dirty fields", sx: { color: 'info.light' }, children: JSON.stringify(Object.keys(formState.dirtyFields), null, 2) }), (0, jsx_runtime_1.jsx)(Group, { label: "Touched fields", sx: { color: 'info.light' }, children: JSON.stringify(Object.keys(formState.touchedFields), null, 2) })] }) }));
}
function Group(_a) {
    var _b;
    var label = _a.label, children = _a.children, sx = _a.sx;
    var _c = (0, react_1.useState)(true), open = _c[0], setOpen = _c[1];
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: __assign({ borderBottom: function (theme) { return "solid 1px ".concat(theme.vars.palette.divider); } }, sx), children: [(0, jsx_runtime_1.jsxs)(ButtonBase_1.default, { onClick: function () { return setOpen(!open); }, sx: __assign({ p: 1.5, typography: 'overline', justifyContent: 'space-between' }, (open && { bgcolor: 'action.hover' })), children: [label, (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 16, icon: "eva:arrow-ios-downward-fill" })] }), (0, jsx_runtime_1.jsx)(Collapse_1.default, { in: open, children: (0, jsx_runtime_1.jsx)(Stack_1.default, { spacing: 0.25, sx: (_b = {
                            p: 1,
                            typography: 'caption'
                        },
                        _b["& .".concat(classes.item)] = {
                            display: 'inline-flex',
                            alignItems: 'flex-start',
                        },
                        _b["& .".concat(classes.key)] = {
                            px: 0.5,
                            color: 'common.white',
                            bgcolor: function (theme) { return (0, styles_2.varAlpha)(theme.vars.palette.common.blackChannel, 0.4); },
                        },
                        _b["& .".concat(classes.value)] = {
                            flex: '1 1 auto',
                            textAlign: 'right',
                            bgcolor: function (theme) { return (0, styles_2.varAlpha)(theme.vars.palette.common.blackChannel, 0.2); },
                        },
                        _b), children: children }) })] }));
}
// ----------------------------------------------------------------------
function parseValue(values, value) {
    if (value === 'singleUpload') {
        return JSON.stringify(values.singleUpload && (0, file_thumbnail_1.fileData)(values.singleUpload), null, 2);
    }
    if (value === 'multiUpload') {
        return JSON.stringify(values.multiUpload.map(function (file) { return (0, file_thumbnail_1.fileData)(file); }), null, 2);
    }
    return JSON.stringify(values[value], null, 2) || '---';
}
