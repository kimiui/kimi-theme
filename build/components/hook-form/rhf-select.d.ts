import type { ChipProps } from '@mui/material/Chip';
import type { SelectProps } from '@mui/material/Select';
import type { Theme, SxProps } from '@mui/material/styles';
import type { CheckboxProps } from '@mui/material/Checkbox';
import type { TextFieldProps } from '@mui/material/TextField';
import type { InputLabelProps } from '@mui/material/InputLabel';
import type { FormControlProps } from '@mui/material/FormControl';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
type RHFSelectProps = TextFieldProps & {
    name: string;
    native?: boolean;
    children: React.ReactNode;
    slotProps?: {
        paper?: SxProps<Theme>;
    };
};
export declare function RHFSelect({ name, native, children, slotProps, helperText, inputProps, InputLabelProps, ...other }: RHFSelectProps): import("react/jsx-runtime").JSX.Element;
type RHFMultiSelectProps = FormControlProps & {
    name: string;
    label?: string;
    chip?: boolean;
    checkbox?: boolean;
    placeholder?: string;
    helperText?: React.ReactNode;
    options: {
        label: string;
        value: string;
    }[];
    slotProps?: {
        chip?: ChipProps;
        select: SelectProps;
        checkbox?: CheckboxProps;
        inputLabel?: InputLabelProps;
        formHelperText?: FormHelperTextProps;
    };
};
export declare function RHFMultiSelect({ name, chip, label, options, checkbox, placeholder, slotProps, helperText, ...other }: RHFMultiSelectProps): import("react/jsx-runtime").JSX.Element;
export {};
