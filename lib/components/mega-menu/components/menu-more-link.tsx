import Link from '@mui/material/Link';

import { Iconify } from '../../iconify';

import type { MenuLink } from '../types';

// ----------------------------------------------------------------------

export function MenuMoreLink({ title, path, sx, ...other }: MenuLink) {
  return (
    <Link
      href={path}
      color="inherit"
      sx={{
        alignItems: 'center',
        typography: 'caption',
        display: 'inline-flex',
        fontWeight: 'fontWeightSemiBold',
        ...sx,
      }}
      {...other}
    >
      {title} <Iconify icon="eva:arrow-ios-forward-fill" width={16} />
    </Link>
  );
}
