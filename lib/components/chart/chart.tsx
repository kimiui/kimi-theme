'use client';

import Box from '@mui/material/Box';
import ApexChart from 'react-apexcharts';
import type { BoxProps } from '@mui/material/Box';

import type { ChartProps } from './types';

// ----------------------------------------------------------------------

export function Chart({
  sx,
  type,
  series,
  height,
  options,
  width = '100%',
  ...other
}: BoxProps & ChartProps) {
  return (
    <Box
      dir="ltr"
      sx={{
        width,
        height,
        flexShrink: 0,
        borderRadius: 1.5,
        position: 'relative',
        ...sx,
      }}
      {...other}
    >
      <ApexChart type={type} series={series} options={options} width="100%" height="100%" />
    </Box>
  );
}
