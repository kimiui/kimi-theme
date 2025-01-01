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
exports.NavHelper = NavHelper;
exports.UpgradeBlock = UpgradeBlock;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_1 = require("@mui/material/styles");
var styles_2 = require("lib/theme/styles");
// ----------------------------------------------------------------------
function NavHelper(_a) {
    var sx = _a.sx, other = __rest(_a, ["sx"]);
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, __assign({ sx: __assign({ px: 2, py: 5, textAlign: 'center' }, sx) }, other, { children: (0, jsx_runtime_1.jsx)(Stack_1.default, { alignItems: "center", children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 0.5, sx: { mb: 2, mt: 1.5, width: 1, maxWidth: 150 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", children: "Need help, Please check our docs" }), (0, jsx_runtime_1.jsx)(Button_1.default, { href: "https://docs.kimistores.com", target: "_blank", variant: "contained", size: "small", color: "primary", children: "Document" })] }) }) })));
}
// ----------------------------------------------------------------------
function UpgradeBlock(_a) {
    var sx = _a.sx, other = __rest(_a, ["sx"]);
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, __assign({ sx: __assign(__assign(__assign({}, (0, styles_2.bgGradient)({
            color: "135deg, ".concat((0, styles_1.alpha)('#F7BB95', 0.92), ", ").concat((0, styles_1.alpha)('#5B2FF3', 0.92)),
            imgUrl: "/assets/background/background-7.webp",
        })), { px: 3, py: 4, borderRadius: 2, position: 'relative' }), sx) }, other, { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                    top: 0,
                    left: 0,
                    width: 1,
                    height: 1,
                    borderRadius: 2,
                    position: 'absolute',
                    border: function (theme) { return "solid 3px ".concat((0, styles_2.varAlpha)(theme.vars.palette.common.whiteChannel, 0.16)); },
                } }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: framer_motion_1.m.img, animate: { y: [12, -12, 12] }, transition: {
                    duration: 8,
                    ease: 'linear',
                    repeat: Infinity,
                    repeatDelay: 0,
                }, alt: "Small Rocket", src: "/assets/illustrations/illustration-rocket-small.webp", sx: { right: 0, width: 112, height: 112, position: 'absolute' } }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { alignItems: "flex-start", sx: { position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { typography: 'h5', color: 'common.white' }, children: "35% OFF" }), (0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: {
                            mb: 2,
                            mt: 0.5,
                            color: 'common.white',
                            typography: 'subtitle2',
                        }, children: "Power up Productivity!" }), (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", size: "small", color: "warning", children: "Upgrade to Pro" })] })] })));
}
