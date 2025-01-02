'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Layer, Source } from 'react-map-gl';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useMemo, useState, useCallback } from 'react';
import { MapPopup, MapWrapper, MapControl } from '../../../components/map';
// ----------------------------------------------------------------------
export function MapHighlightByFilter({ ...other }) {
    const theme = useTheme();
    const countiesLayer = {
        id: 'counties',
        type: 'fill',
        'source-layer': 'original',
        paint: {
            'fill-outline-color': theme.palette.grey[900],
            'fill-color': theme.palette.grey[900],
            'fill-opacity': 0.12,
        },
    };
    const highlightLayer = {
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
    const [hoverInfo, setHoverInfo] = useState(null);
    const onHover = useCallback((event) => {
        const county = event.features && event.features[0];
        setHoverInfo({
            longitude: event.lngLat.lng,
            latitude: event.lngLat.lat,
            countyName: county && county.properties?.COUNTY,
        });
    }, []);
    const selectedCounty = (hoverInfo && hoverInfo.countyName) || '';
    const filter = useMemo(() => ['in', 'COUNTY', selectedCounty], [selectedCounty]);
    return (_jsxs(MapWrapper, { initialViewState: { latitude: 38.88, longitude: -98, zoom: 3 }, minZoom: 2, onMouseMove: onHover, interactiveLayerIds: ['counties'], ...other, children: [_jsx(MapControl, {}), _jsxs(Source, { type: "vector", url: "mapbox://mapbox.82pkq93d", children: [_jsx(Layer, { beforeId: "waterway-label", ...countiesLayer }), _jsx(Layer, { beforeId: "waterway-label", ...highlightLayer, filter: filter })] }), selectedCounty && hoverInfo && (_jsx(MapPopup, { longitude: hoverInfo.longitude, latitude: hoverInfo.latitude, closeButton: false, children: _jsx(Typography, { variant: "body2", sx: { color: 'common.white' }, children: selectedCounty }) }))] }));
}
