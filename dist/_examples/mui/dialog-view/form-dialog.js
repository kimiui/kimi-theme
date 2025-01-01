'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormDialog = FormDialog;
var jsx_runtime_1 = require("react/jsx-runtime");
var ahooks_1 = require("ahooks");
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
// ----------------------------------------------------------------------
function FormDialog() {
    var _a = (0, ahooks_1.useBoolean)(), dialog = _a[0], dialogActions = _a[1];
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", color: "warning", onClick: dialogActions.setTrue, children: "Form Dialogs" }), (0, jsx_runtime_1.jsxs)(Dialog_1.default, { open: dialog, onClose: dialogActions.setFalse, children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { children: "Subscribe" }), (0, jsx_runtime_1.jsxs)(DialogContent_1.default, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { sx: { mb: 3 }, children: "To subscribe to this website, please enter your email address here. We will send updates occasionally." }), (0, jsx_runtime_1.jsx)(TextField_1.default, { autoFocus: true, fullWidth: true, type: "email", margin: "dense", variant: "outlined", label: "Email address" })] }), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { onClick: dialogActions.setFalse, variant: "outlined", color: "inherit", children: "Cancel" }), (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: dialogActions.setFalse, variant: "contained", children: "Subscribe" })] })] })] }));
}
