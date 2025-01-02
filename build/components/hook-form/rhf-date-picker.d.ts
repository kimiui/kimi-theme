import type { Dayjs } from 'dayjs';
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import type { MobileDateTimePickerProps } from '@mui/x-date-pickers/MobileDateTimePicker';
type RHFDatePickerProps = DatePickerProps<Dayjs> & {
    name: string;
};
export declare function RHFDatePicker({ name, slotProps, ...other }: RHFDatePickerProps): import("react/jsx-runtime").JSX.Element;
type RHFMobileDateTimePickerProps = MobileDateTimePickerProps<Dayjs> & {
    name: string;
};
export declare function RHFMobileDateTimePicker({ name, slotProps, ...other }: RHFMobileDateTimePickerProps): import("react/jsx-runtime").JSX.Element;
export {};
