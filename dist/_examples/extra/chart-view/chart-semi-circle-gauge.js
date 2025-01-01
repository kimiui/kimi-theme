'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartSemiCircleGauge = ChartSemiCircleGauge;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var format_number_1 = require("../../../utils/format-number");
var chart_1 = require("../../../components/chart");
function ChartSemiCircleGauge(_a) {
    var _b;
    var chart = _a.chart;
    var theme = (0, styles_1.useTheme)();
    var chartColors = (_b = chart.colors) !== null && _b !== void 0 ? _b : [theme.palette.secondary.main, theme.palette.secondary.light];
    var chartOptions = (0, chart_1.useChart)({
        chart: {
            offsetY: 56,
            sparkline: { enabled: true },
        },
        fill: {
            type: 'gradient',
            gradient: {
                colorStops: [
                    {
                        offset: 0,
                        color: chartColors[0],
                        opacity: 1,
                    },
                    {
                        offset: 100,
                        color: chartColors[1],
                        opacity: 1,
                    },
                ],
            },
        },
        plotOptions: {
            radialBar: {
                startAngle: -90,
                endAngle: 90,
                hollow: { margin: -24 },
                track: { margin: -24 },
                dataLabels: {
                    name: { offsetY: 8 },
                    value: { offsetY: -40 },
                    total: {
                        label: "Used of ".concat((0, format_number_1.fData)(24 * 1024 * 1024), " / ").concat((0, format_number_1.fData)(50 * 1024 * 1024)),
                        color: theme.vars.palette.text.disabled,
                        fontSize: theme.typography.caption.fontSize,
                        fontWeight: theme.typography.caption.fontWeight,
                    },
                },
            },
        },
    });
    return ((0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "radialBar", series: chart.series, options: chartOptions, width: 260, height: 260, sx: { mx: 'auto' } }));
}
