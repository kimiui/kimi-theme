type Props = {
    chart: {
        colors?: string[];
        series: {
            name: string;
            data: {
                x: string;
                y: number;
            }[];
        }[];
    };
};
export declare function ChartTreemap({ chart }: Props): import("react/jsx-runtime").JSX.Element;
export {};
