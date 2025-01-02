'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { MapWrapper, MapControl } from '../../../../components/map';
import { ControlPanel } from './control-panel';
// ----------------------------------------------------------------------
export function MapInteraction({ ...other }) {
    const [settings, setSettings] = useState({
        minZoom: 0,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 85,
        dragPan: true,
        boxZoom: true,
        keyboard: true,
        touchZoom: true,
        dragRotate: true,
        scrollZoom: true,
        touchPitch: true,
        touchRotate: true,
        doubleClickZoom: true,
        touchZoomRotate: true,
    });
    const updateSettings = useCallback((name, value) => setSettings((prevSettings) => ({ ...prevSettings, [name]: value })), []);
    return (_jsxs(MapWrapper, { ...settings, initialViewState: {
            latitude: 37.729,
            longitude: -122.36,
            zoom: 11,
            bearing: 0,
            pitch: 50,
        }, ...other, children: [_jsx(MapControl, {}), _jsx(ControlPanel, { settings: settings, onChange: updateSettings })] }));
}
