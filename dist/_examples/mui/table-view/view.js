'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { BasicTable } from './basic';
import { CollapsibleTable } from './collapsible';
import { ComponentHero } from '../../component-hero';
import { ComponentBlock } from '../../component-block';
import { SortingSelectingTable } from './sorting-selecting';
import { ScrollToViewTemplate } from '../../component-template';
import { GroupingFixedHeaderTable } from './grouping-fixed-header';
// ----------------------------------------------------------------------
const blockProps = {
    p: 0,
    overflow: 'hidden',
    alignItems: 'unset',
    flexDirection: 'column',
    bgcolor: 'background.paper',
};
const DEMO = [
    {
        name: 'Basic Table',
        component: (_jsx(ComponentBlock, { sx: blockProps, children: _jsx(BasicTable, {}) })),
    },
    {
        name: 'Sorting & selecting',
        component: (_jsx(ComponentBlock, { sx: blockProps, children: _jsx(SortingSelectingTable, {}) })),
    },
    {
        name: 'Grouping & fixed header',
        component: (_jsx(ComponentBlock, { sx: blockProps, children: _jsx(GroupingFixedHeaderTable, {}) })),
    },
    {
        name: 'Collapsible table',
        component: (_jsx(ComponentBlock, { sx: blockProps, children: _jsx(CollapsibleTable, {}) })),
    },
];
export function TableView() {
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Table", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Table' }], moreLink: ['https://mui.com/components/tables'] }) }), _jsx(ScrollToViewTemplate, { data: DEMO })] }));
}
