import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import MuiStepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { Iconify } from '../../../components/iconify';
import { Field } from '../../../components/hook-form';
export function Stepper({ steps, activeStep }) {
    return (_jsx(MuiStepper, { activeStep: activeStep, alternativeLabel: true, sx: { mb: 5 }, children: steps.map((label, index) => (_jsx(Step, { children: _jsx(StepLabel, { StepIconComponent: ({ active, completed }) => (_jsx(Box, { display: "flex", alignItems: "center", justifyContent: "center", sx: {
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        color: 'text.disabled',
                        typography: 'subtitle2',
                        bgcolor: 'action.disabledBackground',
                        ...(active && { bgcolor: 'primary.main', color: 'primary.contrastText' }),
                        ...(completed && { bgcolor: 'primary.main', color: 'primary.contrastText' }),
                    }, children: completed ? (_jsx(Iconify, { width: 14, icon: "mingcute:check-fill" })) : (_jsx(Box, { sx: { typography: 'subtitle2' }, children: index + 1 })) })), children: label }) }, label))) }));
}
// ----------------------------------------------------------------------
export function StepOne() {
    return (_jsxs(_Fragment, { children: [_jsx(Field.Text, { name: "stepOne.firstName", label: "First name", variant: "filled", InputLabelProps: { shrink: true } }), _jsx(Field.Text, { name: "stepOne.lastName", label: "Last name", variant: "filled", InputLabelProps: { shrink: true } })] }));
}
export function StepTwo() {
    return (_jsx(Field.Text, { name: "stepTwo.age", label: "Age", type: "number", variant: "filled", InputLabelProps: { shrink: true }, helperText: "Age must be between 18 and 100" }));
}
export function StepThree() {
    return (_jsx(Field.Text, { name: "stepThree.email", label: "Email", variant: "filled", InputLabelProps: { shrink: true } }));
}
export function StepCompleted({ onReset }) {
    return (_jsxs(Box, { gap: 3, display: "flex", flex: "1 1 auto", alignItems: "center", flexDirection: "column", justifyContent: "center", sx: { borderRadius: 'inherit', bgcolor: 'background.neutral' }, children: [_jsx(Typography, { variant: "subtitle1", children: "All steps completed - you're finished" }), _jsx(Button, { variant: "outlined", onClick: onReset, startIcon: _jsx(Iconify, { icon: "solar:restart-bold" }), children: "Reset" })] }));
}
