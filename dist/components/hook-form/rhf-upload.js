import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import FormHelperText from '@mui/material/FormHelperText';
import { Controller, useFormContext } from 'react-hook-form';
import { Upload, UploadBox, UploadAvatar } from '../upload';
// ----------------------------------------------------------------------
export function RHFUploadAvatar({ name, ...other }) {
    const { control, setValue } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => {
            const onDrop = (acceptedFiles) => {
                const value = acceptedFiles[0];
                setValue(name, value, { shouldValidate: true });
            };
            return (_jsxs("div", { children: [_jsx(UploadAvatar, { value: field.value, error: !!error, onDrop: onDrop, ...other }), !!error && (_jsx(FormHelperText, { error: true, sx: { px: 2, textAlign: 'center' }, children: error.message }))] }));
        } }));
}
// ----------------------------------------------------------------------
export function RHFUploadBox({ name, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(UploadBox, { value: field.value, error: !!error, ...other })) }));
}
// ----------------------------------------------------------------------
export function RHFUpload({ name, multiple, helperText, ...other }) {
    const { control, setValue } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => {
            const uploadProps = {
                multiple,
                accept: { 'image/*': [] },
                error: !!error,
                helperText: error?.message ?? helperText,
            };
            const onDrop = (acceptedFiles) => {
                const value = multiple ? [...field.value, ...acceptedFiles] : acceptedFiles[0];
                setValue(name, value, { shouldValidate: true });
            };
            return _jsx(Upload, { ...uploadProps, value: field.value, onDrop: onDrop, ...other });
        } }));
}
