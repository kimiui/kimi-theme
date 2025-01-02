'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '@mui/material/styles';
import { varAlpha } from '../../../theme/styles';
import { fNumber } from '../../../utils/format-number';
import { Chart, useChart, ChartLegends } from '../../../components/chart';
export function ChartRadialBar({ chart }) {
    const theme = useTheme();
    const chartColors = chart.colors ?? [
        [theme.palette.secondary.light, theme.palette.secondary.main],
        [theme.palette.warning.light, theme.palette.warning.main],
    ];
    const chartOptions = useChart({
        chart: { sparkline: { enabled: true } },
        colors: chartColors.map((color) => color[1]),
        labels: chart.categories,
        stroke: { width: 0 },
        fill: {
            type: 'gradient',
            gradient: {
                colorStops: chartColors.map((color) => [
                    {
                        offset: 0,
                        color: color[0],
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: color[1],
                        opacity: 1,
                    },
                ]),
            },
        },
        grid: {
            padding: {
                top: -40,
                bottom: -40,
            },
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 14,
                    size: '32%',
                },
                track: {
                    margin: 14,
                    background: varAlpha(theme.vars.palette.grey['500Channel'], 0.08),
                },
                dataLabels: {
                    total: { formatter: () => fNumber(2324) },
                    value: {
                        offsetY: 2,
                        fontSize: theme.typography.h5.fontSize,
                    },
                    name: { offsetY: -10 },
                },
            },
        },
    });
    return (_jsxs(_Fragment, { children: [_jsx(Chart, { type: "radialBar", series: chart.series, options: chartOptions, width: 320, height: 320, sx: { mx: 'auto' } }), _jsx(ChartLegends, { labels: chartOptions?.labels, colors: chartOptions?.colors, sx: {
                    p: 3,
                    justifyContent: 'center',
                } })] }));
}
