'use client';

import type { IAddressItem } from 'kimi-theme/types/common';

import { useBoolean } from 'ahooks';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState, useCallback } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import { Iconify } from 'kimi-theme/components/iconify';
import { usePopover, CustomPopover } from 'kimi-theme/components/custom-popover';

import { AddressItem, AddressNewForm } from '../address';

// ----------------------------------------------------------------------

type Props = {
  addressBook: IAddressItem[];
};

export function AccountBillingAddress({ addressBook }: Readonly<Props>) {
  const [addressId, setAddressId] = useState('');

  const popover = usePopover();

  const [addressForm, addressFormActions] = useBoolean();

  const handleAddNewAddress = useCallback((address: IAddressItem) => {
    console.info('ADDRESS', address);
  }, []);

  const handleSelectedId = useCallback(
    (event: React.MouseEvent<HTMLElement>, id: string) => {
      popover.onOpen(event);
      setAddressId(id);
    },
    [popover]
  );

  const handleClose = useCallback(() => {
    popover.onClose();
    setAddressId('');
  }, [popover]);

  return (
    <>
      <Card>
        <CardHeader
          title="Address book"
          action={
            <Button
              size="small"
              color="primary"
              startIcon={<Iconify icon="mingcute:add-line" />}
              onClick={addressFormActions.setTrue}
            >
              Address
            </Button>
          }
        />

        <Stack spacing={2.5} sx={{ p: 3 }}>
          {addressBook.map((address) => (
            <AddressItem
              variant="outlined"
              key={address.id}
              address={address}
              action={
                <IconButton
                  onClick={(event: React.MouseEvent<HTMLElement>) => {
                    handleSelectedId(event, `${address.id}`);
                  }}
                  sx={{ position: 'absolute', top: 8, right: 8 }}
                >
                  <Iconify icon="eva:more-vertical-fill" />
                </IconButton>
              }
              sx={{ p: 2.5, borderRadius: 1 }}
            />
          ))}
        </Stack>
      </Card>

      <CustomPopover open={popover.open} anchorEl={popover.anchorEl} onClose={handleClose}>
        <MenuList>
          <MenuItem
            onClick={() => {
              handleClose();
              console.info('SET AS PRIMARY', addressId);
            }}
          >
            <Iconify icon="eva:star-fill" />
            Set as primary
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClose();
              console.info('EDIT', addressId);
            }}
          >
            <Iconify icon="solar:pen-bold" />
            Edit
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClose();
              console.info('DELETE', addressId);
            }}
            sx={{ color: 'error.main' }}
          >
            <Iconify icon="solar:trash-bin-trash-bold" />
            Delete
          </MenuItem>
        </MenuList>
      </CustomPopover>

      <AddressNewForm
        open={addressForm}
        onClose={addressFormActions.setFalse}
        onCreate={handleAddNewAddress}
      />
    </>
  );
}
