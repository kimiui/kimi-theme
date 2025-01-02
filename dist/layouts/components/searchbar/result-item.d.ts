type Props = {
    title: {
        text: string;
        highlight: boolean;
    }[];
    path: {
        text: string;
        highlight: boolean;
    }[];
    groupLabel: string;
    onClickItem: () => void;
};
export declare function ResultItem({ title, path, groupLabel, onClickItem }: Readonly<Props>): import("react/jsx-runtime").JSX.Element;
export {};
