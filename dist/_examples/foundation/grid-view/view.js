'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridView = GridView;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Grid2_1 = __importDefault(require("@mui/material/Grid2"));
var Radio_1 = __importDefault(require("@mui/material/Radio"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var styles_1 = require("@mui/material/styles");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var RadioGroup_1 = __importDefault(require("@mui/material/RadioGroup"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var paths_1 = require("lib/routes/paths");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
var LABELS = ['1col', '2col', '3col', '4col', '6col', '12col'];
// ----------------------------------------------------------------------
function GridView() {
    var theme = (0, styles_1.useTheme)();
    var _a = (0, react_1.useState)(2), spacing = _a[0], setSpacing = _a[1];
    var _b = (0, react_1.useState)(3), column = _b[0], setColumn = _b[1];
    var handleChangeSpacing = function (event) {
        setSpacing(Number(event.target.value));
    };
    var handleChangeColumn = function (event) {
        setColumn(Number(event.target.value));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Grid", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Grid' }] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Spacing", sx: { flexDirection: 'column', alignItems: 'unset' }, children: [(0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "body2", sx: { mb: 3, textAlign: 'center' }, children: ["Spacing: ", (0, jsx_runtime_1.jsx)("strong", { children: theme.spacing(Number(spacing)) })] }), (0, jsx_runtime_1.jsx)(Grid2_1.default, { container: true, spacing: spacing, children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (value) { return ((0, jsx_runtime_1.jsx)(Grid2_1.default, { size: 1, children: (0, jsx_runtime_1.jsx)(Paper_1.default, { sx: { height: 80, boxShadow: theme.shadows[8] } }) }, value)); }) }), (0, jsx_runtime_1.jsx)(RadioGroup_1.default, { row: true, name: "spacing", value: spacing.toString(), onChange: handleChangeSpacing, sx: { mt: 3, display: 'flex', justifyContent: 'center' }, children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function (value) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: value.toString(), label: value.toString(), control: (0, jsx_runtime_1.jsx)(Radio_1.default, {}) }, value)); }) })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Column", sx: { flexDirection: 'column', alignItems: 'unset' }, children: [(0, jsx_runtime_1.jsx)(Grid2_1.default, { container: true, spacing: 3, children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (value) { return ((0, jsx_runtime_1.jsx)(Grid2_1.default, { size: column, children: (0, jsx_runtime_1.jsxs)(Paper_1.default, { sx: {
                                            py: 3,
                                            textAlign: 'center',
                                            boxShadow: theme.shadows[8],
                                        }, children: ["xs = ", column] }) }, value)); }) }), (0, jsx_runtime_1.jsx)(RadioGroup_1.default, { row: true, name: "column", value: column.toString(), onChange: handleChangeColumn, sx: { mt: 3, display: 'flex', justifyContent: 'center' }, children: [12, 6, 4, 3, 2, 1].map(function (value, index) { return ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { value: value.toString(), label: LABELS[index], control: (0, jsx_runtime_1.jsx)(Radio_1.default, {}) }, value)); }) })] })] })] }));
}
