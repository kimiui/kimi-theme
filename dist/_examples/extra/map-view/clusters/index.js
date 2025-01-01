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
exports.MapClusters = MapClusters;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_map_gl_1 = require("react-map-gl");
var map_1 = require("../../../../components/map");
var layers_1 = require("./layers");
// ----------------------------------------------------------------------
function MapClusters(_a) {
    var other = __rest(_a, []);
    var mapRef = (0, react_1.useRef)(null);
    var onClick = function (event) {
        var _a, _b, _c;
        var feature = (_a = event.features) === null || _a === void 0 ? void 0 : _a[0];
        var clusterId = (_b = feature === null || feature === void 0 ? void 0 : feature.properties) === null || _b === void 0 ? void 0 : _b.cluster_id;
        var mapboxSource = (_c = mapRef.current) === null || _c === void 0 ? void 0 : _c.getSource('earthquakes');
        mapboxSource.getClusterExpansionZoom(clusterId, function (error, zoom) {
            var _a;
            if (error) {
                return;
            }
            if ((feature === null || feature === void 0 ? void 0 : feature.geometry.type) === 'Point') {
                (_a = mapRef.current) === null || _a === void 0 ? void 0 : _a.easeTo({
                    center: feature === null || feature === void 0 ? void 0 : feature.geometry.coordinates,
                    zoom: Number.isNaN(zoom) ? 3 : zoom,
                    duration: 500,
                });
            }
        });
    };
    return ((0, jsx_runtime_1.jsx)(map_1.MapWrapper, __assign({ initialViewState: { latitude: 40.67, longitude: -103.59, zoom: 3 }, interactiveLayerIds: [layers_1.clusterLayer.id || ''], onClick: onClick, ref: mapRef }, other, { children: (0, jsx_runtime_1.jsxs)(react_map_gl_1.Source, { id: "earthquakes", type: "geojson", data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson", cluster: true, clusterMaxZoom: 14, clusterRadius: 50, children: [(0, jsx_runtime_1.jsx)(react_map_gl_1.Layer, __assign({}, layers_1.clusterLayer)), (0, jsx_runtime_1.jsx)(react_map_gl_1.Layer, __assign({}, layers_1.clusterCountLayer)), (0, jsx_runtime_1.jsx)(react_map_gl_1.Layer, __assign({}, layers_1.unclusteredPointLayer))] }) })));
}
