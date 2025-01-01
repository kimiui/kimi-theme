'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleLayout = SimpleLayout;
var jsx_runtime_1 = require("react/jsx-runtime");
var ahooks_1 = require("ahooks");
var Alert_1 = __importDefault(require("@mui/material/Alert"));
var main_1 = require("./main");
var header_base_1 = require("../core/header-base");
var layout_section_1 = require("../core/layout-section");
function SimpleLayout(_a) {
    var sx = _a.sx, children = _a.children, content = _a.content;
    var _b = (0, ahooks_1.useBoolean)(), mobileNavOpenActions = _b[1];
    var layoutQuery = 'md';
    return ((0, jsx_runtime_1.jsx)(layout_section_1.LayoutSection
    /** **************************************
     * Header
     *************************************** */
    , { 
        /** **************************************
         * Header
         *************************************** */
        headerSection: (0, jsx_runtime_1.jsx)(header_base_1.HeaderBase, { layoutQuery: layoutQuery, onOpenNav: mobileNavOpenActions.setTrue, slotsDisplay: {
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
            }, slotProps: { container: { maxWidth: false } } }), 
        /** **************************************
         * Footer
         *************************************** */
        footerSection: null, 
        /** **************************************
         * Style
         *************************************** */
        cssVars: {
            '--layout-simple-content-compact-width': '448px',
        }, sx: sx, children: (0, jsx_runtime_1.jsx)(main_1.Main, { children: (content === null || content === void 0 ? void 0 : content.compact) ? (0, jsx_runtime_1.jsx)(main_1.CompactContent, { children: children }) : children }) }));
}
