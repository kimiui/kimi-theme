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
var snackbar_1 = require("../../components/snackbar");
var iconify_1 = require("../../components/iconify");
var useCopyToClipboard_1 = require("../../hooks/useCopyToClipboard");
var CodeTabs = function (_a) {
    var tabs = _a.tabs, sx = _a.sx;
    var copy = (0, useCopyToClipboard_1.useCopyToClipboard)().copy;
    var _b = (0, react_1.useState)(Object.keys(tabs)[0]), activeTab = _b[0], setActiveTab = _b[1];
    var handleChange = function (event, newValue) {
        setActiveTab(newValue);
    };
    var onCopy = (0, react_1.useCallback)(function (text) {
        if (text) {
            snackbar_1.toast.success('Copied!');
            copy(text);
        }
    }, [copy]);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: __assign({ borderRadius: 1, backgroundColor: function (theme) { return theme.vars.palette.background.neutral; } }, sx), children: [(0, jsx_runtime_1.jsx)(material_1.Box, { sx: { pt: 1, px: 2 }, children: (0, jsx_runtime_1.jsx)(material_1.Tabs, { value: activeTab, onChange: handleChange, "aria-label": "code tabs", variant: "standard", scrollButtons: "auto", textColor: "primary", indicatorColor: "primary", children: Object.keys(tabs).map(function (tab) { return ((0, jsx_runtime_1.jsx)(material_1.Tab, { label: tab, value: tab }, tab)); }) }) }), (0, jsx_runtime_1.jsx)(material_1.Divider, {}), (0, jsx_runtime_1.jsxs)(material_1.Box, { sx: { mt: 2, p: 2, position: 'relative' }, children: [(0, jsx_runtime_1.jsx)(material_1.IconButton, { onClick: function () { return onCopy(tabs[activeTab]); }, sx: { position: 'absolute', right: 5, top: 0 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:copy-fill", width: 24 }) }), (0, jsx_runtime_1.jsxs)(material_1.Typography, { component: "pre", sx: {
                            whiteSpace: 'pre-wrap',
                            fontFamily: 'monospace',
                            color: 'text.primary',
                        }, children: ["$ ", tabs[activeTab]] })] })] }));
};
exports.default = CodeTabs;
