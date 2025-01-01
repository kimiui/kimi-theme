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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapView = MapView;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var paths_1 = require("lib/routes/paths");
var cities_1 = require("lib/_mock/_map/cities");
var countries_1 = require("lib/_mock/_map/countries");
var custom_breadcrumbs_1 = require("lib/components/custom-breadcrumbs");
var heatmap_1 = require("./heatmap");
var clusters_1 = require("./clusters");
var interaction_1 = require("./interaction");
var side_by_side_1 = require("./side-by-side");
var change_theme_1 = require("./change-theme");
var component_hero_1 = require("../../component-hero");
var map_markers_popups_1 = require("./map-markers-popups");
var draggable_markers_1 = require("./draggable-markers");
var viewport_animation_1 = require("./viewport-animation");
var map_geo_json_animation_1 = require("./map-geo-json-animation");
var component_template_1 = require("../../component-template");
var map_highlight_by_filter_1 = require("./map-highlight-by-filter");
// ----------------------------------------------------------------------
var StyledContainer = (0, styles_1.styled)('div')(function (_a) {
    var theme = _a.theme;
    return ({
        zIndex: 0,
        height: 480,
        overflow: 'hidden',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
    });
});
var THEMES = {
    streets: 'mapbox://styles/mapbox/streets-v11',
    outdoors: 'mapbox://styles/mapbox/outdoors-v11',
    light: 'mapbox://styles/mapbox/light-v10',
    dark: 'mapbox://styles/mapbox/dark-v10',
    satellite: 'mapbox://styles/mapbox/satellite-v9',
    satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v11',
};
var baseSettings = { minZoom: 1 };
var DEMO = [
    {
        name: 'Change theme',
        component: ((0, jsx_runtime_1.jsx)(StyledContainer, { children: (0, jsx_runtime_1.jsx)(change_theme_1.MapChangeTheme, __assign({}, baseSettings, { themes: THEMES })) })),
    },
    {
        name: 'Markers & popups',
        component: ((0, jsx_runtime_1.jsx)(StyledContainer, { children: (0, jsx_runtime_1.jsx)(map_markers_popups_1.MapMarkersPopups, __assign({}, baseSettings, { data: countries_1.countries, mapStyle: THEMES.light })) })),
    },
    {
        name: 'Draggable markers',
        component: ((0, jsx_runtime_1.jsx)(StyledContainer, { children: (0, jsx_runtime_1.jsx)(draggable_markers_1.MapDraggableMarkers, __assign({}, baseSettings, { mapStyle: THEMES.light })) })),
    },
    {
        name: 'Geojson animation',
        component: ((0, jsx_runtime_1.jsx)(StyledContainer, { children: (0, jsx_runtime_1.jsx)(map_geo_json_animation_1.MapGeoJSONAnimation, __assign({}, baseSettings, { mapStyle: THEMES.satelliteStreets })) })),
    },
    {
        name: 'clusters',
        component: ((0, jsx_runtime_1.jsx)(StyledContainer, { children: (0, jsx_runtime_1.jsx)(clusters_1.MapClusters, __assign({}, baseSettings, { mapStyle: THEMES.light })) })),
    },
    {
        name: 'Interaction',
        component: ((0, jsx_runtime_1.jsx)(StyledContainer, { children: (0, jsx_runtime_1.jsx)(interaction_1.MapInteraction, __assign({}, baseSettings, { mapStyle: THEMES.light })) })),
    },
    {
        name: 'Viewport animation',
        component: ((0, jsx_runtime_1.jsx)(StyledContainer, { children: (0, jsx_runtime_1.jsx)(viewport_animation_1.MapViewportAnimation, __assign({}, baseSettings, { data: cities_1.cities.filter(function (city) { return city.state === 'Texas'; }), mapStyle: THEMES.light })) })),
    },
    {
        name: 'Highlight by filter',
        component: ((0, jsx_runtime_1.jsx)(StyledContainer, { children: (0, jsx_runtime_1.jsx)(map_highlight_by_filter_1.MapHighlightByFilter, __assign({}, baseSettings, { mapStyle: THEMES.light })) })),
    },
    {
        name: 'Heatmap',
        component: ((0, jsx_runtime_1.jsx)(StyledContainer, { children: (0, jsx_runtime_1.jsx)(heatmap_1.MapHeatmap, __assign({}, baseSettings, { mapStyle: THEMES.light })) })),
    },
    {
        name: 'Side by side',
        component: ((0, jsx_runtime_1.jsx)(StyledContainer, { children: (0, jsx_runtime_1.jsx)(side_by_side_1.MapSideBySide, __assign({}, baseSettings)) })),
    },
];
// ----------------------------------------------------------------------
function MapView() {
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Map", links: [{ name: 'Components', href: paths_1.paths.docs.components.root }, { name: 'Map' }], moreLink: [
                        'http://visgl.github.io/react-map-gl',
                        'http://visgl.github.io/react-map-gl/examples',
                    ] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
