import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller, useFormContext } from 'react-hook-form';
export function RHFSelect({ name, native, children, slotProps, helperText, inputProps, InputLabelProps, ...other }) {
    const { control } = useFormContext();
    const labelId = `${name}-select-label`;
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(TextField, { ...field, select: true, fullWidth: true, SelectProps: {
                native,
                MenuProps: { PaperProps: { sx: { maxHeight: 220, ...slotProps?.paper } } },
                sx: { textTransform: 'capitalize' },
            }, InputLabelProps: { htmlFor: labelId, ...InputLabelProps }, inputProps: { id: labelId, ...inputProps }, error: !!error, helperText: error ? error?.message : helperText, ...other, children: children })) }));
}
export function RHFMultiSelect({ name, chip, label, options, checkbox, placeholder, slotProps, helperText, ...other }) {
    const { control } = useFormContext();
    const labelId = `${name}-select-label`;
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(FormControl, { error: !!error, ...other, children: [label && (_jsx(InputLabel, { htmlFor: labelId, ...slotProps?.inputLabel, children: label })), _jsx(Select, { ...field, multiple: true, displayEmpty: !!placeholder, label: label, renderValue: (selected) => {
                        const selectedItems = options.filter((item) => selected.includes(item.value));
                        if (!selectedItems.length && placeholder) {
                            return _jsx(Box, { sx: { color: 'text.disabled' }, children: placeholder });
                        }
                        if (chip) {
                            return (_jsx(Box, { sx: { gap: 0.5, display: 'flex', flexWrap: 'wrap' }, children: selectedItems.map((item) => (_jsx(Chip, { size: "small", variant: "soft", label: item.label, ...slotProps?.chip }, item.value))) }));
                        }
                        return selectedItems.map((item) => item.label).join(', ');
                    }, ...slotProps?.select, inputProps: { id: labelId, ...slotProps?.select?.inputProps }, children: options.map((option) => (_jsxs(MenuItem, { value: option.value, children: [checkbox && (_jsx(Checkbox, { size: "small", disableRipple: true, checked: field.value.includes(option.value), ...slotProps?.checkbox })), option.label] }, option.value))) }), (!!error || helperText) && (_jsx(FormHelperText, { error: !!error, ...slotProps?.formHelperText, children: error ? error?.message : helperText }))] })) }));
}
