'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainLayout = MainLayout;
var jsx_runtime_1 = require("react/jsx-runtime");
var ahooks_1 = require("ahooks");
var Alert_1 = __importDefault(require("@mui/material/Alert"));
var routes_react_1 = require("routes-react");
var styles_1 = require("@mui/material/styles");
var react_router_dom_1 = require("react-router-dom");
var main_1 = require("./main");
var mobile_1 = require("./nav/mobile");
var desktop_1 = require("./nav/desktop");
var footer_1 = require("./footer");
var header_base_1 = require("../core/header-base");
var layout_section_1 = require("../core/layout-section");
function MainLayout(_a) {
    var _b;
    var _c;
    var sx = _a.sx, data = _a.data, children = _a.children;
    var theme = (0, styles_1.useTheme)();
    var pathname = (0, routes_react_1.usePathname)();
    var _d = (0, ahooks_1.useBoolean)(), mobileNavOpen = _d[0], mobileNavOpenActions = _d[1];
    var homePage = pathname === '/';
    var layoutQuery = 'md';
    var navData = (_c = data === null || data === void 0 ? void 0 : data.nav) !== null && _c !== void 0 ? _c : [];
    console.log('navData', navData);
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.BrowserRouter, { children: [(0, jsx_runtime_1.jsx)(mobile_1.NavMobile, { data: navData, open: mobileNavOpen, onClose: mobileNavOpenActions.setFalse }), (0, jsx_runtime_1.jsx)(layout_section_1.LayoutSection
            /** **************************************
             * Header
             *************************************** */
            , { 
                /** **************************************
                 * Header
                 *************************************** */
                headerSection: (0, jsx_runtime_1.jsx)(header_base_1.HeaderBase, { layoutQuery: layoutQuery, onOpenNav: mobileNavOpenActions.setTrue, slotsDisplay: {
                        account: false,
                        helpLink: false,
                        contacts: false,
                        searchbar: false,
                        workspaces: false,
                        localization: false,
                        notifications: false,
                    }, slots: {
                        topArea: ((0, jsx_runtime_1.jsx)(Alert_1.default, { severity: "info", sx: { display: 'none', borderRadius: 0 }, children: "This is an info Alert." })),
                        rightAreaStart: ((0, jsx_runtime_1.jsx)(desktop_1.NavDesktop, { data: navData, sx: (_b = {
                                    display: 'none'
                                },
                                _b[theme.breakpoints.up(layoutQuery)] = {
                                    mr: 2.5,
                                    display: 'flex',
                                },
                                _b) })),
                    } }), 
                /** **************************************
                 * Footer
                 *************************************** */
                footerSection: homePage ? (0, jsx_runtime_1.jsx)(footer_1.HomeFooter, {}) : (0, jsx_runtime_1.jsx)(footer_1.Footer, { layoutQuery: layoutQuery }), 
                /** **************************************
                 * Style
                 *************************************** */
                sx: sx, children: (0, jsx_runtime_1.jsx)(main_1.Main, { children: children }) })] }));
}
