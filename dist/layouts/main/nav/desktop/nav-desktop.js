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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavDesktop = NavDesktop;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var nav_section_1 = require("../../../../components/nav-section");
var nav_desktop_list_1 = require("./nav-desktop-list");
// ----------------------------------------------------------------------
function NavDesktop(_a) {
    var data = _a.data, sx = _a.sx;
    return ((0, jsx_runtime_1.jsx)(Stack_1.default, { component: "nav", sx: __assign({ height: 1 }, sx), children: (0, jsx_runtime_1.jsx)(nav_section_1.NavUl, { sx: {
                gap: 5,
                height: 1,
                flexDirection: 'row',
                alignItems: 'center',
            }, children: data.map(function (list) { return ((0, jsx_runtime_1.jsx)(nav_desktop_list_1.NavList, { data: list }, list.title)); }) }) }));
}
