'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertDialog = AlertDialog;
var jsx_runtime_1 = require("react/jsx-runtime");
var ahooks_1 = require("ahooks");
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
// ----------------------------------------------------------------------
function AlertDialog() {
    var _a = (0, ahooks_1.useBoolean)(), dialog = _a[0], dialogActions = _a[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "info", variant: "outlined", onClick: dialogActions.setTrue, children: "Open alert dialog" }), (0, jsx_runtime_1.jsxs)(Dialog_1.default, { open: dialog, onClose: dialogActions.setFalse, children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { children: "Use Google's location service?" }), (0, jsx_runtime_1.jsx)(DialogContent_1.default, { sx: { color: 'text.secondary' }, children: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running." }), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", onClick: dialogActions.setFalse, children: "Disagree" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: dialogActions.setFalse, autoFocus: true, children: "Agree" })] })] })] }));
}
