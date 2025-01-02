import { jsx as _jsx } from "react/jsx-runtime";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
export function RHFAutocomplete({ name, label, helperText, hiddenLabel, placeholder, ...other }) {
    const { control, setValue } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(Autocomplete, { ...field, id: `rhf-autocomplete-${name}`, onChange: (event, newValue) => setValue(name, newValue, { shouldValidate: true }), renderInput: (params) => (_jsx(TextField, { ...params, label: label, placeholder: placeholder, error: !!error, helperText: error ? error?.message : helperText, inputProps: { ...params.inputProps, autoComplete: 'new-password' } })), ...other })) }));
}
