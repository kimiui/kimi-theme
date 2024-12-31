'use client';

import { paths } from 'src/docs/routes/paths';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { DemoMegaMenuMobile } from './mobile';
import { DemoMegaMenuVertical } from './vertical';
import { ComponentHero } from '../../component-hero';
import { DemoMegaMenuHorizontal } from './horizontal';
import { ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function MegaMenuView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Mega Menu"
          links={[{ name: 'Components', href: paths.docs.components.root }, { name: 'Mega Menu' }]}
        />
      </ComponentHero>

      <DemoMegaMenuHorizontal />

      <ComponentContainer sx={{ alignItems: 'flex-start' }}>
        <DemoMegaMenuMobile />
        <DemoMegaMenuVertical />
      </ComponentContainer>
    </>
  );
}
