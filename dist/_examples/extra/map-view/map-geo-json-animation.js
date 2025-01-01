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
exports.MapGeoJSONAnimation = MapGeoJSONAnimation;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_map_gl_1 = require("react-map-gl");
var styles_1 = require("@mui/material/styles");
var map_1 = require("../../../components/map");
// ----------------------------------------------------------------------
function MapGeoJSONAnimation(_a) {
    var other = __rest(_a, []);
    var theme = (0, styles_1.useTheme)();
    var pointLayer = {
        id: 'point',
        type: 'circle',
        paint: { 'circle-radius': 10, 'circle-color': theme.palette.error.main },
    };
    var _b = (0, react_1.useState)(null), pointData = _b[0], setPointData = _b[1];
    (0, react_1.useEffect)(function () {
        var animation = window.requestAnimationFrame(function () {
            return setPointData(pointOnCircle({
                center: [-100, 0],
                angle: Date.now() / 1000,
                radius: 20,
            }));
        });
        return function () { return window.cancelAnimationFrame(animation); };
    });
    return ((0, jsx_runtime_1.jsxs)(map_1.MapWrapper, __assign({ initialViewState: { latitude: 0, longitude: -100, zoom: 3 }, mapStyle: "mapbox://styles/mapbox/satellite-streets-v11" }, other, { children: [(0, jsx_runtime_1.jsx)(map_1.MapControl, {}), pointData && ((0, jsx_runtime_1.jsx)(react_map_gl_1.Source, { type: "geojson", data: pointData, children: (0, jsx_runtime_1.jsx)(react_map_gl_1.Layer, __assign({}, pointLayer)) }))] })));
}
// ----------------------------------------------------------------------
function pointOnCircle(_a) {
    var center = _a.center, angle = _a.angle, radius = _a.radius;
    return {
        type: 'Point',
        coordinates: [center[0] + Math.cos(angle) * radius, center[1] + Math.sin(angle) * radius],
    };
}
