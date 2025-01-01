import type { TFunction } from 'i18next';
export declare function navData(t: TFunction<any, any>): {
    subheader: string;
    items: ({
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        info?: undefined;
        caption?: undefined;
    } | {
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        info: import("react/jsx-runtime").JSX.Element;
        caption?: undefined;
    } | {
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        caption: string;
        info?: undefined;
    })[];
}[];
