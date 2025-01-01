"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoMegaMenuVertical = DemoMegaMenuVertical;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var styles_1 = require("lib/theme/styles");
var mega_menu_1 = require("lib/components/mega-menu");
var data_1 = require("./data");
// ----------------------------------------------------------------------
function DemoMegaMenuVertical() {
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "row", spacing: 3, sx: { height: 640, width: 1 }, children: [(0, jsx_runtime_1.jsxs)(Paper_1.default, { variant: "outlined", sx: {
                    width: 260,
                    flexShrink: 0,
                    display: 'flex',
                    borderRadius: 2,
                    flexDirection: 'column',
                }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", sx: { p: 2 }, children: "Vertical menu" }), (0, jsx_runtime_1.jsx)(Divider_1.default, { sx: { mb: 2 } }), (0, jsx_runtime_1.jsx)(mega_menu_1.MegaMenuVertical, { data: data_1.navItems1, cssVars: {
                            '--nav-item-gap': '8px',
                        }, slotProps: {
                            rootItem: {
                                sx: { typography: 'subtitle1' },
                                icon: {},
                                title: { fontFamily: function (theme) { return theme.typography.fontSecondaryFamily; } },
                                info: {},
                                arrow: {},
                            },
                            subItem: {},
                            paper: { top: 40 },
                            subheader: {},
                            tags: {},
                            moreLink: {},
                            carousel: { sx: {}, displayCount: 8 },
                        } })] }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                    height: 1,
                    borderRadius: 2,
                    flex: '1 1 auto',
                    bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.04); },
                    border: function (theme) { return "dashed 1px ".concat(theme.vars.palette.divider); },
                } })] }));
}
