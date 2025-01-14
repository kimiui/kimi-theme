import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';

// ----------------------------------------------------------------------

export function SignInButton({ href, sx, ...other }: ButtonProps) {
  return (
    <Button href={href} variant="outlined" sx={sx} {...other}>
      Sign in
    </Button>
  );
}
