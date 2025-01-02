'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useCallback } from 'react';
import { MapWrapper, MapControl } from '../../../../components/map';
import { ControlPanel } from './control-panel';
export function MapViewportAnimation({ data, ...other }) {
    const mapRef = useRef(null);
    const [selectedCity, setSelectedCity] = useState(data[2].city);
    const onSelectCity = useCallback((event, { longitude, latitude, }) => {
        setSelectedCity(event.target.value);
        mapRef.current?.flyTo({ center: [longitude, latitude], duration: 2000 });
    }, []);
    return (_jsxs(MapWrapper, { initialViewState: {
            latitude: 37.7751,
            longitude: -122.4193,
            zoom: 11,
            bearing: 0,
            pitch: 0,
        }, ref: mapRef, ...other, children: [_jsx(MapControl, {}), _jsx(ControlPanel, { data: data, selectedCity: selectedCity, onSelectCity: onSelectCity })] }));
}
