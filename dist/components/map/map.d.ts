import type { MapRef } from "react-map-gl";
export declare const MapWrapper: import("react").ForwardRefExoticComponent<{
    transformRequest?: import("mapbox-gl").RequestTransformFunction;
    config?: {
        [key: string]: import("mapbox-gl").ConfigSpecification;
    };
    hash?: boolean | string;
    accessToken?: string;
    zoom?: number;
    scrollZoom?: boolean | {
        around?: "center";
    };
    boxZoom?: boolean;
    dragRotate?: boolean;
    dragPan?: boolean | {
        linearity?: number;
        easing?: (t: number) => number;
        deceleration?: number;
        maxSpeed?: number;
    };
    keyboard?: boolean;
    doubleClickZoom?: boolean;
    touchZoomRotate?: boolean | {
        around?: "center";
    };
    touchPitch?: boolean | {
        around?: "center";
    };
    repaint?: boolean;
    interactive?: boolean;
    bearingSnap?: number;
    clickTolerance?: number;
    pitchWithRotate?: boolean;
    attributionControl?: boolean;
    customAttribution?: string | Array<string>;
    logoPosition?: import("mapbox-gl").ControlPosition;
    failIfMajorPerformanceCaveat?: boolean;
    preserveDrawingBuffer?: boolean;
    antialias?: boolean;
    refreshExpiredTiles?: boolean;
    maxBounds?: import("mapbox-gl").LngLatBoundsLike;
    minZoom?: number;
    maxZoom?: number;
    minPitch?: number;
    maxPitch?: number;
    cooperativeGestures?: boolean;
    trackResize?: boolean;
    bearing?: number;
    pitch?: number;
    projection?: import("mapbox-gl").ProjectionSpecification | string;
    renderWorldCopies?: boolean;
    minTileCacheSize?: number;
    maxTileCacheSize?: number;
    testMode?: boolean;
    locale?: Partial<{
        "AttributionControl.ToggleAttribution": string;
        "FullscreenControl.Enter": string;
        "FullscreenControl.Exit": string;
        "GeolocateControl.FindMyLocation": string;
        "GeolocateControl.LocationNotAvailable": string;
        "LogoControl.Title": string;
        "Map.Title": string;
        "NavigationControl.ResetBearing": string;
        "NavigationControl.ZoomIn": string;
        "NavigationControl.ZoomOut": string;
        "ScrollZoomBlocker.CtrlMessage": string;
        "ScrollZoomBlocker.CmdMessage": string;
        "TouchPanBlocker.Message": string;
    }>;
    language?: string;
    worldview?: string;
    crossSourceCollisions?: boolean;
    collectResourceTiming?: boolean;
    respectPrefersReducedMotion?: boolean;
    contextCreateOptions?: {
        extTextureFilterAnisotropicForceOff?: boolean;
        extTextureFloatLinearForceOff?: boolean;
        extStandardDerivativesForceOff?: boolean;
    };
    devtools?: boolean;
    precompilePrograms?: boolean;
    fadeDuration?: number;
    localFontFamily?: string;
    localIdeographFontFamily?: string;
    performanceMetricsCollection?: boolean;
    tessellationStep?: number;
} & Partial<import("react-map-gl").ViewState> & import("react-map-gl/dist/esm/types/events-mapbox").MapCallbacks & {
    mapboxAccessToken?: string;
    initialViewState?: Partial<import("react-map-gl").ViewState> & {
        bounds?: import("react-map-gl/dist/esm/types").LngLatBoundsLike;
        fitBoundsOptions?: {
            offset?: import("react-map-gl/dist/esm/types").PointLike;
            minZoom?: number;
            maxZoom?: number;
            padding?: number | import("react-map-gl/dist/esm/types").PaddingOptions;
        };
    };
    gl?: WebGLRenderingContext;
    viewState?: import("react-map-gl").ViewState & {
        width: number;
        height: number;
    };
    mapStyle?: string | import("mapbox-gl").StyleSpecification | import("react-map-gl/dist/esm/types").ImmutableLike<import("mapbox-gl").StyleSpecification>;
    styleDiffing?: boolean;
    fog?: import("mapbox-gl").FogSpecification;
    light?: import("mapbox-gl").LightSpecification;
    terrain?: import("mapbox-gl").TerrainSpecification;
    interactiveLayerIds?: string[];
    cursor?: string;
} & import("react-map-gl/dist/esm/utils/set-globals").GlobalSettings & {
    mapLib?: import("react-map-gl").MapLib<import("mapbox-gl").Map> | Promise<import("react-map-gl").MapLib<import("mapbox-gl").Map>>;
    reuseMaps?: boolean;
    id?: string;
    style?: import("react").CSSProperties;
    children?: any;
} & import("react").RefAttributes<MapRef>>;
