import { paths } from 'kimi-theme/routes/paths';
import { CustomBreadcrumbs } from 'kimi-theme/components/custom-breadcrumbs';

import { Textfields } from './textfield';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';

// ----------------------------------------------------------------------

export function TextfieldView() {
  const DEMO = [
    { name: 'Outlined', component: <Textfields variant="outlined" /> },
    { name: 'Filled', component: <Textfields variant="filled" /> },
    { name: 'Standard', component: <Textfields variant="standard" /> },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Textfield"
          links={[{ name: 'Components', href: paths.docs.components.root }, { name: 'Textfield' }]}
          moreLink={['https://mui.com/components/text-fields']}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
