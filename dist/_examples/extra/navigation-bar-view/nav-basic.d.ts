export declare function NavBasic(): import("react/jsx-runtime").JSX.Element;
export declare const NAV_ITEMS: ({
    title: string;
    path: string;
    icon: import("react/jsx-runtime").JSX.Element;
    caption?: undefined;
    info?: undefined;
    children?: undefined;
    disabled?: undefined;
} | {
    title: string;
    path: string;
    caption: string;
    icon: import("react/jsx-runtime").JSX.Element;
    info: import("react/jsx-runtime").JSX.Element;
    children: ({
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        caption: string;
        info: string;
        children: {
            title: string;
            path: string;
        }[];
    } | {
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        children: ({
            title: string;
            path: string;
            children?: undefined;
        } | {
            title: string;
            path: string;
            children: {
                title: string;
                path: string;
            }[];
        })[];
        caption?: undefined;
        info?: undefined;
    } | {
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        caption?: undefined;
        info?: undefined;
        children?: undefined;
    })[];
    disabled?: undefined;
} | {
    title: string;
    path: string;
    icon: import("react/jsx-runtime").JSX.Element;
    disabled: boolean;
    caption?: undefined;
    info?: undefined;
    children?: undefined;
})[];
