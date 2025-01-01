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
exports.NavMobile = NavMobile;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Drawer_1 = __importDefault(require("@mui/material/Drawer"));
var routes_react_1 = require("routes-react");
var logo_1 = require("../../../../components/logo");
var nav_section_1 = require("../../../../components/nav-section");
var scrollbar_1 = require("../../../../components/scrollbar");
var nav_mobile_list_1 = require("./nav-mobile-list");
function NavMobile(_a) {
    var _b;
    var data = _a.data, open = _a.open, onClose = _a.onClose, slots = _a.slots, sx = _a.sx;
    var pathname = (0, routes_react_1.usePathname)();
    (0, react_1.useEffect)(function () {
        if (open) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    return ((0, jsx_runtime_1.jsxs)(Drawer_1.default, { open: open, onClose: onClose, PaperProps: {
            sx: __assign({ display: 'flex', flexDirection: 'column', width: 'var(--layout-nav-mobile-width)' }, sx),
        }, children: [(_b = slots === null || slots === void 0 ? void 0 : slots.topArea) !== null && _b !== void 0 ? _b : ((0, jsx_runtime_1.jsx)(Box_1.default, { display: "flex", sx: { pt: 3, pb: 2, pl: 2.5 }, children: (0, jsx_runtime_1.jsx)(logo_1.Logo, {}) })), (0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { fillContent: true, children: (0, jsx_runtime_1.jsx)(Box_1.default, { component: "nav", display: "flex", flexDirection: "column", flex: "1 1 auto", sx: { pb: 3 }, children: (0, jsx_runtime_1.jsx)(nav_section_1.NavUl, { children: data.map(function (list) { return ((0, jsx_runtime_1.jsx)(nav_mobile_list_1.NavList, { data: list }, list.title)); }) }) }) }), slots === null || slots === void 0 ? void 0 : slots.bottomArea] }));
}
