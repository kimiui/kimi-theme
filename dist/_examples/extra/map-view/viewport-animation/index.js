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
exports.MapViewportAnimation = MapViewportAnimation;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var map_1 = require("lib/components/map");
var control_panel_1 = require("./control-panel");
function MapViewportAnimation(_a) {
    var data = _a.data, other = __rest(_a, ["data"]);
    var mapRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)(data[2].city), selectedCity = _b[0], setSelectedCity = _b[1];
    var onSelectCity = (0, react_1.useCallback)(function (event, _a) {
        var _b;
        var longitude = _a.longitude, latitude = _a.latitude;
        setSelectedCity(event.target.value);
        (_b = mapRef.current) === null || _b === void 0 ? void 0 : _b.flyTo({ center: [longitude, latitude], duration: 2000 });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(map_1.MapWrapper, __assign({ initialViewState: {
            latitude: 37.7751,
            longitude: -122.4193,
            zoom: 11,
            bearing: 0,
            pitch: 0,
        }, ref: mapRef }, other, { children: [(0, jsx_runtime_1.jsx)(map_1.MapControl, {}), (0, jsx_runtime_1.jsx)(control_panel_1.ControlPanel, { data: data, selectedCity: selectedCity, onSelectCity: onSelectCity })] })));
}
