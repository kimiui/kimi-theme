'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { varAlpha } from '../../../theme/styles';
// ----------------------------------------------------------------------
const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];
export function LinearAlternativeLabel() {
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());
    const isStepOptional = (step) => step === 1;
    const isStepSkipped = (step) => skipped.has(step);
    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };
    const handleReset = () => {
        setActiveStep(0);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Stepper, { activeStep: activeStep, alternativeLabel: true, children: steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (_jsx(Step, { ...stepProps, children: _jsx(StepLabel, { ...labelProps, children: label }) }, label));
                }) }), activeStep === steps.length ? (_jsxs(_Fragment, { children: [_jsx(Paper, { sx: {
                            p: 3,
                            my: 3,
                            minHeight: 120,
                            bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
                        }, children: _jsx(Typography, { sx: { my: 1 }, children: "All steps completed - you're finished" }) }), _jsxs(Box, { sx: { display: 'flex' }, children: [_jsx(Box, { sx: { flexGrow: 1 } }), _jsx(Button, { onClick: handleReset, children: "Reset" })] })] })) : (_jsxs(_Fragment, { children: [_jsx(Paper, { sx: {
                            p: 3,
                            my: 3,
                            minHeight: 120,
                            bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.12),
                        }, children: _jsxs(Typography, { sx: { my: 1 }, children: [" Step ", activeStep + 1] }) }), _jsxs(Stack, { direction: "row", children: [_jsx(Button, { color: "inherit", disabled: activeStep === 0, onClick: handleBack, sx: { mr: 1 }, children: "Back" }), _jsx(Box, { sx: { flexGrow: 1 } }), isStepOptional(activeStep) && (_jsx(Button, { color: "inherit", onClick: handleSkip, sx: { mr: 1 }, children: "Skip" })), _jsx(Button, { variant: "contained", onClick: handleNext, children: activeStep === steps.length - 1 ? 'Finish' : 'Next' })] })] }))] }));
}
