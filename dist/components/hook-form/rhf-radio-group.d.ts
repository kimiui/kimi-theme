import type { RadioProps } from '@mui/material/Radio';
import type { Theme, SxProps } from '@mui/material/styles';
import type { FormLabelProps } from '@mui/material/FormLabel';
import type { RadioGroupProps } from '@mui/material/RadioGroup';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
type Props = RadioGroupProps & {
    name: string;
    label?: string;
    helperText?: React.ReactNode;
    slotProps?: {
        wrap?: SxProps<Theme>;
        radio: RadioProps;
        formLabel: FormLabelProps;
        formHelperText: FormHelperTextProps;
    };
    options: {
        label: string;
        value: string;
    }[];
};
export declare function RHFRadioGroup({ name, label, options, helperText, slotProps, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
