type Props = {
    chart: {
        series: {
            name: string;
            data: [number, number][];
        }[];
    };
};
export declare function ChartScatter({ chart }: Props): import("react/jsx-runtime").JSX.Element;
export {};
