'use client';

import type { MapProps, FillLayer, MapLayerMouseEvent } from 'react-map-gl';

import { Layer, Source } from 'react-map-gl';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useMemo, useState, useCallback } from 'react';
import { MapPopup, MapWrapper, MapControl } from 'kimi-theme/components/map';

// ----------------------------------------------------------------------

export function MapHighlightByFilter({ ...other }: MapProps) {
  const theme = useTheme();

  const countiesLayer: Omit<FillLayer, 'source'> = {
    id: 'counties',
    type: 'fill',
    'source-layer': 'original',
    paint: {
      'fill-outline-color': theme.palette.grey[900],
      'fill-color': theme.palette.grey[900],
      'fill-opacity': 0.12,
    },
  };

  const highlightLayer: FillLayer = {
    id: 'counties-highlighted',
    type: 'fill',
    source: 'counties',
    'source-layer': 'original',
    paint: {
      'fill-outline-color': theme.palette.error.main,
      'fill-color': theme.palette.error.main,
      'fill-opacity': 0.48,
    },
  };

  const [hoverInfo, setHoverInfo] = useState<{
    countyName: string;
    longitude: number;
    latitude: number;
  } | null>(null);

  const onHover = useCallback((event: MapLayerMouseEvent) => {
    const county = event.features && event.features[0];

    setHoverInfo({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      countyName: county && county.properties?.COUNTY,
    });
  }, []);

  const selectedCounty = (hoverInfo && hoverInfo.countyName) || '';

  const filter: any = useMemo(() => ['in', 'COUNTY', selectedCounty], [selectedCounty]);

  return (
    <MapWrapper
      initialViewState={{ latitude: 38.88, longitude: -98, zoom: 3 }}
      minZoom={2}
      onMouseMove={onHover}
      interactiveLayerIds={['counties']}
      {...other}
    >
      <MapControl />

      <Source type="vector" url="mapbox://mapbox.82pkq93d">
        <Layer beforeId="waterway-label" {...countiesLayer} />
        <Layer beforeId="waterway-label" {...highlightLayer} filter={filter} />
      </Source>

      {selectedCounty && hoverInfo && (
        <MapPopup longitude={hoverInfo.longitude} latitude={hoverInfo.latitude} closeButton={false}>
          <Typography variant="body2" sx={{ color: 'common.white' }}>
            {selectedCounty}
          </Typography>
        </MapPopup>
      )}
    </MapWrapper>
  );
}
