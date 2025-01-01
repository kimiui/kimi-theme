'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateInview = AnimateInview;
var jsx_runtime_1 = require("react/jsx-runtime");
var ahooks_1 = require("ahooks");
var Card_1 = __importDefault(require("@mui/material/Card"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var react_1 = require("react");
var toolbar_1 = require("./toolbar");
var container_1 = require("./container");
var control_panel_1 = require("../control-panel");
// ----------------------------------------------------------------------
function AnimateInview() {
    var _a = (0, ahooks_1.useBoolean)(), text = _a[0], textActions = _a[1];
    var _b = (0, ahooks_1.useBoolean)(), multi = _b[0], multiActions = _b[1];
    var _c = (0, react_1.useState)(0), count = _c[0], setCount = _c[1];
    var _d = (0, react_1.useState)('slideInUp'), selectVariant = _d[0], setSelectVariant = _d[1];
    var handleRefresh = (0, react_1.useCallback)(function () {
        setCount(count + 1);
    }, [count]);
    var handleChangeVariant = (0, react_1.useCallback)(function (event) {
        setCount(count + 1);
        setSelectVariant(event.target.value);
    }, [count]);
    return ((0, jsx_runtime_1.jsxs)(Card_1.default, { sx: { height: 640, display: 'flex' }, children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 2.5, sx: { p: 2.5, display: 'flex', flex: '1 1 auto' }, children: [(0, jsx_runtime_1.jsx)(toolbar_1.Toolbar, { isText: text, isMulti: multi, onChangeText: textActions.toggle, onChangeMulti: multiActions.toggle, onRefresh: handleRefresh }), (0, jsx_runtime_1.jsx)(container_1.ContainerView, { isText: text, isMulti: multi, selectVariant: selectVariant }, count)] }), (0, jsx_runtime_1.jsx)(control_panel_1.ControlPanel, { variantKey: VARIANT_KEYS, selectVariant: selectVariant, onChangeVariant: handleChangeVariant })] }));
}
// ----------------------------------------------------------------------
var VARIANT_KEYS = [
    { type: 'slide in', values: ['slideInUp', 'slideInDown', 'slideInLeft', 'slideInRight'] },
    { type: 'slide out', values: ['slideOutUp', 'slideOutDown', 'slideOutLeft', 'slideOutRight'] },
    { type: 'fade in', values: ['fadeIn', 'fadeInUp', 'fadeInDown', 'fadeInLeft', 'fadeInRight'] },
    {
        type: 'fade out',
        values: ['fadeOut', 'fadeOutUp', 'fadeOutDown', 'fadeOutLeft', 'fadeOutRight'],
    },
    { type: 'zoom in', values: ['zoomIn', 'zoomInUp', 'zoomInDown', 'zoomInLeft', 'zoomInRight'] },
    {
        type: 'zoom out',
        values: ['zoomOut', 'zoomOutUp', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight'],
    },
    {
        type: 'bounce in',
        values: ['bounceIn', 'bounceInUp', 'bounceInDown', 'bounceInLeft', 'bounceInRight'],
    },
    {
        type: 'bounce out',
        values: ['bounceOut', 'bounceOutUp', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight'],
    },
    { type: 'flip in', values: ['flipInX', 'flipInY'] },
    { type: 'flip out', values: ['flipOutX', 'flipOutY'] },
    { type: 'scale in', values: ['scaleInX', 'scaleInY'] },
    { type: 'scale out', values: ['scaleOutX', 'scaleOutY'] },
    { type: 'rotate in', values: ['rotateIn'] },
    { type: 'rotate out', values: ['rotateOut'] },
];
