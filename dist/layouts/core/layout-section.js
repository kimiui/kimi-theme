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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutSection = LayoutSection;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var GlobalStyles_1 = __importDefault(require("@mui/material/GlobalStyles"));
var classes_1 = require("../classes");
function LayoutSection(_a) {
    var sx = _a.sx, cssVars = _a.cssVars, children = _a.children, footerSection = _a.footerSection, headerSection = _a.headerSection, sidebarSection = _a.sidebarSection;
    var inputGlobalStyles = ((0, jsx_runtime_1.jsx)(GlobalStyles_1.default, { styles: {
            body: __assign({ '--layout-nav-zIndex': 1101, '--layout-nav-mobile-width': '320px', '--layout-header-blur': '8px', '--layout-header-zIndex': 1100, '--layout-header-mobile-height': '64px', '--layout-header-desktop-height': '72px' }, cssVars),
        } }));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [inputGlobalStyles, (0, jsx_runtime_1.jsx)(Box_1.default, { id: "root__layout", className: classes_1.layoutClasses.root, sx: sx, children: sidebarSection ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [sidebarSection, (0, jsx_runtime_1.jsxs)(Box_1.default, { display: "flex", flex: "1 1 auto", flexDirection: "column", className: classes_1.layoutClasses.hasSidebar, children: [headerSection, children, footerSection] })] })) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [headerSection, children, footerSection] })) })] }));
}
