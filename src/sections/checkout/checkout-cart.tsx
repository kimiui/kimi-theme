import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import { RouterLink } from 'routes-react';
import { paths } from 'kimi-theme/routes/paths';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import { Iconify } from 'kimi-theme/components/iconify';
import { EmptyContent } from 'kimi-theme/components/empty-content';

import { useCheckoutContext } from './context';
import { CheckoutSummary } from './checkout-summary';
import { CheckoutCartProductList } from './checkout-cart-product-list';

// ----------------------------------------------------------------------

export function CheckoutCart() {
  const checkout = useCheckoutContext();

  const empty = !checkout.items.length;

  return (
    <Grid container spacing={3}>
      <Grid
        size={{
          xs: 12,
          md: 8,
        }}
      >
        <Card sx={{ mb: 3 }}>
          <CardHeader
            title={
              <Typography variant="h6">
                Cart
                <Typography component="span" sx={{ color: 'text.secondary' }}>
                  &nbsp;(
                  {checkout.totalItems} item)
                </Typography>
              </Typography>
            }
            sx={{ mb: 3 }}
          />

          {empty ? (
            <EmptyContent
              title="Cart is empty!"
              description="Look like you have no items in your shopping cart."
              imgUrl="/assets/icons/empty/ic-cart.svg"
              sx={{ pt: 5, pb: 10 }}
            />
          ) : (
            <CheckoutCartProductList
              products={checkout.items}
              onDelete={checkout.onDeleteCart}
              onIncreaseQuantity={checkout.onIncreaseQuantity}
              onDecreaseQuantity={checkout.onDecreaseQuantity}
            />
          )}
        </Card>

        <Button
          component={RouterLink as any}
          href={paths.product.root}
          color="inherit"
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" />}
        >
          Continue shopping
        </Button>
      </Grid>
      <Grid
        size={{
          xs: 12,
          md: 4,
        }}
      >
        <CheckoutSummary
          total={checkout.total}
          discount={checkout.discount}
          subtotal={checkout.subtotal}
          onApplyDiscount={checkout.onApplyDiscount}
        />

        <Button
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          disabled={empty}
          onClick={checkout.onNextStep}
        >
          Check out
        </Button>
      </Grid>
    </Grid>
  );
}
