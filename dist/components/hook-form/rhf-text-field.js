import { jsx as _jsx } from "react/jsx-runtime";
import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
export function RHFTextField({ name, helperText, type, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(TextField, { ...field, fullWidth: true, type: type, value: type === 'number' && field.value === 0 ? '' : field.value, onChange: (event) => {
                if (type === 'number') {
                    field.onChange(Number(event.target.value));
                }
                else {
                    field.onChange(event.target.value);
                }
            }, error: !!error, helperText: error?.message ?? helperText, inputProps: {
                autoComplete: 'off',
            }, ...other })) }));
}
