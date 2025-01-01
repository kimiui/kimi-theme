'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartColumnNegative = ChartColumnNegative;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var format_number_1 = require("lib/utils/format-number");
var chart_1 = require("lib/components/chart");
function ChartColumnNegative(_a) {
    var _b;
    var chart = _a.chart;
    var theme = (0, styles_1.useTheme)();
    var chartColors = (_b = chart.colors) !== null && _b !== void 0 ? _b : [theme.palette.warning.main, theme.palette.info.main];
    var chartOptions = (0, chart_1.useChart)({
        stroke: { width: 0 },
        xaxis: {
            type: 'datetime',
            categories: chart.categories,
        },
        yaxis: { labels: { formatter: function (value) { return (0, format_number_1.fPercent)(value); } } },
        tooltip: { y: { title: { formatter: function () { return ''; } } } },
        plotOptions: {
            bar: {
                borderRadius: 2,
                colors: {
                    ranges: [
                        {
                            from: -100,
                            to: -46,
                            color: chartColors[0],
                        },
                        {
                            from: -45,
                            to: 0,
                            color: chartColors[1],
                        },
                    ],
                },
            },
        },
    });
    return (0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "bar", series: chart.series, options: chartOptions, height: 320 });
}
