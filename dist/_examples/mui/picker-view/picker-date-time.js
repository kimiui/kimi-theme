'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickerDateTime = PickerDateTime;
var jsx_runtime_1 = require("react/jsx-runtime");
var dayjs_1 = __importDefault(require("dayjs"));
var react_1 = require("react");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var DateTimePicker_1 = require("@mui/x-date-pickers/DateTimePicker");
var MobileDateTimePicker_1 = require("@mui/x-date-pickers/MobileDateTimePicker");
var DesktopDateTimePicker_1 = require("@mui/x-date-pickers/DesktopDateTimePicker");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function PickerDateTime() {
    var _a = (0, react_1.useState)((0, dayjs_1.default)(new Date())), value = _a[0], setValue = _a[1];
    var _b = (0, react_1.useState)((0, dayjs_1.default)('2018-01-01T00:00:00.000Z')), valueResponsive = _b[0], setValueResponsive = _b[1];
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 5, children: [(0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Basic", children: (0, jsx_runtime_1.jsx)(DateTimePicker_1.DateTimePicker, { label: "DateTimePicker", value: value, onChange: setValue, slotProps: { textField: { fullWidth: true } } }) }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Responsiveness", children: [(0, jsx_runtime_1.jsx)(MobileDateTimePicker_1.MobileDateTimePicker, { value: valueResponsive, onChange: function (newValue) {
                            setValueResponsive(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), (0, jsx_runtime_1.jsx)(DesktopDateTimePicker_1.DesktopDateTimePicker, { value: valueResponsive, onChange: function (newValue) {
                            setValueResponsive(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), (0, jsx_runtime_1.jsx)(DateTimePicker_1.DateTimePicker, { value: valueResponsive, onChange: function (newValue) {
                            setValueResponsive(newValue);
                        }, slotProps: { textField: { fullWidth: true } } })] })] }));
}
