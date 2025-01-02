'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material/styles';
import { Chart, useChart } from '../../../components/chart';
export function ChartRadarBar({ chart }) {
    const theme = useTheme();
    const chartColors = chart.colors ?? [
        theme.palette.primary.main,
        theme.palette.warning.main,
        theme.palette.error.main,
    ];
    const chartOptions = useChart({
        colors: chartColors,
        stroke: { width: 2 },
        fill: { opacity: 0.48 },
        legend: {
            show: true,
            floating: true,
            position: 'right',
        },
        xaxis: {
            categories: chart.categories,
            labels: {
                style: {
                    colors: [
                        theme.palette.text.disabled,
                        theme.palette.text.disabled,
                        theme.palette.text.disabled,
                        theme.palette.text.disabled,
                        theme.palette.text.disabled,
                        theme.palette.text.disabled,
                    ],
                },
            },
        },
    });
    return _jsx(Chart, { type: "radar", series: chart.series, options: chartOptions, height: 280 });
}
