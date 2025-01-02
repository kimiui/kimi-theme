'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import dayjs from 'dayjs';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import NoSsr from '@mui/material/NoSsr';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
export function PickerDate() {
    const [value, setValue] = useState(dayjs(new Date()));
    return (_jsxs(Stack, { spacing: 5, children: [_jsxs(ComponentBlock, { title: "Basic", children: [_jsx(DesktopDatePicker, { label: "For desktop", value: value, minDate: dayjs('2017-01-01'), onChange: (newValue) => {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), _jsx(MobileDatePicker, { orientation: "portrait", label: "For mobile", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } })] }), _jsxs(ComponentBlock, { title: "Views playground", children: [_jsx(DatePicker, { views: ['year'], label: "Year only", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), _jsx(DatePicker, { views: ['year', 'month'], label: "Year and Month", minDate: dayjs('2012-03-01'), maxDate: dayjs('2023-06-01'), value: value, onChange: (newValue) => {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), _jsx(DatePicker, { openTo: "year", views: ['year', 'month', 'day'], label: "Year, month and date", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), _jsx(DatePicker, { views: ['day', 'month', 'year'], label: "Invert the order of views", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), _jsx(DatePicker, { views: ['day'], label: "Just date", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } })] }), _jsx(ComponentBlock, { title: "Static mode", children: _jsx(NoSsr, { children: _jsx(StaticDatePicker, { orientation: "landscape", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        } }) }) })] }));
}
