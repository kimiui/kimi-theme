import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller, useFormContext } from 'react-hook-form';
export function RHFRating({ name, helperText, slotProps, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(Box, { sx: slotProps?.wrap, children: [_jsx(Rating, { ...field, onChange: (event, newValue) => {
                        field.onChange(Number(newValue));
                    }, ...other }), (error?.message || helperText) && (_jsx(FormHelperText, { error: !!error, ...slotProps?.formHelperText, children: error?.message ?? helperText }))] })) }));
}
