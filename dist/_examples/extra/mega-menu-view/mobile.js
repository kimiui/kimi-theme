"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoMegaMenuMobile = DemoMegaMenuMobile;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var logo_1 = require("../../../components/logo");
var iconify_1 = require("../../../components/iconify");
var mega_menu_1 = require("../../../components/mega-menu");
var data_1 = require("./data");
// ----------------------------------------------------------------------
function DemoMegaMenuMobile() {
    return ((0, jsx_runtime_1.jsx)(mega_menu_1.MegaMenuMobile, { data: data_1.navItems1, cssVars: {
            '--nav-item-gap': '8px',
        }, slots: {
            button: ((0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", variant: "contained", startIcon: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "carbon:menu" }), children: "Mobile menu" })),
            topArea: ((0, jsx_runtime_1.jsxs)(Box_1.default, { sx: { px: 2.5, py: 3 }, children: [(0, jsx_runtime_1.jsx)(logo_1.Logo, {}), ","] })),
            bottomArea: ((0, jsx_runtime_1.jsx)(Divider_1.default, { children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                        p: 2,
                        textAlign: 'center',
                        color: 'text.secondary',
                        typography: 'subtitle2',
                    }, children: "Bottom" }) })),
        } }));
}
