'use client';

import { paths } from 'lib/routes/paths';
import { CustomBreadcrumbs } from 'lib/components/custom-breadcrumbs';

import { NavMini } from './nav-mini';
import { NavBasic } from './nav-basic';
import { NavVertical } from './nav-vertical';
import { NavHorizontal } from './nav-horizontal';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

const DEMO = [
  { name: 'Basic', component: <NavBasic /> },
  { name: 'Vertical', component: <NavVertical /> },
  { name: 'Mini', component: <NavMini /> },
  { name: 'Horizontal', component: <NavHorizontal /> },
];

// ----------------------------------------------------------------------

export function NavigationBarView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Navigation bar"
          links={[
            { name: 'Components', href: paths.docs.components.root },
            { name: 'Navigation bar' },
          ]}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
