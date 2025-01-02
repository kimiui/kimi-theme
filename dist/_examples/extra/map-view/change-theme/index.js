'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback } from 'react';
import { MapWrapper, MapControl } from '../../../../components/map';
import { ControlPanel } from './control-panel';
export function MapChangeTheme({ themes, ...other }) {
    const [selectTheme, setSelectTheme] = useState('outdoors');
    const handleChangeTheme = useCallback((value) => setSelectTheme(value), []);
    return (_jsxs(_Fragment, { children: [_jsx(MapWrapper, { initialViewState: {
                    latitude: 37.785164,
                    longitude: -100,
                    zoom: 3.5,
                    bearing: 0,
                    pitch: 0,
                }, mapStyle: themes?.[selectTheme], ...other, children: _jsx(MapControl, {}) }), _jsx(ControlPanel, { themes: themes, selectTheme: selectTheme, onChangeTheme: handleChangeTheme })] }));
}
