'use client';

import type { BoxProps } from '@mui/material';
import type { ApexOptions } from 'apexcharts';

import { useTheme } from '@mui/material/styles';
import { Box, Card, Stack, Divider, Typography } from '@mui/material';

import { Chart } from 'src/components/chart';

type Props = BoxProps & {
  title: string;
  chart: {
    series: number[];
    labels: string[];
    options?: Partial<ApexOptions>;
  };
};

export function EcommerceSalesByCategories({ title, chart, ...other }: Props) {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: { show: false },
    },
    colors: [
      theme.palette.warning.main,
      theme.palette.success.main,
      theme.palette.primary.main,
      theme.palette.info.main,
    ],
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '12px',
        fontWeight: 400,
        fontFamily: theme.typography.fontFamily,
      },
    },
    fill: { opacity: 1, type: 'solid' },
    labels: chart.labels,
    legend: { show: false },
    stroke: {
      colors: [theme.palette.background.paper],
      width: 1,
    },
    theme: { mode: theme.palette.mode },
    tooltip: { fillSeriesColor: false },
    plotOptions: {
      pie: {
        dataLabels: {
          offset: -10, // Use the new labelOffset prop here
          minAngleToShowLabel: 10,
        },
      },
    },
    ...chart.options,
  };

  return (
    <Box height={1} display="flex" flexDirection="column" {...other}>
      <Typography variant="h6" sx={{ mb: 3 }} fontWeight={700}>
        {title}
      </Typography>
      <Card sx={{ p: 2, flex: 1, borderRadius: 1 }}>
        <Stack gap={3}>
          <Chart height={260} options={chartOptions} series={chart.series} type="pie" />
          <Divider />
          <Stack direction="row" flexWrap="wrap" width="100%" justifyContent="space-between">
            {chart.series.map((_, index) => (
              <Box
                key={index}
                sx={{
                  alignItems: 'center',
                  display: 'flex',
                  p: 1,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: chartOptions.colors![index],
                    borderRadius: '50%',
                    height: 12,
                    width: 12,
                  }}
                />
                <Typography
                  sx={{ ml: 1 }}
                  fontSize="13px"
                  lineHeight="18px"
                  fontWeight="500"
                  variant="subtitle2"
                >
                  {chart.labels[index]}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
              </Box>
            ))}
          </Stack>
        </Stack>
      </Card>
    </Box>
  );
}
