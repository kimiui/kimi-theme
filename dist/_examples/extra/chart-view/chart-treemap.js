'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartTreemap = ChartTreemap;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var chart_1 = require("lib/components/chart");
function ChartTreemap(_a) {
    var _b;
    var chart = _a.chart;
    var theme = (0, styles_1.useTheme)();
    var chartColors = (_b = chart.colors) !== null && _b !== void 0 ? _b : [theme.palette.primary.dark, theme.palette.warning.main];
    var chartOptions = (0, chart_1.useChart)({
        colors: chartColors,
        legend: { show: true },
        dataLabels: { enabled: true },
        tooltip: { x: { show: false } },
    });
    return (0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "treemap", series: chart.series, options: chartOptions, height: 320 });
}
