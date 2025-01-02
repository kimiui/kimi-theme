'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { IconButtons } from './icon-buttons';
import { ButtonGroups } from './button-groups';
import { ToggleButtons } from './toggle-buttons';
import { ButtonVariants } from './button-variants';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';
import { FloatingActionButton } from './floating-action-button';
// ----------------------------------------------------------------------
export function ButtonView() {
    const DEMO = [
        { name: 'Contained', component: _jsx(ButtonVariants, { variant: "contained" }) },
        { name: 'Outlined', component: _jsx(ButtonVariants, { variant: "outlined" }) },
        { name: 'Text', component: _jsx(ButtonVariants, { variant: "text" }) },
        { name: 'Soft', component: _jsx(ButtonVariants, { variant: "soft" }) },
        { name: 'Icon button', component: _jsx(IconButtons, {}) },
        { name: 'Fab', component: _jsx(FloatingActionButton, {}) },
        { name: 'Groups', component: _jsx(ButtonGroups, {}) },
        { name: 'Toggle', component: _jsx(ToggleButtons, {}) },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Buttons", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Buttons' }], moreLink: [
                        'https://mui.com/components/buttons',
                        'https://mui.com/components/button-group',
                        'https://mui.com/components/floating-action-button',
                        'https://mui.com/components/toggle-button',
                    ] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
