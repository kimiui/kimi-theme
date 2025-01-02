export declare const NAV_ITEMS: ({
    subheader: string;
    items: ({
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        roles: string[];
        caption: string;
        info: import("react/jsx-runtime").JSX.Element;
        children?: undefined;
    } | {
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        roles: string[];
        caption?: undefined;
        info?: undefined;
        children?: undefined;
    } | {
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        info: import("react/jsx-runtime").JSX.Element;
        children: ({
            title: string;
            path: string;
            caption: string;
            info: string;
        } | {
            title: string;
            path: string;
            caption?: undefined;
            info?: undefined;
        })[];
        roles?: undefined;
        caption?: undefined;
    })[];
} | {
    subheader: string;
    items: ({
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        info: string;
        children?: undefined;
    } | {
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        info?: undefined;
        children?: undefined;
    } | {
        title: string;
        path: string;
        icon: import("react/jsx-runtime").JSX.Element;
        children: ({
            title: string;
            path: string;
            icon: import("react/jsx-runtime").JSX.Element;
            caption: string;
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
        } | {
            title: string;
            path: string;
            icon: import("react/jsx-runtime").JSX.Element;
            caption?: undefined;
            children?: undefined;
        })[];
        info?: undefined;
    })[];
})[];
