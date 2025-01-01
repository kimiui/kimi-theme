'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateScroll = AnimateScroll;
var jsx_runtime_1 = require("react/jsx-runtime");
var Card_1 = __importDefault(require("@mui/material/Card"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var react_1 = require("react");
var toolbar_1 = require("./toolbar");
var container_1 = require("./container");
var control_panel_1 = require("../control-panel");
// ----------------------------------------------------------------------
function AnimateScroll() {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    var _b = (0, react_1.useState)('slideInUp'), selectVariant = _b[0], setSelectVariant = _b[1];
    var handleChangeVariant = (0, react_1.useCallback)(function (event) {
        setCount(count + 1);
        setSelectVariant(event.target.value);
    }, [count]);
    return ((0, jsx_runtime_1.jsxs)(Card_1.default, { sx: { height: 640, display: 'flex' }, children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 2.5, sx: { p: 2.5, display: 'flex', flex: '1 1 auto' }, children: [(0, jsx_runtime_1.jsx)(toolbar_1.Toolbar, { onRefresh: function () { return setCount(count + 1); } }), (0, jsx_runtime_1.jsx)(container_1.ContainerView, { selectVariant: selectVariant }, count)] }), (0, jsx_runtime_1.jsx)(control_panel_1.ControlPanel, { variantKey: VARIANT_KEYS, selectVariant: selectVariant, onChangeVariant: handleChangeVariant })] }));
}
// ----------------------------------------------------------------------
var VARIANT_KEYS = [
    { type: 'slide', values: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight'] },
    { type: 'fade', values: ['fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'] },
    { type: 'zoom', values: ['zoomIn', 'zoomInUp', 'zoomInDown', 'zoomInLeft', 'zoomInRight'] },
    {
        type: 'bounce',
        values: ['bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight'],
    },
    { type: 'flip', values: ['flipInX', 'flipInY'] },
    { type: 'scale', values: ['scaleInX', 'scaleInY'] },
    { type: 'rotate', values: ['rotateIn'] },
];
