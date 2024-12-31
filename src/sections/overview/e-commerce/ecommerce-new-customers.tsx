'use client';

import type { BoxProps } from '@mui/material';

import { Icon } from '@iconify/react';
import { Chart } from 'kimi-theme/components/chart';
import { Box, Card, useTheme, ButtonBase, Typography } from '@mui/material';

type Props = BoxProps & {
  title?: string;
  total: number;
  percent: number;
  chart: {
    series: number[];
    options?: any;
  };
};

export function EcommerceNewCustomers({
  title = 'New Customers',
  total,
  percent,
  chart,
  ...other
}: Props) {
  const theme = useTheme();

  const chartOptions = {
    chart: {
      type: 'area' as const,
      toolbar: { show: false },
      sparkline: { enabled: true },
    },
    colors: [theme.palette.success.main],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.3,
        stops: [0, 90, 100],
        colorStops: [
          { offset: 0, color: theme.palette.success.light, opacity: 0.7 },
          { offset: 100, color: theme.palette.success.main, opacity: 0.3 },
        ],
      },
    },
    stroke: { width: 4, curve: 'smooth' as const },
    xaxis: {
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { labels: { show: false }, min: Math.min(...chart.series) * 0.8 },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      followCursor: true,
    },
  };

  return (
    <Box height={1} maxHeight={334} display="flex" flexDirection="column" {...other}>
      <Typography variant="h6" sx={{ mb: 3 }} fontWeight={700}>
        {title}
      </Typography>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'success.light',
          borderRadius: 2,
          flex: 1,
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h3" color="success.dark" sx={{ mb: 1, fontWeight: 700 }}>
              {total.toLocaleString()}
            </Typography>
            <ButtonBase
              onClick={() => {}}
              sx={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: 'success.dark',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: theme.transitions.create(['opacity']),
                '&:hover': { opacity: 0.8 },
              }}
            >
              <Icon
                icon="material-symbols:arrow-outward"
                color={theme.palette.primary.lighter}
                width="24"
                height="24"
              />
            </ButtonBase>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 0.5 }}>
            <Icon
              icon={
                percent >= 0 ? 'material-symbols:trending-up' : 'material-symbols:trending-down'
              }
              color="success.darker"
              width="16"
              height="16"
            />
            <Typography variant="subtitle2" color="success.darker">
              {percent > 0 && `+${percent}%`}
            </Typography>
            <Typography variant="body2" color="success.darker">
              than last month
            </Typography>
          </Box>
        </Box>

        <Chart
          sx={{ flex: 1 }}
          type="area"
          series={[{ name: 'New Customers', data: chart.series }]}
          options={chartOptions}
        />
      </Card>
    </Box>
  );
}
