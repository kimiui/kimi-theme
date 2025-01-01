'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickerDate = PickerDate;
var jsx_runtime_1 = require("react/jsx-runtime");
var dayjs_1 = __importDefault(require("dayjs"));
var react_1 = require("react");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var NoSsr_1 = __importDefault(require("@mui/material/NoSsr"));
var DatePicker_1 = require("@mui/x-date-pickers/DatePicker");
var StaticDatePicker_1 = require("@mui/x-date-pickers/StaticDatePicker");
var MobileDatePicker_1 = require("@mui/x-date-pickers/MobileDatePicker");
var DesktopDatePicker_1 = require("@mui/x-date-pickers/DesktopDatePicker");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function PickerDate() {
    var _a = (0, react_1.useState)((0, dayjs_1.default)(new Date())), value = _a[0], setValue = _a[1];
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 5, children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Basic", children: [(0, jsx_runtime_1.jsx)(DesktopDatePicker_1.DesktopDatePicker, { label: "For desktop", value: value, minDate: (0, dayjs_1.default)('2017-01-01'), onChange: function (newValue) {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), (0, jsx_runtime_1.jsx)(MobileDatePicker_1.MobileDatePicker, { orientation: "portrait", label: "For mobile", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Views playground", children: [(0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { views: ['year'], label: "Year only", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), (0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { views: ['year', 'month'], label: "Year and Month", minDate: (0, dayjs_1.default)('2012-03-01'), maxDate: (0, dayjs_1.default)('2023-06-01'), value: value, onChange: function (newValue) {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), (0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { openTo: "year", views: ['year', 'month', 'day'], label: "Year, month and date", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), (0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { views: ['day', 'month', 'year'], label: "Invert the order of views", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), (0, jsx_runtime_1.jsx)(DatePicker_1.DatePicker, { views: ['day'], label: "Just date", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } })] }), (0, jsx_runtime_1.jsx)(component_block_1.ComponentBlock, { title: "Static mode", children: (0, jsx_runtime_1.jsx)(NoSsr_1.default, { children: (0, jsx_runtime_1.jsx)(StaticDatePicker_1.StaticDatePicker, { orientation: "landscape", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        } }) }) })] }));
}
