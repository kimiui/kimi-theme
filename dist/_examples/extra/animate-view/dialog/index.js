'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimateDialog = AnimateDialog;
var jsx_runtime_1 = require("react/jsx-runtime");
var ahooks_1 = require("ahooks");
var Card_1 = __importDefault(require("@mui/material/Card"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var react_1 = require("react");
var container_1 = require("./container");
var control_panel_1 = require("../control-panel");
// ----------------------------------------------------------------------
function AnimateDialog() {
    var _a = (0, ahooks_1.useBoolean)(), view = _a[0], _b = _a[1], setTrue = _b.setTrue, setFalse = _b.setFalse;
    var _c = (0, react_1.useState)('slideInUp'), selectVariant = _c[0], setSelectVariant = _c[1];
    var handleChangeVariant = (0, react_1.useCallback)(function (event) {
        setSelectVariant(event.target.value);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Card_1.default, { sx: { height: 640, display: 'flex' }, children: [(0, jsx_runtime_1.jsx)(Stack_1.default, { spacing: 2.5, sx: { p: 2.5, display: 'flex', flex: '1 1 auto' }, children: (0, jsx_runtime_1.jsx)(container_1.ContainerView, { open: view, onOpen: setTrue, onClose: setFalse, selectVariant: selectVariant }) }), (0, jsx_runtime_1.jsx)(control_panel_1.ControlPanel, { variantKey: variantKey, selectVariant: selectVariant, onChangeVariant: handleChangeVariant })] }));
}
// ----------------------------------------------------------------------
var variantKey = [
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
