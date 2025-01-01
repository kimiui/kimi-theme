"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapControl = MapControl;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_map_gl_1 = require("react-map-gl");
function MapControl(_a) {
    var hideScale = _a.hideScale, hideGeolocate = _a.hideGeolocate, hideFullscreen = _a.hideFullscreen, hideNavigation = _a.hideNavigation;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [!hideGeolocate && ((0, jsx_runtime_1.jsx)(react_map_gl_1.GeolocateControl, { position: "top-left", positionOptions: { enableHighAccuracy: true } })), !hideFullscreen && (0, jsx_runtime_1.jsx)(react_map_gl_1.FullscreenControl, { position: "top-left" }), !hideScale && (0, jsx_runtime_1.jsx)(react_map_gl_1.ScaleControl, { position: "bottom-left" }), !hideNavigation && (0, jsx_runtime_1.jsx)(react_map_gl_1.NavigationControl, { position: "bottom-left" })] }));
}
