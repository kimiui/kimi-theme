'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Image } from '../../../components/image';
import { FlagIcon } from '../../../components/iconify';
import { MapPopup, MapMarker, MapWrapper, MapControl } from '../../../components/map';
export function MapMarkersPopups({ data, ...other }) {
    const [popupInfo, setPopupInfo] = useState(null);
    return (_jsxs(MapWrapper, { initialViewState: { zoom: 2 }, ...other, children: [_jsx(MapControl, {}), data.map((city, index) => (_jsx(MapMarker, { latitude: city.latlng[0], longitude: city.latlng[1], onClick: (event) => {
                    event.originalEvent.stopPropagation();
                    setPopupInfo(city);
                } }, `marker-${index}`))), popupInfo && (_jsxs(MapPopup, { latitude: popupInfo.latlng[0], longitude: popupInfo.latlng[1], onClose: () => setPopupInfo(null), children: [_jsxs(Box, { gap: 0.75, display: "flex", alignItems: "center", sx: { mb: 1 }, children: [_jsx(FlagIcon, { code: popupInfo.country_code }), _jsx(Typography, { variant: "subtitle2", children: popupInfo.name })] }), _jsxs(Typography, { component: "div", variant: "caption", children: ["Timezones: ", popupInfo.timezones] }), _jsxs(Typography, { component: "div", variant: "caption", children: ["Lat: ", popupInfo.latlng[0]] }), _jsxs(Typography, { component: "div", variant: "caption", children: ["Long: ", popupInfo.latlng[1]] }), _jsx(Image, { alt: popupInfo.name, src: popupInfo.photoUrl, ratio: "4/3", sx: { mt: 1, borderRadius: 1 } })] }))] }));
}
