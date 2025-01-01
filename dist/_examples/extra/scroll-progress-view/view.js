'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollProgressView = ScrollProgressView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var paths_1 = require("../../../routes/paths");
var styles_1 = require("../../../theme/styles");
var scrollbar_1 = require("../../../components/scrollbar");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var scroll_progress_1 = require("../../../components/animate/scroll-progress");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function ScrollProgressView() {
    var pageProgress = (0, scroll_progress_1.useScrollProgress)();
    var containerProgress1 = (0, scroll_progress_1.useScrollProgress)('container');
    var containerProgress2 = (0, scroll_progress_1.useScrollProgress)('container');
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(scroll_progress_1.ScrollProgress, { variant: "linear", size: 6, progress: pageProgress.scrollYProgress, sx: { position: 'fixed' } }), (0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Scroll progress", links: [
                        { name: 'Components', href: paths_1.paths.docs.components.root },
                        { name: 'Scroll progress' },
                    ] }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentContainer, { children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Container scroll Y", sx: { flexDirection: 'column', alignItems: 'unset' }, children: [(0, jsx_runtime_1.jsx)(scroll_progress_1.ScrollProgress, { color: "info", variant: "circular", size: 40, thickness: 2, progress: containerProgress1.scrollYProgress, sx: { position: 'absolute', top: 16, right: 16 } }), (0, jsx_runtime_1.jsx)(scroll_progress_1.ScrollProgress, { variant: "linear", color: "info", progress: containerProgress1.scrollYProgress }), (0, jsx_runtime_1.jsx)(CardContent_1.default, { children: (0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { ref: containerProgress1.elementRef, sx: { height: 480 }, children: (0, jsx_runtime_1.jsx)(Stack_1.default, { spacing: 3, children: __spreadArray([], Array(12), true).map(function (_, index) { return ((0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: {
                                                width: 1,
                                                height: 160,
                                                flexShrink: 0,
                                                borderRadius: 1.5,
                                                display: 'flex',
                                                typography: 'h2',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24); },
                                            }, children: index + 1 }, index)); }) }) }) })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Container scroll X", sx: { flexDirection: 'column', alignItems: 'unset' }, children: [(0, jsx_runtime_1.jsx)(scroll_progress_1.ScrollProgress, { color: "inherit", variant: "circular", size: 40, thickness: 2, progress: containerProgress2.scrollXProgress, sx: { position: 'absolute', top: 8, right: 8 } }), (0, jsx_runtime_1.jsx)(scroll_progress_1.ScrollProgress, { variant: "linear", color: "inherit", progress: containerProgress2.scrollXProgress }), (0, jsx_runtime_1.jsx)(CardContent_1.default, { children: (0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { ref: containerProgress2.elementRef, children: (0, jsx_runtime_1.jsx)(Stack_1.default, { direction: "row", spacing: 3, children: __spreadArray([], Array(24), true).map(function (_, index) { return ((0, jsx_runtime_1.jsx)(Paper_1.default, { variant: "outlined", sx: {
                                                width: 200,
                                                flexShrink: 0,
                                                borderRadius: 1.5,
                                                display: 'flex',
                                                typography: 'h2',
                                                aspectRatio: '9/16',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.24); },
                                            }, children: index + 1 }, index)); }) }) }) })] }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: {
                            my: 10,
                            minHeight: 2000,
                            typography: 'h6',
                            textAlign: 'center',
                        }, children: "\uD83D\uDC47 Scroll down document" })] })] }));
}
