'use client';
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleTransferList = SimpleTransferList;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var List_1 = __importDefault(require("@mui/material/List"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var Grid2_1 = __importDefault(require("@mui/material/Grid2"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
var iconify_1 = require("lib/components/iconify");
// ----------------------------------------------------------------------
function not(a, b) {
    return a.filter(function (value) { return b.indexOf(value) === -1; });
}
function intersection(a, b) {
    return a.filter(function (value) { return b.indexOf(value) !== -1; });
}
// ----------------------------------------------------------------------
function SimpleTransferList() {
    var _a = (0, react_1.useState)([]), checked = _a[0], setChecked = _a[1];
    var _b = (0, react_1.useState)([0, 1, 2, 3]), left = _b[0], setLeft = _b[1];
    var _c = (0, react_1.useState)([4, 5, 6, 7]), right = _c[0], setRight = _c[1];
    var leftChecked = intersection(checked, left);
    var rightChecked = intersection(checked, right);
    var handleToggle = function (value) { return function () {
        var currentIndex = checked.indexOf(value);
        var newChecked = __spreadArray([], checked, true);
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    }; };
    var handleAllRight = function () {
        setRight(right.concat(left));
        setLeft([]);
    };
    var handleCheckedRight = function () {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };
    var handleCheckedLeft = function () {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };
    var handleAllLeft = function () {
        setLeft(left.concat(right));
        setRight([]);
    };
    var customList = function (items) { return ((0, jsx_runtime_1.jsx)(Card_1.default, { sx: { width: 200, overflow: 'auto', borderRadius: 1.5 }, children: (0, jsx_runtime_1.jsx)(List_1.default, { dense: true, component: "div", role: "list", children: items.map(function (value) {
                var labelId = "transfer-list-item-".concat(value, "-label");
                return ((0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { role: "listitem", onClick: handleToggle(value), children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { checked: checked.indexOf(value) !== -1, tabIndex: -1, disableRipple: true, inputProps: { 'aria-labelledby': labelId } }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { id: labelId, primary: "List item ".concat(value + 1) })] }, value));
            }) }) })); };
    return ((0, jsx_runtime_1.jsxs)(Grid2_1.default, { container: true, justifyContent: "center", alignItems: "center", sx: { width: 'auto', py: 3 }, children: [(0, jsx_runtime_1.jsx)(Grid2_1.default, { children: customList(left) }), (0, jsx_runtime_1.jsxs)(Grid2_1.default, { container: true, direction: "column", alignItems: "center", sx: { p: 3 }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", variant: "outlined", size: "small", onClick: handleAllRight, disabled: left.length === 0, "aria-label": "move all right", sx: { my: 1 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrowhead-right-fill", width: 18 }) }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", variant: "outlined", size: "small", onClick: handleCheckedRight, disabled: leftChecked.length === 0, "aria-label": "move selected right", sx: { my: 1 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrow-ios-forward-fill", width: 18 }) }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", variant: "outlined", size: "small", onClick: handleCheckedLeft, disabled: rightChecked.length === 0, "aria-label": "move selected left", sx: { my: 1 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrow-ios-back-fill", width: 18 }) }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", variant: "outlined", size: "small", onClick: handleAllLeft, disabled: right.length === 0, "aria-label": "move all left", sx: { my: 1 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrowhead-left-fill", width: 18 }) })] }), (0, jsx_runtime_1.jsx)(Grid2_1.default, { children: customList(right) })] }));
}
