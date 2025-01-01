'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateOther = AnimateOther;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("@mui/material/styles");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var _mock_1 = require("../../../../_mock");
var styles_2 = require("../../../../theme/styles");
var iconify_1 = require("../../../../components/iconify");
var animate_1 = require("../../../../components/animate");
var svg_path_1 = require("./svg-path");
var buttons_1 = require("./buttons");
var count_up_number_1 = require("./count-up-number");
var component_block_1 = require("../../../component-block");
// ----------------------------------------------------------------------
function AnimateOther() {
    var theme = (0, styles_1.useTheme)();
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 3, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Button Click", sx: { gap: 3 }, children: (0, jsx_runtime_1.jsx)(buttons_1.AnimateButton, {}) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Path", children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: function () { return setCount(count + 1); }, sx: { position: 'absolute', right: 16, top: 16 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:refresh-fill" }) }), (0, jsx_runtime_1.jsx)(svg_path_1.SvgPath, {}, count)] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Path", sx: { flexDirection: 'column' }, children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: function () { return setCount(count + 1); }, sx: { position: 'absolute', right: 16, top: 16 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:refresh-fill" }) }), (0, jsx_runtime_1.jsx)(count_up_number_1.AnimateCountUpNumber, {}, count)] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Logo", sx: { gap: 5 }, children: [(0, jsx_runtime_1.jsx)(animate_1.AnimateLogo1, {}), (0, jsx_runtime_1.jsx)(animate_1.AnimateLogo2, {})] }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Avatar", sx: { gap: 5 }, children: (0, jsx_runtime_1.jsx)(animate_1.AnimateAvatar, { width: 120, slotProps: {
                        avatar: {
                            alt: 'My avatar',
                            src: _mock_1._mock.image.avatar(24),
                        },
                        overlay: {
                            border: 2,
                            spacing: 2,
                        },
                    } }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Border", sx: { gap: 5 }, children: [(0, jsx_runtime_1.jsx)(animate_1.AnimateBorder, { animate: { disableDoubleline: true }, sx: { width: 160, height: 160 } }), (0, jsx_runtime_1.jsx)(animate_1.AnimateBorder, { animate: {
                            width: '4px',
                            color: theme.vars.palette.primary.dark,
                            outline: "135deg, ".concat((0, styles_2.varAlpha)(theme.vars.palette.warning.mainChannel, 0.24), ", ").concat((0, styles_2.varAlpha)(theme.vars.palette.primary.mainChannel, 0.24)),
                        }, sx: { width: 160, height: 160 } })] })] }));
}
