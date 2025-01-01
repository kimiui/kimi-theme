"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useChart = useChart;
var styles_1 = require("@mui/material/styles");
var styles_2 = require("lib/theme/styles");
// ----------------------------------------------------------------------
function useChart(options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21;
    var theme = (0, styles_1.useTheme)();
    var LABEL_TOTAL = {
        show: true,
        label: 'Total',
        color: theme.vars.palette.text.secondary,
        fontSize: theme.typography.subtitle2.fontSize,
        fontWeight: theme.typography.subtitle2.fontWeight,
    };
    var LABEL_VALUE = {
        offsetY: 8,
        color: theme.vars.palette.text.primary,
        fontSize: theme.typography.h4.fontSize,
        fontWeight: theme.typography.h4.fontWeight,
    };
    var RESPONSIVE = __spreadArray([
        {
            breakpoint: theme.breakpoints.values.sm, // sm ~ 600
            options: {
                plotOptions: {
                    bar: {
                        borderRadius: 3,
                        columnWidth: '80%',
                    },
                },
            },
        },
        {
            breakpoint: theme.breakpoints.values.md, // md ~ 900
            options: {
                plotOptions: {
                    bar: {
                        columnWidth: '60%',
                    },
                },
            },
        }
    ], ((_a = options === null || options === void 0 ? void 0 : options.responsive) !== null && _a !== void 0 ? _a : []), true);
    return __assign(__assign({}, options), { 
        /** **************************************
         * Chart
         *************************************** */
        chart: __assign(__assign({ toolbar: {
                show: false,
            }, zoom: {
                enabled: false,
            }, parentHeightOffset: 0, fontFamily: theme.typography.fontFamily, foreColor: theme.vars.palette.text.disabled }, options === null || options === void 0 ? void 0 : options.chart), { animations: __assign({ enabled: true, speed: 360, animateGradually: { enabled: true, delay: 120 }, dynamicAnimation: { enabled: true, speed: 360 } }, (_b = options === null || options === void 0 ? void 0 : options.chart) === null || _b === void 0 ? void 0 : _b.animations) }), 
        /** **************************************
         * Colors
         *************************************** */
        colors: (_c = options === null || options === void 0 ? void 0 : options.colors) !== null && _c !== void 0 ? _c : [
            theme.palette.primary.main,
            theme.palette.warning.main,
            theme.palette.info.main,
            theme.palette.error.main,
            theme.palette.success.main,
            theme.palette.warning.dark,
            theme.palette.success.darker,
            theme.palette.info.dark,
            theme.palette.info.darker,
        ], 
        /** **************************************
         * States
         *************************************** */
        states: __assign(__assign({}, options === null || options === void 0 ? void 0 : options.states), { hover: __assign(__assign({}, (_d = options === null || options === void 0 ? void 0 : options.states) === null || _d === void 0 ? void 0 : _d.hover), { filter: __assign({ type: 'darken', value: 0.88 }, (_f = (_e = options === null || options === void 0 ? void 0 : options.states) === null || _e === void 0 ? void 0 : _e.hover) === null || _f === void 0 ? void 0 : _f.filter) }), active: __assign(__assign({}, (_g = options === null || options === void 0 ? void 0 : options.states) === null || _g === void 0 ? void 0 : _g.active), { filter: __assign({ type: 'darken', value: 0.88 }, (_j = (_h = options === null || options === void 0 ? void 0 : options.states) === null || _h === void 0 ? void 0 : _h.active) === null || _j === void 0 ? void 0 : _j.filter) }) }), 
        /** **************************************
         * Fill
         *************************************** */
        fill: __assign(__assign({ opacity: 1 }, options === null || options === void 0 ? void 0 : options.fill), { gradient: __assign({ type: 'vertical', shadeIntensity: 0, opacityFrom: 0.4, opacityTo: 0, stops: [0, 100] }, (_k = options === null || options === void 0 ? void 0 : options.fill) === null || _k === void 0 ? void 0 : _k.gradient) }), 
        /** **************************************
         * Data labels
         *************************************** */
        dataLabels: __assign({ enabled: false }, options === null || options === void 0 ? void 0 : options.dataLabels), 
        /** **************************************
         * Stroke
         *************************************** */
        stroke: __assign({ width: 2.5, curve: 'smooth', lineCap: 'round' }, options === null || options === void 0 ? void 0 : options.stroke), 
        /** **************************************
         * Grid
         *************************************** */
        grid: __assign(__assign({ strokeDashArray: 3, borderColor: theme.vars.palette.divider }, options === null || options === void 0 ? void 0 : options.grid), { padding: __assign({ top: 0, right: 0, bottom: 0 }, (_l = options === null || options === void 0 ? void 0 : options.grid) === null || _l === void 0 ? void 0 : _l.padding), xaxis: __assign({ lines: {
                    show: false,
                } }, (_m = options === null || options === void 0 ? void 0 : options.grid) === null || _m === void 0 ? void 0 : _m.xaxis) }), 
        /** **************************************
         * Axis
         *************************************** */
        xaxis: __assign({ axisBorder: {
                show: false,
            }, axisTicks: {
                show: false,
            } }, options === null || options === void 0 ? void 0 : options.xaxis), yaxis: __assign({ tickAmount: 5 }, options === null || options === void 0 ? void 0 : options.yaxis), 
        /** **************************************
         * Markers
         *************************************** */
        markers: __assign({ size: 0, strokeColors: theme.vars.palette.background.paper }, options === null || options === void 0 ? void 0 : options.markers), 
        /** **************************************
         * Tooltip
         *************************************** */
        tooltip: __assign({ theme: 'false', fillSeriesColor: false, x: {
                show: true,
            } }, options === null || options === void 0 ? void 0 : options.tooltip), 
        /** **************************************
         * Legend
         *************************************** */
        legend: __assign(__assign({ show: false, position: 'top', fontWeight: 500, fontSize: '13px', horizontalAlign: 'right', labels: {
                colors: theme.vars.palette.text.primary,
            } }, options === null || options === void 0 ? void 0 : options.legend), { itemMargin: __assign({ horizontal: 8, vertical: 8 }, (_o = options === null || options === void 0 ? void 0 : options.legend) === null || _o === void 0 ? void 0 : _o.itemMargin) }), 
        /** **************************************
         * plotOptions
         *************************************** */
        plotOptions: __assign(__assign({}, options === null || options === void 0 ? void 0 : options.plotOptions), { 
            // plotOptions: Bar
            bar: __assign({ borderRadius: 4, columnWidth: '48%', borderRadiusApplication: 'end' }, (_p = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _p === void 0 ? void 0 : _p.bar), 
            // plotOptions: Pie + Donut
            pie: __assign(__assign({}, (_q = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _q === void 0 ? void 0 : _q.pie), { donut: __assign(__assign({}, (_s = (_r = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _r === void 0 ? void 0 : _r.pie) === null || _s === void 0 ? void 0 : _s.donut), { labels: __assign(__assign({ show: true }, (_v = (_u = (_t = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _t === void 0 ? void 0 : _t.pie) === null || _u === void 0 ? void 0 : _u.donut) === null || _v === void 0 ? void 0 : _v.labels), { value: __assign(__assign({}, LABEL_VALUE), (_z = (_y = (_x = (_w = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _w === void 0 ? void 0 : _w.pie) === null || _x === void 0 ? void 0 : _x.donut) === null || _y === void 0 ? void 0 : _y.labels) === null || _z === void 0 ? void 0 : _z.value), total: __assign(__assign({}, LABEL_TOTAL), (_3 = (_2 = (_1 = (_0 = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _0 === void 0 ? void 0 : _0.pie) === null || _1 === void 0 ? void 0 : _1.donut) === null || _2 === void 0 ? void 0 : _2.labels) === null || _3 === void 0 ? void 0 : _3.total) }) }) }), 
            // plotOptions: Radialbar
            radialBar: __assign(__assign({}, (_4 = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _4 === void 0 ? void 0 : _4.radialBar), { hollow: __assign({ margin: -8, size: '100%' }, (_6 = (_5 = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _5 === void 0 ? void 0 : _5.radialBar) === null || _6 === void 0 ? void 0 : _6.hollow), track: __assign({ margin: -8, strokeWidth: '50%', background: (0, styles_2.varAlpha)(theme.vars.palette.grey['500Channel'], 0.16) }, (_8 = (_7 = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _7 === void 0 ? void 0 : _7.radialBar) === null || _8 === void 0 ? void 0 : _8.track), dataLabels: __assign(__assign({}, (_10 = (_9 = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _9 === void 0 ? void 0 : _9.radialBar) === null || _10 === void 0 ? void 0 : _10.dataLabels), { value: __assign(__assign({}, LABEL_VALUE), (_13 = (_12 = (_11 = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _11 === void 0 ? void 0 : _11.radialBar) === null || _12 === void 0 ? void 0 : _12.dataLabels) === null || _13 === void 0 ? void 0 : _13.value), total: __assign(__assign({}, LABEL_TOTAL), (_16 = (_15 = (_14 = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _14 === void 0 ? void 0 : _14.radialBar) === null || _15 === void 0 ? void 0 : _15.dataLabels) === null || _16 === void 0 ? void 0 : _16.total) }) }), 
            // plotOptions: Radar
            radar: __assign(__assign({}, (_17 = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _17 === void 0 ? void 0 : _17.radar), { polygons: __assign({ fill: {
                        colors: ['transparent'],
                    }, strokeColors: theme.vars.palette.divider, connectorColors: theme.vars.palette.divider }, (_19 = (_18 = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _18 === void 0 ? void 0 : _18.radar) === null || _19 === void 0 ? void 0 : _19.polygons) }), 
            // plotOptions: polarArea
            polarArea: __assign({ rings: {
                    strokeColor: theme.vars.palette.divider,
                }, spokes: {
                    connectorColors: theme.vars.palette.divider,
                } }, (_20 = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _20 === void 0 ? void 0 : _20.polarArea), 
            // plotOptions: heatmap
            heatmap: __assign({ distributed: true }, (_21 = options === null || options === void 0 ? void 0 : options.plotOptions) === null || _21 === void 0 ? void 0 : _21.heatmap) }), 
        /** **************************************
         * Responsive
         *************************************** */
        responsive: RESPONSIVE.reduce(function (acc, cur) {
            if (!acc.some(function (item) { return item.breakpoint === cur.breakpoint; })) {
                acc.push(cur);
            }
            return acc;
        }, []) });
}
