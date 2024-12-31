'use client';

import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import { useBoolean } from 'ahooks';
import Alert from '@mui/material/Alert';
import { usePathname } from 'routes-react';
import { useTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

import { Main } from './main';
import { NavMobile } from './nav/mobile';
import { NavDesktop } from './nav/desktop';
import { Footer, HomeFooter } from './footer';
import { HeaderBase } from '../core/header-base';
import { LayoutSection } from '../core/layout-section';

import type { NavMainProps } from './nav/types';

// ----------------------------------------------------------------------

export type MainLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  data?: {
    nav?: NavMainProps['data'];
  };
};

export function MainLayout({ sx, data, children }: Readonly<MainLayoutProps>) {
  const theme = useTheme();

  const pathname = usePathname();

  const [mobileNavOpen, mobileNavOpenActions] = useBoolean();

  const homePage = pathname === '/';

  const layoutQuery: Breakpoint = 'md';

  const navData = data?.nav ?? [];

  console.log('navData', navData);

  return (
    <BrowserRouter>
      <NavMobile data={navData} open={mobileNavOpen} onClose={mobileNavOpenActions.setFalse} />

      <LayoutSection
        /** **************************************
         * Header
         *************************************** */
        headerSection={
          <HeaderBase
            layoutQuery={layoutQuery}
            onOpenNav={mobileNavOpenActions.setTrue}
            slotsDisplay={{
              account: false,
              helpLink: false,
              contacts: false,
              searchbar: false,
              workspaces: false,
              localization: false,
              notifications: false,
            }}
            slots={{
              topArea: (
                <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                  This is an info Alert.
                </Alert>
              ),
              rightAreaStart: (
                <NavDesktop
                  data={navData}
                  sx={{
                    display: 'none',
                    [theme.breakpoints.up(layoutQuery)]: {
                      mr: 2.5,
                      display: 'flex',
                    },
                  }}
                />
              ),
            }}
          />
        }
        /** **************************************
         * Footer
         *************************************** */
        footerSection={homePage ? <HomeFooter /> : <Footer layoutQuery={layoutQuery} />}
        /** **************************************
         * Style
         *************************************** */
        sx={sx}
      >
        <Main>{children}</Main>
      </LayoutSection>
    </BrowserRouter>
  );
}
