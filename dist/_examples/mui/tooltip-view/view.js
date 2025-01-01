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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TooltipView = TooltipView;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Fab_1 = __importDefault(require("@mui/material/Fab"));
var Zoom_1 = __importDefault(require("@mui/material/Zoom"));
var Fade_1 = __importDefault(require("@mui/material/Fade"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var styles_1 = require("@mui/material/styles");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Tooltip_1 = __importStar(require("@mui/material/Tooltip"));
var paths_1 = require("lib/routes/paths");
var iconify_1 = require("lib/components/iconify");
var animate_1 = require("lib/components/animate");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
var LONG_TEXT = "\nAliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.\nPraesent non nunc mollis, fermentum neque at, semper arcu.\nNullam eget est sed sem iaculis gravida eget vitae justo.\n";
// ----------------------------------------------------------------------
var CustomWidthTooltip = (0, styles_1.styled)(function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({}, props, { classes: { popper: className } })));
})((_a = {}, _a["& .".concat(Tooltip_1.tooltipClasses.tooltip)] = { maxWidth: 500 }, _a));
var NoMaxWidthTooltip = (0, styles_1.styled)(function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, __assign({}, props, { classes: { popper: className } })));
})((_b = {}, _b["& .".concat(Tooltip_1.tooltipClasses.tooltip)] = { maxWidth: 'none' }, _b));
// ----------------------------------------------------------------------
function TooltipView() {
    var DEMO = [
        {
            name: 'Simple',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Delete", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:trash-bin-trash-bold", width: 24 }) }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", children: (0, jsx_runtime_1.jsx)(Fab_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line", width: 24 }) }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Delete", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { color: "info", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:trash-bin-trash-bold", width: 24 }) }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", children: (0, jsx_runtime_1.jsx)(Fab_1.default, { component: framer_motion_1.m.button, whileTap: "tap", whileHover: "hover", variants: (0, animate_1.varHover)(), color: "info", children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line", width: 24 }) }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", children: (0, jsx_runtime_1.jsx)(Button_1.default, { variant: "outlined", color: "info", children: "Button" }) })] })),
        },
        {
            name: 'Arrow',
            component: ((0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { children: (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", arrow: true, children: (0, jsx_runtime_1.jsx)(Fab_1.default, { children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:add-line", width: 24 }) }) }) })),
        },
        {
            name: 'Variable width',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: LONG_TEXT, children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "Default width [300px]" }) }), (0, jsx_runtime_1.jsx)(CustomWidthTooltip, { title: LONG_TEXT, children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "Custom width [500px]" }) }), (0, jsx_runtime_1.jsx)(NoMaxWidthTooltip, { title: LONG_TEXT, children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "No wrapping" }) })] })),
        },
        {
            name: 'Transitions',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "Grow" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { TransitionComponent: Fade_1.default, TransitionProps: { timeout: 600 }, title: "Add", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "Fade" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { TransitionComponent: Zoom_1.default, title: "Add", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "Zoom" }) })] })),
        },
        {
            name: 'Positioned',
            component: ((0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { children: [(0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "top-start", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "top-start" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "top", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "top" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "top-end", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "top-end" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "left-start", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "left-start" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "left", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "left" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "left-end", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "left-end" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "right-start", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "right-start" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "right", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "right" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "right-end", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "right-end" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "bottom-start", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "bottom-start" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "bottom", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "bottom" }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Add", placement: "bottom-end", children: (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", children: "bottom-end" }) })] })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Tooltip", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Tooltip' }], moreLink: ['https://mui.com/components/tooltips'] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
