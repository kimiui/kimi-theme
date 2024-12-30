'use client';

import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link, Stack, useTheme } from '@mui/material';

import { fDate } from 'src/utils/format-time';
import { fCurrency } from 'src/utils/format-number';

type Props = BoxProps & {
  title?: string;
  list: {
    id: string;
    name: string;
    price: number;
    image: string;
    sales: number;
  }[];
};

export function EcommerceRecentOrders({ title, list, ...other }: Props) {
  const theme = useTheme();

  return (
    <Box height={1} maxHeight={334} display="flex" flexDirection="column" {...other}>
      <Typography variant="h6" sx={{ mb: 3 }} fontWeight={700}>
        {title}
      </Typography>
      <Card sx={{ flex: 1, p: 3, borderRadius: 1 }}>
        <Stack sx={{ gap: 3, display: 'flex', flexDirection: 'column' }}>
          {list.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </Stack>

        <Stack direction="row" justifyContent="flex-end" mt={3}>
          <Link
            color="inherit"
            variant="overline"
            sx={{
              cursor: 'pointer',
              opacity: 0.72,
              alignItems: 'center',
              display: 'inline-flex',
              transition: theme.transitions.create(['opacity']),
              '&:hover': { opacity: 1 },
            }}
          >
            View All
          </Link>
        </Stack>
      </Card>
    </Box>
  );
}

// ----------------------------------------------------------------------

type ItemProps = BoxProps & {
  item: Props['list'][number];
};

function Item({ item, sx, ...other }: ItemProps) {
  return (
    <Box sx={{ width: 1, gap: 2, display: 'flex', alignItems: 'center', ...sx }} {...other}>
      <Avatar
        variant="rounded"
        src={item.image}
        sx={{
          width: 48,
          height: 48,
          bgcolor: 'background.neutral',
        }}
      />

      <Stack direction="column" flexGrow={1}>
        <Typography variant="subtitle2" noWrap>
          {item.name}
        </Typography>
        <Box
          sx={{
            gap: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            ...sx,
          }}
          {...other}
        >
          <Typography variant="body2" color="text.disabled" noWrap>
            {fDate(new Date())}
          </Typography>
          <Typography variant="subtitle1" noWrap>
            {fCurrency(item.price)}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
