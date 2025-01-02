import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import { CountrySelect } from '../../components/country-select';
// ----------------------------------------------------------------------
export function RHFCountrySelect({ name, helperText, ...other }) {
    const { control, setValue } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, render: ({ field, fieldState: { error } }) => (_jsx(CountrySelect, { id: `rhf-country-select-${name}`, value: field.value, onChange: (event, newValue) => setValue(name, newValue, { shouldValidate: true }), error: !!error, helperText: error?.message ?? helperText, ...other })) }));
}
