'use client';

import type { BoxProps } from '@mui/material';
import type { ApexOptions } from 'apexcharts';

import { useTheme } from '@mui/material/styles';
import { Box, Card, Stack, Typography } from '@mui/material';

import { Chart } from 'src/components/chart';

type ChartSeries = {
  name: string;
  data: (number | null)[];
}[];

type Props = BoxProps & {
  title: string;
  chart: {
    series: ChartSeries;
    options?: Partial<ApexOptions>;
  };
};

export function EcommerceBalanceStatistics({ title, chart, ...other }: Props) {
  const theme = useTheme();

  const chartOptions: ApexOptions = {
    chart: {
      background: 'transparent',
      toolbar: { show: false },
    },
    colors: [theme.palette.primary.main, theme.palette.info.main],
    dataLabels: { enabled: false },
    fill: { opacity: 1, type: 'solid' },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    legend: { show: false },
    plotOptions: {
      bar: {
        columnWidth: '10px',
        borderRadius: 4,
        borderRadiusApplication: 'end',
      },
    },
    stroke: { colors: ['transparent'], show: true, width: 2 },
    theme: { mode: theme.palette.mode },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      labels: { style: { colors: theme.palette.text.secondary } },
    },
    yaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: theme.palette.text.secondary } },
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
          <Stack direction="row" flexWrap="wrap" width="100%" justifyContent="flex-end">
            {chart.series.map((series, index) => (
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
                <Typography sx={{ ml: 1 }} fontSize="13px" lineHeight="18px" variant="subtitle2">
                  {series.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
              </Box>
            ))}
          </Stack>
          <Chart height={300} options={chartOptions} series={chart.series} type="bar" />
        </Stack>
      </Card>
    </Box>
  );
}
