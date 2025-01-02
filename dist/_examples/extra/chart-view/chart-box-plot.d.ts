type Props = {
    chart: {
        colors?: string[];
        series: {
            data: {
                x: string;
                y: number[];
            }[];
        }[];
    };
};
export declare function ChartBoxPlot({ chart }: Props): import("react/jsx-runtime").JSX.Element;
export {};
