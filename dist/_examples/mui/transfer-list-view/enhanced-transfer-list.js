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
exports.EnhancedTransferList = EnhancedTransferList;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var List_1 = __importDefault(require("@mui/material/List"));
var Card_1 = __importDefault(require("@mui/material/Card"));
var Grid2_1 = __importDefault(require("@mui/material/Grid2"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var Divider_1 = __importDefault(require("@mui/material/Divider"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var CardHeader_1 = __importDefault(require("@mui/material/CardHeader"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
var ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
var iconify_1 = require("../../../components/iconify");
// ----------------------------------------------------------------------
function not(a, b) {
    return a.filter(function (value) { return b.indexOf(value) === -1; });
}
function intersection(a, b) {
    return a.filter(function (value) { return b.indexOf(value) !== -1; });
}
function union(a, b) {
    return __spreadArray(__spreadArray([], a, true), not(b, a), true);
}
function EnhancedTransferList() {
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
    var numberOfChecked = function (items) { return intersection(checked, items).length; };
    var handleToggleAll = function (items) { return function () {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        }
        else {
            setChecked(union(checked, items));
        }
    }; };
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
    var customList = function (title, items) { return ((0, jsx_runtime_1.jsxs)(Card_1.default, { sx: { borderRadius: 1.5 }, children: [(0, jsx_runtime_1.jsx)(CardHeader_1.default, { avatar: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { onClick: handleToggleAll(items), checked: numberOfChecked(items) === items.length && items.length !== 0, indeterminate: numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0, disabled: items.length === 0, inputProps: { 'aria-label': 'All items selected' } }), title: title, subheader: "".concat(numberOfChecked(items), "/").concat(items.length, " selected"), sx: { p: 2 } }), (0, jsx_runtime_1.jsx)(Divider_1.default, {}), (0, jsx_runtime_1.jsx)(List_1.default, { dense: true, component: "div", role: "list", sx: { width: 200, overflow: 'auto' }, children: items.map(function (value) { return ((0, jsx_runtime_1.jsxs)(ListItemButton_1.default, { role: "listitem", onClick: handleToggle(value), children: [(0, jsx_runtime_1.jsx)(ListItemIcon_1.default, { children: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { disableRipple: true, checked: checked.indexOf(value) !== -1, tabIndex: -1, inputProps: {
                                    'aria-labelledby': "transfer-list-all-item-".concat(value, "-label"),
                                } }) }), (0, jsx_runtime_1.jsx)(ListItemText_1.default, { id: "transfer-list-all-item-".concat(value, "-label"), primary: "List item ".concat(value + 1) })] }, value)); }) })] })); };
    return ((0, jsx_runtime_1.jsxs)(Grid2_1.default, { container: true, justifyContent: "center", alignItems: "center", sx: { width: 'auto', p: 3 }, children: [(0, jsx_runtime_1.jsx)(Grid2_1.default, { children: customList('Choices', left) }), (0, jsx_runtime_1.jsxs)(Grid2_1.default, { container: true, direction: "column", alignItems: "center", sx: { p: 3 }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", variant: "outlined", size: "small", onClick: handleCheckedRight, disabled: leftChecked.length === 0, "aria-label": "move selected right", sx: { my: 1 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrow-ios-forward-fill", width: 18 }) }), (0, jsx_runtime_1.jsx)(Button_1.default, { color: "inherit", variant: "outlined", size: "small", onClick: handleCheckedLeft, disabled: rightChecked.length === 0, "aria-label": "move selected left", sx: { my: 1 }, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:arrow-ios-back-fill", width: 18 }) })] }), (0, jsx_runtime_1.jsx)(Grid2_1.default, { children: customList('Chosen', right) })] }));
}
