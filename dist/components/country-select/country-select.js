import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import { filledInputClasses } from '@mui/material/FilledInput';
import { countries } from '../../assets/data';
import { FlagIcon, iconifyClasses } from '../../components/iconify';
import { getCountry, displayValueByCountryCode } from './utils';
export function CountrySelect({ id, label, error, multiple, helperText, hiddenLabel, placeholder, getValue = 'label', ...other }) {
    const options = countries.map((country) => (getValue === 'label' ? country.label : country.code));
    const renderOption = (props, option) => {
        const country = getCountry(option);
        if (!country.label) {
            return null;
        }
        return (_createElement("li", { ...props, key: country.label },
            _jsx(FlagIcon, { code: country.code, sx: { mr: 1, width: 22, height: 22, borderRadius: '50%' } }, country.label),
            country.label,
            " (",
            country.code,
            ") +",
            country.phone));
    };
    const renderInput = (params) => {
        const country = getCountry(params.inputProps.value);
        const baseField = {
            ...params,
            label,
            placeholder,
            helperText,
            hiddenLabel,
            error: !!error,
            inputProps: {
                ...params.inputProps,
                autoComplete: 'new-password',
            },
        };
        if (multiple) {
            return _jsx(TextField, { ...baseField });
        }
        return (_jsx(TextField, { ...baseField, InputProps: {
                ...params.InputProps,
                startAdornment: (_jsx(InputAdornment, { position: "start", sx: { ...(!country.code && { display: 'none' }) }, children: _jsx(FlagIcon, { code: country.code, sx: {
                            ml: 0.5,
                            mr: -0.5,
                            width: 22,
                            height: 22,
                            borderRadius: '50%',
                        } }, country.label) })),
            }, sx: {
                ...(!hiddenLabel && {
                    [`& .${filledInputClasses.root}`]: {
                        [`& .${iconifyClasses.root}`]: { mt: -2 },
                    },
                }),
            } }));
    };
    const renderTags = (selected, getTagProps) => selected.map((option, index) => {
        const country = getCountry(option);
        return (_createElement(Chip, { ...getTagProps({ index }), key: country.label, label: country.label, size: "small", variant: "soft", icon: _jsx(FlagIcon, { code: country.code, sx: { width: 16, height: 16, borderRadius: '50%' } }, country.label) }));
    });
    const getOptionLabel = (option) => getValue === 'label' ? option : displayValueByCountryCode(option);
    return (_jsx(Autocomplete, { id: `country-select-${id}`, multiple: multiple, options: options, autoHighlight: !multiple, disableCloseOnSelect: multiple, renderOption: renderOption, renderInput: renderInput, renderTags: multiple ? renderTags : undefined, getOptionLabel: getOptionLabel, ...other }));
}
