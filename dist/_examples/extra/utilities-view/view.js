'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { Gradient } from './gradient';
import { TextMaxLine } from './text-max-line';
import { ComponentHero } from '../../component-hero';
import { CopyToClipboard } from './copy-to-clipboard';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
export function UtilitiesView() {
    const DEMO = [
        { name: 'Text max line', component: _jsx(TextMaxLine, {}) },
        { name: 'Copy to clipboard', component: _jsx(CopyToClipboard, {}) },
        { name: 'Gradient', component: _jsx(Gradient, {}) },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Utilities", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Utilities' }] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
