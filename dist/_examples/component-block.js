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
exports.ComponentBlock = ComponentBlock;
exports.ComponentContainer = ComponentContainer;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Container_1 = __importDefault(require("@mui/material/Container"));
var styles_1 = require("../theme/styles");
function ComponentBlock(_a) {
    var title = _a.title, sx = _a.sx, children = _a.children, other = __rest(_a, ["title", "sx", "children"]);
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, __assign({ sx: __assign({ px: 3, py: 6, gap: 2, width: 1, flexWrap: 'wrap', borderRadius: 1.5, position: 'relative', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.04); }, boxShadow: function (theme) { return "0 0 0 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16)); } }, sx) }, other, { children: [title && ((0, jsx_runtime_1.jsx)(Box_1.default, { component: "span", sx: {
                    px: 1,
                    top: 0,
                    ml: 2.5,
                    left: 0,
                    py: 0.25,
                    borderRadius: 2,
                    position: 'absolute',
                    bgcolor: function (theme) { return theme.vars.palette.background.paper; },
                    transform: 'translateY(-50%)',
                    fontSize: function (theme) { return theme.typography.caption.fontSize; },
                    fontWeight: function (theme) { return theme.typography.fontWeightSemiBold; },
                    border: function (theme) { return "solid 1px ".concat((0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24)); },
                }, children: title })), children] })));
}
// ----------------------------------------------------------------------
function ComponentContainer(_a) {
    var children = _a.children, sx = _a.sx, other = __rest(_a, ["children", "sx"]);
    return ((0, jsx_runtime_1.jsx)(Container_1.default, __assign({ sx: __assign({ mt: 10, mb: 15, gap: 5, display: 'flex', flexDirection: 'column' }, sx) }, other, { children: children })));
}
