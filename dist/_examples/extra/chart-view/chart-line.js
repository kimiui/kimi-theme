'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';
import { Chart, useChart } from '../../../components/chart';
export function ChartLine({ chart }) {
    const theme = useTheme();
    const chartColors = chart.colors ?? [
        hexAlpha(theme.palette.primary.dark, 0.8),
        theme.palette.warning.main,
    ];
    const chartOptions = useChart({
        colors: chartColors,
        legend: { show: true },
        xaxis: { categories: chart.categories },
    });
    return _jsx(Chart, { type: "line", series: chart.series, options: chartOptions, height: 320 });
}
