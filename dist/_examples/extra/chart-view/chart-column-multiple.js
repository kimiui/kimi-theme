'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';
import { Chart, useChart } from '../../../components/chart';
export function ChartColumnMultiple({ chart }) {
    const theme = useTheme();
    const chartColors = chart.colors ?? [
        hexAlpha(theme.palette.primary.dark, 0.8),
        theme.palette.warning.main,
    ];
    const chartOptions = useChart({
        colors: chartColors,
        legend: { show: true },
        xaxis: { categories: chart.categories },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        tooltip: { y: { formatter: (value) => `$ ${value} thousands` } },
    });
    return _jsx(Chart, { type: "bar", series: chart.series, options: chartOptions, height: 320 });
}
