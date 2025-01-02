import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { Popup } from 'react-map-gl';
// ----------------------------------------------------------------------
export function MapPopup({ sx, children, ...other }) {
    return (_jsx(Box, { component: Popup, anchor: "bottom", sx: sx, ...other, children: children }));
}
