import type { ButtonProps } from '@mui/material/Button';

import Button from '@mui/material/Button';
import { RouterLink } from 'routes-react';

// ----------------------------------------------------------------------

export function SignInButton({ href, sx, ...other }: ButtonProps) {
  return (
    <Button component={RouterLink as any} href={href} variant="outlined" sx={sx} {...other}>
      Sign in
    </Button>
  );
}
