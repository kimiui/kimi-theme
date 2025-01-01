'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PickerDateRange = PickerDateRange;
var jsx_runtime_1 = require("react/jsx-runtime");
var dayjs_1 = __importDefault(require("dayjs"));
var Link_1 = __importDefault(require("@mui/material/Link"));
var Stack_1 = __importDefault(require("@mui/material/Stack"));
var Button_1 = __importDefault(require("@mui/material/Button"));
var format_time_1 = require("../../../utils/format-time");
var custom_date_range_picker_1 = require("../../../components/custom-date-range-picker");
var component_block_1 = require("../../component-block");
// ----------------------------------------------------------------------
function PickerDateRange() {
    var rangeInputPicker = (0, custom_date_range_picker_1.useDateRangePicker)((0, dayjs_1.default)(), (0, dayjs_1.default)());
    var rangeCalendarPicker = (0, custom_date_range_picker_1.useDateRangePicker)((0, dayjs_1.default)(new Date('2024/08/08')), null);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: { typography: 'body2', mb: 3, color: 'text.secondary' }, children: [(0, jsx_runtime_1.jsx)("div", { children: "This is the custom component from Kimi UI." }), (0, jsx_runtime_1.jsx)("div", { children: "You can use more advanced components by MUI." }), (0, jsx_runtime_1.jsx)(Link_1.default, { href: "https://mui.com/x/react-date-pickers/date-range-picker/", children: "https://mui.com/x/react-date-pickers/date-range-picker/" })] }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { spacing: 3, direction: { xs: 'column', md: 'row' }, children: [(0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Input", sx: { flexDirection: 'column' }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: rangeInputPicker.onOpen, children: "Click me!" }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: { typography: 'body2', mt: 3 }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Start:" }), " ", (0, format_time_1.fDate)(rangeInputPicker.startDate)] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "End:" }), " ", (0, format_time_1.fDate)(rangeInputPicker.endDate)] })] }), (0, jsx_runtime_1.jsx)(custom_date_range_picker_1.CustomDateRangePicker, { open: rangeInputPicker.open, startDate: rangeInputPicker.startDate, endDate: rangeInputPicker.endDate, onChangeStartDate: rangeInputPicker.onChangeStartDate, onChangeEndDate: rangeInputPicker.onChangeEndDate, onClose: rangeInputPicker.onClose, error: rangeInputPicker.error })] }), (0, jsx_runtime_1.jsxs)(component_block_1.ComponentBlock, { title: "Calendar", sx: { flexDirection: 'column' }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { variant: "contained", onClick: rangeCalendarPicker.onOpen, children: "Click me!" }), (0, jsx_runtime_1.jsxs)(Stack_1.default, { sx: { typography: 'body2', mt: 3 }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Start:" }), " ", (0, format_time_1.fDate)(rangeCalendarPicker.startDate)] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "End:" }), " ", (0, format_time_1.fDate)(rangeCalendarPicker.endDate)] })] }), (0, jsx_runtime_1.jsx)(custom_date_range_picker_1.CustomDateRangePicker, { variant: "calendar", open: rangeCalendarPicker.open, startDate: rangeCalendarPicker.startDate, endDate: rangeCalendarPicker.endDate, onChangeStartDate: rangeCalendarPicker.onChangeStartDate, onChangeEndDate: rangeCalendarPicker.onChangeEndDate, onClose: rangeCalendarPicker.onClose, error: rangeCalendarPicker.error })] })] })] }));
}
