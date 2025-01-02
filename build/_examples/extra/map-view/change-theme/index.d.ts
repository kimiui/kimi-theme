import type { MapProps } from 'react-map-gl';
type Props = MapProps & {
    themes: {
        [key: string]: string;
    };
};
export declare function MapChangeTheme({ themes, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
