type Props = {
    chart: {
        colors?: string[];
        categories: string[];
        series: {
            name: string;
            data: number[];
        }[];
    };
};
export declare function ChartHeatmap({ chart }: Props): import("react/jsx-runtime").JSX.Element;
export {};
