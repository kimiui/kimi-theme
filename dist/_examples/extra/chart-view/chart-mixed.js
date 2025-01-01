'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartMixed = ChartMixed;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var chart_1 = require("lib/components/chart");
function ChartMixed(_a) {
    var _b;
    var chart = _a.chart;
    var theme = (0, styles_1.useTheme)();
    var chartColors = (_b = chart.colors) !== null && _b !== void 0 ? _b : [
        (0, styles_1.alpha)(theme.palette.primary.dark, 0.8),
        theme.palette.warning.main,
        theme.palette.info.main,
    ];
    var chartOptions = (0, chart_1.useChart)({
        colors: chartColors,
        stroke: { width: [0, 2, 2] },
        fill: { type: ['solid', 'gradient', 'solid'] },
        legend: { show: true },
        xaxis: {
            type: 'datetime',
            categories: chart.categories,
        },
        yaxis: {
            min: 0,
            title: { text: 'Points' },
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: { formatter: function (value) { return "".concat(value, " points"); } },
        },
    });
    return (0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "line", series: chart.series, options: chartOptions, height: 320 });
}
