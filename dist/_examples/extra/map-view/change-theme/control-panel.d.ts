type Props = {
    themes: {
        [key: string]: string;
    };
    selectTheme: string;
    onChangeTheme: (theme: string) => void;
};
export declare function ControlPanel({ themes, selectTheme, onChangeTheme }: Props): import("react/jsx-runtime").JSX.Element;
export {};
