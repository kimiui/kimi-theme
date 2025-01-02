import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from '@mui/material/Slider';
import FormHelperText from '@mui/material/FormHelperText';
import { Controller, useFormContext } from 'react-hook-form';
export function RHFSlider({ name, helperText, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsxs(_Fragment, { children: [_jsx(Slider, { ...field, valueLabelDisplay: "auto", ...other }), (!!error || helperText) && (_jsx(FormHelperText, { error: !!error, children: error ? error?.message : helperText }))] })) }));
}
