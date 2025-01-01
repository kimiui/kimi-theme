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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerView = ContainerView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var framer_motion_1 = require("framer-motion");
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var get_variant_1 = require("../get-variant");
function ContainerView(_a) {
    var open = _a.open, onOpen = _a.onOpen, onClose = _a.onClose, selectVariant = _a.selectVariant, sx = _a.sx, other = __rest(_a, ["open", "onOpen", "onClose", "selectVariant", "sx"]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Stack_1.default, __assign({ sx: __assign({ borderRadius: 2, flex: '1 1 auto', overflow: 'hidden', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.neutral' }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(Button_1.default, { size: "large", variant: "contained", onClick: onOpen, children: "Click me!" }) })), (0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: open && ((0, jsx_runtime_1.jsxs)(Dialog_1.default, { fullWidth: true, maxWidth: "xs", open: open, onClose: onClose, PaperComponent: function (props) { return ((0, jsx_runtime_1.jsx)(framer_motion_1.m.div, __assign({}, (0, get_variant_1.getVariant)(selectVariant, 320), { children: (0, jsx_runtime_1.jsx)(Paper_1.default, __assign({}, props, { children: props.children })) }))); }, children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { id: "alert-dialog-title", children: "Use Google's location service?" }), (0, jsx_runtime_1.jsx)(DialogContent_1.default, { children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running." }), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onClick: onClose, children: "Disagree" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: onClose, autoFocus: true, children: "Agree" })] })] })) })] }));
}
