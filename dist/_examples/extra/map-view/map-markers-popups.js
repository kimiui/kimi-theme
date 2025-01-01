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
exports.MapMarkersPopups = MapMarkersPopups;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
var image_1 = require("../../../components/image");
var iconify_1 = require("../../../components/iconify");
var map_1 = require("../../../components/map");
function MapMarkersPopups(_a) {
    var data = _a.data, other = __rest(_a, ["data"]);
    var _b = (0, react_1.useState)(null), popupInfo = _b[0], setPopupInfo = _b[1];
    return ((0, jsx_runtime_1.jsxs)(map_1.MapWrapper, __assign({ initialViewState: { zoom: 2 } }, other, { children: [(0, jsx_runtime_1.jsx)(map_1.MapControl, {}), data.map(function (city, index) { return ((0, jsx_runtime_1.jsx)(map_1.MapMarker, { latitude: city.latlng[0], longitude: city.latlng[1], onClick: function (event) {
                    event.originalEvent.stopPropagation();
                    setPopupInfo(city);
                } }, "marker-".concat(index))); }), popupInfo && ((0, jsx_runtime_1.jsxs)(map_1.MapPopup, { latitude: popupInfo.latlng[0], longitude: popupInfo.latlng[1], onClose: function () { return setPopupInfo(null); }, children: [(0, jsx_runtime_1.jsxs)(Box_1.default, { gap: 0.75, display: "flex", alignItems: "center", sx: { mb: 1 }, children: [(0, jsx_runtime_1.jsx)(iconify_1.FlagIcon, { code: popupInfo.country_code }), (0, jsx_runtime_1.jsx)(Typography_1.default, { variant: "subtitle2", children: popupInfo.name })] }), (0, jsx_runtime_1.jsxs)(Typography_1.default, { component: "div", variant: "caption", children: ["Timezones: ", popupInfo.timezones] }), (0, jsx_runtime_1.jsxs)(Typography_1.default, { component: "div", variant: "caption", children: ["Lat: ", popupInfo.latlng[0]] }), (0, jsx_runtime_1.jsxs)(Typography_1.default, { component: "div", variant: "caption", children: ["Long: ", popupInfo.latlng[1]] }), (0, jsx_runtime_1.jsx)(image_1.Image, { alt: popupInfo.name, src: popupInfo.photoUrl, ratio: "4/3", sx: { mt: 1, borderRadius: 1 } })] }))] })));
}
