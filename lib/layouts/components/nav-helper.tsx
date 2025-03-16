import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Fab, Link } from '@mui/material';
import { motion as m } from 'motion/react';
import Typography from '@mui/material/Typography';
import type { StackProps } from '@mui/material/Stack';
import { alpha as hexAlpha } from '@mui/material/styles';

import { Iconify } from 'lib/components';
import { varAlpha, bgGradient } from 'lib/theme/styles';

// ----------------------------------------------------------------------

export function NavHelper({ sx, ...other }: StackProps) {
  return (
    <Stack sx={{ p: 2, textAlign: 'center', ...sx }} {...other}>
      <Fab size="small" color="secondary" aria-label="add" variant="extended">
        <Iconify icon="bi:question-circle" />
        <Typography variant="body2">
          Need help? Check our{' '}
          <Link href="https://docs.kimistores.com" target="_blank">
            docs
          </Link>
        </Typography>
      </Fab>
    </Stack>
  );
}

// ----------------------------------------------------------------------

export function UpgradeBlock({ sx, ...other }: StackProps) {
  return (
    <Stack
      sx={{
        ...bgGradient({
          color: `135deg, ${hexAlpha('#F7BB95', 0.92)}, ${hexAlpha('#5B2FF3', 0.92)}`,
          imgUrl: `/assets/background/background-7.webp`,
        }),
        px: 3,
        py: 4,
        borderRadius: 2,
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <Box
        sx={{
          top: 0,
          left: 0,
          width: 1,
          height: 1,
          borderRadius: 2,
          position: 'absolute',
          border: (theme) => `solid 3px ${varAlpha(theme.vars.palette.common.whiteChannel, 0.16)}`,
        }}
      />

      <Box
        component={m.img as React.ElementType}
        animate={{ y: [12, -12, 12] }}
        transition={{
          duration: 8,
          ease: 'linear',
          repeat: Infinity,
          repeatDelay: 0,
        }}
        alt="Small Rocket"
        src="/assets/illustrations/illustration-rocket-small.webp"
        sx={{ right: 0, width: 112, height: 112, position: 'absolute' }}
      />

      <Stack alignItems="flex-start" sx={{ position: 'relative' }}>
        <Box component="span" sx={{ typography: 'h5', color: 'common.white' }}>
          35% OFF
        </Box>

        <Box
          component="span"
          sx={{
            mb: 2,
            mt: 0.5,
            color: 'common.white',
            typography: 'subtitle2',
          }}
        >
          Power up Productivity!
        </Box>

        <Button variant="contained" size="small" color="warning">
          Upgrade to Pro
        </Button>
      </Stack>
    </Stack>
  );
}
