'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartRadialBar = ChartRadialBar;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var styles_2 = require("../../../theme/styles");
var format_number_1 = require("../../../utils/format-number");
var chart_1 = require("../../../components/chart");
function ChartRadialBar(_a) {
    var _b;
    var chart = _a.chart;
    var theme = (0, styles_1.useTheme)();
    var chartColors = (_b = chart.colors) !== null && _b !== void 0 ? _b : [
        [theme.palette.secondary.light, theme.palette.secondary.main],
        [theme.palette.warning.light, theme.palette.warning.main],
    ];
    var chartOptions = (0, chart_1.useChart)({
        chart: { sparkline: { enabled: true } },
        colors: chartColors.map(function (color) { return color[1]; }),
        labels: chart.categories,
        stroke: { width: 0 },
        fill: {
            type: 'gradient',
            gradient: {
                colorStops: chartColors.map(function (color) { return [
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
                ]; }),
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
                    background: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
                },
                dataLabels: {
                    total: { formatter: function () { return (0, format_number_1.fNumber)(2324); } },
                    value: {
                        offsetY: 2,
                        fontSize: theme.typography.h5.fontSize,
                    },
                    name: { offsetY: -10 },
                },
            },
        },
    });
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "radialBar", series: chart.series, options: chartOptions, width: 320, height: 320, sx: { mx: 'auto' } }), (0, jsx_runtime_1.jsx)(chart_1.ChartLegends, { labels: chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions.labels, colors: chartOptions === null || chartOptions === void 0 ? void 0 : chartOptions.colors, sx: {
                    p: 3,
                    justifyContent: 'center',
                } })] }));
}
