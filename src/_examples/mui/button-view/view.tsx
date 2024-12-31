'use client';

import { CustomBreadcrumbs } from 'kimi-theme/components/custom-breadcrumbs';

import { paths } from 'src/docs/routes/paths';

import { IconButtons } from './icon-buttons';
import { ButtonGroups } from './button-groups';
import { ToggleButtons } from './toggle-buttons';
import { ButtonVariants } from './button-variants';
import { ComponentHero } from '../../component-hero';
import { ScrollToViewTemplate } from '../../component-template';
import { FloatingActionButton } from './floating-action-button';

// ----------------------------------------------------------------------

export function ButtonView() {
  const DEMO = [
    { name: 'Contained', component: <ButtonVariants variant="contained" /> },
    { name: 'Outlined', component: <ButtonVariants variant="outlined" /> },
    { name: 'Text', component: <ButtonVariants variant="text" /> },
    { name: 'Soft', component: <ButtonVariants variant="soft" /> },
    { name: 'Icon button', component: <IconButtons /> },
    { name: 'Fab', component: <FloatingActionButton /> },
    { name: 'Groups', component: <ButtonGroups /> },
    { name: 'Toggle', component: <ToggleButtons /> },
  ];

  return (
    <>
      <ComponentHero>
        <CustomBreadcrumbs
          heading="Buttons"
          links={[{ name: 'Components', href: paths.docs.components.root }, { name: 'Buttons' }]}
          moreLink={[
            'https://mui.com/components/buttons',
            'https://mui.com/components/button-group',
            'https://mui.com/components/floating-action-button',
            'https://mui.com/components/toggle-button',
          ]}
        />
      </ComponentHero>

      <ScrollToViewTemplate data={DEMO} />
    </>
  );
}
