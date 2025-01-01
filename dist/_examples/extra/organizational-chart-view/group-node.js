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
exports.GroupNode = GroupNode;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var MenuList_1 = __importDefault(require("@mui/material/MenuList"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var styles_1 = require("@mui/material/styles");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var label_1 = require("../../../components/label");
var snackbar_1 = require("../../../components/snackbar");
var iconify_1 = require("../../../components/iconify");
var styles_2 = require("../../../theme/styles");
var custom_popover_1 = require("../../../components/custom-popover");
// ----------------------------------------------------------------------
function GroupNode(_a) {
    var sx = _a.sx, name = _a.name, role = _a.role, depth = _a.depth, group = _a.group, avatarUrl = _a.avatarUrl, totalChildren = _a.totalChildren;
    var theme = (0, styles_1.useTheme)();
    var popover = (0, custom_popover_1.usePopover)();
    var onDelete = function () {
        popover.onClose();
        snackbar_1.toast.warning("onDelete: ".concat(name));
    };
    var onEdit = function () {
        popover.onClose();
        snackbar_1.toast.info("onEdit: ".concat(name));
    };
    var styles = function (color) {
        var _a;
        return (_a = {
                color: theme.vars.palette[color].darker,
                bgcolor: (0, styles_2.varAlpha)(theme.vars.palette[color].mainChannel, 0.08),
                border: "solid 1px ".concat((0, styles_2.varAlpha)(theme.vars.palette[color].mainChannel, 0.24))
            },
            _a[styles_2.stylesMode.dark] = { color: theme.vars.palette[color].lighter },
            _a);
    };
    var isLabel = depth === 1;
    var rootGr = group === 'root';
    var productGr = group === 'product design';
    var developmentGr = group === 'development';
    var marketingGr = group === 'marketing';
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: { position: 'relative', display: 'inline-flex' }, alignItems: "center", children: [!isLabel && ((0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: name, src: avatarUrl !== null && avatarUrl !== void 0 ? avatarUrl : '', sx: {
                            mt: -3.5,
                            zIndex: 9,
                            width: 56,
                            height: 56,
                            position: 'absolute',
                            border: "solid 4px ".concat(theme.vars.palette.background.paper),
                        } })), (0, jsx_runtime_1.jsxs)(Card_1.default, { sx: __assign(__assign(__assign(__assign(__assign({ pt: 5, pb: 3, minWidth: 200, borderRadius: 1.5 }, (isLabel && { py: 2 })), (isLabel && productGr && styles('primary'))), (isLabel && developmentGr && styles('info'))), (isLabel && marketingGr && styles('warning'))), sx), children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, { disabled: rootGr, color: popover.open ? 'inherit' : 'default', onClick: popover.onOpen, sx: __assign({ top: 8, right: 8, position: 'absolute' }, (isLabel && { display: 'none' })), children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:more-horizontal-fill" }) }), depth !== 1 && !rootGr && ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: __assign(__assign(__assign({ top: 0, left: 0, width: 1, height: 4, position: 'absolute', borderRadius: 1.5 }, (productGr && { bgcolor: 'primary.light' })), (developmentGr && { bgcolor: 'info.light' })), (marketingGr && { bgcolor: 'warning.light' })) })), (0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: isLabel ? 'subtitle1' : 'subtitle2', noWrap: true, children: [name, isLabel && ((0, jsx_runtime_1.jsx)(label_1.Label, { color: (developmentGr && 'info') || (marketingGr && 'warning') || 'primary', sx: { ml: 1 }, children: totalChildren }))] }), !isLabel && ((0, jsx_runtime_1.jsx)(Typography_1.default, { noWrap: true, component: "div", variant: "caption", sx: { mt: 0.5, color: 'text.secondary' }, children: role }))] })] }), (0, jsx_runtime_1.jsx)(custom_popover_1.CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, slotProps: { arrow: { placement: 'left-center' } }, children: (0, jsx_runtime_1.jsxs)(MenuList_1.default, { children: [(0, jsx_runtime_1.jsxs)(MenuItem_1.default, { onClick: onDelete, sx: { color: 'error.main' }, children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:trash-bin-trash-bold" }), "Delete"] }), (0, jsx_runtime_1.jsxs)(MenuItem_1.default, { onClick: onEdit, children: [(0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:pen-bold" }), "Edit"] })] }) })] }));
}
