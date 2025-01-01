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
exports.FullScreenDialog = FullScreenDialog;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var ahooks_1 = require("ahooks");
var Slide_1 = __importDefault(require("@mui/material/Slide"));
var AppBar_1 = __importDefault(require("@mui/material/AppBar"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Toolbar_1 = __importDefault(require("@mui/material/Toolbar"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
var iconify_1 = require("lib/components/iconify");
// ----------------------------------------------------------------------
var Transition = (0, react_1.forwardRef)(function (props, ref) { return (0, jsx_runtime_1.jsx)(Slide_1.default, __assign({ direction: "up", ref: ref }, props)); });
function FullScreenDialog() {
    var _a = (0, ahooks_1.useBoolean)(), dialog = _a[0], dialogActions = _a[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", color: "error", onClick: dialogActions.setTrue, children: "Full screen dialogs" }), (0, jsx_runtime_1.jsxs)(Dialog_1.default, { fullScreen: true, open: dialog, onClose: dialogActions.setFalse, TransitionComponent: Transition, children: [(0, jsx_runtime_1.jsx)(AppBar_1.default, { position: "relative", color: "default", children: (0, jsx_runtime_1.jsxs)(Toolbar_1.default, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { color: "inherit", edge: "start", onClick: dialogActions.setFalse, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:close-line" }) }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", sx: { flex: 1, ml: 2 }, children: "Sound" }), (0, jsx_runtime_1.jsx)(Button_1.default, { autoFocus: true, color: "inherit", variant: "contained", onClick: dialogActions.setFalse, children: "Save" })] }) }), (0, jsx_runtime_1.jsxs)(Box_1.default, { component: "ul", children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'flex' }, children: (0, jsx_runtime_1.jsx)(ListItemButton_1.default, { children: (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Phone ringtone", secondary: "Titania" }) }) }), (0, jsx_runtime_1.jsx)(Divider_1.default, {}), (0, jsx_runtime_1.jsx)(Box_1.default, { component: "li", sx: { display: 'flex' }, children: (0, jsx_runtime_1.jsx)(ListItemButton_1.default, { children: (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: "Default notification ringtone", secondary: "Tethys" }) }) })] })] })] }));
}
