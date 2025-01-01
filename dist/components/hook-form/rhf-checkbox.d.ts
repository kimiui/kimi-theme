import type { Theme, SxProps } from '@mui/material/styles';
import type { CheckboxProps } from '@mui/material/Checkbox';
import type { FormGroupProps } from '@mui/material/FormGroup';
import type { FormLabelProps } from '@mui/material/FormLabel';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
type RHFCheckboxProps = Omit<FormControlLabelProps, 'control'> & {
    name: string;
    helperText?: React.ReactNode;
    slotProps?: {
        wrap?: SxProps<Theme>;
        checkbox?: CheckboxProps;
        formHelperText?: FormHelperTextProps;
    };
};
export declare function RHFCheckbox({ name, helperText, label, slotProps, ...other }: RHFCheckboxProps): import("react/jsx-runtime").JSX.Element;
type RHFMultiCheckboxProps = FormGroupProps & {
    name: string;
    label?: string;
    helperText?: React.ReactNode;
    slotProps?: {
        wrap?: SxProps<Theme>;
        checkbox?: CheckboxProps;
        formLabel?: FormLabelProps;
        formHelperText?: FormHelperTextProps;
    };
    options: {
        label: string;
        value: string;
    }[];
};
export declare function RHFMultiCheckbox({ name, label, options, slotProps, helperText, ...other }: RHFMultiCheckboxProps): import("react/jsx-runtime").JSX.Element;
export {};
