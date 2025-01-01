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
exports.AnimateAvatar = AnimateAvatar;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Avatar_1 = __importDefault(require("@mui/material/Avatar"));
function AnimateAvatar(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    var sx = _a.sx, slotProps = _a.slotProps, children = _a.children, _o = _a.width, width = _o === void 0 ? 40 : _o, other = __rest(_a, ["sx", "slotProps", "children", "width"]);
    var borderWidth = (_c = (_b = slotProps === null || slotProps === void 0 ? void 0 : slotProps.overlay) === null || _b === void 0 ? void 0 : _b.border) !== null && _c !== void 0 ? _c : 2;
    var spacing = (_e = (_d = slotProps === null || slotProps === void 0 ? void 0 : slotProps.overlay) === null || _d === void 0 ? void 0 : _d.spacing) !== null && _e !== void 0 ? _e : 2;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, __assign({ sx: __assign({ width: width, height: width, flexShrink: 0, borderRadius: '50%', position: 'relative', alignItems: 'center', display: 'inline-flex', justifyContent: 'center' }, sx) }, other, { children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, __assign({ alt: (_g = (_f = slotProps === null || slotProps === void 0 ? void 0 : slotProps.avatar) === null || _f === void 0 ? void 0 : _f.alt) !== null && _g !== void 0 ? _g : 'My avtar', src: (_h = slotProps === null || slotProps === void 0 ? void 0 : slotProps.avatar) === null || _h === void 0 ? void 0 : _h.src, sx: __assign({ zIndex: 1, width: "calc(100% - ".concat(borderWidth * 2 + spacing * 2, "px)"), height: "calc(100% - ".concat(borderWidth * 2 + spacing * 2, "px)") }, (_j = slotProps === null || slotProps === void 0 ? void 0 : slotProps.avatar) === null || _j === void 0 ? void 0 : _j.sx) }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.avatar, { children: children })), (0, jsx_runtime_1.jsx)(Box_1.default, { component: framer_motion_1.m.span, animate: { rotate: 360 }, transition: __assign({ duration: 8, ease: 'linear', repeat: Infinity }, (_k = slotProps === null || slotProps === void 0 ? void 0 : slotProps.animate) === null || _k === void 0 ? void 0 : _k.transition), sx: {
                    top: 0,
                    left: 0,
                    width: 1,
                    height: 1,
                    position: 'absolute',
                    borderRadius: 'inherit',
                    background: (_m = (_l = slotProps === null || slotProps === void 0 ? void 0 : slotProps.overlay) === null || _l === void 0 ? void 0 : _l.color) !== null && _m !== void 0 ? _m : 'conic-gradient(cyan, magenta, yellow, cyan)',
                    mask: 'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)',
                    WebkitMask: 'linear-gradient(#FFF 0 0) content-box, linear-gradient(#FFF 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                    p: "".concat(borderWidth, "px"),
                } })] })));
}
