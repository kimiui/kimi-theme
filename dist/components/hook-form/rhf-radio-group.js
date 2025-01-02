import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller, useFormContext } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
export function RHFRadioGroup({ name, label, options, helperText, slotProps, ...other }) {
    const { control } = useFormContext();
    const labelledby = `${name}-radio-buttons-group-label`;
    const ariaLabel = (val) => `Radio ${val}`;
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(FormControl, { component: "fieldset", sx: slotProps?.wrap, children: [label && (_jsx(FormLabel, { id: labelledby, component: "legend", ...slotProps?.formLabel, sx: { mb: 1, typography: 'body2', ...slotProps?.formLabel.sx }, children: label })), _jsx(RadioGroup, { ...field, "aria-labelledby": labelledby, ...other, children: options.map((option) => (_jsx(FormControlLabel, { value: option.value, control: _jsx(Radio, { ...slotProps?.radio, inputProps: {
                                ...(!option.label && { 'aria-label': ariaLabel(option.label) }),
                                ...slotProps?.radio?.inputProps,
                            } }), label: option.label }, option.value))) }), (!!error || helperText) && (_jsx(FormHelperText, { error: !!error, sx: { mx: 0 }, ...slotProps?.formHelperText, children: error ? error?.message : helperText }))] })) }));
}
