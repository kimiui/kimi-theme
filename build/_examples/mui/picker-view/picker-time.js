'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import dayjs from 'dayjs';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { DesktopTimePicker } from '@mui/x-date-pickers/DesktopTimePicker';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
export function PickerTime() {
    const [value, setValue] = useState(dayjs(new Date()));
    return (_jsxs(Stack, { spacing: 3, children: [_jsxs(ComponentBlock, { title: "Basic", children: [_jsx(TimePicker, { label: "12 hours", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), _jsx(TimePicker, { ampm: false, label: "24 hours", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } })] }), _jsxs(ComponentBlock, { title: "Responsiveness", children: [_jsx(MobileTimePicker, { orientation: "portrait", label: "For mobile", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), _jsx(DesktopTimePicker, { label: "For desktop", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), _jsx(TimePicker, { value: value, onChange: setValue, slotProps: { textField: { fullWidth: true } } })] }), _jsxs(ComponentBlock, { title: "Static mode", children: [_jsx(StaticTimePicker, { orientation: "portrait", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        } }), _jsx(StaticTimePicker, { ampm: true, orientation: "landscape", openTo: "minutes", value: value, onChange: (newValue) => {
                            setValue(newValue);
                        } })] })] }));
}
