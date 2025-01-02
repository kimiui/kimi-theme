import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { CustomIcons } from './custom-icon';
import { CustomStyling } from './custom-styling';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { BasicRichTree, BasicSimpleTree } from './basic';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
export function TreeView() {
    const DEMO = [
        {
            name: 'Simple tree view',
            component: (_jsx(ComponentBlock, { children: _jsx(BasicSimpleTree, {}) })),
        },
        {
            name: 'Rich tree view',
            component: (_jsx(ComponentBlock, { children: _jsx(BasicRichTree, {}) })),
        },
        {
            name: 'Custom styling',
            component: (_jsx(ComponentBlock, { children: _jsx(CustomStyling, {}) })),
        },
        {
            name: 'Custom icon',
            component: (_jsx(ComponentBlock, { children: _jsx(CustomIcons, {}) })),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Tree View", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Tree View' }], moreLink: ['https://mui.com/x/react-tree-view/'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
