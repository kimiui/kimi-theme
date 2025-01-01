'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDialog = SimpleDialog;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var ahooks_1 = require("ahooks");
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var react_1 = require("react");
var material_1 = require("@mui/material");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
var iconify_1 = require("../../../components/iconify");
// ----------------------------------------------------------------------
var emails = ['username@gmail.com', 'user02@gmail.com'];
function SimpleDialog() {
    var _a = (0, ahooks_1.useBoolean)(), dialog = _a[0], dialogActions = _a[1];
    var _b = (0, react_1.useState)(emails[1]), selectedValue = _b[0], setSelectedValue = _b[1];
    var handleClose = (0, react_1.useCallback)(function (value) {
        dialogActions.setFalse();
        setSelectedValue(value);
    }, [dialogActions]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", onClick: dialogActions.setTrue, children: "Open simple dialog" }), (0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "subtitle1", children: ["Selected: ", selectedValue] }), (0, jsx_runtime_1.jsxs)(Dialog_1.default, { open: dialog, onClose: function () { return handleClose(selectedValue); }, children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { children: "Set backup account" }), (0, jsx_runtime_1.jsx)(material_1.DialogContent, { children: (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "ul", sx: { p: 0 }, children: [emails.map(function (email) { return ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'flex' }, children: (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { onClick: function () { return handleClose(email); }, children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, { sx: { mr: 2, color: 'info.lighter', bgcolor: 'info.darker' }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:user-rounded-bold" }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: email })] }) }, email)); }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'flex' }, children: (0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { autoFocus: true, onClick: function () { return handleClose('addAccount'); }, children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, { sx: { mr: 2 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line" }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Add account" })] }) })] }) })] })] }));
}
