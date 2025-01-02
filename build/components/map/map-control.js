import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { ScaleControl, GeolocateControl, NavigationControl, FullscreenControl } from 'react-map-gl';
export function MapControl({ hideScale, hideGeolocate, hideFullscreen, hideNavigation }) {
    return (_jsxs(_Fragment, { children: [!hideGeolocate && (_jsx(GeolocateControl, { position: "top-left", positionOptions: { enableHighAccuracy: true } })), !hideFullscreen && _jsx(FullscreenControl, { position: "top-left" }), !hideScale && _jsx(ScaleControl, { position: "bottom-left" }), !hideNavigation && _jsx(NavigationControl, { position: "bottom-left" })] }));
}
