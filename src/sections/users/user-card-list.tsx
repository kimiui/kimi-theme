'use client';

import type { IUserCard } from 'src/types/user';

import Box from '@mui/material/Box';
import { useState, useCallback } from 'react';
import Pagination from '@mui/material/Pagination';

import { UserCard } from './user-card';

// ----------------------------------------------------------------------

type Props = {
  users: IUserCard[];
};

export function UserCardList({ users }: Readonly<Props>) {
  const [page, setPage] = useState(1);

  const rowsPerPage = 6;

  const handleChangePage = useCallback((event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
  }, []);

  return (
    <>
      <Box
        gap={3}
        display="grid"
        gridTemplateColumns={{
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
      >
        {users
          .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
          .map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
      </Box>

      <Pagination
        page={page}
        shape="circular"
        count={Math.ceil(users.length / rowsPerPage)}
        onChange={handleChangePage}
        sx={{ mt: { xs: 5, md: 8 }, mx: 'auto' }}
      />
    </>
  );
}
