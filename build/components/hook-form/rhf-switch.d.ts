import type { SwitchProps } from '@mui/material/Switch';
import type { Theme, SxProps } from '@mui/material/styles';
import type { FormGroupProps } from '@mui/material/FormGroup';
import type { FormLabelProps } from '@mui/material/FormLabel';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
import type { FormControlLabelProps } from '@mui/material/FormControlLabel';
export type RHFSwitchProps = Omit<FormControlLabelProps, 'control'> & {
    name: string;
    helperText?: React.ReactNode;
    slotProps?: {
        wrap?: SxProps<Theme>;
        switch: SwitchProps;
        formHelperText?: FormHelperTextProps;
    };
};
export declare function RHFSwitch({ name, helperText, label, slotProps, ...other }: RHFSwitchProps): import("react/jsx-runtime").JSX.Element;
type RHFMultiSwitchProps = FormGroupProps & {
    name: string;
    label?: string;
    helperText?: React.ReactNode;
    options: {
        label: string;
        value: string;
    }[];
    slotProps?: {
        wrap?: SxProps<Theme>;
        switch: SwitchProps;
        formLabel?: FormLabelProps;
        formHelperText?: FormHelperTextProps;
    };
};
export declare function RHFMultiSwitch({ name, label, options, helperText, slotProps, ...other }: RHFMultiSwitchProps): import("react/jsx-runtime").JSX.Element;
export {};
