'use client';
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationalChartView = OrganizationalChartView;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var styles_1 = require("@mui/material/styles");
var paths_1 = require("../../../routes/paths");
var custom_breadcrumbs_1 = require("../../../components/custom-breadcrumbs");
var organizational_chart_1 = require("../../../components/organizational-chart");
var group_node_1 = require("./group-node");
var simple_node_1 = require("./simple-node");
var standard_node_1 = require("./standard-node");
var data_1 = require("./data");
var component_hero_1 = require("../../component-hero");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function OrganizationalChartView() {
    var theme = (0, styles_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(component_hero_1.ComponentHero, { children: (0, jsx_runtime_1.jsx)(custom_breadcrumbs_1.CustomBreadcrumbs, { heading: "Organizational chart", links: [
                        { name: 'Components', href: paths_1.paths.docs.components.root },
                        { name: 'Organizational chart' },
                    ], moreLink: [
                        'https://www.npmjs.com/package/react-organizational-chart',
                        'https://daniel-hauser.github.io/react-organizational-chart/?path=/story/example-tree--basic',
                    ] }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentContainer, { children: (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 5, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Simple", children: (0, jsx_runtime_1.jsx)(Stack_1.default, { sx: { overflowY: 'auto', py: 10 }, children: (0, jsx_runtime_1.jsx)(organizational_chart_1.OrganizationalChart, { data: data_1.SIMPLE_DATA, lineColor: theme.vars.palette.primary.light, nodeItem: function (props) { return ((0, jsx_runtime_1.jsx)(simple_node_1.SimpleNode, __assign({ sx: { color: theme.vars.palette.text.primary } }, props))); } }) }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Standard", children: (0, jsx_runtime_1.jsx)(Stack_1.default, { sx: { overflowY: 'auto', py: 10 }, children: (0, jsx_runtime_1.jsx)(organizational_chart_1.OrganizationalChart, { lineHeight: "40px", data: data_1.SIMPLE_DATA, nodeItem: function (props) { return ((0, jsx_runtime_1.jsx)(standard_node_1.StandardNode, __assign({ sx: {
                                        // ...
                                        } }, props))); } }) }) }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Group", children: (0, jsx_runtime_1.jsx)(Stack_1.default, { sx: { overflowY: 'auto', py: 10 }, children: (0, jsx_runtime_1.jsx)(organizational_chart_1.OrganizationalChart, { lineHeight: "64px", data: data_1.GROUP_DATA, nodeItem: function (props) { return ((0, jsx_runtime_1.jsx)(group_node_1.GroupNode, __assign({ sx: {
                                        // ...
                                        } }, props))); } }) }) })] }) })] }));
}
