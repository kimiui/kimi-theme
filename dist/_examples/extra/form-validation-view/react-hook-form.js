'use client';
import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Stack from '@mui/material/Stack';
import { useForm } from 'react-hook-form';
import Divider from '@mui/material/Divider';
import Backdrop from '@mui/material/Backdrop';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';
import { zodResolver } from '@hookform/resolvers/zod';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import { today } from '../../../utils/format-time';
import { Iconify } from '../../../components/iconify';
import { Form, Field } from '../../../components/hook-form';
import { FormSchema } from './schema';
import { ValuesPreview } from './values-preview';
// ----------------------------------------------------------------------
const OPTIONS = [
    { value: 'option 1', label: 'Option 1' },
    { value: 'option 2', label: 'Option 2' },
    { value: 'option 3', label: 'Option 3' },
    { value: 'option 4', label: 'Option 4' },
    { value: 'option 5', label: 'Option 5' },
    { value: 'option 6', label: 'Option 6' },
    { value: 'option 7', label: 'Option 7' },
    { value: 'option 8', label: 'Option 8' },
];
export const defaultValues = {
    age: 0,
    email: '',
    fullName: '',
    phoneNumber: '',
    //
    editor: '',
    autocomplete: undefined,
    //
    password: '',
    confirmPassword: '',
    //
    startDate: today(),
    endDate: null,
    //
    singleUpload: '',
    multiUpload: [],
    //
    singleSelect: '',
    multiSelect: [],
    //
    singleCountry: '',
    multiCountry: [],
    //
    rating: 0,
    radioGroup: '',
    //
    switch: false,
    multiSwitch: [],
    //
    checkbox: false,
    multiCheckbox: [],
    //
    slider: 8,
    sliderRange: [15, 80],
};
export function ReactHookForm({ debug }) {
    const [password, passwordActions] = useBoolean();
    const methods = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues,
    });
    const { watch, reset, setValue, handleSubmit, formState: { isSubmitting }, } = methods;
    const values = watch();
    const onSubmit = handleSubmit(async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 3000));
            reset();
            console.info('DATA', data);
        }
        catch (error) {
            console.error(error);
        }
    });
    return (_jsxs(_Fragment, { children: [isSubmitting && (_jsx(Backdrop, { open: true, sx: { zIndex: (theme) => theme.zIndex.modal + 1 }, children: _jsx(CircularProgress, { color: "primary" }) })), _jsxs(Form, { methods: methods, onSubmit: onSubmit, children: [debug && _jsx(ValuesPreview, { sx: { display: { xs: 'none', lg: 'block' } } }), _jsxs(Box, { gap: 5, display: "flex", alignItems: "flex-start", flexDirection: { xs: 'column', md: 'row' }, sx: {
                            width: 1,
                            ...(debug && { pr: { lg: '320px' } }),
                        }, children: [_jsxs(Box, { gap: 3, display: "flex", flex: "1 0 auto", flexDirection: "column", sx: { width: { xs: 1, md: 0.5 } }, children: [_jsxs(Grid2, { children: [_jsx(Block, { children: _jsx(Field.Text, { name: "fullName", label: "Full name", helperText: "Helper text" }) }), _jsx(Block, { children: _jsx(Field.Text, { name: "email", label: "Email address" }) })] }), _jsxs(Grid2, { children: [_jsx(Block, { label: "RHFPhone", children: _jsx(Field.Phone, { name: "phoneNumber", label: "Phone number" }) }), _jsx(Block, { children: _jsx(Field.Text, { name: "age", label: "Age", type: "number" }) })] }), _jsxs(Grid2, { children: [_jsx(Field.DatePicker, { name: "startDate", label: "Start date" }), _jsx(Field.DatePicker, { name: "endDate", label: "End date" })] }), _jsxs(Grid2, { children: [_jsx(Block, { children: _jsx(Field.Text, { name: "password", label: "Password", type: password ? 'text' : 'password', InputProps: {
                                                        endAdornment: (_jsx(InputAdornment, { position: "end", children: _jsx(IconButton, { onClick: passwordActions.toggle, edge: "end", children: _jsx(Iconify, { icon: password ? 'solar:eye-bold' : 'solar:eye-closed-bold' }) }) })),
                                                    } }) }), _jsx(Block, { children: _jsx(Field.Text, { name: "confirmPassword", label: "Confirm password", type: password ? 'text' : 'password', InputProps: {
                                                        endAdornment: (_jsx(InputAdornment, { position: "end", children: _jsx(IconButton, { onClick: passwordActions.toggle, edge: "end", children: _jsx(Iconify, { icon: password ? 'solar:eye-bold' : 'solar:eye-closed-bold' }) }) })),
                                                    } }) })] }), _jsx(Block, { label: "RHFAutocomplete", children: _jsx(Field.Autocomplete, { name: "autocomplete", label: "Autocomplete", options: OPTIONS, getOptionLabel: (option) => option.label, isOptionEqualToValue: (option, value) => option.value === value.value, renderOption: (props, option) => (_createElement("li", { ...props, key: option.value }, option.label)) }) }), _jsx(Block, { label: "RHFAutocomplete", children: _jsx(Field.CountrySelect, { fullWidth: true, name: "singleCountry", label: "Single country", placeholder: "Choose a country" }) }), _jsx(Block, { label: "RHFAutocomplete", children: _jsx(Field.CountrySelect, { multiple: true, fullWidth: true, limitTags: 3, name: "multiCountry", label: "Multi country", placeholder: "Choose a country", helperText: "Helper text" }) }), _jsxs(Grid2, { children: [_jsx(Block, { label: "RHFSelect", children: _jsxs(Field.Select, { name: "singleSelect", label: "Single select", children: [_jsx(MenuItem, { value: "", children: "None" }), _jsx(Divider, { sx: { borderStyle: 'dashed' } }), OPTIONS.map((option) => (_jsx(MenuItem, { value: option.label, children: option.label }, option.value)))] }) }), _jsx(Block, { label: "RHFMultiSelect", children: _jsx(Field.MultiSelect, { chip: true, checkbox: true, name: "multiSelect", label: "Multi select", options: OPTIONS }) })] }), _jsx(Block, { label: "RHFEditor", children: _jsx(Field.Editor, { fullItem: true, name: "editor", sx: { maxHeight: 480 } }) })] }), _jsxs(Box, { gap: 3, display: "flex", flex: "1 0 auto", flexDirection: "column", sx: { width: { xs: 1, md: 0.5 } }, children: [_jsx(Block, { label: "RHFUpload", children: _jsx(Field.Upload, { name: "singleUpload", maxSize: 3145728, onDelete: () => setValue('singleUpload', null, { shouldValidate: true }) }) }), _jsx(Block, { label: "RHFUpload", children: _jsx(Field.Upload, { multiple: true, thumbnail: true, name: "multiUpload", maxSize: 3145728, onRemove: (inputFile) => setValue('multiUpload', values.multiUpload.filter((file) => file !== inputFile), { shouldValidate: true }), onRemoveAll: () => setValue('multiUpload', [], { shouldValidate: true }), onUpload: () => console.info('ON UPLOAD') }) }), _jsx(Field.Rating, { name: "rating" }), _jsx(Field.Checkbox, { name: "checkbox", label: "RHFCheckbox" }), _jsx(Field.Switch, { name: "switch", label: "RHFSwitch" }), _jsx(Field.RadioGroup, { row: true, name: "radioGroup", label: "RHFRadioGroup", options: [
                                            { label: 'Option 1', value: 'radio-1' },
                                            { label: 'Option 2', value: 'radio-2' },
                                            { label: 'Option 3', value: 'radio-3' },
                                        ], sx: { gap: 4 } }), _jsx(Field.MultiCheckbox, { row: true, name: "multiCheckbox", label: "RHFMultiCheckbox", options: [
                                            { label: 'Option 1', value: 'checkbox-1' },
                                            { label: 'Option 2', value: 'checkbox-2' },
                                            { label: 'Option 3', value: 'checkbox-3' },
                                        ], sx: { gap: 4 } }), _jsx(Field.MultiSwitch, { name: "multiSwitch", label: "RHFMultiSwitch", options: [
                                            { label: 'Option 1', value: 'switch-1' },
                                            { label: 'Option 2', value: 'switch-2' },
                                            { label: 'Option 3', value: 'switch-3' },
                                        ] }), _jsx(Block, { label: "RHFSlider", children: _jsx(Field.Slider, { name: "slider" }) }), _jsx(Block, { label: "RHFSlider", children: _jsx(Field.Slider, { name: "sliderRange" }) }), _jsx(LoadingButton, { fullWidth: true, color: "info", size: "large", type: "submit", variant: "soft", loading: isSubmitting, children: "Submit to check" })] })] })] })] }));
}
function Block({ sx, children, label = 'RHFTextField' }) {
    return (_jsxs(Stack, { spacing: 1, sx: { width: 1, ...sx }, children: [_jsx(Typography, { variant: "caption", sx: {
                    textAlign: 'right',
                    fontStyle: 'italic',
                    color: 'text.disabled',
                    fontSize: (theme) => theme.typography.pxToRem(10),
                }, children: label }), children] }));
}
// ----------------------------------------------------------------------
function Grid2({ children, sx, ...other }) {
    return (_jsx(Box, { rowGap: 3, columnGap: 2, display: "grid", gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }, sx: { ...sx }, ...other, children: children }));
}
