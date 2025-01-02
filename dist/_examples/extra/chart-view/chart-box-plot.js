'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material/styles';
import { Chart, useChart } from '../../../components/chart';
export function ChartBoxPlot({ chart }) {
    const theme = useTheme();
    const chartColors = chart.colors ?? [theme.palette.info.main, theme.palette.error.main];
    const chartOptions = useChart({
        stroke: {
            width: 2,
            colors: [theme.palette.divider],
        },
        plotOptions: {
            boxPlot: {
                colors: {
                    upper: chartColors[0],
                    lower: chartColors[1],
                },
            },
        },
    });
    return _jsx(Chart, { type: "boxPlot", series: chart.series, options: chartOptions, height: 320 });
}
