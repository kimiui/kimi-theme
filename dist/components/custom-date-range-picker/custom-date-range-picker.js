import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import FormHelperText from '@mui/material/FormHelperText';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { useResponsive } from '../../hooks';
// ----------------------------------------------------------------------
export function CustomDateRangePicker({ open, error, endDate, onClose, startDate, onChangeEndDate, variant = 'input', onChangeStartDate, title = 'Select date range', }) {
    const mdUp = useResponsive('up', 'md');
    const isCalendarView = variant === 'calendar';
    return (_jsxs(Dialog, { fullWidth: true, maxWidth: isCalendarView ? false : 'xs', open: open, onClose: onClose, PaperProps: { sx: { ...(isCalendarView && { maxWidth: 720 }) } }, children: [_jsx(DialogTitle, { sx: { pb: 2 }, children: title }), _jsxs(DialogContent, { sx: { ...(isCalendarView && mdUp && { overflow: 'unset' }) }, children: [_jsx(Stack, { justifyContent: "center", spacing: isCalendarView ? 3 : 2, direction: isCalendarView && mdUp ? 'row' : 'column', sx: { pt: 1 }, children: isCalendarView ? (_jsxs(_Fragment, { children: [_jsx(Paper, { variant: "outlined", sx: {
                                        borderRadius: 2,
                                        borderColor: 'divider',
                                        borderStyle: 'dashed',
                                    }, children: _jsx(DateCalendar, { value: startDate, onChange: onChangeStartDate }) }), _jsx(Paper, { variant: "outlined", sx: {
                                        borderRadius: 2,
                                        borderColor: 'divider',
                                        borderStyle: 'dashed',
                                    }, children: _jsx(DateCalendar, { value: endDate, onChange: onChangeEndDate }) })] })) : (_jsxs(_Fragment, { children: [_jsx(DatePicker, { label: "Start date", value: startDate, onChange: onChangeStartDate }), _jsx(DatePicker, { label: "End date", value: endDate, onChange: onChangeEndDate })] })) }), error && (_jsx(FormHelperText, { error: true, sx: { px: 2 }, children: "End date must be later than start date" }))] }), _jsxs(DialogActions, { children: [_jsx(Button, { variant: "outlined", color: "inherit", onClick: onClose, children: "Cancel" }), _jsx(Button, { disabled: error, variant: "contained", onClick: onClose, children: "Apply" })] })] }));
}
