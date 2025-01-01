'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartColumnSingle = ChartColumnSingle;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var chart_1 = require("lib/components/chart");
function ChartColumnSingle(_a) {
    var _b;
    var chart = _a.chart;
    var theme = (0, styles_1.useTheme)();
    var chartColors = (_b = chart.colors) !== null && _b !== void 0 ? _b : [(0, styles_1.alpha)(theme.palette.primary.dark, 0.8)];
    var chartOptions = (0, chart_1.useChart)({
        colors: chartColors,
        stroke: { width: 0 },
        xaxis: { categories: chart.categories },
        tooltip: {
            y: {
                formatter: function (value) { return "".concat(value, " thousands"); },
                title: { formatter: function () { return ''; } },
            },
        },
        plotOptions: { bar: { columnWidth: '40%' } },
    });
    return (0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "bar", series: chart.series, options: chartOptions, height: 320 });
}
