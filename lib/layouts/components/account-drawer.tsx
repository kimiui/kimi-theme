'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Drawer from '@mui/material/Drawer';
import Tooltip from '@mui/material/Tooltip';
import { useState, useCallback } from 'react';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Button, Popover, Divider } from '@mui/material';
import type { IconButtonProps } from '@mui/material/IconButton';

import { paths } from 'lib/routes/paths';
import { varAlpha } from 'lib/theme/styles';
import { Label } from 'lib/components/label';
import { ACCOUNTS } from 'lib/_mock/accounts';
import { Iconify } from 'lib/components/iconify';
import { AnimateAvatar } from 'lib/components/animate';
import { usePopover } from 'lib/components/custom-popover';
import { ThemeModeToggle } from 'lib/components/theme-mode-toggle';
import { FullScreenButton } from 'lib/components/settings/drawer/fullscreen-button';

import { UpgradeBlock } from './nav-helper';
import { AccountButton } from './account-button';
import { SignOutButton } from './sign-out-button';
// ----------------------------------------------------------------------

export type AccountDrawerProps = IconButtonProps & {
  data?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
    info?: React.ReactNode;
  }[];
};

export function AccountDrawer({ data = [], sx, ...other }: AccountDrawerProps) {
  const theme = useTheme();

  const { pathname } = window.location;
  const mediaQuery = 'sm';

  const {
    open: openPopover,
    anchorEl,
    onClose: onClosePopover,
    onOpen: onOpenPopover,
  } = usePopover();

  const [user, setUser] = useState(ACCOUNTS[0]);

  const [open, setOpen] = useState(false);

  const handleOpenDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  const handleClickItem = useCallback(
    (path: string) => {
      handleCloseDrawer();
      window.location.href = path;
    },
    [handleCloseDrawer]
  );

  const renderAvatar = (
    <AnimateAvatar
      width={96}
      slotProps={{
        avatar: { src: user?.avatar, alt: user?.name },
        overlay: {
          border: 2,
          spacing: 3,
          color: `linear-gradient(135deg, ${varAlpha(
            theme.vars.palette.primary.mainChannel,
            0
          )} 25%, ${theme.vars.palette.primary.main} 100%)`,
        },
      }}
    >
      {user?.name?.charAt(0).toUpperCase()}
    </AnimateAvatar>
  );

  return (
    <>
      <AccountButton
        open={open}
        onClick={handleOpenDrawer}
        photoURL={user?.avatar}
        displayName={user?.name}
        sx={sx}
        {...other}
      />

      <Drawer
        open={open}
        onClose={handleCloseDrawer}
        anchor="right"
        slotProps={{ backdrop: { invisible: true } }}
        PaperProps={{ sx: { width: 320 } }}
      >
        <Stack
          direction="row"
          justifyContent="flex-end"
          spacing={0}
          sx={{
            p: 1,
            position: 'absolute',
            top: 0,
            right: 10,
            zIndex: 9,
            backdropFilter: 'blur(8px)',
            left: 0,
          }}
        >
          <FullScreenButton />

          <ThemeModeToggle />

          <IconButton onClick={handleCloseDrawer}>
            <Iconify icon="mingcute:close-line" />
          </IconButton>
        </Stack>

        <Stack alignItems="center" sx={{ pt: 8 }}>
          {renderAvatar}

          <Typography variant="subtitle1" noWrap sx={{ mt: 2 }}>
            {user?.name}
          </Typography>

          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }} noWrap>
            {user?.email}
          </Typography>
        </Stack>

        <Box
          sx={{
            p: 3,
            gap: 1,
            flexWrap: 'wrap',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="outlined"
            disableRipple
            onClick={onOpenPopover}
            fullWidth
            sx={[
              {
                py: 1,
                gap: { xs: 0.5, [mediaQuery]: 1 },
              },
            ]}
          >
            <Typography variant="body2" sx={{ flexGrow: 1 }}>
              Show more accounts
            </Typography>

            <Iconify width={16} icon="carbon:chevron-down" sx={{ color: 'text.disabled' }} />
          </Button>

          <Popover
            open={openPopover}
            anchorEl={anchorEl}
            onClose={onClosePopover}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            slotProps={{ paper: { sx: { p: 1, width: 1, maxWidth: 280 } } }}
          >
            {ACCOUNTS.filter((a) => a.id !== user.id).map((account) => (
              <Button
                key={account.id}
                fullWidth
                onClick={() => {
                  setUser(account);
                  onClosePopover();
                }}
              >
                <Avatar alt={account.name} src={account.avatar} />
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  sx={{ p: 1, flexGrow: 1 }}
                >
                  <Typography variant="body2" noWrap>
                    {account.name}
                  </Typography>
                  <Typography variant="caption" noWrap>
                    {account.email}
                  </Typography>
                </Box>
              </Button>
            ))}

            <Divider sx={{ my: 1 }} />

            <Tooltip title="Add account">
              <Button variant="text" startIcon={<Iconify icon="mingcute:add-line" />} fullWidth>
                Add another account
              </Button>
            </Tooltip>
          </Popover>
        </Box>

        <Stack
          sx={{
            py: 3,
            px: 2.5,
            borderTop: `dashed 1px ${theme.vars.palette.divider}`,
            borderBottom: `dashed 1px ${theme.vars.palette.divider}`,
          }}
        >
          {data.map((option) => {
            const rootLabel = pathname.includes('/dashboard') ? 'Home' : 'Dashboard';

            const rootHref = pathname.includes('/dashboard') ? '/' : paths.dashboard.root;

            return (
              <MenuItem
                key={option.label}
                onClick={() => handleClickItem(option.label === 'Home' ? rootHref : option.href)}
                sx={{
                  py: 1,
                  color: 'text.secondary',
                  '& svg': { width: 24, height: 24 },
                  '&:hover': { color: 'text.primary' },
                }}
              >
                {option.icon}

                <Box component="span" sx={{ ml: 2 }}>
                  {option.label === 'Home' ? rootLabel : option.label}
                </Box>

                {option.info && (
                  <Label color="error" sx={{ ml: 1 }}>
                    {option.info}
                  </Label>
                )}
              </MenuItem>
            );
          })}
        </Stack>

        <Box sx={{ px: 2.5, py: 3 }}>
          <UpgradeBlock />
        </Box>

        <Box sx={{ p: 2.5 }}>
          <SignOutButton onClose={handleCloseDrawer} />
        </Box>
      </Drawer>
    </>
  );
}
