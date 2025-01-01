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
exports.AccountButton = AccountButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var NoSsr_1 = __importDefault(require("@mui/material/NoSsr"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
var SvgIcon_1 = __importDefault(require("@mui/material/SvgIcon"));
var styles_1 = require("@mui/material/styles");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var animate_1 = require("../../components/animate");
function AccountButton(_a) {
    var open = _a.open, photoURL = _a.photoURL, displayName = _a.displayName, sx = _a.sx, other = __rest(_a, ["open", "photoURL", "displayName", "sx"]);
    var theme = (0, styles_1.useTheme)();
    var renderFallback = ((0, jsx_runtime_1.jsx)(Avatar_1.default, { sx: {
            width: 40,
            height: 40,
            border: "solid 2px ".concat(theme.vars.palette.background.default),
        }, children: (0, jsx_runtime_1.jsxs)(SvgIcon_1.default, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "6", r: "4", fill: "currentColor" }), (0, jsx_runtime_1.jsx)("path", { fill: "currentColor", d: "M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5", opacity: "0.5" })] }) }));
    return ((0, jsx_runtime_1.jsx)(IconButton_1.default, __assign({ component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (0, animate_1.varHover)(1.05), sx: __assign({ p: 0 }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(NoSsr_1.default, { fallback: renderFallback, children: (0, jsx_runtime_1.jsx)(animate_1.AnimateAvatar, { slotProps: {
                    avatar: { src: photoURL, alt: displayName },
                    overlay: {
                        border: 1,
                        spacing: 2,
                        color: "conic-gradient(".concat(theme.vars.palette.primary.main, ", ").concat(theme.vars.palette.warning.main, ", ").concat(theme.vars.palette.primary.main, ")"),
                    },
                }, children: displayName === null || displayName === void 0 ? void 0 : displayName.charAt(0).toUpperCase() }) }) })));
}
