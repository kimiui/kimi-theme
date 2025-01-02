'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material/styles';
import { Chart, useChart } from '../../../components/chart';
export function ChartTreemap({ chart }) {
    const theme = useTheme();
    const chartColors = chart.colors ?? [theme.palette.primary.dark, theme.palette.warning.main];
    const chartOptions = useChart({
        colors: chartColors,
        legend: { show: true },
        dataLabels: { enabled: true },
        tooltip: { x: { show: false } },
    });
    return _jsx(Chart, { type: "treemap", series: chart.series, options: chartOptions, height: 320 });
}
