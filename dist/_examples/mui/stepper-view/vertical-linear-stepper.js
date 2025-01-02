'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import StepContent from '@mui/material/StepContent';
import { varAlpha } from '../../../theme/styles';
// ----------------------------------------------------------------------
const steps = [
    {
        label: 'Select campaign settings',
        description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    },
    {
        label: 'Create an ad group',
        description: 'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
        label: 'Create an ad',
        description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
    },
];
// ----------------------------------------------------------------------
export function VerticalLinearStepper() {
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
    return (_jsxs(_Fragment, { children: [_jsx(Stepper, { activeStep: activeStep, orientation: "vertical", children: steps.map((step, index) => (_jsxs(Step, { children: [_jsx(StepLabel, { optional: index === 2 ? _jsx(Typography, { variant: "caption", children: "Last step" }) : null, children: step.label }), _jsxs(StepContent, { children: [_jsx(Typography, { children: step.description }), _jsxs(Box, { sx: { mt: 3 }, children: [_jsx(Button, { variant: "contained", onClick: handleNext, children: index === steps.length - 1 ? 'Finish' : 'Continue' }), _jsx(Button, { disabled: index === 0, onClick: handleBack, children: "Back" })] })] })] }, step.label))) }), activeStep === steps.length && (_jsxs(Paper, { sx: {
                    p: 3,
                    mt: 3,
                    bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
                }, children: [_jsx(Typography, { sx: { mb: 2 }, children: "All steps completed - you're finished" }), _jsx(Button, { onClick: handleReset, children: "Reset" })] }))] }));
}
