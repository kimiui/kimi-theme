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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableSelectedAction = TableSelectedAction;
var jsx_runtime_1 = require("react/jsx-runtime");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var Typography_1 = __importDefault(require("@mui/material/Typography"));
function TableSelectedAction(_a) {
    var dense = _a.dense, action = _a.action, rowCount = _a.rowCount, numSelected = _a.numSelected, onSelectAllRows = _a.onSelectAllRows, sx = _a.sx, other = __rest(_a, ["dense", "action", "rowCount", "numSelected", "onSelectAllRows", "sx"]);
    if (!numSelected) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, __assign({ direction: "row", alignItems: "center", sx: __assign(__assign({ pl: 1, pr: 2, top: 0, left: 0, width: 1, zIndex: 9, height: 58, position: 'absolute', bgcolor: 'primary.lighter' }, (dense && { height: 38 })), sx) }, other, { children: [(0, jsx_runtime_1.jsx)(Checkbox_1.default, { indeterminate: !!numSelected && numSelected < rowCount, checked: !!rowCount && numSelected === rowCount, onChange: function (event) {
                    return onSelectAllRows(event.target.checked);
                } }), (0, jsx_runtime_1.jsxs)(Typography_1.default, { variant: "subtitle2", sx: __assign({ ml: 2, flexGrow: 1, color: 'primary.main' }, (dense && { ml: 3 })), children: [numSelected, " selected"] }), action && action] })));
}
