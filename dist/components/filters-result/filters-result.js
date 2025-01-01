"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.chipProps = void 0;
exports.FiltersResult = FiltersResult;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var iconify_1 = require("../../components/iconify");
// ----------------------------------------------------------------------
exports.chipProps = {
    size: 'small',
    variant: 'soft',
};
function FiltersResult(_a) {
    var totalResults = _a.totalResults, onReset = _a.onReset, sx = _a.sx, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: sx, children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { mb: 1.5, typography: 'body2' }, children: [(0, jsx_runtime_1.jsx)("strong", { children: totalResults }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { color: 'text.secondary', ml: 0.25 }, children: "results found" })] }), (0, jsx_runtime_1.jsxs)(Box_1.default, { flexGrow: 1, gap: 1, display: "flex", flexWrap: "wrap", alignItems: "center", children: [children, (0, jsx_runtime_1.jsx)(Button_1.default, { color: "error", onClick: onReset, startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:trash-bin-trash-bold" }), children: "Clear" })] })] }));
}
