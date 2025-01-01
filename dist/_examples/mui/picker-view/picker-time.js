'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickerTime = PickerTime;
var jsx_runtime_1 = require("react/jsx-runtime");
var dayjs_1 = __importDefault(require("dayjs"));
var react_1 = require("react");
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var TimePicker_1 = require("@mui/x-date-pickers/TimePicker");
var MobileTimePicker_1 = require("@mui/x-date-pickers/MobileTimePicker");
var StaticTimePicker_1 = require("@mui/x-date-pickers/StaticTimePicker");
var DesktopTimePicker_1 = require("@mui/x-date-pickers/DesktopTimePicker");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function PickerTime() {
    var _a = (0, react_1.useState)((0, dayjs_1.default)(new Date())), value = _a[0], setValue = _a[1];
    return ((0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 3, children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Basic", children: [(0, jsx_runtime_1.jsx)(TimePicker_1.TimePicker, { label: "12 hours", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), (0, jsx_runtime_1.jsx)(TimePicker_1.TimePicker, { ampm: false, label: "24 hours", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Responsiveness", children: [(0, jsx_runtime_1.jsx)(MobileTimePicker_1.MobileTimePicker, { orientation: "portrait", label: "For mobile", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), (0, jsx_runtime_1.jsx)(DesktopTimePicker_1.DesktopTimePicker, { label: "For desktop", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), (0, jsx_runtime_1.jsx)(TimePicker_1.TimePicker, { value: value, onChange: setValue, slotProps: { textField: { fullWidth: true } } })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Static mode", children: [(0, jsx_runtime_1.jsx)(StaticTimePicker_1.StaticTimePicker, { orientation: "portrait", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        } }), (0, jsx_runtime_1.jsx)(StaticTimePicker_1.StaticTimePicker, { ampm: true, orientation: "landscape", openTo: "minutes", value: value, onChange: function (newValue) {
                            setValue(newValue);
                        } })] })] }));
}
