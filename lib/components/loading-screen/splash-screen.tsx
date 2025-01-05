'use client';

import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';
import type { BoxProps } from '@mui/material/Box';

import { AnimateImageRotate } from 'lib/components/animate';

import { Image } from '../image';

// ----------------------------------------------------------------------

type Props = BoxProps & {
  portal?: boolean;
};

export function SplashScreen({ portal = true, sx, ...other }: Props) {
  const content = (
    <Box sx={{ overflow: 'hidden' }}>
      <Box
        sx={{
          right: 0,
          width: 1,
          bottom: 0,
          height: 1,
          zIndex: 9998,
          display: 'flex',
          position: 'fixed',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          ...sx,
        }}
        {...other}
      >
        <AnimateImageRotate
          image={<Image src="https://www.kimistores.com/images/logo-single.svg" />}
        />
      </Box>
    </Box>
  );

  if (portal) {
    return <Portal>{content}</Portal>;
  }

  return content;
}
