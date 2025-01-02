import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { StyledControlPanel } from '../styles';
export function ControlPanel({ themes, selectTheme, onChangeTheme }) {
    return (_jsxs(StyledControlPanel, { children: [_jsx(Typography, { gutterBottom: true, variant: "subtitle2", sx: { color: 'common.white' }, children: "Select theme:" }), _jsx(RadioGroup, { value: selectTheme, onChange: (event, newValue) => onChangeTheme(newValue), children: Object.keys(themes).map((item) => (_jsx(FormControlLabel, { value: item, control: _jsx(Radio, { size: "small" }), label: item, sx: { color: 'common.white', textTransform: 'capitalize' } }, item))) })] }));
}
