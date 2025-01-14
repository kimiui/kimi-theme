'use client';

import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { motion as m } from 'motion/react';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import { varAlpha } from 'lib/theme/styles';
import { Image } from 'lib/components/image';
import { Label } from 'lib/components/label';
import { varHover, varTranHover } from 'lib/components/animate';

// ----------------------------------------------------------------------

type Props = {
  item: {
    name: string;
    icon: string;
    href: string;
    category?: string;
  };
};

export function ComponentCard({ item }: Readonly<Props>) {
  return (
    <Paper
      component={Link}
      href={item.href}
      variant="outlined"
      sx={{
        overflow: 'hidden',
        position: 'relative',
        textDecoration: 'none',
        '&:hover': { textDecoration: 'none !important' },
      }}
    >
      {item.category && (
        <Label
          color={item.category === 'MUI X' ? 'info' : 'default'}
          sx={{
            top: 8,
            right: 8,
            zIndex: 9,
            position: 'absolute',
          }}
        >
          {item.category}
        </Label>
      )}

      <CardActionArea
        component={m.div}
        whileHover="hover"
        sx={{
          borderRadius: 0,
          color: 'text.secondary',
          bgcolor: (theme) => varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
        }}
      >
        <m.div variants={varHover(1.1)} transition={varTranHover()}>
          <Image
            alt={item.name}
            src={item.icon}
            ratio="1/1"
            sx={{ width: 200, maxWidth: 1 }}
            disablePlaceholder
          />
        </m.div>
      </CardActionArea>

      <Typography variant="subtitle2" sx={{ p: 2, textAlign: 'center' }}>
        {item.name}
      </Typography>
    </Paper>
  );
}
