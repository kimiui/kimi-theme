import type { MapRef, MapProps } from "react-map-gl";

import MapGL from "react-map-gl";
import { forwardRef } from "react";

// ----------------------------------------------------------------------

export const MapWrapper = forwardRef<MapRef, MapProps>(({ ...other }, ref) => {
  const {
    projection,
    logoPosition,
    terrain,
  }: { projection?: any; logoPosition?: any; terrain?: any } = other;

  return (
    <MapGL
      ref={ref}
      projection={projection}
      logoPosition={logoPosition}
      terrain={terrain}
      {...other}
    />
  );
});
