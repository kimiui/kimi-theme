'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import dayjs from 'dayjs';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { fDate } from '../../../utils/format-time';
import { useDateRangePicker, CustomDateRangePicker } from '../../../components/custom-date-range-picker';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
export function PickerDateRange() {
    const rangeInputPicker = useDateRangePicker(dayjs(), dayjs());
    const rangeCalendarPicker = useDateRangePicker(dayjs(new Date('2024/08/08')), null);
    return (_jsxs(_Fragment, { children: [_jsxs(Stack, { sx: { typography: 'body2', mb: 3, color: 'text.secondary' }, children: [_jsx("div", { children: "This is the custom component from Kimi UI." }), _jsx("div", { children: "You can use more advanced components by MUI." }), _jsx(Link, { href: "https://mui.com/x/react-date-pickers/date-range-picker/", children: "https://mui.com/x/react-date-pickers/date-range-picker/" })] }), _jsxs(Stack, { spacing: 3, direction: { xs: 'column', md: 'row' }, children: [_jsxs(ComponentBlock, { title: "Input", sx: { flexDirection: 'column' }, children: [_jsx(Button, { variant: "contained", onClick: rangeInputPicker.onOpen, children: "Click me!" }), _jsxs(Stack, { sx: { typography: 'body2', mt: 3 }, children: [_jsxs("div", { children: [_jsx("strong", { children: "Start:" }), " ", fDate(rangeInputPicker.startDate)] }), _jsxs("div", { children: [_jsx("strong", { children: "End:" }), " ", fDate(rangeInputPicker.endDate)] })] }), _jsx(CustomDateRangePicker, { open: rangeInputPicker.open, startDate: rangeInputPicker.startDate, endDate: rangeInputPicker.endDate, onChangeStartDate: rangeInputPicker.onChangeStartDate, onChangeEndDate: rangeInputPicker.onChangeEndDate, onClose: rangeInputPicker.onClose, error: rangeInputPicker.error })] }), _jsxs(ComponentBlock, { title: "Calendar", sx: { flexDirection: 'column' }, children: [_jsx(Button, { variant: "contained", onClick: rangeCalendarPicker.onOpen, children: "Click me!" }), _jsxs(Stack, { sx: { typography: 'body2', mt: 3 }, children: [_jsxs("div", { children: [_jsx("strong", { children: "Start:" }), " ", fDate(rangeCalendarPicker.startDate)] }), _jsxs("div", { children: [_jsx("strong", { children: "End:" }), " ", fDate(rangeCalendarPicker.endDate)] })] }), _jsx(CustomDateRangePicker, { variant: "calendar", open: rangeCalendarPicker.open, startDate: rangeCalendarPicker.startDate, endDate: rangeCalendarPicker.endDate, onChangeStartDate: rangeCalendarPicker.onChangeStartDate, onChangeEndDate: rangeCalendarPicker.onChangeEndDate, onClose: rangeCalendarPicker.onClose, error: rangeCalendarPicker.error })] })] })] }));
}
