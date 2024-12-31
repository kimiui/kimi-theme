'use client';

import type { BoxProps } from '@mui/material';
import type { ChartOptions } from 'kimi-theme/components/chart';

import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { fCurrency } from 'kimi-theme/utils/format-number';
import { Chart, useChart } from 'kimi-theme/components/chart';

type Props = BoxProps & {
  title?: string;
  subheader?: string;
  chart: {
    colors?: string[];
    categories?: string[];
    series: number[];
    options?: ChartOptions;
  };
};

export function EcommerceWeeklySales({ title, subheader, chart, ...other }: Props) {
  const theme = useTheme();

  const chartColors = chart.colors ?? [theme.palette.primary.main, theme.palette.primary.lighter];

  const highestSale = Math.max(...(chart.series || []));
  const highestIndex = chart.series.indexOf(highestSale);

  const chartOptions = useChart({
    colors: chart.series.map((_, index) =>
      index === highestIndex ? chartColors[0] : chartColors[1]
    ),
    chart: {
      type: 'bar',
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        borderRadius: 2,
        dataLabels: {
          position: 'top',
        },
        distributed: true,
      },
    },

    xaxis: {
      categories: chart.categories,
      crosshairs: {
        show: false, // This hides the crosshairs
      },
    },

    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      followCursor: true,
      y: {
        formatter: (value: number) => fCurrency(value),
      },
    },
    yaxis: {
      show: false,
    },
    dataLabels: {
      enabled: true,

      formatter(val, opts) {
        const i = opts.dataPointIndex;
        return i === highestIndex ? fCurrency(val as number) : '';
      },
      offsetY: -24,
      style: {
        fontSize: '14px',
        colors: [theme.palette.text.primary],
      },
    },
    legend: {
      show: false, // Hide legend as we're using distributed colors
    },
    ...chart.options,
  });

  return (
    <Box height={1} maxHeight={334} display="flex" flexDirection="column" {...other}>
      <Typography variant="h6" sx={{ mb: 3 }} fontWeight={700}>
        {title}
      </Typography>
      <Card sx={{ p: 2, flex: 1, borderRadius: 1 }}>
        <Chart
          sx={{ height: 1 }}
          type="bar"
          series={[{ name: 'Total Income', data: chart.series }]}
          options={chartOptions}
        />
      </Card>
    </Box>
  );
}
