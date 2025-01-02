'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material/styles';
import { fPercent } from '../../../utils/format-number';
import { Chart, useChart } from '../../../components/chart';
export function ChartColumnNegative({ chart }) {
    const theme = useTheme();
    const chartColors = chart.colors ?? [theme.palette.warning.main, theme.palette.info.main];
    const chartOptions = useChart({
        stroke: { width: 0 },
        xaxis: {
            type: 'datetime',
            categories: chart.categories,
        },
        yaxis: { labels: { formatter: (value) => fPercent(value) } },
        tooltip: { y: { title: { formatter: () => '' } } },
        plotOptions: {
            bar: {
                borderRadius: 2,
                colors: {
                    ranges: [
                        {
                            from: -100,
                            to: -46,
                            color: chartColors[0],
                        },
                        {
                            from: -45,
                            to: 0,
                            color: chartColors[1],
                        },
                    ],
                },
            },
        },
    });
    return _jsx(Chart, { type: "bar", series: chart.series, options: chartOptions, height: 320 });
}
