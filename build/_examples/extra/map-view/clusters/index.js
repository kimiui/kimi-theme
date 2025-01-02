'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { Layer, Source } from 'react-map-gl';
import { MapWrapper } from '../../../../components/map';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './layers';
// ----------------------------------------------------------------------
export function MapClusters({ ...other }) {
    const mapRef = useRef(null);
    const onClick = (event) => {
        const feature = event.features?.[0];
        const clusterId = feature?.properties?.cluster_id;
        const mapboxSource = mapRef.current?.getSource('earthquakes');
        mapboxSource.getClusterExpansionZoom(clusterId, (error, zoom) => {
            if (error) {
                return;
            }
            if (feature?.geometry.type === 'Point') {
                mapRef.current?.easeTo({
                    center: feature?.geometry.coordinates,
                    zoom: Number.isNaN(zoom) ? 3 : zoom,
                    duration: 500,
                });
            }
        });
    };
    return (_jsx(MapWrapper, { initialViewState: { latitude: 40.67, longitude: -103.59, zoom: 3 }, interactiveLayerIds: [clusterLayer.id || ''], onClick: onClick, ref: mapRef, ...other, children: _jsxs(Source, { id: "earthquakes", type: "geojson", data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson", cluster: true, clusterMaxZoom: 14, clusterRadius: 50, children: [_jsx(Layer, { ...clusterLayer }), _jsx(Layer, { ...clusterCountLayer }), _jsx(Layer, { ...unclusteredPointLayer })] }) }));
}
