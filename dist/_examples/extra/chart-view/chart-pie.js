import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme, alpha as hexAlpha } from '@mui/material/styles';
import { Chart, useChart, ChartLegends } from '../../../components/chart';
export function ChartPie({ chart }) {
    const theme = useTheme();
    const chartColors = chart.colors ?? [
        hexAlpha(theme.palette.primary.dark, 0.8),
        theme.palette.warning.main,
        theme.palette.info.dark,
        theme.palette.error.main,
    ];
    const chartOptions = useChart({
        chart: { sparkline: { enabled: true } },
        colors: chartColors,
        labels: chart.categories,
        stroke: { width: 0 },
        dataLabels: {
            enabled: true,
            dropShadow: { enabled: false },
        },
        plotOptions: { pie: { donut: { labels: { show: false } } } },
    });
    return (_jsxs(_Fragment, { children: [_jsx(ChartLegends, { labels: chartOptions?.labels, colors: chartOptions?.colors, sx: {
                    p: 3,
                    justifyContent: 'center',
                } }), _jsx(Chart, { type: "pie", series: chart.series, options: chartOptions, width: 240, height: 240, sx: {
                    my: 3,
                    mx: 'auto',
                } })] }));
}
