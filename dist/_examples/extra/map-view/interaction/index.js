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
exports.MapInteraction = MapInteraction;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var map_1 = require("../../../../components/map");
var control_panel_1 = require("./control-panel");
// ----------------------------------------------------------------------
function MapInteraction(_a) {
    var other = __rest(_a, []);
    var _b = (0, react_1.useState)({
        minZoom: 0,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 85,
        dragPan: true,
        boxZoom: true,
        keyboard: true,
        touchZoom: true,
        dragRotate: true,
        scrollZoom: true,
        touchPitch: true,
        touchRotate: true,
        doubleClickZoom: true,
        touchZoomRotate: true,
    }), settings = _b[0], setSettings = _b[1];
    var updateSettings = (0, react_1.useCallback)(function (name, value) {
        return setSettings(function (prevSettings) {
            var _a;
            return (__assign(__assign({}, prevSettings), (_a = {}, _a[name] = value, _a)));
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(map_1.MapWrapper, __assign({}, settings, { initialViewState: {
            latitude: 37.729,
            longitude: -122.36,
            zoom: 11,
            bearing: 0,
            pitch: 50,
        } }, other, { children: [(0, jsx_runtime_1.jsx)(map_1.MapControl, {}), (0, jsx_runtime_1.jsx)(control_panel_1.ControlPanel, { settings: settings, onChange: updateSettings })] })));
}
