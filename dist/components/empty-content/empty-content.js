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
exports.EmptyContent = EmptyContent;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_1 = require("../../theme/styles");
function EmptyContent(_a) {
    var sx = _a.sx, imgUrl = _a.imgUrl, action = _a.action, filled = _a.filled, slotProps = _a.slotProps, description = _a.description, _b = _a.title, title = _b === void 0 ? 'No data' : _b, other = __rest(_a, ["sx", "imgUrl", "action", "filled", "slotProps", "description", "title"]);
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, __assign({ flexGrow: 1, alignItems: "center", justifyContent: "center", sx: __assign(__assign({ px: 3, height: 1 }, (filled && {
            borderRadius: 2,
            bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.04); },
            border: function (theme) { return "dashed 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08)); },
        })), sx) }, other, { children: [(0, jsx_runtime_1.jsx)(Box_1.default, { component: "img", alt: "empty content", src: imgUrl !== null && imgUrl !== void 0 ? imgUrl : "/assets/icons/empty/ic-content.svg", sx: __assign({ width: 1, maxWidth: 160 }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.img) }), title && ((0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", component: "span", sx: __assign(__assign({ mt: 1, textAlign: 'center' }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.title), { color: 'text.disabled' }), children: title })), description && ((0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "caption", sx: __assign({ mt: 1, textAlign: 'center', color: 'text.disabled' }, slotProps === null || slotProps === void 0 ? void 0 : slotProps.description), children: description })), action] })));
}
