import type { BoxProps } from '@mui/material/Box';
import type { CardProps } from '@mui/material/Card';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { useTabs } from 'kimi-theme/hooks';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Iconify } from 'kimi-theme/components/iconify';
import { Scrollbar } from 'kimi-theme/components/scrollbar';
import { CustomTabs } from 'kimi-theme/components/custom-tabs';
import { fCurrency, fShortenNumber } from 'kimi-theme/utils/format-number';

// ----------------------------------------------------------------------

const TABS = [
  { value: '7days', label: 'Top 7 days' },
  { value: '30days', label: 'Top 30 days' },
  { value: 'all', label: 'All times' },
];

// ----------------------------------------------------------------------

type Props = CardProps & {
  title?: string;
  subheader?: string;
  list: {
    id: string;
    name: string;
    price: number;
    image: string;
    sales: number;
  }[];
};

export function EcommerceTopSales({ title, subheader, list, ...other }: Props) {
  const tabs = useTabs('7days');

  const renderTabs = (
    <CustomTabs
      value={tabs.value}
      onChange={tabs.onChange}
      variant="fullWidth"
      slotProps={{ tab: { px: 0 } }}
    >
      {TABS.map((tab) => (
        <Tab key={tab.value} value={tab.value} label={tab.label} />
      ))}
    </CustomTabs>
  );

  return (
    <Card {...other}>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 3 }} />

      {renderTabs}

      <Scrollbar sx={{ minHeight: 384 }}>
        <Box sx={{ p: 3, gap: 3, minWidth: 360, display: 'flex', flexDirection: 'column' }}>
          {list.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Box>
      </Scrollbar>
    </Card>
  );
}

// ----------------------------------------------------------------------

type ItemProps = BoxProps & {
  item: Props['list'][number];
};

function Item({ item, sx, ...other }: ItemProps) {
  return (
    <Box sx={{ gap: 2, display: 'flex', alignItems: 'center', ...sx }} {...other}>
      <Avatar
        variant="rounded"
        src={item.image}
        sx={{
          width: 48,
          height: 48,
          bgcolor: 'background.neutral',
        }}
      />

      <div>
        <Box sx={{ mb: 1, gap: 1, display: 'flex', alignItems: 'center' }}>
          <Typography variant="subtitle2" noWrap>
            {item.name}
          </Typography>
        </Box>

        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          divider={
            <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }} />
          }
          sx={{ typography: 'caption' }}
        >
          <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
            <Iconify width={16} icon="solar:tag-price-outline" sx={{ color: 'text.disabled' }} />
            {item.price === 0 ? 'Free' : fCurrency(item.price)}
          </Box>

          <Box sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }}>
            <Iconify width={16} icon="healthicons:money-bag" sx={{ color: 'text.disabled' }} />
            {fShortenNumber(item.sales)}
          </Box>
        </Stack>
      </div>
    </Box>
  );
}
