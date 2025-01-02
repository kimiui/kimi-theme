import { jsx as _jsx } from "react/jsx-runtime";
import { Chart, useChart } from '../../../components/chart';
export function ChartScatter({ chart }) {
    const chartOptions = useChart({
        chart: {
            zoom: {
                enabled: true,
                type: 'xy',
            },
        },
        legend: { show: true },
        xaxis: {
            tickAmount: 8,
            labels: { formatter: (val) => parseFloat(val).toFixed(1) },
        },
        markers: { size: 6 },
    });
    return _jsx(Chart, { type: "scatter", series: chart.series, options: chartOptions, height: 350 });
}
