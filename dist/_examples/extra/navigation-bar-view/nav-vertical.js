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
exports.NavVertical = NavVertical;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Paper_1 = __importDefault(require("@mui/material/Paper"));
var Badge_1 = __importDefault(require("@mui/material/Badge"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var react_1 = require("react");
var TextField_1 = __importDefault(require("@mui/material/TextField"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var ToggleButton_1 = __importDefault(require("@mui/material/ToggleButton"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var ToggleButtonGroup_1 = __importDefault(require("@mui/material/ToggleButtonGroup"));
var helper_1 = require("lib/utils/helper");
var iconify_1 = require("lib/components/iconify");
var svg_color_1 = require("lib/components/svg-color");
var nav_section_1 = require("lib/components/nav-section");
var data_1 = require("./data");
// ----------------------------------------------------------------------
var defaultConfig = {
    gap: 4,
    icon: 24,
    radius: 8,
    subItemHeight: 36,
    rootItemHeight: 44,
    currentRole: 'admin',
    hiddenSubheader: false,
    padding: '4px 8px 4px 12px',
};
// ----------------------------------------------------------------------
function NavVertical() {
    var _a = (0, react_1.useState)(defaultConfig), config = _a[0], setConfig = _a[1];
    var canReset = !(0, helper_1.isEqual)(defaultConfig, config);
    var handleChangeConfig = (0, react_1.useCallback)(function (name, value) {
        setConfig(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[name] = value, _a)));
        });
    }, []);
    var handleReset = (0, react_1.useCallback)(function () {
        setConfig(defaultConfig);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 5, direction: "row", flexWrap: "wrap", justifyContent: "center", children: [(0, jsx_runtime_1.jsxs)(Paper_1.default, { variant: "outlined", sx: {
                    p: 2,
                    width: 1,
                    maxWidth: 320,
                    borderRadius: 2,
                    display: 'flex',
                    flexDirection: 'column',
                }, children: [(0, jsx_runtime_1.jsx)(nav_section_1.NavSectionVertical, { data: data_1.NAV_ITEMS, sx: { flex: '1 1 auto' }, cssVars: {
                            '--nav-item-gap': "".concat(config.gap, "px"),
                        }, slotProps: {
                            currentRole: config.currentRole,
                            rootItem: {
                                sx: {
                                    padding: config.padding,
                                    borderRadius: "".concat(config.radius, "px"),
                                    minHeight: config.rootItemHeight,
                                },
                                icon: __assign({ width: config.icon, height: config.icon }, (!config.icon && { display: 'none' })),
                                texts: {},
                                title: {},
                                caption: {},
                                info: {},
                                arrow: {},
                            },
                            subItem: {
                                sx: {
                                    padding: config.padding,
                                    borderRadius: "".concat(config.radius, "px"),
                                    minHeight: config.subItemHeight,
                                },
                                icon: __assign({ width: config.icon, height: config.icon }, (!config.icon && { display: 'none' })),
                                texts: {},
                                title: {},
                                caption: {},
                                info: {},
                                arrow: {},
                            },
                            subheader: __assign({}, (config.hiddenSubheader && { display: 'none' })),
                        } }), (0, jsx_runtime_1.jsx)(Divider_1.default, { sx: { my: 2 } }), (0, jsx_runtime_1.jsx)(nav_section_1.NavSectionVerticalItem, { depth: 1, path: "#", title: "Chat", caption: "Praesent porttitor nulla vitae posuere", icon: (0, jsx_runtime_1.jsx)(svg_color_1.SvgColor, { src: "/assets/icons/navbar/ic-chat.svg" }) })] }), (0, jsx_runtime_1.jsx)(ControlsPanel, { config: config, onChangeConfig: handleChangeConfig, canReset: canReset, onReset: handleReset })] }));
}
function ControlsPanel(_a) {
    var config = _a.config, onChangeConfig = _a.onChangeConfig, canReset = _a.canReset, onReset = _a.onReset;
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 3, sx: {
            p: 3,
            borderRadius: 2,
            position: 'relative',
            bgcolor: 'background.neutral',
        }, children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { display: "flex", alignItems: "center", children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", sx: { flexGrow: 1 }, children: "Controls" }), canReset && ((0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: onReset, sx: { top: 16, right: 16, zIndex: 9, position: 'absolute' }, children: (0, jsx_runtime_1.jsx)(Badge_1.default, { color: "error", variant: "dot", invisible: !canReset, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:restart-bold" }) }) }))] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", children: "Gap" }), (0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { exclusive: true, size: "small", value: config.gap, onChange: function (event, newValue) {
                            if (newValue !== null) {
                                onChangeConfig('gap', newValue);
                            }
                        }, children: [4, 8, 16, 40].map(function (i) { return ((0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: i, sx: { width: 1 }, children: i }, i)); }) })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", children: "Icon" }), (0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { exclusive: true, size: "small", value: config.icon, onChange: function (event, newValue) {
                            if (newValue !== null) {
                                onChangeConfig('icon', newValue);
                            }
                        }, children: [0, 16, 20, 24, 40].map(function (i) { return ((0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: i, sx: { width: 1 }, children: i }, i)); }) })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", children: "Radius" }), (0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { exclusive: true, size: "small", value: config.radius, onChange: function (event, newValue) {
                            if (newValue !== null) {
                                onChangeConfig('radius', newValue);
                            }
                        }, children: [0, 8, 16, 40].map(function (i) { return ((0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: i, sx: { width: 1 }, children: i }, i)); }) })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", children: "Role" }), (0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { exclusive: true, size: "small", value: config.currentRole, onChange: function (event, newValue) {
                            if (newValue !== null) {
                                onChangeConfig('currentRole', newValue);
                            }
                        }, children: ['admin', 'user'].map(function (i) { return ((0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: i, sx: { width: 1 }, children: i }, i)); }) })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", children: "Item Root Height" }), (0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { exclusive: true, size: "small", value: config.rootItemHeight, onChange: function (event, newValue) {
                            if (newValue !== null) {
                                onChangeConfig('rootItemHeight', newValue);
                            }
                        }, children: [36, 44, 64, 80].map(function (i) { return ((0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: i, sx: { width: 1 }, children: i }, i)); }) })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 1, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", children: "Item Sub Height" }), (0, jsx_runtime_1.jsx)(ToggleButtonGroup_1.default, { exclusive: true, size: "small", value: config.subItemHeight, onChange: function (event, newValue) {
                            if (newValue !== null) {
                                onChangeConfig('subItemHeight', newValue);
                            }
                        }, children: [36, 44, 64, 80].map(function (i) { return ((0, jsx_runtime_1.jsx)(ToggleButton_1.default, { value: i, sx: { width: 1 }, children: i }, i)); }) })] }), (0, jsx_runtime_1.jsx)(TextField_1.default, { label: "Item Padding", value: config.padding || '', onChange: function (event) { return onChangeConfig('padding', event.target.value); } }), (0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { checked: config.hiddenSubheader, onClick: function () { return onChangeConfig('hiddenSubheader', !config.hiddenSubheader); } }), label: "Hidden subheader" })] }));
}
