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
exports.TransitionsDialog = TransitionsDialog;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ahooks_1 = require("ahooks");
var Slide_1 = __importDefault(require("@mui/material/Slide"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
// ----------------------------------------------------------------------
var Transition = (0, react_1.forwardRef)(function (props, ref) { return (0, jsx_runtime_1.jsx)(Slide_1.default, __assign({ direction: "up", ref: ref }, props)); });
function TransitionsDialog() {
    var _a = (0, ahooks_1.useBoolean)(), dialog = _a[0], dialogActions = _a[1];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", color: "success", onClick: dialogActions.setTrue, children: "Transitions dialogs" }), (0, jsx_runtime_1.jsxs)(Dialog_1.default, { keepMounted: true, open: dialog, TransitionComponent: Transition, onClose: dialogActions.setFalse, children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { children: "Use Google's location service?" }), (0, jsx_runtime_1.jsx)(DialogContent_1.default, { sx: { color: 'text.secondary' }, children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running." }), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", onClick: dialogActions.setFalse, children: "Disagree" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: dialogActions.setFalse, autoFocus: true, children: "Agree" })] })] })] }));
}
