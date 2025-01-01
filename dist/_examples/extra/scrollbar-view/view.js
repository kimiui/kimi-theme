'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollbarView = ScrollbarView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Alert_1 = __importDefault(require("@mui/material/Alert"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var paths_1 = require("lib/routes/paths");
var scrollbar_1 = require("lib/components/scrollbar");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function ScrollbarView() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Scrollbar", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Scrollbar' }] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 3, display: "grid", alignItems: "flex-start", gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Vertical", sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { sx: {
                                        p: 3,
                                        height: 320,
                                        borderRadius: 1,
                                        border: function (theme) { return "solid 1px ".concat(theme.vars.palette.divider); },
                                    }, children: "Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum." }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Horizontal", sx: { flexDirection: 'column', alignItems: 'unset' }, children: (0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { sx: {
                                        p: 3,
                                        height: 320,
                                        borderRadius: 1,
                                        border: function (theme) { return "solid 1px ".concat(theme.vars.palette.divider); },
                                    }, children: (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { width: '200%' }, children: "Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum." }) }) })] }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Layout", sx: {
                            px: 5,
                            py: 5,
                            alignItems: 'unset',
                            flexDirection: 'column',
                        }, children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: "column", sx: {
                                height: 560,
                                borderRadius: 1,
                                border: function (theme) { return "solid 1px ".concat(theme.vars.palette.divider); },
                            }, children: [(0, jsx_runtime_1.jsx)(Stack_1.default, { sx: {
                                        p: 3,
                                        typography: 'subtitle2',
                                        bgcolor: 'text.primary',
                                        color: 'background.default',
                                    }, children: "Top" }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { direction: { xs: 'column', md: 'row' }, sx: { minHeight: 0, flex: '1 1 auto' }, children: [(0, jsx_runtime_1.jsx)(Stack_1.default, { sx: {
                                                p: 3,
                                                typography: 'subtitle2',
                                                flex: { xs: '0 0 72px', md: '0 0 240px' },
                                                borderRight: function (theme) { return "solid 1px ".concat(theme.vars.palette.divider); },
                                            }, children: "Left" }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: {
                                                minWidth: 0,
                                                minHeight: 0,
                                                flex: '1 1 auto',
                                                bgcolor: 'background.neutral',
                                            }, children: [(0, jsx_runtime_1.jsx)(Alert_1.default, { severity: "success", sx: { borderRadius: 0 }, children: "Here is a gentle confirmation that your action was successful." }), (0, jsx_runtime_1.jsxs)(scrollbar_1.Scrollbar, { sx: { px: 3, py: 3 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", paragraph: true, children: "Vestibulum ante ipsum primis in" }), (0, jsx_runtime_1.jsx)(Typography_1.default, { paragraph: true, children: "Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi. Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. Quisque ut nisi." }), (0, jsx_runtime_1.jsx)(Typography_1.default, { paragraph: true, children: "Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget, diam. Vestibulum eu odio. Proin sapien ipsum, porta a, auctor quis, euismod ut, mi. Cras ultricies mi eu turpis hendrerit fringilla. Phasellus consectetuer vestibulum elit. Phasellus magna. Nullam tincidunt adipiscing enim. Vestibulum volutpat pretium libero. Nullam quis ante. Morbi mollis tellus ac sapien. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce ac felis sit amet ligula pharetra condimentum. Morbi mattis ullamcorper velit. Vivamus consectetuer hendrerit lacus. Nullam quis ante. Praesent turpis. Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum." }), (0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: { width: 1, aspectRatio: '16/9' } })] })] }), (0, jsx_runtime_1.jsx)(Stack_1.default, { sx: {
                                                p: 3,
                                                typography: 'subtitle2',
                                                flex: { xs: '0 0 72px', md: '0 0 240px' },
                                                borderLeft: function (theme) { return "solid 1px ".concat(theme.vars.palette.divider); },
                                            }, children: "Right" })] }), (0, jsx_runtime_1.jsx)(Stack_1.default, { sx: {
                                        p: 3,
                                        typography: 'subtitle2',
                                        borderTop: function (theme) { return "solid 1px ".concat(theme.vars.palette.divider); },
                                    }, children: "Bottom" })] }) })] })] }));
}
