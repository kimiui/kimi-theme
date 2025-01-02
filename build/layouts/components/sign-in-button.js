import { jsx as _jsx } from "react/jsx-runtime";
import Button from '@mui/material/Button';
import { RouterLink } from 'routes-react';
// ----------------------------------------------------------------------
export function SignInButton({ href, sx, ...other }) {
    return (_jsx(Button, { component: RouterLink, href: href, variant: "outlined", sx: sx, ...other, children: "Sign in" }));
}
