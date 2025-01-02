'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { MapMarker, MapWrapper, MapControl } from '../../../../components/map';
import { ControlPanel } from './control-panel';
// ----------------------------------------------------------------------
export function MapDraggableMarkers({ ...other }) {
    const [marker, setMarker] = useState({ latitude: 40, longitude: -100 });
    const [events, logEvents] = useState({});
    const onMarkerDragStart = useCallback((event) => {
        logEvents((prevEvents) => ({ ...prevEvents, onDragStart: event.lngLat }));
    }, []);
    const onMarkerDrag = useCallback((event) => {
        logEvents((prevEvents) => ({ ...prevEvents, onDrag: event.lngLat }));
        setMarker({ longitude: event.lngLat.lng, latitude: event.lngLat.lat });
    }, []);
    const onMarkerDragEnd = useCallback((event) => {
        logEvents((prevEvents) => ({ ...prevEvents, onDragEnd: event.lngLat }));
    }, []);
    return (_jsxs(_Fragment, { children: [_jsxs(MapWrapper, { initialViewState: { latitude: 40, longitude: -100, zoom: 3.5 }, ...other, children: [_jsx(MapControl, {}), _jsx(MapMarker, { longitude: marker.longitude, latitude: marker.latitude, anchor: "bottom", draggable: true, onDragStart: onMarkerDragStart, onDrag: onMarkerDrag, onDragEnd: onMarkerDragEnd })] }), _jsx(ControlPanel, { events: events })] }));
}
