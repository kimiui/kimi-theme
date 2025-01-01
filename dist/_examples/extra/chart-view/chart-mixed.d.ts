type Props = {
    chart: {
        colors?: string[];
        categories: string[];
        series: {
            name: string;
            type: string;
            data: number[];
        }[];
    };
};
export declare function ChartMixed({ chart }: Props): import("react/jsx-runtime").JSX.Element;
export {};
