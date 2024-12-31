'use client';

import { useState, useEffect } from 'react';
import { Layer, Source } from 'react-map-gl';
import { useTheme } from '@mui/material/styles';
import type { MapProps, LayerProps } from 'react-map-gl';

import { MapWrapper, MapControl } from 'lib/components/map';

// ----------------------------------------------------------------------

export function MapGeoJSONAnimation({ ...other }: MapProps) {
  const theme = useTheme();

  const pointLayer: LayerProps = {
    id: 'point',
    type: 'circle',
    paint: { 'circle-radius': 10, 'circle-color': theme.palette.error.main },
  };

  const [pointData, setPointData] = useState<
    | {
        type: string;
        coordinates: number[];
      }
    | any
  >(null);

  useEffect(() => {
    const animation = window.requestAnimationFrame(() =>
      setPointData(
        pointOnCircle({
          center: [-100, 0],
          angle: Date.now() / 1000,
          radius: 20,
        })
      )
    );

    return () => window.cancelAnimationFrame(animation);
  });

  return (
    <MapWrapper
      initialViewState={{ latitude: 0, longitude: -100, zoom: 3 }}
      mapStyle="mapbox://styles/mapbox/satellite-streets-v11"
      {...other}
    >
      <MapControl />

      {pointData && (
        <Source type="geojson" data={pointData}>
          <Layer {...pointLayer} />
        </Source>
      )}
    </MapWrapper>
  );
}

// ----------------------------------------------------------------------

function pointOnCircle({
  center,
  angle,
  radius,
}: {
  center: [number, number];
  angle: number;
  radius: number;
}) {
  return {
    type: 'Point',
    coordinates: [center[0] + Math.cos(angle) * radius, center[1] + Math.sin(angle) * radius],
  };
}
