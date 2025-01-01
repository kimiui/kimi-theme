"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavHorizontal = NavHorizontal;
var jsx_runtime_1 = require("react/jsx-runtime");
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var nav_section_1 = require("../../../components/nav-section");
var data_1 = require("./data");
// ----------------------------------------------------------------------
function NavHorizontal() {
    return ((0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: {
            px: 2,
            height: 80,
            borderRadius: 2,
        }, children: (0, jsx_runtime_1.jsx)(nav_section_1.NavSectionHorizontal, { data: data_1.NAV_ITEMS, cssVars: {
                '--nav-item-gap': '24px',
            }, slotProps: {
                paper: {},
                rootItem: {
                    sx: {
                        typography: 'subtitle1',
                        fontFamily: function (theme) { return theme.typography.fontSecondaryFamily; },
                    },
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
