'use client';

import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import { useBoolean } from 'ahooks';
import Alert from '@mui/material/Alert';

import { Main, CompactContent } from './main';
import { HeaderBase } from '../core/header-base';
import { LayoutSection } from '../core/layout-section';

// ----------------------------------------------------------------------

export type SimpleLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  content?: {
    compact?: boolean;
  };
};

export function SimpleLayout({ sx, children, content }: Readonly<SimpleLayoutProps>) {
  const [, mobileNavOpenActions] = useBoolean();

  const layoutQuery: Breakpoint = 'md';

  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderBase
          layoutQuery={layoutQuery}
          onOpenNav={mobileNavOpenActions.setTrue}
          slotsDisplay={{
            signIn: false,
            account: false,
            purchase: false,
            contacts: false,
            searchbar: false,
            workspaces: false,
            menuButton: false,
            localization: false,
            notifications: false,
          }}
          slots={{
            topArea: (
              <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                This is an info Alert.
              </Alert>
            ),
          }}
          slotProps={{ container: { maxWidth: false } }}
        />
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={null}
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        '--layout-simple-content-compact-width': '448px',
      }}
      sx={sx}
    >
      <Main>{content?.compact ? <CompactContent>{children}</CompactContent> : children}</Main>
    </LayoutSection>
  );
}
