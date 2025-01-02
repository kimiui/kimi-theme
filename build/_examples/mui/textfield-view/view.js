import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { Textfields } from './textfield';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
export function TextfieldView() {
    const DEMO = [
        { name: 'Outlined', component: _jsx(Textfields, { variant: "outlined" }) },
        { name: 'Filled', component: _jsx(Textfields, { variant: "filled" }) },
        { name: 'Standard', component: _jsx(Textfields, { variant: "standard" }) },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Textfield", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Textfield' }], moreLink: ['https://mui.com/components/text-fields'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
