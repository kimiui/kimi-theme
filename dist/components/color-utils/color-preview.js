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
exports.ColorPreview = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var styles_1 = require("../../theme/styles");
// ----------------------------------------------------------------------
exports.ColorPreview = (0, react_1.forwardRef)(function (_a, ref) {
    var colors = _a.colors, _b = _a.limit, limit = _b === void 0 ? 3 : _b, sx = _a.sx, other = __rest(_a, ["colors", "limit", "sx"]);
    var colorsRange = colors.slice(0, limit);
    var restColors = colors.length - limit;
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, __assign({ ref: ref, sx: __assign({ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }, sx) }, other, { children: [colorsRange.map(function (color, index) { return ((0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                    ml: -0.75,
                    width: 16,
                    height: 16,
                    bgcolor: color,
                    borderRadius: '50%',
                    border: function (theme) { return "solid 2px ".concat(theme.vars.palette.background.paper); },
                    boxShadow: function (theme) {
                        return "inset -1px 1px 2px ".concat((0, styles_1.varAlpha)(theme.vars.palette.common.blackChannel, 0.24));
                    },
                } }, color + index)); }), colors.length > limit && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: { typography: 'subtitle2' }, children: "+".concat(restColors) }))] })));
});
