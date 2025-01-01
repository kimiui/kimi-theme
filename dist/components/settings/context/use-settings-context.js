'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSettingsContext = useSettingsContext;
var react_1 = require("react");
var settings_provider_1 = require("./settings-provider");
// ----------------------------------------------------------------------
function useSettingsContext() {
    var context = (0, react_1.useContext)(settings_provider_1.SettingsContext);
    if (!context) {
        throw new Error('useSettingsContext must be use inside SettingsProvider');
    }
    return context;
}
