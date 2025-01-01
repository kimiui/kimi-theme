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
exports.Toolbar = Toolbar;
var jsx_runtime_1 = require("react/jsx-runtime");
var Box_1 = __importDefault(require("@mui/material/Box"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Switch_1 = __importDefault(require("@mui/material/Switch"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
var FormControlLabel_1 = __importDefault(require("@mui/material/FormControlLabel"));
var iconify_1 = require("../../../../components/iconify");
function Toolbar(_a) {
    var isText = _a.isText, isMulti = _a.isMulti, onChangeText = _a.onChangeText, onChangeMulti = _a.onChangeMulti, onRefresh = _a.onRefresh, other = __rest(_a, ["isText", "isMulti", "onChangeText", "onChangeMulti", "onRefresh"]);
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, __assign({ direction: "row", alignItems: "center" }, other, { children: [(0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { checked: isText, onChange: onChangeText }), label: "Text object" }), (0, jsx_runtime_1.jsx)(Box_1.default, { sx: { flexGrow: 1 } }), !isText && ((0, jsx_runtime_1.jsx)(FormControlLabel_1.default, { control: (0, jsx_runtime_1.jsx)(Switch_1.default, { checked: isMulti, onChange: onChangeMulti }), label: "Multiitem" })), (0, jsx_runtime_1.jsx)(IconButton_1.default, { onClick: onRefresh, children: (0, jsx_runtime_1.jsx)(iconify_1.Iconify, { icon: "eva:refresh-fill" }) })] })));
}
