import { jsx as _jsx } from "react/jsx-runtime";
import MapGL from "react-map-gl";
import { forwardRef } from "react";
// ----------------------------------------------------------------------
export const MapWrapper = forwardRef(({ ...other }, ref) => {
    const { projection, logoPosition, terrain, } = other;
    return (_jsx(MapGL, { ref: ref, projection: projection, logoPosition: logoPosition, terrain: terrain, ...other }));
});
