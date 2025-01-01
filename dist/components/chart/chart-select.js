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
exports.ChartSelect = ChartSelect;
var jsx_runtime_1 = require("react/jsx-runtime");
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var MenuList_1 = __importDefault(require("@mui/material/MenuList"));
var ButtonBase_1 = __importDefault(require("@mui/material/ButtonBase"));
var styles_1 = require("../../theme/styles");
var iconify_1 = require("../../components/iconify");
var custom_popover_1 = require("../custom-popover");
function ChartSelect(_a) {
    var options = _a.options, value = _a.value, onChange = _a.onChange, slotProps = _a.slotProps, other = __rest(_a, ["options", "value", "onChange", "slotProps"]);
    var popover = (0, custom_popover_1.usePopover)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(ButtonBase_1.default, __assign({ onClick: popover.onOpen, sx: __assign({ pr: 1, pl: 1.5, gap: 1.5, height: 34, borderRadius: 1, typography: 'subtitle2', border: function (theme) {
                        return "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24));
                    } }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.button) }, other, { children: [value, (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { width: 16, icon: popover.open ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill' })] })), (0, jsx_runtime_1.jsx)(custom_popover_1.CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, children: (0, jsx_runtime_1.jsx)(MenuList_1.default, { sx: slotProps === null || slotProps === void 0 ? void 0 : slotProps.popover, children: options.map(function (option) { return ((0, jsx_runtime_1.jsx)(MenuItem_1.default, { selected: option === value, onClick: function () {
                            popover.onClose();
                            onChange(option);
                        }, children: option }, option)); }) }) })] }));
}
