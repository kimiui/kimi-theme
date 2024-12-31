import type { Theme, SxProps } from '@mui/material/styles';

import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import NoSsr from '@mui/material/NoSsr';

import { Iconify } from './iconify';

// ----------------------------------------------------------------------

export type FlagIconProps = {
  code?: string;
  sx?: SxProps<Theme>;
};

export const FlagIcon = forwardRef<HTMLSpanElement, FlagIconProps>(
  ({ code, sx, ...other }, ref) => {
    const baseStyles = {
      width: 26,
      height: 20,
      flexShrink: 0,
      overflow: 'hidden',
      borderRadius: '5px',
      display: 'inline-flex',
      bgcolor: 'background.neutral',
    };

    const renderFallback = <Box component="span" sx={{ ...baseStyles, ...sx }} />;

    if (!code) {
      return null;
    }

    return (
      <NoSsr fallback={renderFallback}>
        <Box ref={ref} component="span" sx={{ ...baseStyles, ...sx }} {...other}>
          <Iconify icon={`flag:${code?.toLowerCase()}-1x1`} sx={{ width: 26, height: 20 }} />
        </Box>
      </NoSsr>
    );
  }
);
