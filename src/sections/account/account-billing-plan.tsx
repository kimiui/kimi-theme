'use client';

import type { IAddressItem, IPaymentCard } from 'kimi-theme/types/common';

import Box from '@mui/material/Box';
import { useBoolean } from 'ahooks';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useState, useCallback } from 'react';
import CardHeader from '@mui/material/CardHeader';
import { Label } from 'kimi-theme/components/label';
import { Iconify } from 'kimi-theme/components/iconify';
import { PlanFreeIcon, PlanPremiumIcon, PlanStarterIcon } from 'kimi-theme/assets/icons';

import { AddressListDialog } from '../address';
import { PaymentCardListDialog } from '../payment/payment-card-list-dialog';

// ----------------------------------------------------------------------

type Props = {
  cardList: IPaymentCard[];
  addressBook: IAddressItem[];
  plans: {
    price: number;
    primary: boolean;
    subscription: string;
  }[];
};

export function AccountBillingPlan({ cardList, addressBook, plans }: Readonly<Props>) {
  const [openAddress, openAddressActions] = useBoolean();

  const [openCards, openCardsActions] = useBoolean();

  const primaryAddress = addressBook.filter((address) => address.primary)[0];

  const primaryCard = cardList.filter((card) => card.primary)[0];

  const [selectedPlan, setSelectedPlan] = useState('');

  const [selectedAddress, setSelectedAddress] = useState<IAddressItem | null>(primaryAddress);

  const [selectedCard, setSelectedCard] = useState<IPaymentCard | null>(primaryCard);

  const handleSelectPlan = useCallback(
    (newValue: string) => {
      const currentPlan = plans.filter((plan) => plan.primary)[0].subscription;
      if (currentPlan !== newValue) {
        setSelectedPlan(newValue);
      }
    },
    [plans]
  );

  const handleSelectAddress = useCallback((newValue: IAddressItem | null) => {
    setSelectedAddress(newValue);
  }, []);

  const handleSelectCard = useCallback((newValue: IPaymentCard | null) => {
    setSelectedCard(newValue);
  }, []);

  const renderPlans = plans.map((plan) => (
    <Grid
      key={plan.subscription}
      size={{
        xs: 12,
        md: 4,
      }}
    >
      <Paper
        variant="outlined"
        onClick={() => handleSelectPlan(plan.subscription)}
        sx={{
          p: 2.5,
          cursor: 'pointer',
          position: 'relative',
          ...(plan.primary && { opacity: 0.48, cursor: 'default' }),
          ...(plan.subscription === selectedPlan && {
            boxShadow: (theme) => `0 0 0 2px ${theme.vars.palette.text.primary}`,
          }),
        }}
      >
        {plan.primary && (
          <Label
            color="info"
            startIcon={<Iconify icon="eva:star-fill" />}
            sx={{ position: 'absolute', top: 8, right: 8 }}
          >
            Current
          </Label>
        )}

        {plan.subscription === 'basic' && <PlanFreeIcon />}
        {plan.subscription === 'starter' && <PlanStarterIcon />}
        {plan.subscription === 'premium' && <PlanPremiumIcon />}

        <Box
          sx={{
            typography: 'subtitle2',
            mt: 2,
            mb: 0.5,
            textTransform: 'capitalize',
          }}
        >
          {plan.subscription}
        </Box>

        <Stack direction="row" alignItems="center" sx={{ typography: 'h4' }}>
          {plan.price || 'Free'}

          {!!plan.price && (
            <Box component="span" sx={{ typography: 'body2', color: 'text.disabled', ml: 0.5 }}>
              /mo
            </Box>
          )}
        </Stack>
      </Paper>
    </Grid>
  ));

  return (
    <>
      <Card>
        <CardHeader title="Plan" />

        <Grid container spacing={2} sx={{ p: 3 }}>
          {renderPlans}
        </Grid>

        <Stack spacing={2} sx={{ p: 3, pt: 0, typography: 'body2' }}>
          <Grid container spacing={{ xs: 0.5, md: 2 }}>
            <Grid
              sx={{ color: 'text.secondary' }}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              Plan
            </Grid>
            <Grid
              sx={{ typography: 'subtitle2', textTransform: 'capitalize' }}
              size={{
                xs: 12,
                md: 8,
              }}
            >
              {selectedPlan || '-'}
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 0.5, md: 2 }}>
            <Grid
              sx={{ color: 'text.secondary' }}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              Billing name
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 8,
              }}
            >
              <Button
                onClick={openAddressActions.setTrue}
                endIcon={<Iconify width={16} icon="eva:arrow-ios-downward-fill" />}
                sx={{ typography: 'subtitle2', p: 0, borderRadius: 0 }}
              >
                {selectedAddress?.name}
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 0.5, md: 2 }}>
            <Grid
              sx={{ color: 'text.secondary' }}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              Billing address
            </Grid>
            <Grid
              sx={{ color: 'text.secondary' }}
              size={{
                xs: 12,
                md: 8,
              }}
            >
              {selectedAddress?.fullAddress}
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 0.5, md: 2 }}>
            <Grid
              sx={{ color: 'text.secondary' }}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              Billing phone number
            </Grid>
            <Grid
              sx={{ color: 'text.secondary' }}
              size={{
                xs: 12,
                md: 8,
              }}
            >
              {selectedAddress?.phoneNumber}
            </Grid>
          </Grid>

          <Grid container spacing={{ xs: 0.5, md: 2 }}>
            <Grid
              sx={{ color: 'text.secondary' }}
              size={{
                xs: 12,
                md: 4,
              }}
            >
              Payment method
            </Grid>
            <Grid
              size={{
                xs: 12,
                md: 8,
              }}
            >
              <Button
                onClick={openCardsActions.setTrue}
                endIcon={<Iconify width={16} icon="eva:arrow-ios-downward-fill" />}
                sx={{ typography: 'subtitle2', p: 0, borderRadius: 0 }}
              >
                {selectedCard?.cardNumber}
              </Button>
            </Grid>
          </Grid>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack spacing={1.5} direction="row" justifyContent="flex-end" sx={{ p: 3 }}>
          <Button variant="outlined">Cancel plan</Button>
          <Button variant="contained">Upgrade plan</Button>
        </Stack>
      </Card>
      <PaymentCardListDialog
        list={cardList}
        open={openCards}
        onClose={openCardsActions.setFalse}
        selected={(selectedId: string) => selectedCard?.id === selectedId}
        onSelect={handleSelectCard}
      />
      <AddressListDialog
        list={addressBook}
        open={openAddress}
        onClose={openAddressActions.setFalse}
        selected={(selectedId: string) => selectedAddress?.id === selectedId}
        onSelect={handleSelectAddress}
        action={
          <Button
            size="small"
            startIcon={<Iconify icon="mingcute:add-line" />}
            sx={{ alignSelf: 'flex-end' }}
          >
            New
          </Button>
        }
      />
    </>
  );
}
