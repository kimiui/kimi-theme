'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartDonut = ChartDonut;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var chart_1 = require("../../../components/chart");
function ChartDonut(_a) {
    var _b;
    var chart = _a.chart;
    var theme = (0, styles_1.useTheme)();
    var chartColors = (_b = chart.colors) !== null && _b !== void 0 ? _b : [
        (0, styles_1.alpha)(theme.palette.primary.dark, 0.8),
        theme.palette.warning.main,
        theme.palette.info.dark,
        theme.palette.error.main,
    ];
    var chartOptions = (0, chart_1.useChart)({
        chart: { sparkline: { enabled: true } },
        colors: chartColors,
        labels: chart.categories,
        stroke: { width: 0 },
        plotOptions: { pie: { donut: { size: '72%' } } },
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(chart_1.ChartLegends, { labels: chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions.labels, colors: chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions.colors, sx: {
                    p: 3,
                    justifyContent: 'center',
                } }), (0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "donut", series: chart.series, options: chartOptions, width: 240, height: 240, sx: {
                    my: 3,
                    mx: 'auto',
                } })] }));
}
