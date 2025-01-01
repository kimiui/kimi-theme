'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentCard = ComponentCard;
var jsx_runtime_1 = require("react/jsx-runtime");
var framer_motion_1 = require("framer-motion");
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var routes_react_1 = require("routes-react");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var CardActionArea_1 = __importDefault(require("@mui/material/CardActionArea"));
var styles_1 = require("lib/theme/styles");
var image_1 = require("lib/components/image");
var label_1 = require("lib/components/label");
var animate_1 = require("lib/components/animate");
function ComponentCard(_a) {
    var item = _a.item;
    return ((0, jsx_runtime_1.jsxs)(Paper_1.default, { component: routes_react_1.RouterLink, href: item.href, variant: "outlined", sx: {
            overflow: 'hidden',
            position: 'relative',
            textDecoration: 'none',
            borderColor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.12); },
        }, children: [item.category && ((0, jsx_runtime_1.jsx)(label_1.Label, { color: item.category === 'MUI X' ? 'info' : 'default', sx: {
                    top: 8,
                    right: 8,
                    zIndex: 9,
                    position: 'absolute',
                }, children: item.category })), (0, jsx_runtime_1.jsx)(CardActionArea_1.default, { component: framer_motion_1.m.div, whileHover: "hover", sx: {
                    borderRadius: 0,
                    color: 'text.secondary',
                    bgcolor: function (theme) { return (0, styles_1.varAlpha)(theme.vars.palette.grey['500Channel'], 0.04); },
                }, children: (0, jsx_runtime_1.jsx)(framer_motion_1.m.div, { variants: (0, animate_1.varHover)(1.1), transition: (0, animate_1.varTranHover)(), children: (0, jsx_runtime_1.jsx)(image_1.Image, { alt: item.name, src: item.icon, ratio: "1/1", sx: { width: 200, maxWidth: 1 }, disablePlaceholder: true }) }) }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", sx: { p: 2, textAlign: 'center' }, children: item.name })] }));
}
