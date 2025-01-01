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
exports.FullScreenButton = FullScreenButton;
var jsx_runtime_1 = require("react/jsx-runtime");
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var svg_color_1 = require("../../svg-color");
// ----------------------------------------------------------------------
function FullScreenButton() {
    var _a;
    var theme = (0, styles_1.useTheme)();
    var _b = (0, react_1.useState)(false), fullscreen = _b[0], setFullscreen = _b[1];
    var onToggleFullScreen = (0, react_1.useCallback)(function () {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            setFullscreen(true);
        }
        else if (document.exitFullscreen) {
            document.exitFullscreen();
            setFullscreen(false);
        }
    }, []);
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: fullscreen ? 'Exit' : 'Full Screen', children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: onToggleFullScreen, sx: (_a = {},
                _a["& .".concat(svg_color_1.svgColorClasses.root)] = __assign({ background: "linear-gradient(135deg, ".concat(theme.vars.palette.grey[500], " 0%, ").concat(theme.vars.palette.grey[600], " 100%)") }, (fullscreen && {
                    background: "linear-gradient(135deg, ".concat(theme.vars.palette.primary.light, " 0%, ").concat(theme.vars.palette.primary.main, " 100%)"),
                })),
                _a), children: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/setting/".concat(fullscreen ? 'ic-exit-full-screen' : 'ic-full-screen', ".svg"), sx: { width: 18, height: 18 } }) }) }));
}
