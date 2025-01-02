import { jsx as _jsx } from "react/jsx-runtime";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { StyledControlPanel } from '../styles';
export function ControlPanel({ data, selectedCity, onSelectCity }) {
    return (_jsx(StyledControlPanel, { children: data.map((city) => (_jsx(RadioGroup, { value: selectedCity, onChange: (event) => onSelectCity(event, city), children: _jsx(FormControlLabel, { value: city.city, label: city.city, control: _jsx(Radio, { size: "small" }), sx: { color: 'common.white' } }) }, city.city))) }));
}
