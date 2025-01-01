"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonVariants = ButtonVariants;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var LoadingButton_1 = __importDefault(require("@mui/lab/LoadingButton"));
var Button_1 = __importStar(require("@mui/material/Button"));
var iconify_1 = require("../../../components/iconify");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var COLORS = ['inherit', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
var SIZES = ['small', 'medium', 'large'];
function ButtonVariants(_a) {
    var _b;
    var _c = _a.variant, variant = _c === void 0 ? 'text' : _c;
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: (_b = {
                rowGap: 5,
                columnGap: 3,
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }
            },
            _b["& .".concat(Button_1.buttonClasses.root)] = { textTransform: 'capitalize' },
            _b), children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Base", sx: { gap: 1 }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: variant, color: "inherit", children: "Default" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: variant, color: "primary", children: "Primary" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: variant, color: "secondary", children: "Secondary" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: variant, color: "primary", disabled: true, children: "Disabled" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: variant, children: "Link" })] }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Colors", sx: { gap: 1 }, children: COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(Button_1.default, { variant: variant, color: color, children: color === 'inherit' ? 'default' : color }, color)); }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "With icon & loading", sx: { gap: 1 }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "error", variant: variant, startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }), children: "Icon Left" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: variant, color: "error", endIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }), children: "Icon Right" }), (0, jsx_runtime_1.jsx)(LoadingButton_1.default, { loading: true, variant: variant, children: "Submit" }), (0, jsx_runtime_1.jsx)(LoadingButton_1.default, { loading: true, loadingIndicator: "Loading...", variant: variant, children: "Fetch data" }), (0, jsx_runtime_1.jsx)(LoadingButton_1.default, { loading: true, size: "large", loadingPosition: "start", startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }), variant: variant, children: "Start" }), (0, jsx_runtime_1.jsx)(LoadingButton_1.default, { loading: true, size: "large", loadingPosition: "end", endIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }), variant: variant, children: "End" })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Sizes", sx: { gap: 1 }, children: [SIZES.map(function (size) { return ((0, jsx_runtime_1.jsx)(Button_1.default, { variant: variant, color: "info", size: size, children: size }, size)); }), SIZES.map(function (size) { return ((0, jsx_runtime_1.jsx)(LoadingButton_1.default, { loading: true, size: size, loadingPosition: "start", startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }), variant: variant, children: size }, size)); }), SIZES.map(function (size) { return ((0, jsx_runtime_1.jsx)(LoadingButton_1.default, { loading: true, size: size, loadingPosition: "end", endIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-access-alarm" }), variant: variant, children: size }, size)); })] })] }));
}
