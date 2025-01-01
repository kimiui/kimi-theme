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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var snackbar_1 = require("lib/components/snackbar");
var iconify_1 = require("lib/components/iconify");
var useCopyToClipboard_1 = require("lib/hooks/useCopyToClipboard");
var CodeBlock = function (_a) {
    var text = _a.text, sx = _a.sx;
    var copy = (0, useCopyToClipboard_1.useCopyToClipboard)().copy;
    var onCopy = (0, react_1.useCallback)(function (content) {
        if (content) {
            snackbar_1.toast.success('Copied!');
            copy(content);
        }
    }, [copy]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: __assign({ p: 2, backgroundColor: function (theme) { return theme.vars.palette.background.neutral; }, borderRadius: 1, mt: 2, position: 'relative' }, sx), children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { onClick: function () { return onCopy(text); }, sx: { position: 'absolute', right: 5, top: 5 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:copy-fill", width: 24 }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { component: "pre", sx: {
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'monospace',
                    color: 'text.primary',
                }, children: text })] }));
};
exports.default = CodeBlock;
