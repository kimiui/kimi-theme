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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapChangeTheme = MapChangeTheme;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var map_1 = require("lib/components/map");
var control_panel_1 = require("./control-panel");
function MapChangeTheme(_a) {
    var themes = _a.themes, other = __rest(_a, ["themes"]);
    var _b = (0, react_1.useState)('outdoors'), selectTheme = _b[0], setSelectTheme = _b[1];
    var handleChangeTheme = (0, react_1.useCallback)(function (value) { return setSelectTheme(value); }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(map_1.MapWrapper, __assign({ initialViewState: {
                    latitude: 37.785164,
                    longitude: -100,
                    zoom: 3.5,
                    bearing: 0,
                    pitch: 0,
                }, mapStyle: themes === null || themes === void 0 ? void 0 : themes[selectTheme] }, other, { children: (0, jsx_runtime_1.jsx)(map_1.MapControl, {}) })), (0, jsx_runtime_1.jsx)(control_panel_1.ControlPanel, { themes: themes, selectTheme: selectTheme, onChangeTheme: handleChangeTheme })] }));
}
