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
exports.ContactsPopover = ContactsPopover;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Badge_1 = __importDefault(require("@mui/material/Badge"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var MenuItem_1 = __importDefault(require("@mui/material/MenuItem"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var format_time_1 = require("lib/utils/format-time");
var animate_1 = require("lib/components/animate");
var scrollbar_1 = require("lib/components/scrollbar");
var custom_popover_1 = require("lib/components/custom-popover");
function ContactsPopover(_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, sx = _a.sx, other = __rest(_a, ["data", "sx"]);
    var popover = (0, custom_popover_1.usePopover)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (0, animate_1.varHover)(1.05), onClick: popover.onOpen, sx: __assign(__assign({}, (popover.open && { bgcolor: function (theme) { return theme.vars.palette.action.selected; } })), sx) }, other, { children: (0, jsx_runtime_1.jsxs)(SvgIcon_1.default, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "15", cy: "6", r: "3", fill: "currentColor", opacity: "0.4" }), (0, jsx_runtime_1.jsx)("ellipse", { cx: "16", cy: "17", fill: "currentColor", opacity: "0.4", rx: "5", ry: "3" }), (0, jsx_runtime_1.jsx)("circle", { cx: "9.001", cy: "6", r: "4", fill: "currentColor" }), (0, jsx_runtime_1.jsx)("ellipse", { cx: "9.001", cy: "17.001", fill: "currentColor", rx: "7", ry: "4" })] }) })), (0, jsx_runtime_1.jsxs)(custom_popover_1.CustomPopover, { open: popover.open, anchorEl: popover.anchorEl, onClose: popover.onClose, slotProps: {
                    arrow: { offset: 20 },
                }, children: [(0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "h6", sx: { p: 1.5 }, children: ["Contacts ", (0, jsx_runtime_1.jsxs)("span", { children: ["(", data.length, ")"] })] }), (0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { sx: { height: 320, width: 320 }, children: data.map(function (contact) { return ((0, jsx_runtime_1.jsxs)(MenuItem_1.default, { sx: { p: 1 }, children: [(0, jsx_runtime_1.jsx)(Badge_1.default, { variant: contact.status, anchorOrigin: { vertical: 'bottom', horizontal: 'right' }, sx: { mr: 2 }, children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { alt: contact.name, src: contact.avatarUrl }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { primary: contact.name, secondary: contact.status === 'offline' ? (0, format_time_1.fToNow)(contact.lastActivity) : '', primaryTypographyProps: { typography: 'subtitle2' }, secondaryTypographyProps: { typography: 'caption', color: 'text.disabled' } })] }, contact.id)); }) })] })] }));
}
