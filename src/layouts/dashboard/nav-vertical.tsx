import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import type { Breakpoint } from '@mui/material/styles';

import { Scrollbar } from 'src/components/scrollbar';
import { varAlpha, hideScrollY } from 'src/theme/styles';
import type { NavSectionProps } from 'src/components/nav-section';
import { NavSectionMini, NavSectionVertical } from 'src/components/nav-section';

import { NavToggleButton } from '../components/nav-toggle-button';

// ----------------------------------------------------------------------

export type NavVerticalProps = NavSectionProps & {
  isNavMini: boolean;
  layoutQuery: Breakpoint;
  onToggleNav?: () => void;
  slotProps?: {
    top?: React.ReactNode;
    topMini?: React.ReactNode;
    bottom?: React.ReactNode;
    bottomMini?: React.ReactNode;
  };
};

export function NavVertical({
  sx,
  data,
  slotProps,
  isNavMini,
  layoutQuery,
  onToggleNav,
  ...other
}: NavVerticalProps) {
  const theme = useTheme();

  const renderNavVertical = (
    <>
      {slotProps?.top}

      <Scrollbar fillContent>
        <NavSectionVertical
          data={data}
          sx={{ px: 2, flex: '1 1 auto' }}
          slotProps={slotProps}
          {...other}
        />
      </Scrollbar>

      {slotProps?.bottom}
    </>
  );

  const renderNavMini = (
    <>
      {slotProps?.topMini}

      <NavSectionMini
        data={data}
        sx={{
          pb: 2,
          px: 0.5,
          ...hideScrollY,
          flex: '1 1 auto',
          overflowY: 'auto',
        }}
        {...other}
      />

      {slotProps?.bottomMini}
    </>
  );

  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        height: 1,
        display: 'none',
        position: 'fixed',
        flexDirection: 'column',
        bgcolor: 'var(--layout-nav-bg)',
        zIndex: 'var(--layout-nav-zIndex)',
        width: isNavMini ? 'var(--layout-nav-mini-width)' : 'var(--layout-nav-vertical-width)',
        borderRight: `1px solid var(--layout-nav-border-color, ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)})`,
        transition: theme.transitions.create(['width'], {
          easing: 'var(--layout-transition-easing)',
          duration: 'var(--layout-transition-duration)',
        }),
        [theme.breakpoints.up(layoutQuery)]: {
          display: 'flex',
        },
        ...sx,
      }}
    >
      {onToggleNav && (
        <NavToggleButton
          isNavMini={isNavMini}
          onClick={onToggleNav}
          sx={{
            display: 'none',
            [theme.breakpoints.up(layoutQuery)]: {
              display: 'inline-flex',
            },
          }}
        />
      )}
      {isNavMini ? renderNavMini : renderNavVertical}
    </Box>
  );
}
