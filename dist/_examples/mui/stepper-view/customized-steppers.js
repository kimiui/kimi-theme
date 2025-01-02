'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import { styled } from '@mui/material/styles';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { Iconify } from '../../../components/iconify';
import { varAlpha, bgGradient, stylesMode } from '../../../theme/styles';
// ----------------------------------------------------------------------
const STEPS = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: { borderColor: theme.vars.palette.success.main },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: { borderColor: theme.vars.palette.success.main },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderRadius: 1,
        borderTopWidth: 3,
        borderColor: theme.vars.palette.divider,
    },
}));
const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    height: 22,
    display: 'flex',
    alignItems: 'center',
    color: theme.vars.palette.text.disabled,
    ...(ownerState.active && { color: theme.vars.palette.success.main }),
    '& .QontoStepIcon-completedIcon': {
        zIndex: 1,
        fontSize: 18,
        color: theme.vars.palette.success.main,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));
function QontoStepIcon(props) {
    const { active, completed, className } = props;
    return (_jsx(QontoStepIconRoot, { ownerState: { active }, className: className, children: completed ? (_jsx(Iconify, { icon: "eva:checkmark-fill", className: "QontoStepIcon-completedIcon", width: 24, height: 24 })) : (_jsx("div", { className: "QontoStepIcon-circle" })) }));
}
const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 22 },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            ...bgGradient({
                color: `0deg, ${theme.vars.palette.error.light}, ${theme.vars.palette.error.main}`,
            }),
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            ...bgGradient({
                color: `0deg, ${theme.vars.palette.error.light}, ${theme.vars.palette.error.main}`,
            }),
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        borderRadius: 1,
        backgroundColor: theme.vars.palette.divider,
    },
}));
const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
    zIndex: 1,
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.vars.palette.text.disabled,
    backgroundColor: theme.vars.palette.grey[300],
    [stylesMode.dark]: { backgroundColor: theme.vars.palette.grey[700] },
    ...(ownerState.active && {
        ...bgGradient({
            color: `0deg, ${theme.vars.palette.error.light}, ${theme.vars.palette.error.main}`,
        }),
        color: theme.vars.palette.common.white,
        boxShadow: '0 4px 10px 0 rgba(0,0,0,0.25)',
    }),
    ...(ownerState.completed && {
        color: theme.vars.palette.common.white,
        ...bgGradient({
            color: `0deg, ${theme.vars.palette.error.light}, ${theme.vars.palette.error.main}`,
        }),
    }),
}));
function ColorlibStepIcon({ active, completed, className, icon }) {
    const icons = {
        1: _jsx(Iconify, { icon: "eva:settings-2-outline", width: 24 }),
        2: _jsx(Iconify, { icon: "eva:person-add-outline", width: 24 }),
        3: _jsx(Iconify, { icon: "eva:monitor-outline", width: 24 }),
    };
    return (_jsx(ColorlibStepIconRoot, { ownerState: { completed, active }, className: className, children: icons[String(icon)] }));
}
function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Select campaign settings...';
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown step';
    }
}
export function CustomizedSteppers() {
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Stepper, { alternativeLabel: true, activeStep: activeStep, connector: _jsx(QontoConnector, {}), children: STEPS.map((label) => (_jsx(Step, { children: _jsx(StepLabel, { StepIconComponent: QontoStepIcon, children: label }) }, label))) }), _jsx(Box, { sx: { mb: 5 } }), _jsx(Stepper, { alternativeLabel: true, activeStep: activeStep, connector: _jsx(ColorlibConnector, {}), children: STEPS.map((label) => (_jsx(Step, { children: _jsx(StepLabel, { StepIconComponent: ColorlibStepIcon, children: label }) }, label))) }), activeStep === STEPS.length ? (_jsxs(_Fragment, { children: [_jsx(Paper, { sx: {
                            p: 3,
                            my: 3,
                            minHeight: 120,
                            bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
                        }, children: _jsx(Typography, { sx: { my: 1 }, children: "All steps completed - you're finished" }) }), _jsx(Button, { color: "inherit", onClick: handleReset, sx: { mr: 'auto' }, children: "Reset" })] })) : (_jsxs(_Fragment, { children: [_jsx(Paper, { sx: {
                            p: 3,
                            my: 3,
                            minHeight: 120,
                            bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
                        }, children: _jsx(Typography, { sx: { my: 1 }, children: getStepContent(activeStep) }) }), _jsxs(Box, { sx: { textAlign: 'right' }, children: [_jsx(Button, { disabled: activeStep === 0, onClick: handleBack, sx: { mr: 1 }, children: "Back" }), _jsx(Button, { variant: "contained", onClick: handleNext, sx: { mr: 1 }, children: activeStep === STEPS.length - 1 ? 'Finish' : 'Next' })] })] }))] }));
}
