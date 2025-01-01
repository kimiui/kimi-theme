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
exports.ConfirmDialog = ConfirmDialog;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = __importDefault(require("@mui/material/Button"));
var Dialog_1 = __importDefault(require("@mui/material/Dialog"));
var DialogTitle_1 = __importDefault(require("@mui/material/DialogTitle"));
var DialogActions_1 = __importDefault(require("@mui/material/DialogActions"));
var DialogContent_1 = __importDefault(require("@mui/material/DialogContent"));
// ----------------------------------------------------------------------
function ConfirmDialog(_a) {
    var title = _a.title, content = _a.content, action = _a.action, open = _a.open, onClose = _a.onClose, other = __rest(_a, ["title", "content", "action", "open", "onClose"]);
    return ((0, jsx_runtime_1.jsxs)(Dialog_1.default, __assign({ fullWidth: true, maxWidth: "xs", open: open, onClose: onClose }, other, { children: [(0, jsx_runtime_1.jsx)(DialogTitle_1.default, { sx: { pb: 2 }, children: title }), content && (0, jsx_runtime_1.jsxs)(DialogContent_1.default, { sx: { typography: 'body2' }, children: [" ", content, " "] }), (0, jsx_runtime_1.jsxs)(DialogActions_1.default, { children: [action, (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", color: "inherit", onClick: onClose, children: "Cancel" })] })] })));
}
