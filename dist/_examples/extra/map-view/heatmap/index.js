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
exports.MapHeatmap = MapHeatmap;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_map_gl_1 = require("react-map-gl");
var react_1 = require("react");
var map_1 = require("lib/components/map");
var map_style_1 = require("./map-style");
var control_panel_1 = require("./control-panel");
// ----------------------------------------------------------------------
function MapHeatmap(_a) {
    var other = __rest(_a, []);
    var _b = (0, react_1.useState)(true), allDays = _b[0], useAllDays = _b[1];
    var _c = (0, react_1.useState)([0, 0]), timeRange = _c[0], setTimeRange = _c[1];
    var _d = (0, react_1.useState)(0), selectedTime = _d[0], selectTime = _d[1];
    var _e = (0, react_1.useState)(), earthquakes = _e[0], setEarthQuakes = _e[1];
    (0, react_1.useEffect)(function () {
        fetch('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson')
            .then(function (resp) { return resp.json(); })
            .then(function (json) {
            var features = json.features;
            var endTime = features[0].properties.time;
            var startTime = features[features.length - 1].properties.time;
            setTimeRange([startTime, endTime]);
            setEarthQuakes(json);
            selectTime(endTime);
        })
            .catch(function (error) { return console.error('Could not load data', error); });
    }, []);
    var data = (0, react_1.useMemo)(function () { return (allDays ? earthquakes : filterFeaturesByDay(earthquakes, selectedTime)); }, [earthquakes, allDays, selectedTime]);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(map_1.MapWrapper, __assign({ initialViewState: { latitude: 40, longitude: -100, zoom: 3 } }, other, { children: data && ((0, jsx_runtime_1.jsx)(react_map_gl_1.Source, { type: "geojson", data: data, children: (0, jsx_runtime_1.jsx)(react_map_gl_1.Layer, __assign({}, map_style_1.heatmapLayer)) })) })), (0, jsx_runtime_1.jsx)(control_panel_1.ControlPanel, { startTime: timeRange[0], endTime: timeRange[1], selectedTime: selectedTime, allDays: allDays, onChangeTime: selectTime, onChangeAllDays: useAllDays })] }));
}
// ----------------------------------------------------------------------
function filterFeaturesByDay(featureCollection, time) {
    var date = new Date(time);
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var features = featureCollection === null || featureCollection === void 0 ? void 0 : featureCollection.features.filter(function (feature) {
        var _a;
        var featureDate = new Date((_a = feature.properties) === null || _a === void 0 ? void 0 : _a.time);
        return (featureDate.getFullYear() === year &&
            featureDate.getMonth() === month &&
            featureDate.getDate() === day);
    });
    return { type: 'FeatureCollection', features: features };
}
