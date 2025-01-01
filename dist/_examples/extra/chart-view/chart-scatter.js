"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChartScatter = ChartScatter;
var jsx_runtime_1 = require("react/jsx-runtime");
var chart_1 = require("lib/components/chart");
function ChartScatter(_a) {
    var chart = _a.chart;
    var chartOptions = (0, chart_1.useChart)({
        chart: {
            zoom: {
                enabled: true,
                type: 'xy',
            },
        },
        legend: { show: true },
        xaxis: {
            tickAmount: 8,
            labels: { formatter: function (val) { return parseFloat(val).toFixed(1); } },
        },
        markers: { size: 6 },
    });
    return (0, jsx_runtime_1.jsx)(chart_1.Chart, { type: "scatter", series: chart.series, options: chartOptions, height: 350 });
}
