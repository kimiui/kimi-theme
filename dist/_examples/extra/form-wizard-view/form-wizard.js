'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { z as zod } from 'zod';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import { useState, useCallback } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from '../../../components/snackbar';
import { Form } from '../../../components/hook-form';
import { Stepper, StepOne, StepTwo, StepThree, StepCompleted } from './form-steps';
// ----------------------------------------------------------------------
const steps = ['Step one', 'Step two', 'Step three'];
const StepOneSchema = zod.object({
    firstName: zod.string().min(1, { message: 'Full name is required!' }),
    lastName: zod.string().min(1, { message: 'Last name is required!' }),
});
const StepTwoSchema = zod.object({
    age: zod
        .number()
        .min(1, { message: 'Age is required!' })
        .min(18, { message: 'Age must be between 18 and 100' })
        .max(100, { message: 'Age must be between 18 and 100' }),
});
const StepThreeSchema = zod.object({
    email: zod
        .string()
        .min(1, { message: 'Email is required!' })
        .email({ message: 'Email must be a valid email address!' }),
});
const WizardSchema = zod.object({
    stepOne: StepOneSchema,
    stepTwo: StepTwoSchema,
    stepThree: StepThreeSchema,
});
// ----------------------------------------------------------------------
const defaultValues = {
    stepOne: { firstName: '', lastName: '' },
    stepTwo: { age: 0 },
    stepThree: { email: '' },
};
export function FormWizard() {
    const [activeStep, setActiveStep] = useState(0);
    const methods = useForm({
        mode: 'onChange',
        resolver: zodResolver(WizardSchema),
        defaultValues,
    });
    const { reset, trigger, handleSubmit, formState: { isSubmitting }, } = methods;
    const handleNext = useCallback(async (step) => {
        if (step) {
            const isValid = await trigger(step);
            if (isValid) {
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
            }
        }
        else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    }, [trigger]);
    const handleBack = useCallback(() => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }, []);
    const handleReset = useCallback(() => {
        reset();
        setActiveStep(0);
    }, [reset]);
    const onSubmit = handleSubmit(async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            toast.success('Create success!');
            console.info('DATA', data);
            handleNext();
        }
        catch (error) {
            console.error(error);
        }
    });
    const completedStep = activeStep === steps.length;
    return (_jsx(Card, { sx: { p: 5, width: 1, mx: 'auto', maxWidth: 720 }, children: _jsxs(Form, { methods: methods, onSubmit: onSubmit, children: [_jsx(Stepper, { steps: steps, activeStep: activeStep }), _jsxs(Box, { gap: 3, display: "flex", flexDirection: "column", sx: {
                        p: 3,
                        mb: 3,
                        minHeight: 240,
                        borderRadius: 1.5,
                        border: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
                    }, children: [activeStep === 0 && _jsx(StepOne, {}), activeStep === 1 && _jsx(StepTwo, {}), activeStep === 2 && _jsx(StepThree, {}), completedStep && _jsx(StepCompleted, { onReset: handleReset })] }), !completedStep && (_jsxs(Box, { display: "flex", children: [activeStep !== 0 && _jsx(Button, { onClick: handleBack, children: "Back" }), _jsx(Box, { sx: { flex: '1 1 auto' } }), activeStep === 0 && (_jsx(Button, { variant: "contained", onClick: () => handleNext('stepOne'), children: "Next" })), activeStep === 1 && (_jsx(Button, { variant: "contained", onClick: () => handleNext('stepTwo'), children: "Next" })), activeStep === 2 && (_jsx(LoadingButton, { type: "submit", variant: "contained", loading: isSubmitting, children: "Save changes" }))] }))] }) }));
}
