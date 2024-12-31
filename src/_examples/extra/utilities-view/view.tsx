'use client';

import { CustomBreadcrumbs } from 'kimi-theme/components/custom-breadcrumbs';

import { paths } from 'src/docs/routes/paths';

import { Gradient } from './gradient';
import { TextMaxLine } from './text-max-line';
import { ComponentHero } from '../../component-hero';
import { CopyToClipboard } from './copy-to-clipboard';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

export function UtilitiesView() {
  const DEMO = [
    { name: 'Text max line', component: <TextMaxLine /> },
    { name: 'Copy to clipboard', component: <CopyToClipboard /> },
    { name: 'Gradient', component: <Gradient /> },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Utilities"
          links={[{ name: 'Components', href: paths.docs.components.root }, { name: 'Utilities' }]}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
