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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapHighlightByFilter = MapHighlightByFilter;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_map_gl_1 = require("react-map-gl");
var styles_1 = require("@mui/material/styles");
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var react_1 = require("react");
var map_1 = require("../../../components/map");
// ----------------------------------------------------------------------
function MapHighlightByFilter(_a) {
    var other = __rest(_a, []);
    var theme = (0, styles_1.useTheme)();
    var countiesLayer = {
        id: 'counties',
        type: 'fill',
        'source-layer': 'original',
        paint: {
            'fill-outline-color': theme.palette.grey[900],
            'fill-color': theme.palette.grey[900],
            'fill-opacity': 0.12,
        },
    };
    var highlightLayer = {
        id: 'counties-highlighted',
        type: 'fill',
        source: 'counties',
        'source-layer': 'original',
        paint: {
            'fill-outline-color': theme.palette.error.main,
            'fill-color': theme.palette.error.main,
            'fill-opacity': 0.48,
        },
    };
    var _b = (0, react_1.useState)(null), hoverInfo = _b[0], setHoverInfo = _b[1];
    var onHover = (0, react_1.useCallback)(function (event) {
        var _a;
        var county = event.features && event.features[0];
        setHoverInfo({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat,
            countyName: county && ((_a = county.properties) === null || _a === void 0 ? void 0 : _a.COUNTY),
        });
    }, []);
    var selectedCounty = (hoverInfo && hoverInfo.countyName) || '';
    var filter = (0, react_1.useMemo)(function () { return ['in', 'COUNTY', selectedCounty]; }, [selectedCounty]);
    return ((0, jsx_runtime_1.jsxs)(map_1.MapWrapper, __assign({ initialViewState: { latitude: 38.88, longitude: -98, zoom: 3 }, minZoom: 2, onMouseMove: onHover, interactiveLayerIds: ['counties'] }, other, { children: [(0, jsx_runtime_1.jsx)(map_1.MapControl, {}), (0, jsx_runtime_1.jsxs)(react_map_gl_1.Source, { type: "vector", url: "mapbox://mapbox.82pkq93d", children: [(0, jsx_runtime_1.jsx)(react_map_gl_1.Layer, __assign({ beforeId: "waterway-label" }, countiesLayer)), (0, jsx_runtime_1.jsx)(react_map_gl_1.Layer, __assign({ beforeId: "waterway-label" }, highlightLayer, { filter: filter }))] }), selectedCounty && hoverInfo && ((0, jsx_runtime_1.jsx)(map_1.MapPopup, { longitude: hoverInfo.longitude, latitude: hoverInfo.latitude, closeButton: false, children: (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "body2", sx: { color: 'common.white' }, children: selectedCounty }) }))] })));
}
