'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartBoxPlot = ChartBoxPlot;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var chart_1 = require("../../../components/chart");
function ChartBoxPlot(_a) {
    var _b;
    var chart = _a.chart;
    var theme = (0, styles_1.useTheme)();
    var chartColors = (_b = chart.colors) !== null && _b !== void 0 ? _b : [theme.palette.info.main, theme.palette.error.main];
    var chartOptions = (0, chart_1.useChart)({
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
    return (0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "boxPlot", series: chart.series, options: chartOptions, height: 320 });
}
