import type { MapProps } from 'react-map-gl';
type CountryProps = {
    name: string;
    capital: string;
    latlng: number[];
    photoUrl: string;
    timezones: string[];
    country_code: string;
};
type Props = MapProps & {
    data: CountryProps[];
};
export declare function MapMarkersPopups({ data, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
