import type { AutocompleteProps } from '@mui/material/Autocomplete';
export type AutocompleteBaseProps = Omit<AutocompleteProps<any, boolean, boolean, boolean>, 'renderInput'>;
export type RHFAutocompleteProps = AutocompleteBaseProps & {
    name: string;
    label?: string;
    placeholder?: string;
    hiddenLabel?: boolean;
    helperText?: React.ReactNode;
};
export declare function RHFAutocomplete({ name, label, helperText, hiddenLabel, placeholder, ...other }: RHFAutocompleteProps): import("react/jsx-runtime").JSX.Element;
