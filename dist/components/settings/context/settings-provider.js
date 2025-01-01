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
exports.SettingsConsumer = exports.SettingsContext = void 0;
exports.SettingsProvider = SettingsProvider;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var hooks_1 = require("../../../hooks");
var config_settings_1 = require("../config-settings");
// ----------------------------------------------------------------------
exports.SettingsContext = (0, react_1.createContext)(undefined);
exports.SettingsConsumer = exports.SettingsContext.Consumer;
// ----------------------------------------------------------------------
function SettingsProvider(_a) {
    var children = _a.children, settings = _a.settings;
    var values = (0, hooks_1.useLocalStorage)(config_settings_1.STORAGE_KEY, settings !== null && settings !== void 0 ? settings : config_settings_1.defaultSettings);
    var _b = (0, react_1.useState)(false), openDrawer = _b[0], setOpenDrawer = _b[1];
    var onToggleDrawer = (0, react_1.useCallback)(function () {
        setOpenDrawer(function (prev) { return !prev; });
    }, []);
    var onCloseDrawer = (0, react_1.useCallback)(function () {
        setOpenDrawer(false);
    }, []);
    var memoizedValue = (0, react_1.useMemo)(function () { return (__assign(__assign({}, values.state), { canReset: values.canReset, onReset: values.resetState, onUpdate: values.setState, onUpdateField: values.setField, openDrawer: openDrawer, onCloseDrawer: onCloseDrawer, onToggleDrawer: onToggleDrawer })); }, [
        values.state,
        values.canReset,
        values.resetState,
        values.setState,
        values.setField,
        openDrawer,
        onCloseDrawer,
        onToggleDrawer,
    ]);
    return (0, jsx_runtime_1.jsx)(exports.SettingsContext.Provider, { value: memoizedValue, children: children });
}
