import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Typography from '@mui/material/Typography';
import { StyledControlPanel } from '../styles';
// ----------------------------------------------------------------------
const EVENT_NAMES = ['onDragStart', 'onDrag', 'onDragEnd'];
function round(value) {
    return (Math.round(value * 1e5) / 1e5).toFixed(5);
}
export function ControlPanel({ events = {} }) {
    return (_jsx(StyledControlPanel, { children: EVENT_NAMES.map((event) => {
            const lngLat = events[event];
            return (_jsxs("div", { children: [_jsxs(Typography, { variant: "subtitle2", sx: { color: 'common.white' }, children: [event, ":"] }), lngLat ? (_jsx(Typography, { variant: "subtitle2", sx: { color: 'primary.main' }, children: `${round(lngLat.lng)}, ${round(lngLat.lat)}` })) : (_jsx(Typography, { variant: "body2", component: "em", sx: { color: 'error.main' }, children: "null" }))] }, event));
        }) }));
}
