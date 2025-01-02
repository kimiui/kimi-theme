'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { ComponentHero } from '../../component-hero';
import { SortableContainer } from './sortable-container';
import { ScrollToViewTemplate } from '../../component-template';
// ----------------------------------------------------------------------
export function DndView() {
    const DEMO = [
        { name: 'Grid', component: _jsx(SortableContainer, { swap: true }) },
        {
            name: 'Vertical',
            component: _jsx(SortableContainer, { layout: "vertical", itemCount: 4 }),
        },
        {
            name: 'Horizontal',
            component: _jsx(SortableContainer, { layout: "horizontal", itemCount: 3 }),
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Dnd", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Dnd' }], moreLink: ['https://docs.dndkit.com/'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
