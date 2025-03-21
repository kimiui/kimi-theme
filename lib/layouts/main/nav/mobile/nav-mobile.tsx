'use client';

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import { Logo } from 'lib/components/logo';
import { NavUl } from 'lib/components/nav-section';

import { NavList } from './nav-mobile-list';

import type { NavMainProps } from '../types';

// ----------------------------------------------------------------------

export type NavMobileProps = NavMainProps & {
  open: boolean;
  onClose: () => void;
  slots?: {
    topArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
};

export function NavMobile({ data, open, onClose, slots, sx }: NavMobileProps) {
  const { pathname } = window.location;

  useEffect(() => {
    if (open) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          display: 'flex',
          flexDirection: 'column',
          width: 'var(--layout-nav-mobile-width)',
          ...sx,
        },
      }}
    >
      {slots?.topArea ?? (
        <Box display="flex" sx={{ pt: 3, pb: 2, pl: 2.5 }}>
          <Logo />
        </Box>
      )}

      <Box component="nav" display="flex" flexDirection="column" flex="1 1 auto" sx={{ pb: 3 }}>
        <NavUl>
          {data.map((list) => (
            <NavList key={list.title} data={list} />
          ))}
        </NavUl>
      </Box>

      {slots?.bottomArea}
    </Drawer>
  );
}
