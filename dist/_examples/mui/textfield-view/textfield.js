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
exports.Textfields = Textfields;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var react_1 = require("react");
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var InputAdornment_1 = __importDefault(require("@mui/material/InputAdornment"));
var iconify_1 = require("../../../components/iconify");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var CURRENCIES = [
    { value: 'USD', label: '$' },
    { value: 'EUR', label: '€' },
    { value: 'BTC', label: '฿' },
    { value: 'JPY', label: '¥' },
];
function Textfields(_a) {
    var variant = _a.variant;
    var _b = (0, react_1.useState)('EUR'), currency = _b[0], setCurrency = _b[1];
    var _c = (0, react_1.useState)({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    }), values = _c[0], setValues = _c[1];
    var handleChangeCurrency = (0, react_1.useCallback)(function (event) {
        setCurrency(event.target.value);
    }, []);
    var handleChange = function (prop) { return function (event) {
        var _a;
        setValues(__assign(__assign({}, values), (_a = {}, _a[prop] = event.target.value, _a)));
    }; };
    var handleShowPassword = (0, react_1.useCallback)(function () {
        setValues(__assign(__assign({}, values), { showPassword: !values.showPassword }));
    }, [values]);
    var handleMouseDownPassword = (0, react_1.useCallback)(function (event) {
        event.preventDefault();
    }, []);
    var blockProps = { gap: 3, flexDirection: 'column' };
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: {
            rowGap: 5,
            columnGap: 3,
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' },
        }, children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "General", sx: blockProps, children: [(0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, label: "Inactive" }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, required: true, fullWidth: true, label: "Activated", defaultValue: "Hello Kimi" }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, type: "password", label: "Password", autoComplete: "current-password" }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, disabled: true, fullWidth: true, label: "Disabled", defaultValue: "Hello Kimi" })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "With icon & adornments", sx: blockProps, children: [(0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, label: "Filled", InputProps: {
                            startAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "start", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:user-rounded-bold", width: 24 }) })),
                        } }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, disabled: true, fullWidth: true, label: "Disabled", defaultValue: "Hello Kimi", InputProps: {
                            startAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "start", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:user-rounded-bold", width: 24 }) })),
                        } }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, label: "With normal TextField", InputProps: { startAdornment: (0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "start", children: "Kg" }) } }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, value: values.weight, onChange: handleChange('weight'), helperText: "Weight", InputProps: { endAdornment: (0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "end", children: "Kg" }) } }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, type: values.showPassword ? 'text' : 'password', value: values.password, onChange: handleChange('password'), label: "Password", InputProps: {
                            startAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "start", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:user-rounded-bold", width: 24 }) })),
                            endAdornment: ((0, jsx_runtime_1.jsx)(InputAdornment_1.default, { position: "end", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: handleShowPassword, onMouseDown: handleMouseDownPassword, edge: "end", children: values.showPassword ? ((0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:eye-bold", width: 24 })) : ((0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:eye-closed-bold", width: 24 })) }) })),
                        } })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "With caption", sx: blockProps, children: [(0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, label: "Error", defaultValue: "Hello Kimi", helperText: "Incorrect entry." }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, error: true, fullWidth: true, label: "Error", defaultValue: "Hello Kimi", helperText: "Incorrect entry." })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Type", sx: blockProps, children: [(0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, type: "password", label: "Password", autoComplete: "current-password" }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, type: "number", label: "Number", defaultValue: 0, InputLabelProps: { shrink: true } }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, label: "Search", type: "search" })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Sizes", sx: blockProps, children: [(0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, label: "Size", size: "small", defaultValue: "Small" }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, label: "Size", defaultValue: "Normal" })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Select", sx: blockProps, children: [(0, jsx_runtime_1.jsx)(TextField_1.default, { id: "select-currency-label-x", variant: variant, select: true, fullWidth: true, label: "Select", value: currency, onChange: handleChangeCurrency, helperText: "Please select your currency", InputLabelProps: { htmlFor: "".concat(variant, "-select-currency-label") }, inputProps: { id: "".concat(variant, "-select-currency-label") }, children: CURRENCIES.map(function (option) { return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { value: option.value, children: option.label }, option.value)); }) }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, select: true, fullWidth: true, size: "small", value: currency, label: "Native select", SelectProps: { native: true }, onChange: handleChangeCurrency, helperText: "Please select your currency", InputLabelProps: { htmlFor: "".concat(variant, "-native-select-currency-label") }, inputProps: { id: "".concat(variant, "-native-select-currency-label") }, children: CURRENCIES.map(function (option) { return ((0, jsx_runtime_1.jsx)("option", { value: option.value, children: option.label }, option.value)); }) })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Multiline", sx: blockProps, children: [(0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, multiline: true, maxRows: 4, label: "Multiline", value: "Controlled" }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, fullWidth: true, multiline: true, placeholder: "Placeholder", label: "Multiline Placeholder" }), (0, jsx_runtime_1.jsx)(TextField_1.default, { variant: variant, rows: 4, fullWidth: true, multiline: true, label: "Multiline", defaultValue: "Default Value" })] })] }));
}
