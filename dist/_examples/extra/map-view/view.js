'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { styled } from '@mui/material/styles';
import { paths } from '../../../routes/paths';
import { cities as CITIES } from '../../../_mock/_map/cities';
import { countries as COUNTRIES } from '../../../_mock/_map/countries';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { MapHeatmap } from './heatmap';
import { MapClusters } from './clusters';
import { MapInteraction } from './interaction';
import { MapSideBySide } from './side-by-side';
import { MapChangeTheme } from './change-theme';
import { ComponentHero } from '../../component-hero';
import { MapMarkersPopups } from './map-markers-popups';
import { MapDraggableMarkers } from './draggable-markers';
import { MapViewportAnimation } from './viewport-animation';
import { MapGeoJSONAnimation } from './map-geo-json-animation';
import { ScrollToViewTemplate } from '../../component-template';
import { MapHighlightByFilter } from './map-highlight-by-filter';
// ----------------------------------------------------------------------
const StyledContainer = styled('div')(({ theme }) => ({
    zIndex: 0,
    height: 480,
    overflow: 'hidden',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
}));
const THEMES = {
    streets: 'mapbox://styles/mapbox/streets-v11',
    outdoors: 'mapbox://styles/mapbox/outdoors-v11',
    light: 'mapbox://styles/mapbox/light-v10',
    dark: 'mapbox://styles/mapbox/dark-v10',
    satellite: 'mapbox://styles/mapbox/satellite-v9',
    satelliteStreets: 'mapbox://styles/mapbox/satellite-streets-v11',
};
const baseSettings = { minZoom: 1 };
const DEMO = [
    {
        name: 'Change theme',
        component: (_jsx(StyledContainer, { children: _jsx(MapChangeTheme, { ...baseSettings, themes: THEMES }) })),
    },
    {
        name: 'Markers & popups',
        component: (_jsx(StyledContainer, { children: _jsx(MapMarkersPopups, { ...baseSettings, data: COUNTRIES, mapStyle: THEMES.light }) })),
    },
    {
        name: 'Draggable markers',
        component: (_jsx(StyledContainer, { children: _jsx(MapDraggableMarkers, { ...baseSettings, mapStyle: THEMES.light }) })),
    },
    {
        name: 'Geojson animation',
        component: (_jsx(StyledContainer, { children: _jsx(MapGeoJSONAnimation, { ...baseSettings, mapStyle: THEMES.satelliteStreets }) })),
    },
    {
        name: 'clusters',
        component: (_jsx(StyledContainer, { children: _jsx(MapClusters, { ...baseSettings, mapStyle: THEMES.light }) })),
    },
    {
        name: 'Interaction',
        component: (_jsx(StyledContainer, { children: _jsx(MapInteraction, { ...baseSettings, mapStyle: THEMES.light }) })),
    },
    {
        name: 'Viewport animation',
        component: (_jsx(StyledContainer, { children: _jsx(MapViewportAnimation, { ...baseSettings, data: CITIES.filter((city) => city.state === 'Texas'), mapStyle: THEMES.light }) })),
    },
    {
        name: 'Highlight by filter',
        component: (_jsx(StyledContainer, { children: _jsx(MapHighlightByFilter, { ...baseSettings, mapStyle: THEMES.light }) })),
    },
    {
        name: 'Heatmap',
        component: (_jsx(StyledContainer, { children: _jsx(MapHeatmap, { ...baseSettings, mapStyle: THEMES.light }) })),
    },
    {
        name: 'Side by side',
        component: (_jsx(StyledContainer, { children: _jsx(MapSideBySide, { ...baseSettings }) })),
    },
];
// ----------------------------------------------------------------------
export function MapView() {
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Map", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Map' }], moreLink: [
                        'http://visgl.github.io/react-map-gl',
                        'http://visgl.github.io/react-map-gl/examples',
                    ] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
