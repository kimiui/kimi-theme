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
exports.MapSideBySide = MapSideBySide;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var map_1 = require("lib/components/map");
var control_panel_1 = require("./control-panel");
// ----------------------------------------------------------------------
var LeftMapStyle = {
    position: 'absolute',
    width: '50%',
    height: '100%',
};
var RightMapStyle = {
    position: 'absolute',
    left: '50%',
    width: '50%',
    height: '100%',
};
// ----------------------------------------------------------------------
function MapSideBySide(_a) {
    var other = __rest(_a, []);
    var _b = (0, react_1.useState)({
        longitude: -122.43,
        latitude: 37.78,
        zoom: 12,
        pitch: 30,
    }), viewState = _b[0], setViewState = _b[1];
    var _c = (0, react_1.useState)('side-by-side'), mode = _c[0], setMode = _c[1];
    var _d = (0, react_1.useState)('left'), activeMap = _d[0], setActiveMap = _d[1];
    var onLeftMoveStart = (0, react_1.useCallback)(function () { return setActiveMap('left'); }, []);
    var onRightMoveStart = (0, react_1.useCallback)(function () { return setActiveMap('right'); }, []);
    var onMove = (0, react_1.useCallback)(function (event) { return setViewState(event.viewState); }, []);
    var width = typeof window === 'undefined' ? 100 : window.innerWidth;
    var leftMapPadding = (0, react_1.useMemo)(function () { return ({
        left: mode === 'split-screen' ? width / 2 : 0,
        top: 0,
        right: 0,
        bottom: 0,
    }); }, [width, mode]);
    var rightMapPadding = (0, react_1.useMemo)(function () { return ({
        right: mode === 'split-screen' ? width / 2 : 0,
        top: 0,
        left: 0,
        bottom: 0,
    }); }, [width, mode]);
    var handleChangeMode = function (event, newMode) {
        if (newMode !== null) {
            setMode(newMode);
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(map_1.MapWrapper, __assign({ id: "left-map" }, viewState, { padding: leftMapPadding, onMoveStart: onLeftMoveStart, onMove: function (event) {
                    if (activeMap === 'left') {
                        onMove(event);
                    }
                }, style: LeftMapStyle, mapStyle: "mapbox://styles/mapbox/light-v10" }, other)), (0, jsx_runtime_1.jsx)(map_1.MapWrapper, __assign({ id: "right-map" }, viewState, { padding: rightMapPadding, onMoveStart: onRightMoveStart, onMove: function (event) {
                    if (activeMap === 'right') {
                        onMove(event);
                    }
                }, style: RightMapStyle, mapStyle: "mapbox://styles/mapbox/dark-v10" }, other)), (0, jsx_runtime_1.jsx)(control_panel_1.ControlPanel, { mode: mode, onModeChange: handleChangeMode })] }));
}
