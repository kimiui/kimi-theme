import type { IUserAccountBillingHistory } from 'kimi-theme/types/user';

import { useBoolean } from 'ahooks';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { fDate } from 'kimi-theme/utils/format-time';
import ListItemText from '@mui/material/ListItemText';
import { Iconify } from 'kimi-theme/components/iconify';
import { fCurrency } from 'kimi-theme/utils/format-number';

// ----------------------------------------------------------------------

type Props = {
  invoices: IUserAccountBillingHistory[];
};

export function AccountBillingHistory({ invoices }: Props) {
  const [showMore, showMoreActions] = useBoolean();

  return (
    <Card>
      <CardHeader title="Invoice history" />

      <Stack spacing={1.5} sx={{ px: 3, pt: 3 }}>
        {(showMore ? invoices : invoices.slice(0, 8)).map((invoice) => (
          <Stack key={invoice.id} direction="row" alignItems="center">
            <ListItemText
              primary={invoice.invoiceNumber}
              secondary={fDate(invoice.createdAt)}
              primaryTypographyProps={{ typography: 'body2' }}
              secondaryTypographyProps={{
                mt: 0.5,
                component: 'span',
                typography: 'caption',
                color: 'text.disabled',
              }}
            />

            <Typography variant="body2" sx={{ textAlign: 'right', mr: 5 }}>
              {fCurrency(invoice.price)}
            </Typography>

            <Link color="inherit" underline="always" variant="body2" href="#">
              PDF
            </Link>
          </Stack>
        ))}

        <Divider sx={{ borderStyle: 'dashed' }} />
      </Stack>

      <Stack alignItems="flex-start" sx={{ p: 2 }}>
        <Button
          size="small"
          color="inherit"
          startIcon={
            <Iconify
              width={16}
              icon={showMore ? 'eva:arrow-ios-upward-fill' : 'eva:arrow-ios-downward-fill'}
              sx={{ mr: -0.5 }}
            />
          }
          onClick={showMoreActions.toggle}
        >
          Show {showMore ? `less` : `more`}
        </Button>
      </Stack>
    </Card>
  );
}
