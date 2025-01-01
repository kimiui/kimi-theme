'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleButtons = ToggleButtons;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var ToggleButton_1 = __importDefault(require("@mui/material/ToggleButton"));
var ToggleButtonGroup_1 = __importDefault(require("@mui/material/ToggleButtonGroup"));
var iconify_1 = require("../../../components/iconify");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var COLORS = ['standard', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
var SIZES = ['small', 'medium', 'large'];
// ----------------------------------------------------------------------
function ToggleButtons() {
    var _a = (0, react_1.useState)('left'), alignment = _a[0], setAlignment = _a[1];
    var _b = (0, react_1.useState)(function () { return ['bold', 'italic']; }), formats = _b[0], setFormats = _b[1];
    var _c = (0, react_1.useState)('list'), view = _c[0], setView = _c[1];
    var _d = (0, react_1.useState)(true), selected = _d[0], setSelected = _d[1];
    var handleAlignment = function (event, newAlignment) {
        setAlignment(newAlignment);
    };
    var handleFormat = function (event, newFormats) {
        setFormats(newFormats);
    };
    var handleChange = function (event, nextView) {
        setView(nextView);
    };
    var viewContent = [
        (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "list", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-view-list" }) }, "list"),
        (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "module", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-view-module" }) }, "module"),
        (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "quilt", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-view-quilt" }) }, "quilt"),
    ];
    var alignContent = [
        (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "left", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-format-align-left" }) }, "left"),
        (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "center", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-format-align-center" }) }, "center"),
        (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "right", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-format-align-right" }) }, "right"),
        (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "justify", disabled: true, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-format-align-justify" }) }, "justify"),
    ];
    var formatContent = [
        (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "bold", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-format-bold" }) }, "bold"),
        (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "italic", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-format-italic" }) }, "italic"),
        (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "underlined", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:round-format-underlined" }) }, "underlined"),
        (0, jsx_runtime_1.jsxs)(ToggleButton_1.default, { value: "color", disabled: true, children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:baseline-format-color-fill" }), (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "ic:baseline-arrow-drop-down" })] }, "color"),
    ];
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { rowGap: 5, columnGap: 2.5, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Exclusive selection", children: (0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { value: alignment, exclusive: true, onChange: handleAlignment, children: alignContent }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Multiple selection", children: (0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { value: formats, onChange: handleFormat, children: formatContent }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Sizes", children: [SIZES.map(function (size) { return ((0, jsx_runtime_1.jsx)(ToggleButton_1.default, { size: size, value: "check", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:checkmark-fill" }) }, size)); }), SIZES.map(function (size) { return ((0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { exclusive: true, size: size, value: alignment, onChange: handleAlignment, children: alignContent }, size)); })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Disabled", children: [(0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "check", disabled: true, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:checkmark-fill" }) }), (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "check", disabled: true, selected: true, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:checkmark-fill" }) }), (0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { value: "left", exclusive: true, children: alignContent }), (0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { disabled: true, value: "left", exclusive: true, children: alignContent })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Colors", children: [COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { exclusive: true, color: color, value: view, onChange: handleChange, children: viewContent }, color)); }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { display: 'block', width: 1, height: 16 } }), COLORS.map(function (color) { return ((0, jsx_runtime_1.jsx)(ToggleButton_1.default, { color: color, value: "check", selected: selected, onChange: function () {
                            setSelected(!selected);
                        }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:checkmark-fill" }) }, color)); })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Vertical & Standalone buttons", children: [(0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { orientation: "vertical", value: view, exclusive: true, onChange: handleChange, children: viewContent }), (0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: "check", selected: selected, onChange: function () {
                            setSelected(!selected);
                        }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:checkmark-fill" }) })] })] }));
}
