import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller, useFormContext } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
export function RHFCheckbox({ name, helperText, label, slotProps, ...other }) {
    const { control } = useFormContext();
    const ariaLabel = `Checkbox ${name}`;
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(Box, { sx: slotProps?.wrap, children: [_jsx(FormControlLabel, { control: _jsx(Checkbox, { ...field, checked: field.value, ...slotProps?.checkbox, inputProps: {
                            ...(!label && { 'aria-label': ariaLabel }),
                            ...slotProps?.checkbox?.inputProps,
                        } }), label: label, ...other }), (!!error || helperText) && (_jsx(FormHelperText, { error: !!error, ...slotProps?.formHelperText, children: error ? error?.message : helperText }))] })) }));
}
export function RHFMultiCheckbox({ name, label, options, slotProps, helperText, ...other }) {
    const { control } = useFormContext();
    const getSelected = (selectedItems, item) => selectedItems.includes(item)
        ? selectedItems.filter((value) => value !== item)
        : [...selectedItems, item];
    const accessibility = (val) => val;
    const ariaLabel = (val) => `Checkbox ${val}`;
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(FormControl, { component: "fieldset", sx: slotProps?.wrap, children: [label && (_jsx(FormLabel, { component: "legend", ...slotProps?.formLabel, sx: { mb: 1, typography: 'body2', ...slotProps?.formLabel?.sx }, children: label })), _jsx(FormGroup, { ...other, children: options.map((option) => (_jsx(FormControlLabel, { control: _jsx(Checkbox, { checked: field.value.includes(option.value), onChange: () => field.onChange(getSelected(field.value, option.value)), name: accessibility(option.label), ...slotProps?.checkbox, inputProps: {
                                ...(!option.label && { 'aria-label': ariaLabel(option.label) }),
                                ...slotProps?.checkbox?.inputProps,
                            } }), label: option.label }, option.value))) }), (!!error || helperText) && (_jsx(FormHelperText, { error: !!error, sx: { mx: 0 }, ...slotProps?.formHelperText, children: error ? error?.message : helperText }))] })) }));
}
