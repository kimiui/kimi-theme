'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import dayjs from 'dayjs';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';
import { ComponentBlock } from '../../component-block';
// ----------------------------------------------------------------------
export function PickerDateTime() {
    const [value, setValue] = useState(dayjs(new Date()));
    const [valueResponsive, setValueResponsive] = useState(dayjs('2018-01-01T00:00:00.000Z'));
    return (_jsxs(Stack, { spacing: 5, children: [_jsx(ComponentBlock, { title: "Basic", children: _jsx(DateTimePicker, { label: "DateTimePicker", value: value, onChange: setValue, slotProps: { textField: { fullWidth: true } } }) }), _jsxs(ComponentBlock, { title: "Responsiveness", children: [_jsx(MobileDateTimePicker, { value: valueResponsive, onChange: (newValue) => {
                            setValueResponsive(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), _jsx(DesktopDateTimePicker, { value: valueResponsive, onChange: (newValue) => {
                            setValueResponsive(newValue);
                        }, slotProps: { textField: { fullWidth: true } } }), _jsx(DateTimePicker, { value: valueResponsive, onChange: (newValue) => {
                            setValueResponsive(newValue);
                        }, slotProps: { textField: { fullWidth: true } } })] })] }));
}
