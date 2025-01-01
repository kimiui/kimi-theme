import type { AutocompleteProps } from '@mui/material/Autocomplete';
export type AutocompleteBaseProps = Omit<AutocompleteProps<any, boolean, boolean, boolean>, 'options' | 'renderOption' | 'renderInput' | 'renderTags' | 'getOptionLabel'>;
export type CountrySelectProps = AutocompleteBaseProps & {
    label?: string;
    error?: boolean;
    placeholder?: string;
    hiddenLabel?: boolean;
    getValue?: 'label' | 'code';
    helperText?: React.ReactNode;
};
export declare function CountrySelect({ id, label, error, multiple, helperText, hiddenLabel, placeholder, getValue, ...other }: CountrySelectProps): import("react/jsx-runtime").JSX.Element;
