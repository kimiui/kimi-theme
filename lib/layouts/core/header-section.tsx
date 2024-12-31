'use client';

import { useMemo } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import type { Breakpoint } from '@mui/material/styles';
import type { AppBarProps } from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import type { ToolbarProps } from '@mui/material/Toolbar';
import type { ContainerProps } from '@mui/material/Container';

import { useScrollOffSetTop } from 'lib/hooks';
import { bgBlur, varAlpha } from 'lib/theme/styles';

import { layoutClasses } from '../classes';

// ----------------------------------------------------------------------

const StyledElevation = styled('span')(({ theme }) => ({
  left: 0,
  right: 0,
  bottom: 0,
  m: 'auto',
  height: 24,
  zIndex: -1,
  opacity: 0.48,
  borderRadius: '50%',
  position: 'absolute',
  width: `calc(100% - 48px)`,
  boxShadow: theme.shadows[8],
}));

// ----------------------------------------------------------------------

export type HeaderSectionProps = AppBarProps & {
  layoutQuery: Breakpoint;
  disableOffset?: boolean;
  disableElevation?: boolean;
  slots?: {
    leftArea?: React.ReactNode;
    leftAreaEnd?: React.ReactNode;
    leftAreaStart?: React.ReactNode;
    rightArea?: React.ReactNode;
    rightAreaEnd?: React.ReactNode;
    rightAreaStart?: React.ReactNode;
    topArea?: React.ReactNode;
    centerArea?: React.ReactNode;
    bottomArea?: React.ReactNode;
  };
  slotProps?: {
    toolbar?: ToolbarProps;
    container?: ContainerProps;
  };
};

export function HeaderSection({
  sx,
  slots,
  slotProps,
  disableOffset,
  disableElevation,
  layoutQuery = 'md',
  ...other
}: HeaderSectionProps) {
  const theme = useTheme();

  const { offsetTop } = useScrollOffSetTop();

  const toolbarStyles = useMemo(
    () => ({
      default: {
        minHeight: 'auto',
        height: 'var(--layout-header-mobile-height)',
        transition: theme.transitions.create(['height', 'background-color'], {
          easing: theme.transitions.easing.easeInOut,
          duration: theme.transitions.duration.shorter,
        }),
        [theme.breakpoints.up('sm')]: {
          minHeight: 'auto',
        },
        [theme.breakpoints.up(layoutQuery)]: {
          height: 'var(--layout-header-desktop-height)',
        },
      },
      offset: {
        ...bgBlur({
          color: varAlpha(theme.vars.palette.background.defaultChannel, 0.8),
        }),
      },
    }),
    [theme, layoutQuery]
  );

  const appBarSx = useMemo(
    () => ({
      zIndex: 'var(--layout-header-zIndex)',
      ...sx,
    }),
    [sx]
  );

  const toolbarSx = useMemo(
    () => ({
      ...toolbarStyles.default,
      ...(!disableOffset && offsetTop && toolbarStyles.offset),
      ...slotProps?.toolbar?.sx,
    }),
    [toolbarStyles, disableOffset, offsetTop, slotProps?.toolbar?.sx]
  );

  const containerSx = useMemo(
    () => ({
      height: 1,
      display: 'flex',
      alignItems: 'center',
      ...slotProps?.container?.sx,
    }),
    [slotProps?.container?.sx]
  );

  const boxSx = useMemo(
    () => ({
      display: 'flex',
      flex: '1 1 auto',
      justifyContent: 'center',
    }),
    []
  );

  return (
    <AppBar position="sticky" className={layoutClasses.header} sx={appBarSx} {...other}>
      {slots?.topArea}

      <Toolbar disableGutters {...slotProps?.toolbar} sx={toolbarSx}>
        <Container {...slotProps?.container} sx={containerSx}>
          {slots?.leftArea}

          <Box sx={boxSx}>{slots?.centerArea}</Box>

          {slots?.rightArea}
        </Container>
      </Toolbar>

      {slots?.bottomArea}

      {!disableElevation && offsetTop && <StyledElevation />}
    </AppBar>
  );
}
