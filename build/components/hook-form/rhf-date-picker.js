import { jsx as _jsx } from "react/jsx-runtime";
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useFormContext } from 'react-hook-form';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { formatStr } from '../../utils/format-time';
export function RHFDatePicker({ name, slotProps, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(DatePicker, { ...field, value: dayjs(field.value), onChange: (newValue) => field.onChange(dayjs(newValue).format()), format: formatStr.split.date, slotProps: {
                textField: {
                    fullWidth: true,
                    error: !!error,
                    helperText: error?.message ?? slotProps?.textField?.helperText,
                    ...slotProps?.textField,
                },
                ...slotProps,
            }, ...other })) }));
}
export function RHFMobileDateTimePicker({ name, slotProps, ...other }) {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(MobileDateTimePicker, { ...field, value: dayjs(field.value), onChange: (newValue) => field.onChange(dayjs(newValue).format()), format: formatStr.split.dateTime, slotProps: {
                textField: {
                    fullWidth: true,
                    error: !!error,
                    helperText: error?.message ?? slotProps?.textField?.helperText,
                    ...slotProps?.textField,
                },
                ...slotProps,
            }, ...other })) }));
}
