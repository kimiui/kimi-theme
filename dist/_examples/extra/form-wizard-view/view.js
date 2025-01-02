'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { FormWizard } from './form-wizard';
import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
export function FormWizardView() {
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Form wizard", links: [
                        { name: 'Components', href: paths.docs.components.root },
                        { name: 'Form wizard' },
                    ], moreLink: ['https://react-hook-form.com', 'https://zod.dev'] }) }), _jsx(ComponentContainer, { children: _jsx(FormWizard, {}) })] }));
}
