import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback } from 'react';
import { useRouter } from 'routes-react';
import Button from '@mui/material/Button';
import { toast } from '../../components/snackbar';
export function SignOutButton({ onClose, onSignOut, ...other }) {
    const router = useRouter();
    const handleLogout = useCallback(async () => {
        try {
            onSignOut?.();
            onClose?.();
            router.refresh();
        }
        catch (error) {
            console.error(error);
            toast.error('Unable to logout!');
        }
    }, [onClose, onSignOut, router]);
    return (_jsx(Button, { fullWidth: true, variant: "soft", size: "large", color: "error", onClick: handleLogout, ...other, children: "Logout" }));
}
