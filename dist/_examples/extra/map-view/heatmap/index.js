import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Layer, Source } from 'react-map-gl';
import { useMemo, useState, useEffect } from 'react';
import { MapWrapper } from '../../../../components/map';
import { heatmapLayer } from './map-style';
import { ControlPanel } from './control-panel';
// ----------------------------------------------------------------------
export function MapHeatmap({ ...other }) {
    const [allDays, useAllDays] = useState(true);
    const [timeRange, setTimeRange] = useState([0, 0]);
    const [selectedTime, selectTime] = useState(0);
    const [earthquakes, setEarthQuakes] = useState();
    useEffect(() => {
        fetch('https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson')
            .then((resp) => resp.json())
            .then((json) => {
            const { features } = json;
            const endTime = features[0].properties.time;
            const startTime = features[features.length - 1].properties.time;
            setTimeRange([startTime, endTime]);
            setEarthQuakes(json);
            selectTime(endTime);
        })
            .catch((error) => console.error('Could not load data', error));
    }, []);
    const data = useMemo(() => (allDays ? earthquakes : filterFeaturesByDay(earthquakes, selectedTime)), [earthquakes, allDays, selectedTime]);
    return (_jsxs(_Fragment, { children: [_jsx(MapWrapper, { initialViewState: { latitude: 40, longitude: -100, zoom: 3 }, ...other, children: data && (_jsx(Source, { type: "geojson", data: data, children: _jsx(Layer, { ...heatmapLayer }) })) }), _jsx(ControlPanel, { startTime: timeRange[0], endTime: timeRange[1], selectedTime: selectedTime, allDays: allDays, onChangeTime: selectTime, onChangeAllDays: useAllDays })] }));
}
// ----------------------------------------------------------------------
function filterFeaturesByDay(featureCollection, time) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const features = featureCollection?.features.filter((feature) => {
        const featureDate = new Date(feature.properties?.time);
        return (featureDate.getFullYear() === year &&
            featureDate.getMonth() === month &&
            featureDate.getDate() === day);
    });
    return { type: 'FeatureCollection', features };
}
