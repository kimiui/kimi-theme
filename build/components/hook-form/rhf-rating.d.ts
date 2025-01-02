import type { RatingProps } from '@mui/material/Rating';
import type { Theme, SxProps } from '@mui/material/styles';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';
type Props = RatingProps & {
    name: string;
    helperText?: React.ReactNode;
    slotProps?: {
        wrap?: SxProps<Theme>;
        formHelperText?: FormHelperTextProps;
    };
};
export declare function RHFRating({ name, helperText, slotProps, ...other }: Props): import("react/jsx-runtime").JSX.Element;
export {};
