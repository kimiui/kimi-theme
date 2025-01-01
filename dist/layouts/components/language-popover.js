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
exports.LanguagePopover = LanguagePopover;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var MenuList_1 = __importDefault(require("@mui/material/MenuList"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var locales_1 = require("lib/locales");
var animate_1 = require("lib/components/animate");
var iconify_1 = require("lib/components/iconify");
var custom_popover_1 = require("lib/components/custom-popover");
function LanguagePopover(_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, sx = _a.sx, other = __rest(_a, ["data", "sx"]);
    var popover = (0, custom_popover_1.usePopover)();
    var _c = (0, locales_1.useTranslate)(), onChangeLang = _c.onChangeLang, currentLang = _c.currentLang;
    var handleChangeLang = (0, react_1.useCallback)(function (newLang) {
        onChangeLang(newLang);
        popover.onClose();
    }, [onChangeLang, popover]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (0, animate_1.varHover)(1.05), onClick: popover.onOpen, sx: __assign(__assign({ p: 0, width: 40, height: 40 }, (popover.open && { bgcolor: 'action.selected' })), sx) }, other, { children: (0, jsx_runtime_1.jsx)(iconify_1.FlagIcon, { code: currentLang.countryCode }) })), (0, jsx_runtime_1.jsx)(custom_popover_1.CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, children: (0, jsx_runtime_1.jsx)(MenuList_1.default, { sx: { width: 160, minHeight: 72 }, children: data === null || data === void 0 ? void 0 : data.map(function (option) { return ((0, jsx_runtime_1.jsxs)(MenuItem_1.default, { selected: option.value === currentLang.value, onClick: function () { return handleChangeLang(option.value); }, children: [(0, jsx_runtime_1.jsx)(iconify_1.FlagIcon, { code: option.countryCode }), option.label] }, option.value)); }) }) })] }));
}
