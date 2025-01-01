"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickerView = PickerView;
var jsx_runtime_1 = require("react/jsx-runtime");
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var picker_date_1 = require("./picker-date");
var picker_time_1 = require("./picker-time");
var picker_date_time_1 = require("./picker-date-time");
var component_hero_1 = require("../../component-hero");
var picker_date_range_1 = require("./picker-date-range");
var component_template_1 = require("../../component-template");
// ----------------------------------------------------------------------
function PickerView() {
    var DEMO = [
        { name: 'Date', component: (0, jsx_runtime_1.jsx)(picker_date_1.PickerDate, {}) },
        { name: 'DateTime', component: (0, jsx_runtime_1.jsx)(picker_date_time_1.PickerDateTime, {}) },
        { name: 'Time', component: (0, jsx_runtime_1.jsx)(picker_time_1.PickerTime, {}) },
        { name: 'Range', component: (0, jsx_runtime_1.jsx)(picker_date_range_1.PickerDateRange, {}) },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Date Time Pickers", links: [
                        { name: 'Components', href: paths_1.paths.docs.components.root },
                        { name: 'Date Time Pickers' },
                    ], moreLink: [
                        'https://mui.com/components/pickers',
                        'https://mui.com/x/react-date-pickers/getting-started/',
                    ] }) }), (0, jsx_runtime_1.jsx)(component_template_1.ScrollToViewTemplate, { data: DEMO })] }));
}
