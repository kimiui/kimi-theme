"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMini = NavMini;
var jsx_runtime_1 = require("react/jsx-runtime");
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var nav_section_1 = require("lib/components/nav-section");
var data_1 = require("./data");
// ----------------------------------------------------------------------
function NavMini() {
    return ((0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: {
            p: 0.5,
            mx: 'auto',
            maxWidth: 96,
            borderRadius: 1,
        }, children: (0, jsx_runtime_1.jsx)(nav_section_1.NavSectionMini, { data: data_1.NAV_ITEMS, cssVars: {
                '--nav-item-gap': '8px',
            }, slotProps: {
                paper: {},
                rootItem: {
                    sx: {},
                    icon: {},
                    title: {},
                    caption: {},
                    info: {},
                    arrow: {},
                },
                subItem: {
                    sx: {},
                    icon: {},
                    title: {},
                    caption: {},
                    info: {},
                    arrow: {},
                },
            } }) }));
}
