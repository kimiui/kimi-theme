import type { TextFieldProps } from '@mui/material/TextField';
import type { Country } from 'react-phone-number-input/input';
export declare const PhoneInput: import("react").ForwardRefExoticComponent<Omit<TextFieldProps, "ref" | "onChange"> & {
    value: string;
    country?: Country;
    disableSelect?: boolean;
    onChange: (newValue: import("react-phone-number-input").Value) => void;
} & import("react").RefAttributes<HTMLDivElement>>;
