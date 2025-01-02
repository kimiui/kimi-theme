'use client';
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import AlertTitle from '@mui/material/AlertTitle';
import { paths } from '../../../routes/paths';
import { varAlpha } from '../../../theme/styles';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const COLORS = ['info', 'success', 'warning', 'error'];
// ----------------------------------------------------------------------
export function AlertView() {
    const DEMO = [
        {
            name: 'Standard',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: COLORS.map((color) => (_jsxs(Alert, { severity: color, onClose: () => { }, children: ["This is an ", color, " alert \u2014 check it out!"] }, color))) })),
        },
        {
            name: 'Filled',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: COLORS.map((color) => (_jsxs(Alert, { severity: color, variant: "filled", onClose: () => { }, children: ["This is an ", color, " alert \u2014 check it out!"] }, color))) })),
        },
        {
            name: 'Outlined',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: COLORS.map((color) => (_jsxs(Alert, { severity: color, variant: "outlined", onClose: () => { }, children: ["This is an ", color, " alert \u2014 check it out!"] }, color))) })),
        },
        {
            name: 'Description',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: COLORS.map((color) => (_jsxs(Alert, { severity: color, onClose: () => { }, children: [_jsxs(AlertTitle, { sx: { textTransform: 'capitalize' }, children: [" ", color, " "] }), "This is an ", color, " alert \u2014 ", _jsx("strong", { children: "check it out!" })] }, color))) })),
        },
        {
            name: 'Actions',
            component: (_jsxs(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: [_jsx(Alert, { severity: "info", action: _jsx(Button, { color: "info", size: "small", variant: "soft", children: "Action" }), children: "This is an info alert \u2014 check it out!" }), _jsx(Alert, { severity: "info", variant: "filled", action: _jsxs(_Fragment, { children: [_jsx(Button, { color: "inherit", size: "small", variant: "outlined", sx: {
                                        mr: 1,
                                        border: (theme) => `1px solid ${varAlpha(theme.vars.palette.common.whiteChannel, 0.48)}`,
                                    }, children: "Undo" }), _jsx(Button, { size: "small", color: "info", variant: "contained", sx: { bgcolor: 'info.dark' }, children: "Action" })] }), children: "This is an info alert \u2014 check it out!" }), _jsx(Alert, { severity: "info", variant: "outlined", action: _jsxs(_Fragment, { children: [_jsx(Button, { color: "info", size: "small", variant: "outlined", sx: { mr: 1 }, children: "Undo" }), _jsx(Button, { color: "info", size: "small", variant: "contained", sx: { bgcolor: 'info.dark' }, children: "Action" })] }), children: "This is an info alert \u2014 check it out!" })] })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Alert", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Alert' }], moreLink: ['https://mui.com/components/alert'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
