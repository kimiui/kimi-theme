import type { AutocompleteProps } from '@mui/material/Autocomplete';
export type RHFAutocompleteProps = Omit<AutocompleteProps<any, boolean, boolean, boolean>, 'renderInput'> & {
    name: string;
    label?: string;
    placeholder?: string;
    hiddenLabel?: boolean;
    helperText?: React.ReactNode;
};
export declare function RHFAutocomplete({ name, label, helperText, hiddenLabel, placeholder, ...other }: RHFAutocompleteProps): import("react/jsx-runtime").JSX.Element;
