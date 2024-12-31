'use client';

import type { BoxProps } from '@mui/material/Box';
import type { TableHeadCustomProps } from 'kimi-theme/components/table';

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import { useTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { fCurrency } from 'kimi-theme/utils/format-number';
import { Scrollbar } from 'kimi-theme/components/scrollbar';
import { TableHeadCustom } from 'kimi-theme/components/table';

type Props = BoxProps & {
  title?: string;
  subheader?: string;
  headLabel: TableHeadCustomProps['headLabel'];
  tableData: {
    id: string;
    name: string;
    description: string;
    price: number;
    order: number;
    sales: number;
    stock: number;
    image: string;
  }[];
};

export function EcommerceProductPerformance({
  title,
  subheader,
  tableData,
  headLabel,
  ...other
}: Props) {
  const theme = useTheme();
  return (
    <Box height={1} display="flex" flexDirection="column" {...other}>
      <Typography variant="h6" sx={{ mb: 3 }} fontWeight={700}>
        {title}
      </Typography>
      <Card sx={{ flex: 1 }}>
        <Scrollbar>
          <Table sx={{ minWidth: 640 }}>
            <TableHeadCustom
              sx={{
                backgroundColor: 'background.paper',
                '& th': { bgcolor: 'background.paper', p: 3 },
                borderBottom: () => `solid 1px ${theme.palette.divider}`,
              }}
              headLabel={headLabel}
            />

            <TableBody>
              {tableData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell sx={{ border: 0, px: 3, py: 1.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar src={row.image} alt={row.name} sx={{ mr: 2, borderRadius: 1 }} />
                      <Box>
                        <Box sx={{ typography: 'subtitle2' }}>{row.name}</Box>
                        <Box sx={{ typography: 'body2', color: 'text.secondary' }}>
                          {row.description}
                        </Box>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ border: 0, px: 3, py: 1.5 }}>{fCurrency(row.price)}</TableCell>
                  <TableCell sx={{ border: 0, px: 3, py: 1.5 }}>{row.order}</TableCell>
                  <TableCell sx={{ border: 0, px: 3, py: 1.5 }}>{fCurrency(row.sales)}</TableCell>
                  <TableCell sx={{ border: 0, px: 3, py: 1.5 }}>
                    <Box
                      sx={{
                        typography: 'subtitle2',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        display: 'inline-block',
                        bgcolor: () =>
                          row.stock > 100
                            ? theme.palette.success.lighter
                            : row.stock > 0
                              ? theme.palette.warning.lighter
                              : theme.palette.error.lighter,
                        color: () =>
                          row.stock > 100
                            ? theme.palette.success.dark
                            : row.stock > 0
                              ? theme.palette.warning.dark
                              : theme.palette.error.dark,
                      }}
                    >
                      {row.stock}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </Card>
    </Box>
  );
}
