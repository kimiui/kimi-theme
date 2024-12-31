'use client';

import Button from '@mui/material/Button';
import { RouterLink } from 'routes-react';
import { _userCards } from 'kimi-theme/_mock';
import { paths } from 'kimi-theme/routes/paths';
import { Iconify } from 'kimi-theme/components/iconify';
import { DashboardContent } from 'kimi-theme/layouts/dashboard';
import { CustomBreadcrumbs } from 'kimi-theme/components/custom-breadcrumbs';

import { UserCardList } from '../user-card-list';

// ----------------------------------------------------------------------

export function UserCardsView() {
  return (
    <DashboardContent>
      <CustomBreadcrumbs
        heading="User cards"
        links={[
          { name: 'Dashboard', href: paths.dashboard.root },
          { name: 'Users', href: paths.dashboard.users.root },
          { name: 'Cards' },
        ]}
        action={
          <Button
            component={RouterLink as any}
            href={paths.dashboard.users.new}
            variant="contained"
            startIcon={<Iconify icon="mingcute:add-line" />}
          >
            New user
          </Button>
        }
        sx={{ mb: { xs: 3, md: 5 } }}
      />

      <UserCardList users={_userCards} />
    </DashboardContent>
  );
}
