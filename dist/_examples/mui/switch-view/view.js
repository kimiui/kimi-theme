import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
const COLORS = ['default', 'primary', 'secondary', 'info', 'success', 'warning', 'error'];
const PLACEMENTS = ['top', 'start', 'bottom', 'end'];
// ----------------------------------------------------------------------
export function SwitchView() {
    const DEMO = [
        {
            name: 'Basic',
            component: (_jsxs(ComponentBlock, { children: [_jsx(Switch, { name: "basic-1", defaultChecked: true }), _jsx(Switch, { name: "basic-2" }), _jsx(Switch, { name: "basic-3", disabled: true }), _jsx(Switch, { name: "basic-4", disabled: true, checked: true }), _jsx(Switch, { name: "basic-5", defaultChecked: true, color: "default" })] })),
        },
        {
            name: 'Sizes',
            component: (_jsx(ComponentBlock, { children: _jsxs(FormGroup, { row: true, children: [_jsx(FormControlLabel, { control: _jsx(Switch, { name: "small", size: "small" }), label: "Small" }), _jsx(FormControlLabel, { control: _jsx(Switch, { name: "normal" }), label: "Normal" })] }) })),
        },
        {
            name: 'Placement',
            component: (_jsx(ComponentBlock, { children: _jsx(FormGroup, { row: true, children: PLACEMENTS.map((placement) => (_jsx(FormControlLabel, { value: placement, label: placement, labelPlacement: placement, control: _jsx(Switch, { name: placement }), sx: { textTransform: 'capitalize' } }, placement))) }) })),
        },
        {
            name: 'Colors',
            component: (_jsx(ComponentBlock, { children: _jsx(FormControl, { component: "fieldset", children: _jsxs(FormGroup, { children: [COLORS.map((color) => (_jsx(FormControlLabel, { control: _jsx(Switch, { defaultChecked: true, name: color, color: color }), label: color, sx: { textTransform: 'capitalize' } }, color))), _jsx(FormControlLabel, { disabled: true, control: _jsx(Switch, { name: "error-disabled", color: "error" }), label: "Disabled" })] }) }) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Switch", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Switch' }], moreLink: ['https://mui.com/components/switches'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
