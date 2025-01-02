'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { FormDialog } from './form-dialog';
import { AlertDialog } from './alert-dialog';
import { ScrollDialog } from './scroll-dialog';
import { SimpleDialog } from './simple-dialog';
import { MaxWidthDialog } from './max-width-dialog';
import { ComponentHero } from '../../component-hero';
import { FullScreenDialog } from './full-screen-dialog';
import { TransitionsDialog } from './transitions-dialog';
import { ComponentBlock, ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
export function DialogView() {
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Dialog", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Dialog' }], moreLink: ['https://mui.com/components/dialogs'] }) }), _jsxs(ComponentContainer, { sx: {
                    rowGap: 5,
                    columnGap: 3,
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    },
                }, children: [_jsx(ComponentBlock, { title: "Simple", children: _jsx(SimpleDialog, {}) }), _jsx(ComponentBlock, { title: "Alerts", children: _jsx(AlertDialog, {}) }), _jsx(ComponentBlock, { title: "Transitions", children: _jsx(TransitionsDialog, {}) }), _jsx(ComponentBlock, { title: "Form", children: _jsx(FormDialog, {}) }), _jsx(ComponentBlock, { title: "Full Screen", children: _jsx(FullScreenDialog, {}) }), _jsx(ComponentBlock, { title: "Max width dialog", children: _jsx(MaxWidthDialog, {}) }), _jsx(ComponentBlock, { title: "Scrolling content dialogs", children: _jsx(ScrollDialog, {}) })] })] }));
}
