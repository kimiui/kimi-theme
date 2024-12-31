'use client';

import { paths } from 'kimi-theme/routes/paths';
import { CustomBreadcrumbs } from 'kimi-theme/components/custom-breadcrumbs';

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
