import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

// ----------------------------------------------------------------------

type MainProps = BoxProps & {
  layoutQuery: Breakpoint;
};

export function AuthMain({ sx, children, layoutQuery, ...other }: MainProps) {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        px: 2,
        py: 5,
        zIndex: 9,
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        [theme.breakpoints.up(layoutQuery)]: {
          px: 0,
          py: 'calc(var(--layout-header-desktop-height) + 24px)',
        },
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          p: 5,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'background.default',
          boxShadow: theme.shadows[8],
          maxWidth: 'var(--layout-auth-content-width)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
