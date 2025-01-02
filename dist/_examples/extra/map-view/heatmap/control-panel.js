import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { fDate } from '../../../../utils/format-time';
import { StyledControlPanel } from '../styles';
export function ControlPanel({ startTime, endTime, allDays, selectedTime, onChangeTime, onChangeAllDays, }) {
    const day = 24 * 60 * 60 * 1000;
    const days = Math.round((endTime - startTime) / day);
    const selectedDay = Math.round((selectedTime - startTime) / day);
    const handleChangeDays = (value) => {
        const daysToAdd = value;
        const newTime = startTime + daysToAdd * day;
        onChangeTime(newTime);
    };
    return (_jsxs(StyledControlPanel, { children: [_jsxs(Box, { sx: {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }, children: [_jsx(Typography, { variant: "subtitle2", sx: { color: 'common.white' }, children: "All days" }), _jsx(Switch, { size: "small", checked: allDays, onChange: (event) => onChangeAllDays(event.target.checked) })] }), _jsx("br", {}), _jsxs(Typography, { gutterBottom: true, variant: "body2", sx: { color: allDays ? 'text.disabled' : 'common.white' }, children: ["Each day: ", fDate(selectedTime)] }), _jsx(Slider, { min: 1, step: 1, max: days, disabled: allDays, value: selectedDay, onChange: (event, newValue) => {
                    if (typeof newValue === 'number')
                        handleChangeDays(newValue);
                } })] }));
}
