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
exports.StandardNode = StandardNode;
var jsx_runtime_1 = require("react/jsx-runtime");
var Card_1 = __importDefault(require("@mui/material/Card"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var MenuList_1 = __importDefault(require("@mui/material/MenuList"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var snackbar_1 = require("lib/components/snackbar");
var iconify_1 = require("lib/components/iconify");
var custom_popover_1 = require("lib/components/custom-popover");
// ----------------------------------------------------------------------
function StandardNode(_a) {
    var name = _a.name, avatarUrl = _a.avatarUrl, role = _a.role, sx = _a.sx;
    var popover = (0, custom_popover_1.usePopover)();
    var onDelete = function () {
        popover.onClose();
        snackbar_1.toast.warning("onDelete: ".concat(name));
    };
    var onEdit = function () {
        popover.onClose();
        snackbar_1.toast.info("onEdit: ".concat(name));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Card_1.default, { sx: __assign({ p: 2, minWidth: 200, borderRadius: 1.5, textAlign: 'left', position: 'relative', display: 'inline-flex', flexDirection: 'column' }, sx), children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { color: popover.open ? 'inherit' : 'default', onClick: popover.onOpen, sx: { position: 'absolute', top: 8, right: 8 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:more-horizontal-fill" }) }), (0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: name, src: avatarUrl, sx: { mr: 2, mb: 2, width: 48, height: 48 } }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", noWrap: true, sx: { mb: 0.5 }, children: name }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "caption", component: "div", noWrap: true, sx: { color: 'text.secondary' }, children: role })] }), (0, jsx_runtime_1.jsx)(custom_popover_1.CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, slotProps: { arrow: { placement: 'left-center' } }, children: (0, jsx_runtime_1.jsxs)(MenuList_1.default, { children: [(0, jsx_runtime_1.jsxs)(MenuItem_1.default, { onClick: onDelete, sx: { color: 'error.main' }, children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:trash-bin-trash-bold" }), "Delete"] }), (0, jsx_runtime_1.jsxs)(MenuItem_1.default, { onClick: onEdit, children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:pen-bold" }), "Edit"] })] }) })] }));
}
