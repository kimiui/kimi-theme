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
exports.ThemeModeToggle = ThemeModeToggle;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var material_1 = require("@mui/material");
var iconify_1 = require("lib/components/iconify");
var settings_1 = require("lib/components/settings");
// ----------------------------------------------------------------------
function ThemeModeToggle() {
    var settings = (0, settings_1.useSettingsContext)();
    var _a = (0, material_1.useColorScheme)(), mode = _a.mode, setMode = _a.setMode;
    var isLight = mode === 'light';
    (0, react_1.useEffect)(function () {
        setMode(settings.colorScheme);
    }, [settings, setMode]);
    return ((0, jsx_runtime_1.jsx)(material_1.IconButton, { size: "large", onClick: function () { return settings.onUpdateField('colorScheme', isLight ? 'dark' : 'light'); }, sx: __assign({ color: 'text.primary' }, (isLight && { bgcolor: 'background.paper' })), children: isLight ? (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "line-md:moon-simple" }) : (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "line-md:sunny" }) }));
}
