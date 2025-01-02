'use client';
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { paths } from '../../../routes/paths';
import { CustomBreadcrumbs } from '../../../components/custom-breadcrumbs';
import { DemoMegaMenuMobile } from './mobile';
import { DemoMegaMenuVertical } from './vertical';
import { ComponentHero } from '../../component-hero';
import { DemoMegaMenuHorizontal } from './horizontal';
import { ComponentContainer } from '../../component-block';
// ----------------------------------------------------------------------
export function MegaMenuView() {
    return (_jsxs(_Fragment, { children: [_jsx(ComponentHero, { children: _jsx(CustomBreadcrumbs, { heading: "Mega Menu", links: [{ name: 'Components', href: paths.docs.components.root }, { name: 'Mega Menu' }] }) }), _jsx(DemoMegaMenuHorizontal, {}), _jsxs(ComponentContainer, { sx: { alignItems: 'flex-start' }, children: [_jsx(DemoMegaMenuMobile, {}), _jsx(DemoMegaMenuVertical, {})] })] }));
}
