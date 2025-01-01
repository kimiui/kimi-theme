'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartRadarBar = ChartRadarBar;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var chart_1 = require("../../../components/chart");
function ChartRadarBar(_a) {
    var _b;
    var chart = _a.chart;
    var theme = (0, styles_1.useTheme)();
    var chartColors = (_b = chart.colors) !== null && _b !== void 0 ? _b : [
        theme.palette.primary.main,
        theme.palette.warning.main,
        theme.palette.error.main,
    ];
    var chartOptions = (0, chart_1.useChart)({
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
    return (0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "radar", series: chart.series, options: chartOptions, height: 280 });
}
