'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState, forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneNumberInput from 'react-phone-number-input/input';
import { getCountryCode } from './utils';
import { CountryListPopover } from './list';
// ----------------------------------------------------------------------
export const PhoneInput = forwardRef(({ value, onChange, placeholder, country: inputCountryCode, disableSelect, ...other }, ref) => {
    const defaultCountryCode = getCountryCode(value, inputCountryCode);
    const [selectedCountry, setSelectedCountry] = useState(defaultCountryCode);
    return (_jsx(PhoneNumberInput, { ref: ref, country: selectedCountry, inputComponent: CustomInput, value: value, onChange: onChange, placeholder: placeholder ?? 'Enter phone number', InputProps: disableSelect
            ? undefined
            : {
                startAdornment: (_jsx(InputAdornment, { position: "start", sx: { ml: 1 }, children: _jsx(CountryListPopover, { countryCode: selectedCountry, onClickCountry: (inputValue) => setSelectedCountry(inputValue) }) })),
            }, ...other }));
});
// ----------------------------------------------------------------------
const CustomInput = forwardRef(({ ...props }, ref) => (_jsx(TextField, { inputRef: ref, ...props })));
