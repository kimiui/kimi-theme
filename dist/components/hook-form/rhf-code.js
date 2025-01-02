'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller, useFormContext } from 'react-hook-form';
function Otp({ separator, length, value, onChange }) {
    const inputRefs = React.useRef(new Array(length).fill(null));
    const focusInput = (targetIndex) => {
        const targetInput = inputRefs.current[targetIndex];
        targetInput.focus();
    };
    const selectInput = (targetIndex) => {
        const targetInput = inputRefs.current[targetIndex];
        targetInput.select();
    };
    const handleKeyDown = (event, currentIndex) => {
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
            case ' ':
                event.preventDefault();
                break;
            case 'ArrowLeft':
                event.preventDefault();
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                break;
            case 'ArrowRight':
                event.preventDefault();
                if (currentIndex < length - 1) {
                    focusInput(currentIndex + 1);
                    selectInput(currentIndex + 1);
                }
                break;
            case 'Delete':
                event.preventDefault();
                onChange((prevOtp) => {
                    const otp = prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
                    return otp;
                });
                break;
            case 'Backspace':
                event.preventDefault();
                if (currentIndex > 0) {
                    focusInput(currentIndex - 1);
                    selectInput(currentIndex - 1);
                }
                onChange((prevOtp) => {
                    const otp = prevOtp.slice(0, currentIndex) + prevOtp.slice(currentIndex + 1);
                    return otp;
                });
                break;
            default:
                break;
        }
    };
    const handleChange = (event, currentIndex) => {
        const currentValue = event.target.value;
        let indexToEnter = 0;
        while (indexToEnter <= currentIndex) {
            if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
                indexToEnter += 1;
            }
            else {
                break;
            }
        }
        onChange((prev) => {
            const otpArray = prev.split('');
            const lastValue = currentValue[currentValue.length - 1];
            otpArray[indexToEnter] = lastValue;
            return otpArray.join('');
        });
        if (currentValue !== '') {
            if (currentIndex < length - 1) {
                focusInput(currentIndex + 1);
            }
        }
    };
    const handleClick = (event, currentIndex) => {
        selectInput(currentIndex);
    };
    const handlePaste = (event, currentIndex) => {
        event.preventDefault();
        const { clipboardData } = event;
        // Check if there is text data in the clipboard
        if (clipboardData.types.includes('text/plain')) {
            let pastedText = clipboardData.getData('text/plain');
            pastedText = pastedText.substring(0, length).trim();
            let indexToEnter = 0;
            while (indexToEnter <= currentIndex) {
                if (inputRefs.current[indexToEnter].value && indexToEnter < currentIndex) {
                    indexToEnter += 1;
                }
                else {
                    break;
                }
            }
            const otpArray = value.split('');
            for (let i = indexToEnter; i < length; i += 1) {
                const lastValue = pastedText[i - indexToEnter] ?? ' ';
                otpArray[i] = lastValue;
            }
            onChange(otpArray.join(''));
        }
    };
    return (_jsx(Box, { sx: { display: 'flex', gap: 1, alignItems: 'center' }, children: new Array(length).fill(null).map((_, index) => (_jsxs(React.Fragment, { children: [_jsx(Input, { "aria-label": `Digit ${index + 1} of OTP`, ref: (ele) => {
                        inputRefs.current[index] = ele;
                    }, onKeyDown: (event) => handleKeyDown(event, index), onChange: (event) => handleChange(event, index), onClick: (event) => handleClick(event, index), onPaste: (event) => handlePaste(event, index), value: value[index] ?? '' }), index === length - 1 ? null : separator] }, index))) }));
}
export function RHFCode({ name }) {
    const { control } = useFormContext();
    const [otp, setOtp] = useState('');
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs("div", { children: [_jsx(Otp, { separator: _jsx("span", { children: "-" }), value: otp, onChange: setOtp, length: 5 }), error && (_jsx(FormHelperText, { sx: { px: 2 }, error: true, children: error.message }))] })) }));
}
