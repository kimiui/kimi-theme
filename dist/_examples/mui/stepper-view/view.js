import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { CustomizedSteppers } from './customized-steppers';
import { ScrollToViewTemplate } from '../../component-template';
import { VerticalLinearStepper } from './vertical-linear-stepper';
import { HorizontalLinearStepper } from './horizontal-linear-stepper';
import { LinearAlternativeLabel } from './linear-alternative-label-stepper';
// ----------------------------------------------------------------------
export function StepperView() {
    const DEMO = [
        {
            name: 'Horizontal linear stepper',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsx(HorizontalLinearStepper, {}) })),
        },
        {
            name: 'Linear alternative label',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsx(LinearAlternativeLabel, {}) })),
        },
        {
            name: 'Vertical linear stepper',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsx(VerticalLinearStepper, {}) })),
        },
        {
            name: 'Customized stepper',
            component: (_jsx(ComponentBlock, { sx: { flexDirection: 'column', alignItems: 'unset' }, children: _jsx(CustomizedSteppers, {}) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Stepper", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Stepper' }], moreLink: ['https://mui.com/components/steppers'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
