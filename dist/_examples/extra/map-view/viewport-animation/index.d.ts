import type { MapProps } from 'react-map-gl';
import type { CityProps } from './control-panel';
type Props = MapProps & {
    data: CityProps[];
};
export declare function MapViewportAnimation({ data, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
