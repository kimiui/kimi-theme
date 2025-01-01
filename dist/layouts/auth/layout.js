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
exports.default = AuthLayout;
var jsx_runtime_1 = require("react/jsx-runtime");
var ahooks_1 = require("ahooks");
var Alert_1 = __importDefault(require("@mui/material/Alert"));
var styles_1 = require("@mui/material/styles");
var main_1 = require("./main");
var styles_2 = require("../../theme/styles");
var header_base_1 = require("../core/header-base");
var layout_section_1 = require("../core/layout-section");
function AuthLayout(_a) {
    var _b, _c;
    var sx = _a.sx, children = _a.children;
    var theme = (0, styles_1.useTheme)();
    var _d = (0, ahooks_1.useBoolean)(), mobileNavOpenActions = _d[1];
    var layoutQuery = 'md';
    return ((0, jsx_runtime_1.jsx)(layout_section_1.LayoutSection
    /** **************************************
     * Header
     *************************************** */
    , { 
        /** **************************************
         * Header
         *************************************** */
        headerSection: (0, jsx_runtime_1.jsx)(header_base_1.HeaderBase, { disableElevation: true, layoutQuery: layoutQuery, onOpenNav: mobileNavOpenActions.setTrue, slotsDisplay: {
                signIn: false,
                account: false,
                purchase: false,
                contacts: false,
                searchbar: false,
                workspaces: false,
                menuButton: false,
                localization: false,
                notifications: false,
            }, slots: {
                topArea: ((0, jsx_runtime_1.jsx)(Alert_1.default, { severity: "info", sx: { display: 'none', borderRadius: 0 }, children: "This is an info Alert." })),
            }, slotProps: { container: { maxWidth: false } }, sx: { position: (_b = {}, _b[layoutQuery] = 'fixed', _b) } }), 
        /** **************************************
         * Footer
         *************************************** */
        footerSection: null, 
        /** **************************************
         * Style
         *************************************** */
        cssVars: {
            '--layout-auth-content-width': '900px',
        }, sx: __assign({ backgroundColor: theme.palette.background.neutral, '&::before': (_c = {
                    width: 1,
                    height: 1,
                    zIndex: -1,
                    content: "''",
                    opacity: 0.24,
                    position: 'fixed',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center'
                },
                _c[styles_2.stylesMode.dark] = { opacity: 0.08 },
                _c) }, sx), children: (0, jsx_runtime_1.jsx)(main_1.AuthMain, { layoutQuery: layoutQuery, children: children }) }));
}
