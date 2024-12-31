'use client';

import type { MapProps } from 'react-map-gl';
import { useState, useCallback } from 'react';

import { MapWrapper, MapControl } from 'lib/components/map';

import { ControlPanel } from './control-panel';

// ----------------------------------------------------------------------

type Props = MapProps & {
  themes: {
    [key: string]: string;
  };
};

export function MapChangeTheme({ themes, ...other }: Props) {
  const [selectTheme, setSelectTheme] = useState('outdoors');

  const handleChangeTheme = useCallback((value: string) => setSelectTheme(value), []);

  return (
    <>
      <MapWrapper
        initialViewState={{
          latitude: 37.785164,
          longitude: -100,
          zoom: 3.5,
          bearing: 0,
          pitch: 0,
        }}
        mapStyle={themes?.[selectTheme]}
        {...other}
      >
        <MapControl />
      </MapWrapper>

      <ControlPanel themes={themes} selectTheme={selectTheme} onChangeTheme={handleChangeTheme} />
    </>
  );
}
