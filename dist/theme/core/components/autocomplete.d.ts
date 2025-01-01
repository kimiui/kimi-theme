import type { Theme } from '@mui/material/styles';
export declare const autocomplete: {
    MuiAutocomplete: {
        defaultProps?: import("@mui/material/styles").ComponentsProps["MuiAutocomplete"];
        styleOverrides?: Partial<import("@mui/material/styles/overrides").OverridesStyleRules<keyof import("@mui/material/Autocomplete").AutocompleteClasses, "MuiAutocomplete", Theme>>;
        variants?: {
            props: Partial<import("@mui/material/Autocomplete").AutocompleteProps<any, any, any, any, "div">> | ((props: Partial<import("@mui/material/Autocomplete").AutocompleteProps<any, any, any, any, "div">> & {
                ownerState: Partial<import("@mui/material/Autocomplete").AutocompleteProps<any, any, any, any, "div">>;
            }) => boolean);
            style: import("@mui/styled-engine").Interpolation<{
                theme: Theme;
            }>;
        }[];
    };
};
