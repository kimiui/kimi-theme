'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Layer, Source } from 'react-map-gl';
import { useTheme } from '@mui/material/styles';
import { MapWrapper, MapControl } from '../../../components/map';
// ----------------------------------------------------------------------
export function MapGeoJSONAnimation({ ...other }) {
    const theme = useTheme();
    const pointLayer = {
        id: 'point',
        type: 'circle',
        paint: { 'circle-radius': 10, 'circle-color': theme.palette.error.main },
    };
    const [pointData, setPointData] = useState(null);
    useEffect(() => {
        const animation = window.requestAnimationFrame(() => setPointData(pointOnCircle({
            center: [-100, 0],
            angle: Date.now() / 1000,
            radius: 20,
        })));
        return () => window.cancelAnimationFrame(animation);
    });
    return (_jsxs(MapWrapper, { initialViewState: { latitude: 0, longitude: -100, zoom: 3 }, mapStyle: "mapbox://styles/mapbox/satellite-streets-v11", ...other, children: [_jsx(MapControl, {}), pointData && (_jsx(Source, { type: "geojson", data: pointData, children: _jsx(Layer, { ...pointLayer }) }))] }));
}
// ----------------------------------------------------------------------
function pointOnCircle({ center, angle, radius, }) {
    return {
        type: 'Point',
        coordinates: [center[0] + Math.cos(angle) * radius, center[1] + Math.sin(angle) * radius],
    };
}
