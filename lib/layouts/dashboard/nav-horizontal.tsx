import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import type { Breakpoint } from '@mui/material/styles';

import { varAlpha } from 'lib/theme/styles';
import type { NavSectionProps } from 'lib/components/nav-section';
import { NavSectionHorizontal } from 'lib/components/nav-section';

// ----------------------------------------------------------------------

export type NavHorizontalProps = NavSectionProps & {
  layoutQuery: Breakpoint;
};

export function NavHorizontal({ data, layoutQuery, sx, ...other }: NavHorizontalProps) {
  return (
    <Box
      sx={{
        width: 1,
        position: 'relative',
        flexDirection: 'column',
        display: { xs: 'none', [layoutQuery]: 'flex' },
        borderBottom: (theme) =>
          `solid 1px ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
        ...sx,
      }}
    >
      <Divider
        sx={{ top: 0, left: 0, width: 1, zIndex: 9, position: 'absolute', borderStyle: 'dashed' }}
      />

      <Box
        sx={{
          px: 1.5,
          height: 'var(--layout-nav-horizontal-height)',
          backgroundColor: 'var(--layout-nav-horizontal-bg)',
          backdropFilter: `blur(var(--layout-header-blur))`,
          WebkitBackdropFilter: `blur(var(--layout-header-blur))`,
        }}
      >
        <NavSectionHorizontal data={data} {...other} />
      </Box>
    </Box>
  );
}
