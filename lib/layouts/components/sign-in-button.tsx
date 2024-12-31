import Button from '@mui/material/Button';
import { RouterLink } from 'routes-react';
import type { ButtonProps } from '@mui/material/Button';

// ----------------------------------------------------------------------

export function SignInButton({ href, sx, ...other }: ButtonProps) {
  return (
    <Button component={RouterLink as any} href={href} variant="outlined" sx={sx} {...other}>
      Sign in
    </Button>
  );
}
