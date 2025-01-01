'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartHeatmap = ChartHeatmap;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var chart_1 = require("lib/components/chart");
function ChartHeatmap(_a) {
    var _b;
    var chart = _a.chart;
    var theme = (0, styles_1.useTheme)();
    var chartColors = (_b = chart.colors) !== null && _b !== void 0 ? _b : [
        theme.palette.primary.dark,
        theme.palette.warning.main,
        theme.palette.info.main,
        theme.palette.success.main,
        theme.palette.error.main,
        theme.palette.info.dark,
    ];
    var chartOptions = (0, chart_1.useChart)({
        colors: chartColors,
        legend: { show: true },
        tooltip: { x: { show: false } },
        xaxis: { categories: chart.categories },
    });
    return (0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "heatmap", series: chart.series, options: chartOptions, height: 320 });
}
