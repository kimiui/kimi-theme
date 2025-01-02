import type { MapRef } from "react-map-gl";
export declare const MapWrapper: import("react").ForwardRefExoticComponent<{
    zoom?: number | undefined;
    hash?: boolean | string | undefined;
    scrollZoom?: (boolean | {
        around?: "center";
    }) | undefined;
    boxZoom?: boolean | undefined;
    dragRotate?: boolean | undefined;
    dragPan?: (boolean | {
        linearity?: number;
        easing?: (t: number) => number;
        deceleration?: number;
        maxSpeed?: number;
    }) | undefined;
    keyboard?: boolean | undefined;
    doubleClickZoom?: boolean | undefined;
    touchZoomRotate?: (boolean | {
        around?: "center";
    }) | undefined;
    touchPitch?: (boolean | {
        around?: "center";
    }) | undefined;
    repaint?: boolean | undefined;
    config?: {
        [key: string]: import("mapbox-gl").ConfigSpecification;
    } | undefined;
    interactive?: boolean | undefined;
    bearingSnap?: number | undefined;
    clickTolerance?: number | undefined;
    pitchWithRotate?: boolean | undefined;
    attributionControl?: boolean | undefined;
    customAttribution?: (string | Array<string>) | undefined;
    logoPosition?: import("mapbox-gl").ControlPosition | undefined;
    failIfMajorPerformanceCaveat?: boolean | undefined;
    preserveDrawingBuffer?: boolean | undefined;
    antialias?: boolean | undefined;
    refreshExpiredTiles?: boolean | undefined;
    maxBounds?: import("mapbox-gl").LngLatBoundsLike | undefined;
    minZoom?: number | undefined;
    maxZoom?: number | undefined;
    minPitch?: number | undefined;
    maxPitch?: number | undefined;
    cooperativeGestures?: boolean | undefined;
    trackResize?: boolean | undefined;
    bearing?: number | undefined;
    pitch?: number | undefined;
    projection?: (import("mapbox-gl").ProjectionSpecification | string) | undefined;
    renderWorldCopies?: boolean | undefined;
    minTileCacheSize?: number | undefined;
    maxTileCacheSize?: number | undefined;
    transformRequest?: import("mapbox-gl").RequestTransformFunction | undefined;
    accessToken?: string | undefined;
    testMode?: boolean | undefined;
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
    }> | undefined;
    language?: string | undefined;
    worldview?: string | undefined;
    crossSourceCollisions?: boolean | undefined;
    collectResourceTiming?: boolean | undefined;
    respectPrefersReducedMotion?: boolean | undefined;
    contextCreateOptions?: {
        extTextureFilterAnisotropicForceOff?: boolean;
        extTextureFloatLinearForceOff?: boolean;
        extStandardDerivativesForceOff?: boolean;
    } | undefined;
    devtools?: boolean | undefined;
    precompilePrograms?: boolean | undefined;
    fadeDuration?: number | undefined;
    localFontFamily?: string | undefined;
    localIdeographFontFamily?: string | undefined;
    performanceMetricsCollection?: boolean | undefined;
    tessellationStep?: number | undefined;
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
    mapStyle?: string | import("mapbox-gl").StyleSpecification | import("react-map-gl/dist/esm/types").ImmutableLike<import("mapbox-gl").StyleSpecification> | undefined;
    styleDiffing?: boolean;
    fog?: import("mapbox-gl").FogSpecification | undefined;
    light?: import("mapbox-gl").LightSpecification | undefined;
    terrain?: import("mapbox-gl").TerrainSpecification | null | undefined;
    interactiveLayerIds?: string[];
    cursor?: string;
} & import("react-map-gl/dist/esm/utils/set-globals").GlobalSettings & {
    mapLib?: import("react-map-gl").MapLib<import("mapbox-gl").Map> | Promise<import("react-map-gl").MapLib<import("mapbox-gl").Map>> | undefined;
    reuseMaps?: boolean;
    id?: string;
    style?: import("react").CSSProperties;
    children?: any;
} & import("react").RefAttributes<MapRef>>;
