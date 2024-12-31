'use client';

import { CustomBreadcrumbs } from 'kimi-theme/components/custom-breadcrumbs';

import { paths } from 'src/docs/routes/paths';

import { FormWizard } from './form-wizard';
import { ComponentHero } from '../../component-hero';
import { ComponentContainer } from '../../component-block';

// ----------------------------------------------------------------------

export function FormWizardView() {
  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Form wizard"
          links={[
            { name: 'Components', href: paths.docs.components.root },
            { name: 'Form wizard' },
          ]}
          moreLink={['https://react-hook-form.com', 'https://zod.dev']}
        />
      </ComponentHero>

      <ComponentContainer>
        <FormWizard />
      </ComponentContainer>
    </>
  );
}
