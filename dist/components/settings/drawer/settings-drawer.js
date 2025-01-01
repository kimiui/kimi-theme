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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingsDrawer = SettingsDrawer;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Badge_1 = __importDefault(require("@mui/material/Badge"));
var Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var Drawer_1 = __importStar(require("@mui/material/Drawer"));
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../../theme/styles");
var iconify_1 = require("../../iconify");
var base_option_1 = require("./base-option");
var nav_options_1 = require("./nav-options");
var scrollbar_1 = require("../../scrollbar");
var context_1 = require("../context");
var config_settings_1 = require("../config-settings");
var fullscreen_button_1 = require("./fullscreen-button");
// ----------------------------------------------------------------------
function SettingsDrawer(_a) {
    var _b;
    var sx = _a.sx, hideNavColor = _a.hideNavColor, hideNavLayout = _a.hideNavLayout, hideDirection = _a.hideDirection, hideColorScheme = _a.hideColorScheme;
    var theme = (0, styles_1.useTheme)();
    var settings = (0, context_1.useSettingsContext)();
    var _c = (0, styles_1.useColorScheme)(), mode = _c.mode, setMode = _c.setMode;
    var renderHead = ((0, jsx_runtime_1.jsxs)(Box_1.default, { display: "flex", alignItems: "center", sx: { py: 2, pr: 1, pl: 2.5 }, children: [(0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "h6", sx: { flexGrow: 1 }, children: "Settings" }), (0, jsx_runtime_1.jsx)(fullscreen_button_1.FullScreenButton, {}), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Reset", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: function () {
                        settings.onReset();
                        setMode(config_settings_1.defaultSettings.colorScheme);
                    }, children: (0, jsx_runtime_1.jsx)(Badge_1.default, { color: "error", variant: "dot", invisible: !settings.canReset, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "solar:restart-bold" }) }) }) }), (0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "Close", children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: settings.onCloseDrawer, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "mingcute:close-line" }) }) })] }));
    var renderMode = ((0, jsx_runtime_1.jsx)(base_option_1.BaseOption, { label: "Dark mode", icon: "moon", selected: settings.colorScheme === 'dark', onClick: function () {
            settings.onUpdateField('colorScheme', mode === 'light' ? 'dark' : 'light');
            setMode(mode === 'light' ? 'dark' : 'light');
        } }));
    var renderRTL = ((0, jsx_runtime_1.jsx)(base_option_1.BaseOption, { label: "Right to left", icon: "align-right", selected: settings.direction === 'rtl', onClick: function () {
            return settings.onUpdateField('direction', settings.direction === 'ltr' ? 'rtl' : 'ltr');
        } }));
    var renderNav = ((0, jsx_runtime_1.jsx)(nav_options_1.NavOptions, { value: {
            color: settings.navColor,
            layout: settings.navLayout,
        }, onClickOption: {
            color: function (newValue) { return settings.onUpdateField('navColor', newValue); },
            layout: function (newValue) { return settings.onUpdateField('navLayout', newValue); },
        }, options: {
            colors: ['integrate', 'apparent'],
            layouts: ['vertical', 'horizontal'],
        }, hideNavColor: hideNavColor, hideNavLayout: hideNavLayout }));
    return ((0, jsx_runtime_1.jsxs)(Drawer_1.default, { anchor: "right", open: settings.openDrawer, onClose: settings.onCloseDrawer, slotProps: { backdrop: { invisible: true } }, sx: (_b = {},
            _b["& .".concat(Drawer_1.drawerClasses.paper)] = __assign(__assign(__assign({}, (0, styles_2.paper)({
                theme: theme,
                color: (0, styles_2.varAlpha)(theme.vars.palette.background.defaultChannel, 0.9),
            })), { width: 360 }), sx),
            _b), children: [renderHead, (0, jsx_runtime_1.jsx)(scrollbar_1.Scrollbar, { children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 6, sx: { px: 2.5, pb: 5 }, children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 2, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", children: [!hideColorScheme && renderMode, !hideDirection && renderRTL] }), !(hideNavLayout && hideNavColor) && renderNav] }) })] }));
}
