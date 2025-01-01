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
exports.MenuTags = MenuTags;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var routes_react_1 = require("routes-react");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
// ----------------------------------------------------------------------
function MenuTags(_a) {
    var tags = _a.tags, other = __rest(_a, ["tags"]);
    return ((0, jsx_runtime_1.jsxs)(Box_1.default, __assign({}, other, { children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "caption", sx: { mr: 0.5, fontWeight: 'fontWeightBold' }, children: "Hot products:" }), tags.map(function (tag, index) { return ((0, jsx_runtime_1.jsx)(Link_1.default, { component: routes_react_1.RouterLink, href: tag.path, variant: "caption", sx: {
                    color: 'text.secondary',
                    transition: function (theme) { return theme.transitions.create(['color']); },
                    '&:hover': { color: 'text.primary' },
                }, children: index === 0 ? tag.title : ", ".concat(tag.title, " ") }, tag.title)); })] })));
}
