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
exports.MapDraggableMarkers = MapDraggableMarkers;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var map_1 = require("../../../../components/map");
var control_panel_1 = require("./control-panel");
// ----------------------------------------------------------------------
function MapDraggableMarkers(_a) {
    var other = __rest(_a, []);
    var _b = (0, react_1.useState)({ latitude: 40, longitude: -100 }), marker = _b[0], setMarker = _b[1];
    var _c = (0, react_1.useState)({}), events = _c[0], logEvents = _c[1];
    var onMarkerDragStart = (0, react_1.useCallback)(function (event) {
        logEvents(function (prevEvents) { return (__assign(__assign({}, prevEvents), { onDragStart: event.lngLat })); });
    }, []);
    var onMarkerDrag = (0, react_1.useCallback)(function (event) {
        logEvents(function (prevEvents) { return (__assign(__assign({}, prevEvents), { onDrag: event.lngLat })); });
        setMarker({ longitude: event.lngLat.lng, latitude: event.lngLat.lat });
    }, []);
    var onMarkerDragEnd = (0, react_1.useCallback)(function (event) {
        logEvents(function (prevEvents) { return (__assign(__assign({}, prevEvents), { onDragEnd: event.lngLat })); });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(map_1.MapWrapper, __assign({ initialViewState: { latitude: 40, longitude: -100, zoom: 3.5 } }, other, { children: [(0, jsx_runtime_1.jsx)(map_1.MapControl, {}), (0, jsx_runtime_1.jsx)(map_1.MapMarker, { longitude: marker.longitude, latitude: marker.latitude, anchor: "bottom", draggable: true, onDragStart: onMarkerDragStart, onDrag: onMarkerDrag, onDragEnd: onMarkerDragEnd })] })), (0, jsx_runtime_1.jsx)(control_panel_1.ControlPanel, { events: events })] }));
}
