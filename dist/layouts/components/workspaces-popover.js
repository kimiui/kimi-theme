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
exports.WorkspacesPopover = WorkspacesPopover;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var react_1 = require("react");
var MenuList_1 = __importDefault(require("@mui/material/MenuList"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var label_1 = require("../../components/label");
var iconify_1 = require("../../components/iconify");
var custom_popover_1 = require("../../components/custom-popover");
function WorkspacesPopover(_a) {
    var _b, _c, _d;
    var _e = _a.data, data = _e === void 0 ? [] : _e, sx = _a.sx, other = __rest(_a, ["data", "sx"]);
    var popover = (0, custom_popover_1.usePopover)();
    var mediaQuery = 'sm';
    var _f = (0, react_1.useState)(data[0]), workspace = _f[0], setWorkspace = _f[1];
    var handleChangeWorkspace = (0, react_1.useCallback)(function (newValue) {
        setWorkspace(newValue);
        popover.onClose();
    }, [popover]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ButtonBase_1.default, __assign({ disableRipple: true, onClick: popover.onOpen, sx: __assign({ py: 0.5, gap: (_b = { xs: 0.5 }, _b[mediaQuery] = 1, _b) }, sx) }, other, { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "img", alt: workspace === null || workspace === void 0 ? void 0 : workspace.name, src: workspace === null || workspace === void 0 ? void 0 : workspace.logo, sx: { width: 24, height: 24, borderRadius: '50%' } }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: {
                            typography: 'subtitle2',
                            display: (_c = { xs: 'none' }, _c[mediaQuery] = 'inline-flex', _c),
                        }, children: workspace === null || workspace === void 0 ? void 0 : workspace.name }), (0, jsx_runtime_1.jsx)(label_1.Label, { color: (workspace === null || workspace === void 0 ? void 0 : workspace.plan) === 'Free' ? 'default' : 'info', sx: {
                            height: 22,
                            display: (_d = { xs: 'none' }, _d[mediaQuery] = 'inline-flex', _d),
                        }, children: workspace === null || workspace === void 0 ? void 0 : workspace.plan }), (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 16, icon: "carbon:chevron-sort", sx: { color: 'text.disabled' } })] })), (0, jsx_runtime_1.jsx)(custom_popover_1.CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, slotProps: { arrow: { placement: 'top-left' } }, children: (0, jsx_runtime_1.jsx)(MenuList_1.default, { sx: { width: 240 }, children: data.map(function (option) { return ((0, jsx_runtime_1.jsxs)(MenuItem_1.default, { selected: option.id === (workspace === null || workspace === void 0 ? void 0 : workspace.id), onClick: function () { return handleChangeWorkspace(option); }, sx: { height: 48 }, children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: option.name, src: option.logo, sx: { width: 24, height: 24 } }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { flexGrow: 1 }, children: option.name }), (0, jsx_runtime_1.jsx)(label_1.Label, { color: option.plan === 'Free' ? 'default' : 'info', children: option.plan })] }, option.id)); }) }) })] }));
}
