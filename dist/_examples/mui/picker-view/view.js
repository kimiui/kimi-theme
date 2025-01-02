import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { PickerDate } from './picker-date';
import { PickerTime } from './picker-time';
import { PickerDateTime } from './picker-date-time';
import { ComponentHero } from '../../component-hero';
import { PickerDateRange } from './picker-date-range';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
export function PickerView() {
    const DEMO = [
        { name: 'Date', component: _jsx(PickerDate, {}) },
        { name: 'DateTime', component: _jsx(PickerDateTime, {}) },
        { name: 'Time', component: _jsx(PickerTime, {}) },
        { name: 'Range', component: _jsx(PickerDateRange, {}) },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Date Time Pickers", links: [
                        { name: 'Components', href: paths.docs.components.root },
                        { name: 'Date Time Pickers' },
                    ], moreLink: [
                        'https://mui.com/components/pickers',
                        'https://mui.com/x/react-date-pickers/getting-started/',
                    ] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
