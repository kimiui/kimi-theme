type MapSettings = {
    minZoom: number;
    maxZoom: number;
    minPitch: number;
    maxPitch: number;
    dragPan: boolean;
    boxZoom: boolean;
    keyboard: boolean;
    touchZoom: boolean;
    dragRotate: boolean;
    scrollZoom: boolean;
    touchPitch: boolean;
    touchRotate: boolean;
    doubleClickZoom: boolean;
    touchZoomRotate: boolean;
};
type MapSettingKeys = 'dragPan' | 'dragRotate' | 'scrollZoom' | 'touchZoom' | 'touchRotate' | 'keyboard' | 'doubleClickZoom' | 'minZoom' | 'maxZoom' | 'minPitch' | 'maxPitch';
type Props = {
    settings: MapSettings;
    onChange: (name: MapSettingKeys, value: boolean | number) => void;
};
export declare function ControlPanel({ settings, onChange }: Props): import("react/jsx-runtime").JSX.Element;
export {};
