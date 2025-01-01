'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartStrokedGauge = ChartStrokedGauge;
var jsx_runtime_1 = require("react/jsx-runtime");
var styles_1 = require("@mui/material/styles");
var styles_2 = require("lib/theme/styles");
var chart_1 = require("lib/components/chart");
function ChartStrokedGauge(_a) {
    var _b;
    var chart = _a.chart;
    var theme = (0, styles_1.useTheme)();
    var chartColors = (_b = chart.colors) !== null && _b !== void 0 ? _b : [theme.palette.error.main, theme.palette.error.light];
    var chartOptions = (0, chart_1.useChart)({
        chart: {
            offsetY: 16,
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
        stroke: {
            dashArray: 4,
            curve: 'straight',
            lineCap: 'butt',
        },
        plotOptions: {
            radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: { margin: -24 },
                track: {
                    margin: -24,
                    strokeWidth: '100%',
                    background: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.08),
                },
                dataLabels: {
                    name: { offsetY: 96 },
                    value: { offsetY: 48 },
                    total: {
                        label: 'Median Ratio',
                        color: theme.vars.palette.error.main,
                        fontSize: theme.typography.subtitle2.fontSize,
                        fontWeight: theme.typography.subtitle2.fontWeight,
                    },
                },
            },
        },
    });
    return ((0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "radialBar", series: chart.series, options: chartOptions, width: 260, height: 260, sx: { mx: 'auto' } }));
}
