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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationalChart = OrganizationalChart;
exports.TreeList = TreeList;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var styles_1 = require("@mui/material/styles");
var react_organizational_chart_1 = require("react-organizational-chart");
var helper_1 = require("lib/utils/helper");
// ----------------------------------------------------------------------
function OrganizationalChart(_a) {
    var data = _a.data, nodeItem = _a.nodeItem, other = __rest(_a, ["data", "nodeItem"]);
    var theme = (0, styles_1.useTheme)();
    var cloneNode = function (props) { return (0, react_1.cloneElement)(nodeItem(props)); };
    var label = cloneNode(__assign({}, data));
    return ((0, jsx_runtime_1.jsx)(react_organizational_chart_1.Tree, __assign({ lineWidth: "1.5px", nodePadding: "4px", lineBorderRadius: "24px", lineColor: theme.vars.palette.divider, label: label }, other, { children: data.children.map(function (list, index) { return ((0, jsx_runtime_1.jsx)(TreeList, { depth: 1, data: list, nodeItem: nodeItem }, index)); }) })));
}
// ----------------------------------------------------------------------
function TreeList(_a) {
    var _b;
    var data = _a.data, depth = _a.depth, nodeItem = _a.nodeItem;
    var childs = data.children;
    var cloneNode = function (props) { return (0, react_1.cloneElement)(nodeItem(props)); };
    var totalChildren = childs ? (_b = (0, helper_1.flattenArray)(childs)) === null || _b === void 0 ? void 0 : _b.length : 0;
    var label = cloneNode(__assign(__assign({}, data), { depth: depth, totalChildren: totalChildren }));
    return ((0, jsx_runtime_1.jsx)(react_organizational_chart_1.TreeNode, { label: label, children: childs && (0, jsx_runtime_1.jsx)(TreeSubList, { data: childs, depth: depth, nodeItem: nodeItem }) }));
}
// ----------------------------------------------------------------------
function TreeSubList(_a) {
    var data = _a.data, depth = _a.depth, nodeItem = _a.nodeItem;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: data.map(function (list, index) { return ((0, jsx_runtime_1.jsx)(TreeList, { data: list, depth: depth + 1, nodeItem: nodeItem }, index)); }) }));
}
