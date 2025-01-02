'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ReactHookForm } from './react-hook-form';
import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
export function FormValidationView() {
    const [debug, setDebug] = useState(true);
    const handleChangeDebug = (event) => {
        setDebug(event.target.checked);
    };
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Form validation", links: [
                        { name: 'Components', href: paths.docs.components.root },
                        { name: 'Form validation' },
                    ], moreLink: ['https://react-hook-form.com', 'https://zod.dev'] }) }), _jsxs(ComponentContainer, { maxWidth: "xl", sx: { position: 'relative' }, children: [_jsx(Typography, { variant: "h4", children: " React hook form + Zod " }), _jsx(FormControlLabel, { control: _jsx(Switch, { name: "switch-debug", checked: debug, onChange: handleChangeDebug }), label: "Show Debug", sx: { alignSelf: 'flex-start' } }), _jsx(Divider, { sx: { my: 5 } }), _jsx(ReactHookForm, { debug: debug })] })] }));
}
